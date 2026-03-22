import { TranslationProvider } from "./TranslationProvider";
import { getTranslations } from "@/i18n";
import type { Locale } from "@/i18n";
import { NewPresentation } from "@/components/NewPresentation";
import { NewHero } from "@/components/NewHero";
import { NewExperience } from "@/components/NewExperience";
import { NewProjects } from "@/components/NewProjects";
import { NewSkills } from "@/components/NewSkills";
import { NewStudies } from "@/components/NewStudies";
import { NewFooter } from "@/components/NewFooter";

interface Props {
  locale: Locale;
}

export function MainContent({ locale }: Props) {
  const t = getTranslations(locale);

  return (
    <TranslationProvider locale={locale} t={t}>
      <main className="relative">
        <NewPresentation />
        <NewHero />
        <NewExperience />
        <NewProjects />
        <NewSkills />
        <NewStudies />
        <NewFooter />
      </main>
    </TranslationProvider>
  );
}
