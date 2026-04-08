# Fabian Montoya

## Chatbot integration (OpenRouter)

This portfolio includes an AI chatbot constrained to portfolio-related topics only.

### Environment variables

Create a `.env` file with:

```bash
OPENROUTER_API_KEY=your_openrouter_api_key
# Optional
OPENROUTER_MODEL=openai/gpt-oss-120b:free
```

### Behavior

- Uses OpenRouter chat completions via `POST /api/chatbot`.
- The assistant receives only translation-based portfolio content as its knowledge base.
- If a question is unrelated to the portfolio (or unsupported by the knowledge base), it is rejected with an out-of-scope response.

## Blog content collection

The portfolio now includes a blog powered by Astro content collections.

- Spanish posts live in `src/content/blog/es/`
- English posts live in `src/content/blog/en/`
- Each post is a Markdown file with this frontmatter:

```md
---
title: "Post title"
description: "Short summary for cards and SEO."
publishDate: 2026-04-07
updatedDate: 2026-04-08 # optional
draft: false # optional
translationKey: "welcome-post" # optional, use the same key for translated versions
tags:
  - Astro
  - Blog
---
```

Routes are generated automatically at `/blog` and `/en/blog`.
