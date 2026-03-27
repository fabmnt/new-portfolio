import type { APIRoute } from "astro";

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

function getBaseUrl(site: URL | undefined, url: URL) {
  const base = site?.toString() ?? url.origin;
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

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
    },
  });
};
