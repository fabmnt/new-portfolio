import type { APIRoute } from "astro";
import {
  getAllBlogPosts,
  getBlogLocale,
  getBlogPath,
  type BlogEntry,
} from "@/lib/blog";
import { getBaseUrl } from "@/lib/seo";

type SitemapRoute = {
  path: string;
  alternates?: Partial<Record<"es" | "en", string>>;
  lastModified?: Date;
};

const STATIC_ROUTES: SitemapRoute[] = [
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
  {
    path: "/blog",
    alternates: {
      es: "/blog",
      en: "/en/blog",
    },
  },
  {
    path: "/en/blog",
    alternates: {
      es: "/blog",
      en: "/en/blog",
    },
  },
];

export const GET: APIRoute = async ({ site, url }) => {
  const baseUrl = getBaseUrl(site, url);
  const blogPosts = await getAllBlogPosts();
  const routes: SitemapRoute[] = [
    ...STATIC_ROUTES,
    ...blogPosts.map((post: BlogEntry) => {
      const path = getBlogPath(post);
      const locale = getBlogLocale(post);

      return {
        path,
        alternates: {
          [locale]: path,
        },
        lastModified: post.data.updatedDate ?? post.data.publishDate,
      };
    }),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes
  .map(
    ({ path, alternates = {}, lastModified }) => {
      const alternateLinks = Object.entries(alternates)
        .map(
          ([locale, alternatePath]) =>
            `    <xhtml:link rel="alternate" hreflang="${locale}" href="${`${baseUrl}${alternatePath}`}" />`,
        )
        .join("\n");
      const xDefaultPath = alternates.es ?? path;

      return `  <url>
    <loc>${`${baseUrl}${path}`}</loc>
${alternateLinks ? `${alternateLinks}\n` : ""}    <xhtml:link rel="alternate" hreflang="x-default" href="${`${baseUrl}${xDefaultPath}`}" />
${lastModified ? `    <lastmod>${lastModified.toISOString()}</lastmod>\n` : ""}  </url>`;
    },
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
