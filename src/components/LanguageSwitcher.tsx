import { useTranslations } from "./TranslationProvider";

const languages = [
  { code: "es" as const, label: "ES" },
  { code: "en" as const, label: "EN" },
];

export function LanguageSwitcher() {
  const { locale } = useTranslations();

  const getLocaleUrl = (targetLocale: "en" | "es") => {
    if (targetLocale === "es") {
      return "/";
    }
    return "/en";
  };

  return (
    <div className="flex items-center gap-1 bg-brutalist-white/10 border border-brutalist-white/20">
      {languages.map((lang) => (
        <a
          key={lang.code}
          href={getLocaleUrl(lang.code)}
          className={`px-3 py-2 text-xs font-medium tracking-wider uppercase transition-colors duration-300 ${
            locale === lang.code
              ? "bg-brutalist-blue text-brutalist-white"
              : "text-brutalist-white/70 hover:bg-brutalist-white/10 hover:text-brutalist-white"
          }`}
          title={lang.code === "es" ? "Cambiar a Español" : "Switch to English"}
        >
          {lang.label}
        </a>
      ))}
    </div>
  );
}
