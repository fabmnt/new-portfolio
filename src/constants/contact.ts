import type { Locale } from "@/i18n";

export const CONTACT_EMAIL = "fabianmontoya2802@gmail.com";

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fabián-montoya-963247345",
  },
  { label: "GitHub", href: "https://github.com/fabmnt" },
  { label: "X", href: "https://x.com/fabmntp" },
] as const;

export const CV_PATHS: Record<Locale, string> = {
  es: "/fabian-montoya-cv-es.pdf",
  en: "/fabian-montoya-cv-en.pdf",
};

export const HOME_PATHS: Record<Locale, string> = {
  es: "/?locale=es",
  en: "/en?locale=en",
};

export const BLOG_PATHS: Record<Locale, string> = {
  es: "/blog",
  en: "/en/blog",
};
