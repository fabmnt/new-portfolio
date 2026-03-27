import type { APIRoute } from "astro";

const SITE_URL = "https://www.fabmnt.dev";

const urls = [
  {
    loc: `${SITE_URL}/`,
    alternates: {
      es: `${SITE_URL}/`,
      en: `${SITE_URL}/en`,
    },
  },
  {
    loc: `${SITE_URL}/en`,
    alternates: {
      es: `${SITE_URL}/`,
      en: `${SITE_URL}/en`,
    },
  },
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    ({ loc, alternates }) => `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${alternates.es}" />
    <xhtml:link rel="alternate" hreflang="en" href="${alternates.en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${alternates.es}" />
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
