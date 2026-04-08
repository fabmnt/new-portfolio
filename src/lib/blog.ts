import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "@/i18n";

export type BlogEntry = CollectionEntry<"blog">;
export type BlogAlternatePaths = Partial<Record<Locale, string>>;

const BLOG_ID_PATTERN = /^(en|es)\/(.+)$/;

const BLOG_DATE_FORMATTERS: Record<Locale, Intl.DateTimeFormat> = {
  en: new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    year: "numeric",
  }),
  es: new Intl.DateTimeFormat("es-NI", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    year: "numeric",
  }),
};

function sortBlogPosts(a: BlogEntry, b: BlogEntry) {
  return b.data.publishDate.getTime() - a.data.publishDate.getTime();
}

function parseBlogId(post: BlogEntry) {
  const match = BLOG_ID_PATTERN.exec(post.id);

  if (!match) {
    throw new Error(
      `Unexpected blog post id "${post.id}". Expected the id to start with "en/" or "es/".`,
    );
  }

  return {
    locale: match[1] as Locale,
    slug: match[2],
  };
}

export function getBlogLocale(post: BlogEntry): Locale {
  return parseBlogId(post).locale;
}

export function getBlogSlug(post: BlogEntry) {
  return parseBlogId(post).slug;
}

export function getBlogPath(post: BlogEntry) {
  const { locale, slug } = parseBlogId(post);
  return locale === "en" ? `/en/blog/${slug}` : `/blog/${slug}`;
}

export function getBlogAlternatePaths(
  post: BlogEntry,
  posts: BlogEntry[],
): BlogAlternatePaths {
  const locale = getBlogLocale(post);
  const currentPath = getBlogPath(post);
  const translationKey = post.data.translationKey;

  if (!translationKey) {
    return { [locale]: currentPath };
  }

  return posts.reduce<BlogAlternatePaths>(
    (alternates, candidate) => {
      if (candidate.data.translationKey !== translationKey) {
        return alternates;
      }

      alternates[getBlogLocale(candidate)] = getBlogPath(candidate);
      return alternates;
    },
    { [locale]: currentPath },
  );
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
