import en from "./en.json";
import es from "./es.json";

export const translations = { en, es } as const;
export type Locale = keyof typeof translations;
export type TranslationKeys = typeof en;

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale] || translations.es;
}
