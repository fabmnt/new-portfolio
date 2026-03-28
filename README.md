# Fabian Montoya

## Chatbot integration (OpenRouter)

This portfolio includes an AI chatbot constrained to portfolio-related topics only.

### Environment variables

Create a `.env` file with:

```bash
OPENROUTER_API_KEY=your_openrouter_api_key
# Optional
OPENROUTER_MODEL=minimax/minimax-m2.5:free
```

### Behavior

- Uses OpenRouter chat completions via `POST /api/chatbot`.
- The assistant receives only translation-based portfolio content as its knowledge base.
- If a question is unrelated to the portfolio (or unsupported by the knowledge base), it is rejected with an out-of-scope response.
