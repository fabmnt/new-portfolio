import type { APIRoute } from "astro";
import { buildPortfolioKnowledge, getOutOfScopeMessage } from "@/lib/chatbotContext";
import type { Locale } from "@/i18n";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatRequest = {
  locale?: Locale;
  messages?: ChatMessage[];
};

const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
const DEFAULT_CLASSIFIER_MODEL = "openai/gpt-4o-mini";
const DEFAULT_ANSWER_MODEL = "openai/gpt-4o-mini";

function getModels() {
  return {
    classifier: import.meta.env.OPENROUTER_CLASSIFIER_MODEL || DEFAULT_CLASSIFIER_MODEL,
    answer: import.meta.env.OPENROUTER_ANSWER_MODEL || DEFAULT_ANSWER_MODEL,
  };
}

function safeJsonParse<T>(value: string): T | null {
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

function getLastUserMessage(messages: ChatMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    const message = messages[i];
    if (message.role === "user") {
      return message.content;
    }
  }

  return "";
}

function sanitizeMessages(messages: ChatMessage[]): ChatMessage[] {
  return messages
    .filter((message) => message.role === "user" || message.role === "assistant")
    .map((message) => ({
      role: message.role,
      content: message.content.trim().slice(0, 2000),
    }))
    .filter((message) => message.content.length > 0)
    .slice(-10);
}

function extractJsonObject(text: string): string | null {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");

  if (start === -1 || end === -1 || end <= start) {
    return null;
  }

  return text.slice(start, end + 1);
}

async function callOpenRouter(payload: unknown, apiKey: string, siteUrl: string) {
  const response = await fetch(OPENROUTER_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": siteUrl,
      "X-Title": "Fabian Portfolio AI Chat",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`OpenRouter request failed (${response.status}): ${errorBody}`);
  }

  return response.json();
}

export const POST: APIRoute = async ({ request, site, url }) => {
  const apiKey = import.meta.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Missing OPENROUTER_API_KEY" }), { status: 500 });
  }

  const body = (await request.json().catch(() => null)) as ChatRequest | null;
  if (!body?.messages || !Array.isArray(body.messages)) {
    return new Response(JSON.stringify({ error: "Invalid payload" }), { status: 400 });
  }

  const locale: Locale = body.locale === "en" ? "en" : "es";
  const cleanedMessages = sanitizeMessages(body.messages);

  if (cleanedMessages.length === 0) {
    return new Response(JSON.stringify({ error: "No valid messages" }), { status: 400 });
  }

  const latestUserMessage = getLastUserMessage(cleanedMessages);
  if (!latestUserMessage) {
    return new Response(JSON.stringify({ error: "A user message is required" }), { status: 400 });
  }

  const knowledgeBase = buildPortfolioKnowledge(locale);
  const outOfScopeMessage = getOutOfScopeMessage(locale);
  const siteUrl = site?.toString() ?? url.origin;
  const models = getModels();

  const classifierPrompt = locale === "en"
    ? `You are a strict relevance classifier for a portfolio chatbot.\nReturn only JSON with this shape: {"related": boolean, "reason": string}.\nA request is related ONLY if it asks about the owner portfolio details, projects, experience, skills, services, or contact intent.\nIf it asks for general knowledge, politics, entertainment, coding help unrelated to portfolio data, mark as unrelated.`
    : `Eres un clasificador estricto de relevancia para un chatbot de portafolio.\nDevuelve solo JSON con esta forma: {"related": boolean, "reason": string}.\nUna solicitud es relacionada SOLO si pregunta por detalles del portafolio, proyectos, experiencia, habilidades, servicios o intención de contacto.\nSi pide conocimiento general, política, entretenimiento, ayuda de programación no relacionada con el portafolio, marca como no relacionada.`;

  const classifierResult = await callOpenRouter({
    model: models.classifier,
    temperature: 0,
    max_tokens: 120,
    messages: [
      { role: "system", content: classifierPrompt },
      {
        role: "user",
        content: `Question: ${latestUserMessage}`,
      },
    ],
  }, apiKey, siteUrl);

  const classifierText = classifierResult?.choices?.[0]?.message?.content ?? "";
  const classifierJson = extractJsonObject(classifierText);
  const classifier = classifierJson
    ? safeJsonParse<{ related?: boolean; reason?: string }>(classifierJson)
    : null;

  if (!classifier?.related) {
    return new Response(JSON.stringify({ reply: outOfScopeMessage }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const systemPrompt = locale === "en"
    ? `You are an assistant for Fabian Montoya's portfolio website.\nUse ONLY the provided portfolio knowledge.\nIf information is missing, say that it is not available in the portfolio.\nNever answer questions outside portfolio scope; instead reply exactly: ${outOfScopeMessage}`
    : `Eres un asistente del sitio de portafolio de Fabian Montoya.\nUsa SOLO el conocimiento proporcionado del portafolio.\nSi falta información, indica que no está disponible en el portafolio.\nNunca respondas preguntas fuera del portafolio; en su lugar responde exactamente: ${outOfScopeMessage}`;

  const completionResult = await callOpenRouter({
    model: models.answer,
    temperature: 0.2,
    max_tokens: 380,
    messages: [
      {
        role: "system",
        content: `${systemPrompt}\n\nPortfolio knowledge:\n${knowledgeBase}`,
      },
      ...cleanedMessages,
    ],
  }, apiKey, siteUrl);

  const reply = completionResult?.choices?.[0]?.message?.content?.trim();

  if (!reply) {
    return new Response(JSON.stringify({ error: "No response from model" }), { status: 502 });
  }

  return new Response(JSON.stringify({ reply }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
