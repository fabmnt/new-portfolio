import type { APIRoute } from "astro";
import { getBaseUrl } from "@/lib/seo";

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
      "Cache-Control": "public, s-maxage=86400, max-age=0, must-revalidate",
    },
  });
};
