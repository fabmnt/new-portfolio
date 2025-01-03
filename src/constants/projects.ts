import type { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
  {
    title: "Ferretería Berrios",
    description:
      "Dashboard para la gestión de inventario y facturación de una ferretería. Incluye gráficos y reportes de ventas.",
    techs: ["React", "Tanstack Query", "Wouter"],
    privacy: "public",
    sourceUrl: "#",
    websiteUrl: "#",
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
    sourceUrl: "#",
    websiteUrl: "#",
    images: ["credit-table.png", "credit-prestamo.png"],
  },
  {
    title: "Formless",
    description:
      "Formulario editable y personalizable de tablas y bookmarks, exportables a docx.",
    techs: ["Angular", "RxJs"],
    privacy: "private",
    sourceUrl: "#",
    websiteUrl: "#",
    images: ["formless.png", "formless-bookmarks.png", "formless-open.png"],
  },
];
