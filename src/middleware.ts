import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;
  
  // Skip if already on a language-specific route or if it's a file/asset
  if (pathname.startsWith("/en") || pathname.includes(".")) {
    return next();
  }

  // Get Accept-Language header (works on Vercel)
  const acceptLang = context.request.headers.get("accept-language") || "";
  
  // Parse preferred language
  const preferredLang = acceptLang
    .split(",")[0]
    ?.split(";")[0]
    ?.trim()
    ?.toLowerCase() || "es";

  // Redirect to /en/ if English is preferred
  if (preferredLang.startsWith("en")) {
    return context.redirect("/en/" + pathname.slice(1), 302);
  }

  return next();
});
