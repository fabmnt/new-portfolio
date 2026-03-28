# Fabian Montoya Portfolio

## AI chatbot integration

This project now includes an AI chatbot focused exclusively on portfolio-related questions.

### Provider

- LLM provider: **OpenRouter**
- API route: `POST /api/chatbot`

### Environment variables

Set these variables before running in production/local server mode:

- `OPENROUTER_API_KEY` (required)
- `OPENROUTER_ANSWER_MODEL` (optional, defaults to `openai/gpt-4o-mini`)
- `OPENROUTER_CLASSIFIER_MODEL` (optional, defaults to `openai/gpt-4o-mini`)

### Approach used

- Two-stage LLM flow:
  1. **Relevance classifier** to detect whether the user question is about the portfolio.
  2. **Grounded answer generation** using only translation-driven portfolio knowledge.
- Out-of-scope questions are ignored with a strict fallback response.
