import { c as createComponent } from './astro-component_DgJH_tfk.mjs';
import { P as renderTemplate, b8 as renderSlot, b9 as renderHead, a3 as addAttribute, b7 as unescapeHTML } from './sequence_BuFzwd2R.mjs';
import { clsx } from 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React$1 from 'react';
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { ChevronRight, Check, Circle, ClipboardCheck, Clipboard, Send, ArrowUpRight } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$NewLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NewLayout;
  const { locale = "es" } = Astro2.props;
  const SITE_URL = "https://fabianmontoya.dev/";
  const SITE_NAME = locale === "en" ? "Fabian Montoya | Portfolio" : "Fabian Montoya | Portafolio";
  const SITE_TITLE = locale === "en" ? "Fabian Montoya | Full Stack Developer & RPA Engineer" : "Fabian Montoya | Desarrollador Full Stack e Ingeniero RPA";
  const SITE_DESCRIPTION = locale === "en" ? "Fabian Montoya's Portfolio - Full Stack Developer and RPA Engineer in Nicaragua. Specialized in React, Angular, TypeScript, Node.js and automation solutions." : "Portfolio de Fabian Montoya - Desarrollador Full Stack y RPA Engineer en Nicaragua. Especializado en React, Angular, TypeScript, Node.js y soluciones de automatización.";
  const SITE_KEYWORDS = locale === "en" ? "Fabian Montoya, Full Stack Developer, RPA Engineer, Web Developer, React, Angular, TypeScript, Node.js, Nicaragua, portfolio, programmer" : "Fabian Montoya, Full Stack Developer, RPA Engineer, Desarrollador Web, React, Angular, TypeScript, Node.js, Nicaragua, portafolio, programador";
  const AUTHOR_NAME = "Fabian Montoya";
  const AUTHOR_URL = "https://www.linkedin.com/in/fabián-montoya-963247345";
  const PROFILE_IMAGE = "/icon-face.png";
  const TWITTER_HANDLE = "@fabmntp";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fabian Montoya",
    "jobTitle": "Full Stack Developer & RPA Engineer",
    "description": "Desarrollador Full Stack y RPA Engineer especializado en crear soluciones tecnológicas que transforman empresas.",
    "url": SITE_URL,
    "image": `${SITE_URL}${PROFILE_IMAGE}`,
    "email": "fabianmontoya2802@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NI",
      "addressRegion": "Nicaragua"
    },
    "sameAs": [
      "https://www.linkedin.com/in/fabián-montoya-963247345",
      "https://x.com/fabmntp",
      "https://github.com/fabmnt"
    ],
    "knowsAbout": ["React", "Angular", "TypeScript", "Node.js", "RPA", "Full Stack Development", "JavaScript"],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Universidad Nacional de Ingeniería"
      }
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Dentalrobot.ai"
      },
      {
        "@type": "Organization",
        "name": "Roca Company Solutions"
      }
    ]
  };
  return renderTemplate(_a || (_a = __template(["<html", ' class="dark" data-astro-cid-ovbztqfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><!-- Primary Meta Tags --><title>', '</title><meta name="title"', '><meta name="description"', '><meta name="keywords"', '><meta name="author"', '><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"><meta name="googlebot" content="index, follow"><meta name="theme-color" content="#3b82f6"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title"', '><!-- Canonical URL --><link rel="canonical"', '><!-- Favicon --><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/icon-face.png"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="512"><meta property="og:image:height" content="512"><meta property="og:image:alt" content="Fabian Montoya - Full Stack Developer"><meta property="og:site_name"', '><meta property="og:locale"', '><meta property="og:see_also"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"', '><meta name="twitter:creator"', '><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:alt" content="Fabian Montoya - Full Stack Developer"><!-- Additional SEO Meta --><meta name="revisit-after" content="7 days"><meta name="language"', '><meta name="geo.region" content="NI"><meta name="geo.placename" content="Nicaragua"><meta name="geo.position" content="12.115;-86.236"><meta name="ICBM" content="12.115, -86.236"><!-- JSON-LD Structured Data --><script type="application/ld+json">', '<\/script><!-- Alternate Versions --><link rel="alternate" type="application/rss+xml"', "", '><!-- Hreflang for i18n --><link rel="alternate" hreflang="es"', '><link rel="alternate" hreflang="en"', '><link rel="alternate" hreflang="x-default"', ">", '</head> <body class="font-display bg-brutalist-black text-brutalist-white min-h-screen overflow-x-hidden" data-astro-cid-ovbztqfa> ', "</body></html>"])), addAttribute(locale, "lang"), SITE_TITLE, addAttribute(SITE_TITLE, "content"), addAttribute(SITE_DESCRIPTION, "content"), addAttribute(SITE_KEYWORDS, "content"), addAttribute(AUTHOR_NAME, "content"), addAttribute(SITE_NAME, "content"), addAttribute(SITE_URL, "href"), addAttribute(SITE_URL, "content"), addAttribute(SITE_TITLE, "content"), addAttribute(SITE_DESCRIPTION, "content"), addAttribute(`${SITE_URL}${PROFILE_IMAGE}`, "content"), addAttribute(SITE_NAME, "content"), addAttribute(locale === "en" ? "en_US" : "es_NI", "content"), addAttribute(AUTHOR_URL, "content"), addAttribute(TWITTER_HANDLE, "content"), addAttribute(TWITTER_HANDLE, "content"), addAttribute(SITE_URL, "content"), addAttribute(SITE_TITLE, "content"), addAttribute(SITE_DESCRIPTION, "content"), addAttribute(`${SITE_URL}${PROFILE_IMAGE}`, "content"), addAttribute(locale === "en" ? "English" : "Spanish", "content"), unescapeHTML(JSON.stringify(jsonLd)), addAttribute(SITE_NAME, "title"), addAttribute(`${SITE_URL}/rss.xml`, "href"), addAttribute(SITE_URL, "href"), addAttribute(`${SITE_URL}en/`, "href"), addAttribute(SITE_URL, "href"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/fabia/Dev/Me/new-portfolio/src/layouts/NewLayout.astro", void 0);

const TranslationContext = createContext(null);
function TranslationProvider({ locale, t, children }) {
  return /* @__PURE__ */ jsx(TranslationContext.Provider, { value: { t, locale }, children });
}
function useTranslations() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslations must be used within a TranslationProvider");
  }
  return context;
}

const layout$1 = {"siteName":"Fabian Montoya | Portfolio","siteTitle":"Fabian Montoya | Full Stack Developer & RPA Engineer","siteDescription":"Fabian Montoya's Portfolio - Full Stack Developer and RPA Engineer in Nicaragua. Specialized in React, Angular, TypeScript, Node.js and automation solutions.","language":"English"};
const nav$1 = {"scroll":"Scroll"};
const presentation$1 = {"role":"Full Stack Developer","tagline":"I design, develop and implement IT solutions that enable companies to evolve.","downloadCV":"DOWNLOAD CV"};
const hero$1 = {"aboutMe":"About me","headline":"Turning ideas into extraordinary digital","highlight":"experiences","description1":"As a systems engineer with a passion for full stack development, I specialize in creating technological solutions that transform the way companies connect with their users.","description2":"From elegant commercial platforms to complex inventory and billing systems, each project is an opportunity to innovate.","viewExperience":"View experience","viewProjects":"View projects","yearsExperience":"Years of experience","projectsCompleted":"Projects completed","mainTechnologies":"Main technologies","commitment":"Commitment"};
const experience$1 = {"title":"WORK","highlight":"EXPERIENCE","subtitle":"Professional career","period":"April 2025 - July 2025","role1":"Frontend Web Developer","desc1":["Design, architecture and development of the company's first computer system with React + Vite, Shadcn UI and TanStack.","Scalable system to render large amounts of information in tables efficiently.","Migration from Google Spreadsheets to a unified system."],"period2":"October 2022 - Present","role2":"Full Stack Developer & RPA","desc2":["Form editor exportable to MS Word and Google Docs for audits.","Leadership in parallelizing RPA executions, drastically reducing execution times.","Developer of RPA robots for patient verification automation.","Maintenance of the company's main Angular system."]};
const projects$1 = {"title":"FEATURED","highlight":"PROJECTS","subtitle":"Portfolio showcase","public":"PUBLIC","private":"PRIVATE","code":"Code","visit":"Visit"};
const skills$2 = {"title":"SKILLS","subtitle":"Tech stack","description":"Technologies I master and with which I build modern and scalable solutions","tools":["Node.js","TanStack Query","RxJS","Tailwind CSS","Git","REST APIs","SQL","MongoDB"]};
const studies$2 = {"title":"STUDIES &","highlight":"CERTIFICATIONS","subtitle":"Academic background","logoAltUnan":"UNAN León Logo","title1":"Information Systems Engineering","inst1":"Universidad Nacional Autónoma de Nicaragua - León (UNAN - LEÓN)","logoAltUni":"UNI Logo","title2":"International Ethical Hacking and Cybersecurity Course","inst2":"Graduate School - Universidad Nacional de Ingeniería","logoAltInatec":"INATEC Logo","title3":"General Accounting Technician","inst3":"Instituto Nacional Tecnológico"};
const footer$1 = {"title":"Let's work together?","description":"I'm always open to new challenges and collaboration opportunities.","sendEmail":"Send email","copyright":"All rights reserved."};
const en = {
  layout: layout$1,
  nav: nav$1,
  presentation: presentation$1,
  hero: hero$1,
  experience: experience$1,
  projects: projects$1,
  skills: skills$2,
  studies: studies$2,
  footer: footer$1,
};

const layout = {"siteName":"Fabian Montoya | Portafolio","siteTitle":"Fabian Montoya | Desarrollador Full Stack e Ingeniero RPA","siteDescription":"Portfolio de Fabian Montoya - Desarrollador Full Stack y RPA Engineer en Nicaragua. Especializado en React, Angular, TypeScript, Node.js y soluciones de automatización.","language":"Spanish"};
const nav = {"scroll":"Scroll"};
const presentation = {"role":"Desarrollador Full Stack","tagline":"Diseño, desarrollo e implemento soluciones informáticas que permiten a empresas evolucionar.","downloadCV":"DESCARGAR CV"};
const hero = {"aboutMe":"Sobre mí","headline":"Convirtiendo ideas en","highlight":"experiencias","description1":"Como ingeniero en sistemas con pasión por el desarrollo full stack, me especializo en crear soluciones tecnológicas que transforman la manera en que las empresas se conectan con sus usuarios.","description2":"Desde elegantes plataformas comerciales hasta complejos sistemas de inventario y facturación, cada proyecto es una oportunidad para innovar.","viewExperience":"Ver experiencia","viewProjects":"Ver proyectos","yearsExperience":"Años de experiencia","projectsCompleted":"Proyectos completados","mainTechnologies":"Tecnologías principales","commitment":"Compromiso"};
const experience = {"title":"EXPERIENCIA","highlight":"LABORAL","subtitle":"Trayectoria profesional","period":"Abril 2025 - Julio 2025","role1":"Desarrollador web frontend","desc1":["Diseño, arquitectura y desarrollo del primer sistema informático de la empresa con React + Vite, Shadcn UI y TanStack.","Sistema escalable para renderizar gran cantidad de información en tablas de manera eficiente.","Migración de hojas de cálculo Google Spreadsheets a un sistema unificado."],"period2":"Octubre 2022 - Presente","role2":"Full Stack Developer & RPA","desc2":["Editor de formularios exportables a MS Word y Google Docs para auditorías.","Liderazgo en paralelización de ejecuciones RPA, reduciendo drásticamente tiempos de ejecución.","Desarrollador de robots RPA para automatización de verificaciones de pacientes.","Mantenimiento del sistema principal Angular de la empresa."]};
const projects = {"title":"PROYECTOS","highlight":"DESTACADOS","subtitle":"Portfolio showcase","public":"PÚBLICO","private":"PRIVADO","code":"Código","visit":"Visitar"};
const skills$1 = {"title":"HABILIDADES","subtitle":"Stack tecnológico","description":"Tecnologías que domino y con las que construyo soluciones modernas y escalables","tools":["Node.js","TanStack Query","RxJS","Tailwind CSS","Git","REST APIs","SQL","MongoDB"]};
const studies$1 = {"title":"ESTUDIOS Y","highlight":"CERTIFICADOS","subtitle":"Formación académica","logoAltUnan":"Logo de la UNAN León","title1":"Ingeniería en Sistemas de Información","inst1":"Universidad Nacional Autónoma de Nicaragua - León (UNAN - LEÓN)","logoAltUni":"Logo de la UNI","title2":"Curso Internacional de Hacking Ético y Ciberseguridad","inst2":"Posgrado Universidad Nacional de Ingeniería","logoAltInatec":"Logo del INATEC","title3":"Técnico en Contabilidad General","inst3":"Instituto Nacional Tecnológico"};
const footer = {"title":"¿Trabajamos juntos?","description":"Estoy siempre abierto a nuevos desafíos y oportunidades de colaboración.","sendEmail":"Enviar correo","copyright":"Todos los derechos reservados."};
const es = {
  layout,
  nav,
  presentation,
  hero,
  experience,
  projects,
  skills: skills$1,
  studies: studies$1,
  footer,
};

const translations = { en, es };
function getTranslations(locale) {
  return translations[locale] || translations.es;
}

const LinkedIn = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    width: "1em",
    height: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 256 256",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",
        fill: "currentColor"
      }
    )
  }
);

const Github = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 256 250",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" })
  }
);

const XformerlyTwitter = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 1200 1227",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
      }
    )
  }
);

const Gmail = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 49.4 512 399.42",
    width: "1em",
    height: "1em",
    ...props,
    children: /* @__PURE__ */ jsxs("g", { fill: "none", fillRule: "evenodd", children: [
      /* @__PURE__ */ jsxs("g", { fillRule: "nonzero", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#4285f4",
            d: "M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#34a853",
            d: "M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fbbc04",
            d: "M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#ea4335",
          d: "M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#c5221f",
          fillRule: "nonzero",
          d: "M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
        }
      )
    ] })
  }
);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React$1.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React$1.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React$1.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React$1.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React$1.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React$1.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React$1.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

function Spinner() {
  const bars = Array(12).fill(0);
  return /* @__PURE__ */ jsx("div", { className: "h-[24px] w-[24px]", children: /* @__PURE__ */ jsx("div", { className: "relative left-1/2 top-1/2 h-[inherit] w-[inherit]", children: bars.map((_, i) => /* @__PURE__ */ jsx(
    "div",
    {
      "aria-label": `spinner-bar-${i + 1}`,
      className: `animate-spinner absolute -left-[10%] -top-[3.9%] h-[8%] w-[24%] rounded-md bg-neutral-400 bar:nth-child(${i + 1})`,
      style: {
        animationDelay: `-${1.3 - i * 0.1}s`,
        transform: `rotate(${30 * i}deg) translate(146%)`
      }
    },
    `spinner-bar-${i}`
  )) }) });
}

function EmailDropdown() {
  const [copying, setCopying] = useState(false);
  const mailtoURL = new URL("mailto:fabianmontoya2802@gmail.com");
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2e3);
    }
  }, [copying]);
  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (copying) return;
    if (copied) return;
    setCopying(true);
    await navigator.clipboard.writeText("fabianmontoya2802@gmail.com");
    setCopied(true);
    setCopying(false);
  };
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        className: "bg-brutalist-black/10 text-brutalist-black border-brutalist-black/20 hover:bg-brutalist-black hover:text-brutalist-white h-11 w-11 p-0 flex items-center justify-center",
        children: /* @__PURE__ */ jsx(Gmail, { className: "!size-5" })
      }
    ) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "min-w-[--radix-dropdown-menu-trigger-width] bg-brutalist-black border-brutalist-white/20", children: [
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          className: "text-brutalist-white hover:bg-brutalist-white/10 focus:bg-brutalist-white/10",
          onClick: handleCopy,
          children: [
            "fabianmontoya2802@gmail.com",
            " ",
            copying ? /* @__PURE__ */ jsx(Spinner, {}) : copied ? /* @__PURE__ */ jsx(ClipboardCheck, { className: "text-brutalist-blue" }) : /* @__PURE__ */ jsx(Clipboard, {})
          ]
        }
      ),
      /* @__PURE__ */ jsx(DropdownMenuItem, { className: "text-brutalist-white hover:bg-brutalist-white/10 focus:bg-brutalist-white/10", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: mailtoURL.toString(), target: "_blank", children: [
        "Enviar correo ",
        /* @__PURE__ */ jsx(Send, { className: "size-3 ml-2" })
      ] }) })
    ] })
  ] });
}

const Avatar = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const languages = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" }
];
function LanguageSwitcher() {
  const { locale } = useTranslations();
  const getLocaleUrl = (targetLocale) => {
    if (targetLocale === "es") {
      return "/";
    }
    return "/en";
  };
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 bg-brutalist-white/10 border border-brutalist-white/20", children: languages.map((lang) => /* @__PURE__ */ jsx(
    "a",
    {
      href: getLocaleUrl(lang.code),
      className: `px-3 py-2 text-xs font-medium tracking-wider uppercase transition-colors duration-300 ${locale === lang.code ? "bg-brutalist-blue text-brutalist-white" : "text-brutalist-white/70 hover:bg-brutalist-white/10 hover:text-brutalist-white"}`,
      title: lang.code === "es" ? "Cambiar a Español" : "Switch to English",
      children: lang.label
    },
    lang.code
  )) });
}

const socialLinks = [
  { href: "https://www.linkedin.com/in/fabián-montoya-963247345", icon: LinkedIn, label: "LinkedIn" },
  { href: "https://x.com/fabmntp", icon: XformerlyTwitter, label: "X" },
  { href: "https://github.com/fabmnt", icon: Github, label: "GitHub" }
];
function NewPresentation() {
  const { t } = useTranslations();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return /* @__PURE__ */ jsxs("header", { className: "relative min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-section-pattern opacity-20" }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center justify-center relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-8 grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: cn(
        "space-y-8 transition-all duration-1000 delay-300",
        isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
      ), children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("span", { className: cn(
            "inline-block bg-brutalist-black text-brutalist-blue px-4 py-2 text-xs font-medium tracking-[0.3em] uppercase transition-all duration-700 delay-500",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          ), children: t.presentation.role }),
          /* @__PURE__ */ jsxs("h1", { className: cn(
            "text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-brutalist-white leading-none tracking-tight transition-all duration-700 delay-600",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          ), children: [
            "FABIAN",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-brutalist-blue", children: "MONTOYA" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: cn(
          "text-base sm:text-lg md:text-xl lg:text-2xl text-brutalist-white/70 font-light max-w-md leading-relaxed transition-all duration-700 delay-700",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        ), children: t.presentation.tagline }),
        /* @__PURE__ */ jsxs("div", { className: cn(
          "flex flex-wrap items-center gap-4 transition-all duration-700 delay-800",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        ), children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/fabian-montoya-cv.pdf",
              download: true,
              className: "inline-flex items-center gap-2 sm:gap-3 bg-brutalist-blue text-brutalist-white px-5 sm:px-6 md:px-8 py-3 sm:py-4 font-medium tracking-wider uppercase text-xs sm:text-sm hover:bg-brutalist-blue/80 transition-colors duration-300 group",
              children: [
                /* @__PURE__ */ jsx("svg", { className: "size-5", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm98.88 133.234c19.636 0 37.082 6.789 49.929 16.971c11.88 9.452 17.444 18.907 22.298 27.393l-33.923 16.949c-2.427-5.565-5.347-11.387-12.846-17.682c-8.248-6.552-16.478-8.484-23.524-8.484c-27.626 0-42.17 25.693-42.17 54.287c0 37.573 19.161 56.22 42.17 56.22c22.3 0 31.278-15.51 37.08-25.435L219.6 302.66c-6.315 9.926-12.374 19.635-25.95 29.069c-7.262 5.09-23.977 15.037-47.736 15.037C100.586 346.766 64 313.81 64 255.87c0-50.636 34.415-90.637 82.88-90.637m75.483 5.328h45.565L303.31 292.24l35.125-121.678H384l-59.379 171.112H281.01z" }) }),
                t.presentation.downloadCV
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            socialLinks.map((link, index) => /* @__PURE__ */ jsx("div", { className: cn(
              "transition-all duration-500",
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
            ), style: { transitionDelay: `${900 + index * 100}ms` }, children: /* @__PURE__ */ jsx(
              "a",
              {
                href: link.href,
                target: "_blank",
                rel: "noopener noreferrer",
                title: link.label,
                className: "flex items-center justify-center h-11 w-11 bg-brutalist-white/10 border border-brutalist-white/20 text-brutalist-white hover:bg-brutalist-blue hover:text-brutalist-white hover:border-brutalist-blue transition-colors duration-300",
                "aria-label": link.label,
                children: /* @__PURE__ */ jsx(link.icon, { className: "!size-5" })
              }
            ) }, link.label)),
            /* @__PURE__ */ jsx("div", { className: cn(
              "transition-all duration-500",
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
            ), style: { transitionDelay: "1200ms" }, children: /* @__PURE__ */ jsx(EmailDropdown, { "client:load": true }) }),
            /* @__PURE__ */ jsx("div", { className: cn(
              "transition-all duration-500",
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
            ), style: { transitionDelay: "1300ms" }, children: /* @__PURE__ */ jsx(LanguageSwitcher, {}) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: cn(
        "flex justify-center lg:justify-end transition-all duration-1000 delay-500",
        isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
      ), children: /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
        /* @__PURE__ */ jsx("div", { className: "blob-shadow" }),
        /* @__PURE__ */ jsxs(Avatar, { className: "w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 relative z-10", children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: "/icon-face.png", alt: "Fabian Montoya" }),
          /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-brutalist-blue text-brutalist-white text-4xl font-medium", children: "FM" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
        .blob-shadow {
          position: absolute;
          inset: -20%;
          z-index: 0;
          border-radius: 20% 80% 70% 30% / 40% 20% 80% 60%;
          background: radial-gradient(
            ellipse at 40% 40%,
            rgba(59, 130, 246, 0.5) 0%,
            rgba(37, 99, 235, 0.35) 30%,
            rgba(29, 78, 216, 0.2) 60%,
            transparent 80%
          );
          filter: blur(24px);
          will-change: transform, border-radius;
          animation:
            blob-spin 18s linear infinite,
            blob-morph 8s ease-in-out infinite;
          transition: filter 0.6s ease, opacity 0.6s ease;
        }


        @keyframes blob-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes blob-morph {
          0%   { border-radius: 20% 80% 70% 30% / 40% 20% 80% 60%; }
          25%  { border-radius: 75% 25% 30% 70% / 20% 75% 25% 80%; }
          50%  { border-radius: 30% 70% 80% 20% / 70% 30% 65% 35%; }
          75%  { border-radius: 80% 20% 25% 75% / 35% 65% 70% 30%; }
          100% { border-radius: 20% 80% 70% 30% / 40% 20% 80% 60%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .blob-shadow {
            animation: none !important;
            border-radius: 50%;
          }
        }
      ` }),
    /* @__PURE__ */ jsx("div", { className: cn(
      "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-1500",
      isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    ), children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 text-brutalist-white animate-bounce", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-medium tracking-[0.3em] uppercase", children: t.nav.scroll }),
      /* @__PURE__ */ jsx("svg", { className: "size-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) })
    ] }) })
  ] });
}

function AnimatedCounter({ end, suffix = "", duration = 2e3 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    count,
    suffix
  ] });
}
function Stat({ value, suffix = "", label, delay }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [delay]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-extrabold text-brutalist-white mb-2", children: /* @__PURE__ */ jsx(AnimatedCounter, { end: value, suffix }) }),
        /* @__PURE__ */ jsx("div", { className: "text-sm font-medium tracking-[0.2em] uppercase text-brutalist-white/60", children: label })
      ]
    }
  );
}
function NewHero() {
  const { t } = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "relative py-20 sm:py-28 md:py-32 lg:py-48 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brutalist-black" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-section-pattern opacity-60" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-40 bg-section-fade-top" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-section-fade-bottom" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 right-0 w-1/2 h-1/2 bg-section-glow" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8 md:space-y-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "transition-all duration-1000",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              ),
              children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block text-brutalist-white text-xs font-medium tracking-[0.3em] uppercase mb-4", children: t.hero.aboutMe }),
                /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-brutalist-white leading-tight", children: [
                  t.hero.headline,
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-brutalist-blue", children: t.hero.highlight }),
                  " ",
                  "digitales extraordinarias"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: cn(
                "text-lg text-brutalist-white/70 font-light leading-relaxed transition-all duration-1000 delay-200",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              ),
              children: t.hero.description1
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: cn(
                "text-lg text-brutalist-white/70 font-light leading-relaxed transition-all duration-1000 delay-300",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              ),
              children: t.hero.description2
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "flex flex-wrap gap-4 transition-all duration-1000 delay-500",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            ),
            children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "#experience",
                  className: "inline-flex items-center gap-2 bg-brutalist-blue text-brutalist-white px-8 py-4 font-medium tracking-wider uppercase text-sm hover:bg-brutalist-blue/80 transition-colors duration-300 group",
                  children: [
                    t.hero.viewExperience,
                    /* @__PURE__ */ jsx("svg", { className: "size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#projects",
                  className: "inline-flex items-center gap-2 bg-brutalist-white/10 text-brutalist-white border border-brutalist-white/20 px-8 py-4 font-medium tracking-wider uppercase text-sm hover:bg-brutalist-white hover:text-brutalist-black transition-colors duration-300",
                  children: t.hero.viewProjects
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6 sm:gap-8", children: [
        /* @__PURE__ */ jsx(Stat, { value: 4, suffix: "+", label: t.hero.yearsExperience, delay: 0 }),
        /* @__PURE__ */ jsx(Stat, { value: 50, suffix: "+", label: t.hero.projectsCompleted, delay: 100 }),
        /* @__PURE__ */ jsx(Stat, { value: 3, suffix: "", label: t.hero.mainTechnologies, delay: 200 }),
        /* @__PURE__ */ jsx(Stat, { value: 100, suffix: "%", label: t.hero.commitment, delay: 300 })
      ] })
    ] }) })
  ] });
}

function ExperienceItem({
  company,
  companyUrl,
  period,
  role,
  description,
  isLast = false,
  delay,
  isReversed = false
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: `relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
      style: { transitionDelay: `${delay}ms` },
      children: /* @__PURE__ */ jsxs("div", { className: `flex flex-col ${isReversed ? "lg:items-end" : "lg:items-start"} gap-4`, children: [
        /* @__PURE__ */ jsxs("div", { className: `flex ${isReversed ? "flex-row-reverse lg:flex-row" : "flex-row"} items-center gap-4`, children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-brutalist-blue flex items-center justify-center flex-shrink-0 relative z-10", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-medium text-brutalist-white", children: company.charAt(0) }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-medium tracking-[0.2em] uppercase text-brutalist-white/50", children: period }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: companyUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-1 text-brutalist-white hover:text-brutalist-blue transition-colors group",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl font-medium", children: company }),
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-brutalist-white/5 backdrop-blur-sm border border-brutalist-white/10 p-5 sm:p-6 w-full lg:max-w-md",
            children: /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: description.map((item, index) => /* @__PURE__ */ jsxs(
              "li",
              {
                className: "text-brutalist-white/70 text-sm font-light leading-relaxed flex gap-3",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-brutalist-blue mt-1.5 flex-shrink-0", children: /* @__PURE__ */ jsx("svg", { className: "size-3", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) }),
                  item
                ]
              },
              index
            )) })
          }
        )
      ] })
    }
  );
}
const experiences = [
  {
    company: "Roca Company Solutions",
    companyUrl: "https://rocacompanysolution.wordpress.com/",
    period: "Abril 2025 - Julio 2025",
    role: "Desarrollador web frontend",
    description: [
      "Diseño, arquitectura y desarrollo del primer sistema informático de la empresa con React + Vite, Shadcn UI y TanStack.",
      "Sistema escalable para renderizar gran cantidad de información en tablas de manera eficiente.",
      "Migración de hojas de cálculo Google Spreadsheets a un sistema unificado."
    ]
  },
  {
    company: "Dentalrobot.ai",
    companyUrl: "https://www.dentalrobot.ai",
    period: "Octubre 2022 - Presente",
    role: "Full Stack Developer & RPA",
    description: [
      "Editor de formularios exportables a MS Word y Google Docs para auditorías.",
      "Liderazgo en paralelización de ejecuciones RPA, reduciendo drásticamente tiempos de ejecución.",
      "Desarrollador de robots RPA para automatización de verificaciones de pacientes.",
      "Mantenimiento del sistema principal Angular de la empresa."
    ]
  }
];
const experiencesEn = [
  {
    company: "Roca Company Solutions",
    companyUrl: "https://rocacompanysolution.wordpress.com/",
    period: "April 2025 - July 2025",
    role: "Frontend Web Developer",
    description: [
      "Design, architecture and development of the company's first computer system with React + Vite, Shadcn UI and TanStack.",
      "Scalable system to render large amounts of information in tables efficiently.",
      "Migration from Google Spreadsheets to a unified system."
    ]
  },
  {
    company: "Dentalrobot.ai",
    companyUrl: "https://www.dentalrobot.ai",
    period: "October 2022 - Present",
    role: "Full Stack Developer & RPA",
    description: [
      "Form editor exportable to MS Word and Google Docs for audits.",
      "Leadership in parallelizing RPA executions, drastically reducing execution times.",
      "Developer of RPA robots for patient verification automation.",
      "Maintenance of the company's main Angular system."
    ]
  }
];
function NewExperience() {
  const { t, locale } = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const expData = locale === "en" ? experiencesEn : experiences;
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "experience",
      ref,
      className: "relative py-20 sm:py-28 md:py-32 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brutalist-black" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-section-pattern opacity-60" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-40 bg-section-fade-top" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-section-fade-bottom" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 right-0 w-1/2 h-1/2 bg-section-glow" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`,
              children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block text-brutalist-white text-xs font-medium tracking-[0.3em] uppercase mb-4", children: t.experience.subtitle }),
                /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brutalist-white", children: [
                  t.experience.title,
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-brutalist-blue", children: t.experience.highlight })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-6 w-24 h-1 bg-brutalist-blue" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative space-y-16", children: [
            /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-8 top-0 bottom-0 w-0.5 bg-brutalist-blue lg:left-1/2" }),
            expData.map((exp, index) => /* @__PURE__ */ jsx(
              ExperienceItem,
              {
                ...exp,
                isLast: index === expData.length - 1,
                delay: 200 + index * 200,
                isReversed: index % 2 === 1
              },
              exp.company
            ))
          ] })
        ] })
      ]
    }
  );
}

const PROJECTS = [
  {
    title: "Ferretería Berrios",
    description: "Dashboard para la gestión de inventario y facturación de una ferretería. Incluye gráficos y reportes de ventas.",
    techs: ["React", "Tanstack Query", "Wouter"],
    privacy: "public",
    sourceUrl: "https://github.com/fabmnt/ferreteria-react",
    websiteUrl: "https://ferreteria-react-five.vercel.app/",
    images: ["ferreteria-dashboard.png", "ferreteria-login.png"]
  },
  {
    title: "Credit Ayuda",
    description: "Sistema de registro y seguimiento de créditos financieros.",
    techs: ["React", "Tanstack Query", "react-router"],
    privacy: "private",
    sourceUrl: "https://github.com/francisco-JGC/credit-ayuda-front",
    websiteUrl: "",
    images: ["credit-prestamo.png"]
  },
  {
    title: "Formless",
    description: "Formulario editable y personalizable de tablas y bookmarks, exportables a docx.",
    techs: ["Angular", "RxJs"],
    privacy: "private",
    sourceUrl: "",
    websiteUrl: "https://controlcentralcarrier.com/#/form-builder",
    images: ["formless.png"]
  }
];

function ProjectCard({ project, index }) {
  const { t } = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: `relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
      style: { transitionDelay: `${300 + index * 150}ms` },
      children: /* @__PURE__ */ jsx("div", { className: "relative bg-brutalist-white/5 backdrop-blur-sm border border-brutalist-white/10 overflow-hidden h-full", children: /* @__PURE__ */ jsxs("div", { className: "p-5 sm:p-6 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 flex items-center justify-center border border-brutalist-white bg-brutalist-white text-brutalist-black", children: /* @__PURE__ */ jsx("svg", { className: "size-7", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" }) }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold tracking-tight text-brutalist-white", children: project.title })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium tracking-widest px-3 py-1 border border-brutalist-white/30 text-brutalist-white/60", children: project.privacy === "public" ? t.projects.public : t.projects.private })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-base font-normal leading-relaxed text-brutalist-white/70", children: project.description }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 pt-2", children: project.techs.map((tech) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "text-xs font-medium tracking-wider px-4 py-2 border border-brutalist-white/20 bg-brutalist-white/5 text-brutalist-white/60",
            children: tech
          },
          tech
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 pt-4 border-t border-brutalist-white/10", children: [
          project.sourceUrl && /* @__PURE__ */ jsxs(
            "a",
            {
              href: project.sourceUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-brutalist-white/70 hover:text-brutalist-blue transition-colors",
              children: [
                /* @__PURE__ */ jsx("svg", { className: "size-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" }) }),
                t.projects.code
              ]
            }
          ),
          project.websiteUrl && /* @__PURE__ */ jsxs(
            "a",
            {
              href: project.websiteUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-brutalist-white/70 hover:text-brutalist-blue transition-colors",
              children: [
                /* @__PURE__ */ jsx("svg", { className: "size-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" }) }),
                t.projects.visit
              ]
            }
          )
        ] })
      ] }) })
    }
  );
}
function NewProjects() {
  const { t } = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "projects",
      ref,
      className: "relative py-20 sm:py-28 md:py-32 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brutalist-black" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-section-pattern opacity-60" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-40 bg-section-fade-top" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-section-fade-bottom" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-section-glow" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`,
              children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block text-brutalist-white text-xs font-medium tracking-[0.3em] uppercase mb-4", children: t.projects.subtitle }),
                /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brutalist-white", children: [
                  t.projects.title,
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-brutalist-blue", children: t.projects.highlight })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-6 w-24 h-1 bg-brutalist-blue" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: PROJECTS.map((project, index) => /* @__PURE__ */ jsx(ProjectCard, { project, index }, project.title)) })
        ] })
      ]
    }
  );
}

const Astro = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 256 366",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    preserveAspectRatio: "xMidYMid",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#FF5D01",
          d: "M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"
        }
      )
    ]
  }
);

const React = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 256 228",
    width: "1em",
    height: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z",
        fill: "#00D8FF"
      }
    )
  }
);

const Angular = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 242 256",
    width: "1em",
    height: "1em",
    ...props,
    children: [
      /* @__PURE__ */ jsxs("g", { clipPath: "url(#a)", children: [
        /* @__PURE__ */ jsx(
          "mask",
          {
            id: "b",
            width: 242,
            height: 256,
            x: 0,
            y: 0,
            maskUnits: "userSpaceOnUse",
            style: {
              maskType: "luminance"
            },
            children: /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M0 0h242v256H0V0Z" })
          }
        ),
        /* @__PURE__ */ jsxs("g", { mask: "url(#b)", children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "url(#c)",
              d: "m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "url(#d)",
              d: "m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("defs", { children: [
        /* @__PURE__ */ jsxs(
          "linearGradient",
          {
            id: "c",
            x1: 53.2,
            x2: 245,
            y1: 231.9,
            y2: 140.7,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx("stop", { stopColor: "#E40035" }),
              /* @__PURE__ */ jsx("stop", { offset: 0.2, stopColor: "#F60A48" }),
              /* @__PURE__ */ jsx("stop", { offset: 0.4, stopColor: "#F20755" }),
              /* @__PURE__ */ jsx("stop", { offset: 0.5, stopColor: "#DC087D" }),
              /* @__PURE__ */ jsx("stop", { offset: 0.7, stopColor: "#9717E7" }),
              /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#6C00F5" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "linearGradient",
          {
            id: "d",
            x1: 44.5,
            x2: 170,
            y1: 30.7,
            y2: 174,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx("stop", { stopColor: "#FF31D9" }),
              /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#FF5BE1", stopOpacity: 0 })
            ]
          }
        ),
        /* @__PURE__ */ jsx("clipPath", { id: "a", children: /* @__PURE__ */ jsx("path", { fill: "#fff", d: "M0 0h242v256H0z" }) })
      ] })
    ]
  }
);

const Nextjs = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: "1em",
    height: "1em",
    viewBox: "0 0 180 180",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "mask",
        {
          id: "mask0_408_139",
          style: {
            maskType: "alpha"
          },
          maskUnits: "userSpaceOnUse",
          x: 0,
          y: 0,
          width: 180,
          height: 180,
          children: /* @__PURE__ */ jsx("circle", { cx: 90, cy: 90, r: 90, fill: "black" })
        }
      ),
      /* @__PURE__ */ jsxs("g", { mask: "url(#mask0_408_139)", children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: 90,
            cy: 90,
            r: 87,
            fill: "black",
            stroke: "white",
            strokeWidth: 6
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z",
            fill: "url(#paint0_linear_408_139)"
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: 115,
            y: 54,
            width: 12,
            height: 72,
            fill: "url(#paint1_linear_408_139)"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("defs", { children: [
        /* @__PURE__ */ jsxs(
          "linearGradient",
          {
            id: "paint0_linear_408_139",
            x1: 109,
            y1: 116.5,
            x2: 144.5,
            y2: 160.5,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx("stop", { stopColor: "white" }),
              /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "white", stopOpacity: 0 })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "linearGradient",
          {
            id: "paint1_linear_408_139",
            x1: 121,
            y1: 54,
            x2: 120.799,
            y2: 106.875,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx("stop", { stopColor: "white" }),
              /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "white", stopOpacity: 0 })
            ]
          }
        )
      ] })
    ]
  }
);

const TypeScript = (props) => /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 256 256", xmlns: "http://www.w3.org/2000/svg", ...props, children: [
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z",
      fill: "#3178C6"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z",
      fill: "#FFF"
    }
  )
] });

function LogosPython(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1.01em",
      height: "1em",
      viewBox: "0 0 256 255",
      ...props,
      children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "IconifyId19424fb59caf19ebd0",
              x1: "12.959%",
              x2: "79.639%",
              y1: "12.039%",
              y2: "78.201%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#387EB8" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#366994" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "IconifyId19424fb59caf19ebd1",
              x1: "19.128%",
              x2: "90.742%",
              y1: "20.579%",
              y2: "88.429%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FFE052" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FFC331" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#IconifyId19424fb59caf19ebd0)",
            d: "M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072M92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#IconifyId19424fb59caf19ebd1)",
            d: "M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897m34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13"
          }
        )
      ]
    }
  );
}

function SkillItem({ name, color, icon: Icon, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: `relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
      style: { transitionDelay: `${200 + index * 100}ms` },
      children: /* @__PURE__ */ jsx("div", { className: "relative p-6 bg-brutalist-white/5 backdrop-blur-sm border border-brutalist-white/10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-16 h-16 flex items-center justify-center",
            style: { backgroundColor: `${color}20` },
            children: /* @__PURE__ */ jsx(Icon, { className: "!size-8", style: { color } })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium tracking-wider uppercase text-brutalist-white/70", children: name })
      ] }) })
    }
  );
}
const skills = [
  { name: "Astro", color: "#FF5D01", icon: Astro },
  { name: "React", color: "#00D8FF", icon: React },
  { name: "Angular", color: "#c3002f", icon: Angular },
  { name: "Next.js", color: "#FFFFFF", icon: Nextjs },
  { name: "TypeScript", color: "#3178c6", icon: TypeScript },
  { name: "Python", color: "#4584b6", icon: LogosPython }
];
function NewSkills() {
  const { t } = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "skills",
      ref,
      className: "relative py-20 sm:py-28 md:py-32 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brutalist-black" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-section-pattern opacity-60" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-40 bg-section-fade-top" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-section-fade-bottom" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-section-glow" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
              children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block text-brutalist-white text-xs font-medium tracking-[0.3em] uppercase mb-4", children: t.skills.subtitle }),
                /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brutalist-white", children: t.skills.title }),
                /* @__PURE__ */ jsx("div", { className: "mt-6 mx-auto w-24 h-1 bg-brutalist-blue" }),
                /* @__PURE__ */ jsx("p", { className: "mt-8 text-brutalist-white/60 font-light max-w-2xl mx-auto", children: t.skills.description })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: skills.map((skill, index) => /* @__PURE__ */ jsx(SkillItem, { ...skill, index }, skill.name)) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `mt-16 flex flex-wrap justify-center gap-4 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
              children: t.skills.tools.map((tool) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "px-4 py-2 bg-brutalist-white/5 border border-brutalist-white/10 text-brutalist-white/60 text-xs font-medium tracking-wider uppercase hover:border-brutalist-blue hover:text-brutalist-blue transition-colors duration-300",
                  children: tool
                },
                tool
              ))
            }
          )
        ] })
      ]
    }
  );
}

function StudyItem({ logo, logoAlt, title, institution, year, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: `relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
      style: { transitionDelay: `${200 + index * 150}ms` },
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 sm:gap-6 p-5 sm:p-6 bg-brutalist-white/5 backdrop-blur-sm border border-brutalist-white/10", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-brutalist-white/20 flex-shrink-0 bg-brutalist-black/50", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: logo,
            alt: logoAlt,
            className: "w-full h-full object-contain p-2 brightness-90"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 pt-2", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold tracking-tight text-brutalist-white", children: title }) }) }),
          /* @__PURE__ */ jsx("p", { className: "text-base font-normal text-brutalist-white/70", children: institution })
        ] }),
        index < 2 && /* @__PURE__ */ jsx("div", { className: "absolute left-20 top-full w-0.5 h-8 bg-brutalist-white/20" })
      ] })
    }
  );
}
const studies = [
  {
    logo: "/unan-leon-logo.png",
    logoAlt: "Logo de la UNAN León",
    title: "Ingeniería en Sistemas de Información",
    institution: "Universidad Nacional Autónoma de Nicaragua - León (UNAN - LEÓN)",
    year: "2019 - 2024"
  },
  {
    logo: "/uni-logo.png",
    logoAlt: "Logo de la UNI",
    title: "Curso Internacional de Hacking Ético y Ciberseguridad",
    institution: "Posgrado Universidad Nacional de Ingeniería",
    year: "2024"
  },
  {
    logo: "/inatec-logo.jpg",
    logoAlt: "Logo del INATEC",
    title: "Técnico en Contabilidad General",
    institution: "Instituto Nacional Tecnológico",
    year: "2024"
  }
];
const studiesEn = [
  {
    logo: "/unan-leon-logo.png",
    logoAlt: "UNAN León Logo",
    title: "Information Systems Engineering",
    institution: "Universidad Nacional Autónoma de Nicaragua - León (UNAN - LEÓN)",
    year: "2019 - 2024"
  },
  {
    logo: "/uni-logo.png",
    logoAlt: "UNI Logo",
    title: "International Ethical Hacking and Cybersecurity Course",
    institution: "Graduate School - Universidad Nacional de Ingeniería",
    year: "2024"
  },
  {
    logo: "/inatec-logo.jpg",
    logoAlt: "INATEC Logo",
    title: "General Accounting Technician",
    institution: "Instituto Nacional Tecnológico",
    year: "2024"
  }
];
function NewStudies() {
  const { t, locale } = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const studiesData = locale === "en" ? studiesEn : studies;
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "studies",
      ref,
      className: "relative py-20 sm:py-28 md:py-32 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brutalist-black" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-section-pattern opacity-60" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-40 bg-section-fade-top" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-section-fade-bottom" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 left-1/4 w-1/2 h-1/2 bg-section-glow" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`,
              children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block text-brutalist-white text-xs font-medium tracking-[0.3em] uppercase mb-4", children: t.studies.subtitle }),
                /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brutalist-white", children: [
                  t.studies.title,
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-brutalist-blue", children: t.studies.highlight })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-6 w-24 h-1 bg-brutalist-blue" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: studiesData.map((study, index) => /* @__PURE__ */ jsx(StudyItem, { ...study, index }, study.title)) })
        ] })
      ]
    }
  );
}

function NewFooter() {
  const { t } = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs(
    "footer",
    {
      ref,
      className: "relative py-16 overflow-hidden bg-brutalist-black",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brutalist-black" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-section-pattern opacity-60" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-40 bg-section-fade-top" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 left-1/4 w-1/2 h-1/2 bg-section-glow" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `mb-12 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
              children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-brutalist-white mb-4", children: t.footer.title }),
                /* @__PURE__ */ jsx("p", { className: "text-brutalist-white/60 font-light max-w-md mx-auto", children: t.footer.description })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
              children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "mailto:fabianmontoya2802@gmail.com",
                    className: "inline-flex items-center gap-3 bg-brutalist-blue text-brutalist-white px-8 py-4 font-medium tracking-wider uppercase text-sm hover:bg-brutalist-blue/80 transition-colors duration-300 group",
                    children: [
                      /* @__PURE__ */ jsx("svg", { className: "size-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }),
                      t.footer.sendEmail,
                      /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "https://www.linkedin.com/in/fabián-montoya-963247345",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "p-3 bg-brutalist-white/10 border border-brutalist-white/20 text-brutalist-white hover:bg-brutalist-blue hover:text-brutalist-white hover:border-brutalist-blue transition-colors duration-300",
                      "aria-label": "LinkedIn",
                      children: /* @__PURE__ */ jsx(LinkedIn, { className: "!size-5" })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "https://x.com/fabmntp",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "p-3 bg-brutalist-white/10 border border-brutalist-white/20 text-brutalist-white hover:bg-brutalist-blue hover:text-brutalist-white hover:border-brutalist-blue transition-colors duration-300",
                      "aria-label": "X",
                      children: /* @__PURE__ */ jsx(XformerlyTwitter, { className: "!size-5" })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "https://github.com/fabmnt",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "p-3 bg-brutalist-white/10 border border-brutalist-white/20 text-brutalist-white hover:bg-brutalist-blue hover:text-brutalist-white hover:border-brutalist-blue transition-colors duration-300",
                      "aria-label": "GitHub",
                      children: /* @__PURE__ */ jsx(Github, { className: "!size-5" })
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `pt-8 border-t border-brutalist-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
              children: [
                /* @__PURE__ */ jsx("p", { className: "text-brutalist-white/40 text-sm font-light", children: "fabianmontoya2802@gmail.com" }),
                /* @__PURE__ */ jsxs("p", { className: "text-brutalist-white/40 text-sm font-light", children: [
                  "© ",
                  (/* @__PURE__ */ new Date()).getFullYear(),
                  " Fabian Montoya. ",
                  t.footer.copyright
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}

function MainContent({ locale }) {
  const t = getTranslations(locale);
  return /* @__PURE__ */ jsx(TranslationProvider, { locale, t, children: /* @__PURE__ */ jsxs("main", { className: "relative", children: [
    /* @__PURE__ */ jsx(NewPresentation, { "client:load": true }),
    /* @__PURE__ */ jsx(NewHero, { "client:load": true }),
    /* @__PURE__ */ jsx(NewExperience, { "client:load": true }),
    /* @__PURE__ */ jsx(NewProjects, { "client:load": true }),
    /* @__PURE__ */ jsx(NewSkills, { "client:load": true }),
    /* @__PURE__ */ jsx(NewStudies, { "client:load": true }),
    /* @__PURE__ */ jsx(NewFooter, { "client:load": true })
  ] }) });
}

export { $$NewLayout as $, MainContent as M };
