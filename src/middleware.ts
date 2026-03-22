import { defineMiddleware } from "astro:middleware";

const LOCALE_COOKIE = "preferred-locale";

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;

  // Skip if it's a file/asset or internal Astro route
  if (pathname.includes(".") || pathname.startsWith("/_")) {
    return next();
  }

  // Check for explicit locale preference via query parameter
  const localeParam = context.url.searchParams.get("locale");
  if (localeParam === "es" || localeParam === "en") {
    context.cookies.set(LOCALE_COOKIE, localeParam, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  }

  // Use the newly set locale or fall back to cookie
  const preferredLocale = localeParam || context.cookies.get(LOCALE_COOKIE)?.value;
  if (preferredLocale) {
    // User has a preference - respect it
    if (preferredLocale === "en" && pathname !== "/en" && !pathname.startsWith("/en/")) {
      return context.redirect("/en" + (pathname === "/" ? "" : pathname), 302);
    }
    return next();
  }

  // Get Accept-Language header (works on Vercel)
  const acceptLang = context.request.headers.get("accept-language") || "";
  
  // Parse preferred language
  const browserLang = acceptLang
    .split(",")[0]
    ?.split(";")[0]
    ?.trim()
    ?.toLowerCase() || "es";

  // Redirect to /en if English is preferred (only on first visit)
  if (browserLang.startsWith("en") && pathname !== "/en" && !pathname.startsWith("/en/")) {
    // Set cookie so we don't redirect again
    context.cookies.set(LOCALE_COOKIE, "en", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return context.redirect("/en" + (pathname === "/" ? "" : pathname), 302);
  }

  return next();
});
