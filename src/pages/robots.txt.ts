import type { APIRoute } from "astro";

const SITE_URL = "https://www.fabmnt.dev";

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
