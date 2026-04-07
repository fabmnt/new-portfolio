import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "@/i18n";

export type BlogEntry = CollectionEntry<"blog">;

const BLOG_DATE_FORMATTERS: Record<Locale, Intl.DateTimeFormat> = {
  en: new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
  es: new Intl.DateTimeFormat("es-NI", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
};

function sortBlogPosts(a: BlogEntry, b: BlogEntry) {
  return b.data.publishDate.getTime() - a.data.publishDate.getTime();
}

export function getBlogLocale(post: BlogEntry): Locale {
  return post.id.startsWith("en/") ? "en" : "es";
}

export function getBlogSlug(post: BlogEntry) {
  return post.id.replace(/^(en|es)\//, "");
}

export function getBlogPath(post: BlogEntry) {
  const slug = getBlogSlug(post);
  return getBlogLocale(post) === "en" ? `/en/blog/${slug}` : `/blog/${slug}`;
}

export function formatBlogDate(date: Date, locale: Locale) {
  return BLOG_DATE_FORMATTERS[locale].format(date);
}

export async function getBlogCollection(
  locale: Locale,
  includeDrafts = false,
) {
  const posts = await getCollection("blog", (post: BlogEntry) => {
    const matchesLocale = getBlogLocale(post) === locale;
    return matchesLocale && (includeDrafts || !post.data.draft);
  });

  return posts.sort(sortBlogPosts);
}

export async function getAllBlogPosts(includeDrafts = false) {
  const posts = await getCollection("blog", (post: BlogEntry) => {
    return includeDrafts || !post.data.draft;
  });

  return posts.sort(sortBlogPosts);
}
