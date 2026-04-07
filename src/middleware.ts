import { defineMiddleware } from "astro:middleware";

const LOCALE_COOKIE = "preferred-locale";
export const onRequest = defineMiddleware((context, next) => {
  const { pathname, searchParams } = context.url;

  // Skip if it's a file/asset or internal Astro route
  if (pathname.includes(".") || pathname.startsWith("/_")) {
    return next();
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    const normalizedPath = pathname.slice(0, -1);
    const search = context.url.search || "";
    return context.redirect(`${normalizedPath}${search}`, 301);
  }

  // Check for explicit locale preference via query parameter
  const localeParam = searchParams.get("locale");
  if (localeParam === "es" || localeParam === "en") {
    context.cookies.set(LOCALE_COOKIE, localeParam, { path: "/", maxAge: 60 * 60 * 24 * 365 });

    const targetPath = localeParam === "en" ? "/en" : "/";
    const cleanSearchParams = new URLSearchParams(searchParams);
    cleanSearchParams.delete("locale");
    const cleanSearch = cleanSearchParams.toString();

    if (pathname !== targetPath || context.url.search.includes("locale=")) {
      return context.redirect(
        `${targetPath}${cleanSearch ? `?${cleanSearch}` : ""}`,
        302,
      );
    }
  }

  return next();
});
