import type { APIRoute } from "astro";

function getBaseUrl(site: URL | undefined, url: URL) {
  const base = site?.toString() ?? url.origin;
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

export const GET: APIRoute = ({ site, url }) => {
  const baseUrl = getBaseUrl(site, url);
  const body = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
