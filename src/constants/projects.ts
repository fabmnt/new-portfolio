import type { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
  {
    id: "rocketbot-interpreter",
    title: "Rocketbot Interpreter",
    description:
      "Sanitized company case study for a reproducible robot runtime exposed through an API.",
    techs: ["Python", "FastAPI", "Docker Compose", "Selenium", "Playwright"],
    privacy: "private",
    sourceUrl: "",
    websiteUrl: "",
    images: [],
  },
  {
    id: "formless",
    title: "Formless",
    description:
      "Internal editor for patient audit forms based on tables and bookmarks.",
    techs: ["Angular", "RxJS", "TypeScript"],
    privacy: "private",
    sourceUrl: "",
    websiteUrl: "https://controlcentralcarrier.com/#/form-builder",
    images: [],
  },
  {
    id: "maya-dashboard",
    title: "Maya Dashboard",
    description:
      "Greenfield operations dashboard for service teams handling DMV, insurance, and product workflows.",
    techs: ["React", "Vite", "TanStack Query", "TanStack Table"],
    privacy: "private",
    sourceUrl: "",
    websiteUrl: "",
    images: [],
  },
  {
    id: "ferreteria-berrios",
    title: "Ferretería Berrios",
    description:
      "Dashboard for inventory, billing, and sales reporting workflows.",
    techs: ["React", "TanStack Query", "Wouter"],
    privacy: "public",
    sourceUrl: "https://github.com/fabmnt/ferreteria-react",
    websiteUrl: "https://ferreteria-react-five.vercel.app/",
    images: [],
  },
];
