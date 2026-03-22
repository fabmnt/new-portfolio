import { a7 as defineMiddleware, ag as sequence } from './chunks/sequence_BuFzwd2R.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware((context, next) => {
  const { pathname } = context.url;
  if (pathname.startsWith("/en") || pathname.includes(".")) {
    return next();
  }
  const acceptLang = context.request.headers.get("accept-language") || "";
  const preferredLang = acceptLang.split(",")[0]?.split(";")[0]?.trim()?.toLowerCase() || "es";
  if (preferredLang.startsWith("en")) {
    return context.redirect("/en/" + pathname.slice(1), 302);
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
