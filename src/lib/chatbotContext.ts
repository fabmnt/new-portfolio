import { getTranslations, type Locale } from "@/i18n";

function bulletList(items: string[]): string {
  return items.map((item) => `- ${item}`).join("\n");
}

export function buildPortfolioKnowledge(locale: Locale): string {
  const t = getTranslations(locale);

  const experience = t.experience.items
    .map((item) => {
      const achievements = bulletList(item.achievements);
      return [
        `Company: ${item.company}`,
        `Period: ${item.period}`,
        `Role: ${item.role}`,
        `Summary: ${item.description}`,
        "Achievements:",
        achievements,
      ].join("\n");
    })
    .join("\n\n");

  const projectItems = Object.entries(t.projects.items)
    .map(([name, description]) => `- ${name}: ${description}`)
    .join("\n");

  const tools = bulletList(t.skills.tools);
  const services = bulletList(t.hero.promises);

  return [
    `Language: ${t.layout.language}`,
    `Site Name: ${t.layout.siteName}`,
    `Professional Role: ${t.presentation.role}`,
    `Tagline: ${t.presentation.tagline}`,
    `Hero Headline: ${t.hero.headline}`,
    "Services Offered:",
    services,
    "\nProfessional Experience:",
    experience,
    "\nOther Experience:",
    `- ${t.experience.otherExperience.title}: ${t.experience.otherExperience.description}`,
    "\nSkills / Tech Stack:",
    tools,
    "\nProjects:",
    projectItems,
    "\nPortfolio CTA:",
    `- ${t.footer.title}`,
    `- ${t.footer.description}`,
    `- ${t.footer.sendEmail}`,
  ].join("\n");
}

export function getOutOfScopeMessage(locale: Locale): string {
  return locale === "en"
    ? "I can only answer questions about Fabian Montoya's portfolio, experience, services, and tech stack."
    : "Solo puedo responder preguntas sobre el portafolio, experiencia, servicios y stack tecnológico de Fabian Montoya.";
}
