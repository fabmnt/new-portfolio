import type { APIRoute } from "astro";
import { translations, type Locale } from "@/i18n";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequest {
  locale?: Locale;
  messages?: ChatMessage[];
}

interface StreamEvent {
  type: "chunk" | "done" | "error";
  delta?: string;
  message?: string;
  outOfScope?: boolean;
}

interface RateLimitState {
  count: number;
  resetAt: number;
}

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = import.meta.env.OPENROUTER_MODEL ?? "openai/gpt-oss-120b:free";
const OUT_OF_SCOPE_TOKEN = "OUT_OF_SCOPE";
const RATE_LIMIT_MAX_REQUESTS = 12;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_STORAGE_KEY = "__chatbotRateLimitStore";
const MAX_CLIENT_MESSAGES = 8;
const MAX_MESSAGE_LENGTH = 1_000;
const UPSTREAM_TIMEOUT_MS = 30_000;

function getRateLimitStore(): Map<string, RateLimitState> {
  const globalStore = globalThis as typeof globalThis & {
    __chatbotRateLimitStore?: Map<string, RateLimitState>;
  };

  if (!globalStore[RATE_LIMIT_STORAGE_KEY]) {
    globalStore[RATE_LIMIT_STORAGE_KEY] = new Map<string, RateLimitState>();
  }

  return globalStore[RATE_LIMIT_STORAGE_KEY];
}

function getClientIp(request: Request): string | null {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || null;
  }

  return (
    request.headers.get("x-real-ip") ??
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-vercel-forwarded-for") ??
    null
  );
}

function consumeRateLimit(ip: string): { allowed: boolean; retryAfterSeconds: number } {
  const store = getRateLimitStore();
  const now = Date.now();

  for (const [key, value] of store.entries()) {
    if (value.resetAt <= now) {
      store.delete(key);
    }
  }

  const existing = store.get(ip);
  if (!existing || existing.resetAt <= now) {
    store.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return {
      allowed: true,
      retryAfterSeconds: Math.ceil(RATE_LIMIT_WINDOW_MS / 1000),
    };
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  store.set(ip, existing);

  return {
    allowed: true,
    retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
  };
}

function getKnowledgeBase(locale: Locale): string {
  const t = translations[locale];

  return JSON.stringify({
    language: locale,
    presentation: t.presentation,
    hero: t.hero,
    experience: t.experience,
    projects: t.projects,
    skills: t.skills,
    studies: t.studies,
    footer: t.footer,
  });
}

function outOfScopeMessage(locale: Locale): string {
  return (
    translations[locale].chatbot.outOfScope ??
    (locale === "en"
      ? "I can only answer questions related to Fabian Montoya's portfolio."
      : "Solo puedo responder preguntas relacionadas con el portafolio de Fabian Montoya.")
  );
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function sseEvent(event: StreamEvent): Uint8Array {
  return new TextEncoder().encode(`data: ${JSON.stringify(event)}\n\n`);
}

function extractDelta(payload: unknown): string {
  const content = (payload as { choices?: Array<{ delta?: { content?: string } }> })?.choices?.[0]?.delta
    ?.content;

  return typeof content === "string" ? content : "";
}

function isOutOfScopePrefix(value: string): boolean {
  const normalizedValue = value.trim();
  return !normalizedValue || OUT_OF_SCOPE_TOKEN.startsWith(normalizedValue);
}

function isOutOfScopeResponse(value: string): boolean {
  return value.trim().replace(/[.!?]+$/u, "") === OUT_OF_SCOPE_TOKEN;
}

function isAbortError(error: unknown): boolean {
  return (
    error instanceof DOMException
      ? error.name === "AbortError"
      : typeof error === "object" &&
        error !== null &&
        "name" in error &&
        error.name === "AbortError"
  );
}

function createUpstreamTimeout(abortController: AbortController) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return {
    reset() {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => abortController.abort(), UPSTREAM_TIMEOUT_MS);
    },
    clear() {
      if (!timeoutId) {
        return;
      }

      clearTimeout(timeoutId);
      timeoutId = undefined;
    },
  };
}

function isAllowedRequestOrigin(request: Request, site: URL | undefined, url: URL): boolean {
  const allowedOrigins = new Set([url.origin]);

  if (site) {
    allowedOrigins.add(site.origin);
  }

  const requestOrigin = request.headers.get("origin");
  if (requestOrigin) {
    return allowedOrigins.has(requestOrigin);
  }

  const referer = request.headers.get("referer");
  if (!referer) {
    return false;
  }

  try {
    return allowedOrigins.has(new URL(referer).origin);
  } catch {
    return false;
  }
}

export const POST: APIRoute = async ({ request, site, url }) => {
  const apiKey = import.meta.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return jsonResponse(
      {
        error: "Missing OPENROUTER_API_KEY environment variable.",
      },
      500,
    );
  }

  if (!isAllowedRequestOrigin(request, site, url)) {
    return jsonResponse(
      {
        error: "Cross-site requests are not allowed for this endpoint.",
      },
      403,
    );
  }

  const clientIp = getClientIp(request);
  if (clientIp) {
    const rateLimitResult = consumeRateLimit(clientIp);

    if (!rateLimitResult.allowed) {
      return new Response(
        JSON.stringify({
          error: "Rate limit exceeded. Please try again later.",
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": String(rateLimitResult.retryAfterSeconds),
          },
        },
      );
    }
  }

  let body: ChatRequest;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON payload." }, 400);
  }

  const locale = body.locale === "en" ? "en" : "es";
  const messages = (Array.isArray(body.messages) ? body.messages : [])
    .filter(
      (message): message is ChatMessage =>
        Boolean(message?.content?.trim()) &&
        (message?.role === "user" || message?.role === "assistant"),
    )
    .map((message) => ({
      role: message.role,
      content: message.content.trim(),
    }))
    .slice(-MAX_CLIENT_MESSAGES);

  if (messages.length === 0) {
    return jsonResponse({ error: "At least one message is required." }, 400);
  }

  if (messages.some((message) => message.content.length > MAX_MESSAGE_LENGTH)) {
    return jsonResponse(
      {
        error: `Each message must be at most ${MAX_MESSAGE_LENGTH} characters long.`,
      },
      400,
    );
  }

  const knowledgeBase = getKnowledgeBase(locale);

  const systemPrompt = `You are Fabian Montoya's portfolio assistant.

STRICT TASK:
- Answer only questions related to Fabian's portfolio, experience, projects, services, skills, or collaboration details.
- You may only use the KNOWLEDGE BASE below as source of truth.
- If the question is unrelated to Fabian's portfolio OR cannot be answered from the knowledge base, respond with exactly: OUT_OF_SCOPE
- Keep answers concise and useful.
- Respond in ${locale === "en" ? "English" : "Spanish"}.

KNOWLEDGE BASE:
${knowledgeBase}`;

  const payload = {
    model: MODEL,
    temperature: 0.2,
    max_tokens: 350,
    stream: true,
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      ...messages,
    ],
  };

  const abortController = new AbortController();
  const upstreamTimeout = createUpstreamTimeout(abortController);
  upstreamTimeout.reset();

  try {
    const upstream = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": site?.toString() ?? url.origin,
        "X-Title": "Fabian Portfolio Chatbot",
      },
      body: JSON.stringify(payload),
      signal: abortController.signal,
    });

    if (!upstream.ok) {
      const errorText = await upstream.text();
      upstreamTimeout.clear();

      console.error("OpenRouter request failed", {
        status: upstream.status,
        statusText: upstream.statusText,
        body: errorText,
      });

      return jsonResponse(
        {
          error: "OpenRouter request failed.",
          details: "Upstream provider returned an error. Please try again later.",
        },
        502,
      );
    }

    if (!upstream.body) {
      upstreamTimeout.clear();
      return jsonResponse({ error: "Empty response stream from LLM." }, 502);
    }

    const stream = new ReadableStream<Uint8Array>({
      async start(controller) {
        const reader = upstream.body!.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let accumulatedContent = "";
        let pendingOutOfScopeBuffer = "";
        let holdForOutOfScopeDecision = true;

        const enqueue = (event: StreamEvent) => {
          controller.enqueue(sseEvent(event));
        };

        const flushPendingIfNeeded = () => {
          if (!pendingOutOfScopeBuffer) {
            return;
          }

          enqueue({ type: "chunk", delta: pendingOutOfScopeBuffer });
          pendingOutOfScopeBuffer = "";
        };

        const processDelta = (delta: string) => {
          if (!delta) {
            return;
          }

          accumulatedContent += delta;

          if (!holdForOutOfScopeDecision) {
            enqueue({ type: "chunk", delta });
            return;
          }

          pendingOutOfScopeBuffer += delta;

          if (isOutOfScopePrefix(pendingOutOfScopeBuffer)) {
            return;
          }

          holdForOutOfScopeDecision = false;
          flushPendingIfNeeded();
        };

        const processSseLine = (line: string) => {
          if (!line.startsWith("data: ")) {
            return;
          }

          const data = line.slice(6).trim();

          if (!data || data === "[DONE]") {
            return;
          }

          let parsed: unknown;
          try {
            parsed = JSON.parse(data);
          } catch (error) {
            console.error("Failed to parse streamed OpenRouter payload", error);
            throw new Error("Failed to parse streamed LLM response.");
          }

          processDelta(extractDelta(parsed));
        };

        try {
          while (true) {
            upstreamTimeout.reset();
            const { done, value } = await reader.read();

            if (done) {
              break;
            }

            buffer += decoder.decode(value, { stream: true });
            const chunks = buffer.split("\n\n");
            buffer = chunks.pop() ?? "";

            for (const chunk of chunks) {
              const lines = chunk
                .split("\n")
                .map((line) => line.trim())
                .filter(Boolean);

              for (const line of lines) {
                processSseLine(line);
              }
            }
          }

          buffer += decoder.decode();

          if (buffer.trim()) {
            const lines = buffer
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean);

            for (const line of lines) {
              processSseLine(line);
            }
          }

          const finalContent = accumulatedContent.trim();

          if (!finalContent) {
            enqueue({ type: "error", message: "Empty response from LLM." });
            controller.close();
            return;
          }

          if (isOutOfScopeResponse(finalContent)) {
            enqueue({
              type: "done",
              message: outOfScopeMessage(locale),
              outOfScope: true,
            });
            controller.close();
            return;
          }

          if (holdForOutOfScopeDecision) {
            flushPendingIfNeeded();
          }

          enqueue({ type: "done", outOfScope: false });
          controller.close();
        } catch (error) {
          console.error("Failed to stream OpenRouter response", error);
          enqueue({
            type: "error",
            message: isAbortError(error)
              ? "The assistant took too long to respond."
              : "Failed to connect to LLM provider.",
          });
          controller.close();
        } finally {
          upstreamTimeout.clear();
          reader.releaseLock();
        }
      },
      cancel() {
        upstreamTimeout.clear();
        abortController.abort();
      },
    });

    return new Response(stream, {
      headers: {
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "Content-Type": "text/event-stream; charset=utf-8",
      },
    });
  } catch (error) {
    upstreamTimeout.clear();
    console.error("Failed to connect to OpenRouter", error);

    return jsonResponse(
      {
        error: isAbortError(error)
          ? "The assistant took too long to respond."
          : "Failed to connect to LLM provider.",
      },
      isAbortError(error) ? 504 : 502,
    );
  }
};
