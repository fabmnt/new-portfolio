import type { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
  {
    title: "Ferretería Berrios",
    description:
      "Dashboard para la gestión de inventario y facturación de una ferretería. Incluye gráficos y reportes de ventas.",
    techs: ["React", "Tanstack Query", "Wouter"],
    privacy: "public",
    sourceUrl: "https://github.com/fabmnt/ferreteria-react",
    websiteUrl: "https://ferreteria-react-five.vercel.app/",
    images: [
      "ferreteria-dashboard.png",
      "ferreteria-bills.png",
      "ferreteria-login.png",
    ],
  },
  {
    title: "Credit Ayuda",
    description: "Sistema de registro y seguimiento de créditos financieros.",
    techs: ["React", "Tanstack Query", "react-router"],
    privacy: "public",
    sourceUrl: "https://github.com/francisco-JGC/credit-ayuda-front",
    websiteUrl: "https://credit-ayuda.vercel.app",
    images: ["credit-prestamo.png"],
  },
  {
    title: "Formless",
    description:
      "Formulario editable y personalizable de tablas y bookmarks, exportables a docx.",
    techs: ["Angular", "RxJs"],
    privacy: "private",
    sourceUrl: "#",
    websiteUrl: "https://controlcentralcarrier.com/#/form-builder",
    images: ["formless.png", "formless-open.png"],
  },
];
