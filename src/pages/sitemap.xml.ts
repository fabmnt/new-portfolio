import type { APIRoute } from "astro";
import { getBaseUrl } from "@/lib/seo";

const LOCALIZED_ROUTES = [
  {
    path: "/",
    alternates: {
      es: "/",
      en: "/en",
    },
  },
  {
    path: "/en",
    alternates: {
      es: "/",
      en: "/en",
    },
  },
] as const;

export const GET: APIRoute = ({ site, url }) => {
  const baseUrl = getBaseUrl(site, url);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LOCALIZED_ROUTES
  .map(
    ({ path, alternates }) => `  <url>
    <loc>${`${baseUrl}${path}`}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${`${baseUrl}${alternates.es}`}" />
    <xhtml:link rel="alternate" hreflang="en" href="${`${baseUrl}${alternates.en}`}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${`${baseUrl}${alternates.es}`}" />
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=0, s-maxage=31536000, stale-while-revalidate",
    },
  });
};
