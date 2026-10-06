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

export const MARKETING_PATHS: Record<Locale, string> = {
  es: "/marketing",
  en: "/en/marketing",
};

export const BLOG_PATHS: Record<Locale, string> = {
  es: "/blog",
  en: "/en/blog",
};
