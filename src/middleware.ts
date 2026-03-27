import { defineMiddleware } from "astro:middleware";

const LOCALE_COOKIE = "preferred-locale";
const BOT_UA_PATTERN =
  /bot|crawler|spider|crawling|google|bing|duckduck|yandex|baidu|slurp/i;

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

  const userAgent = context.request.headers.get("user-agent") || "";
  if (BOT_UA_PATTERN.test(userAgent)) {
    return next();
  }

  // Use the newly set locale or fall back to cookie
  const preferredLocale = context.cookies.get(LOCALE_COOKIE)?.value;

  if (pathname !== "/" && pathname !== "/en") {
    return next();
  }

  if (preferredLocale === "en" && pathname === "/") {
    return context.redirect("/en", 302);
  }

  if (preferredLocale === "es" && pathname === "/en") {
    return context.redirect("/", 302);
  }

  // Get Accept-Language header (works on Vercel)
  const acceptLang = context.request.headers.get("accept-language") || "";
  
  // Parse preferred language
  const browserLang = acceptLang
    .split(",")[0]
    ?.split(";")[0]
    ?.trim()
    ?.toLowerCase() || "es";

  // Redirect to /en only on first visit, before the user has chosen a locale.
  if (!preferredLocale && browserLang.startsWith("en") && pathname === "/") {
    // Set cookie so we don't redirect again
    context.cookies.set(LOCALE_COOKIE, "en", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return context.redirect("/en", 302);
  }

  return next();
});
