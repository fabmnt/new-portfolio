import type { APIRoute } from "astro";
import { translations, type Locale } from "@/i18n";

interface ChatMessage {
  role: "user";
  content: string;
}

interface ChatRequest {
  locale?: Locale;
  messages?: ChatMessage[];
}

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = import.meta.env.OPENROUTER_MODEL ?? "openai/gpt-4.1-mini";

function getKnowledgeBase(locale: Locale): string {
  const t = translations[locale];

  return JSON.stringify(
    {
      language: locale,
      presentation: t.presentation,
      hero: t.hero,
      experience: t.experience,
      projects: t.projects,
      skills: t.skills,
      studies: t.studies,
      footer: t.footer,
    },
    null,
    2,
  );
}

function outOfScopeMessage(locale: Locale): string {
  return locale === "en"
    ? "I can only answer questions related to Fabian Montoya's portfolio."
    : "Solo puedo responder preguntas relacionadas con el portafolio de Fabian Montoya.";
}

export const POST: APIRoute = async ({ request, site, url }) => {
  const apiKey = import.meta.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error: "Missing OPENROUTER_API_KEY environment variable.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  let body: ChatRequest;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON payload." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const locale = body.locale === "en" ? "en" : "es";
  const messages = (body.messages ?? []).filter(
    (message): message is ChatMessage =>
      Boolean(message?.content?.trim()) && message?.role === "user",
  );

  if (messages.length === 0) {
    return new Response(JSON.stringify({ error: "At least one message is required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
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
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      ...messages,
    ],
  };

  try {
    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": site?.toString() ?? url.origin,
        "X-Title": "Fabian Portfolio Chatbot",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("OpenRouter request failed", {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      });

      return new Response(
        JSON.stringify({
          error: "OpenRouter request failed.",
          details: "Upstream provider returned an error. Please try again later.",
        }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const result = await response.json();
    const content = result?.choices?.[0]?.message?.content?.trim();

    if (!content) {
      return new Response(JSON.stringify({ error: "Empty response from LLM." }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (content === "OUT_OF_SCOPE") {
      return new Response(
        JSON.stringify({
          message: outOfScopeMessage(locale),
          outOfScope: true,
        }),
        {
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    return new Response(
      JSON.stringify({
        message: content,
        outOfScope: false,
      }),
      {
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Failed to connect to OpenRouter", error);

    return new Response(
      JSON.stringify({
        error: "Failed to connect to LLM provider.",
      }),
      {
        status: 502,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
