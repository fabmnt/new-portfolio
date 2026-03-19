import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface ExperienceItemProps {
  company: string;
  companyUrl: string;
  period: string;
  role: string;
  description: string[];
  isLast?: boolean;
  delay: number;
  isReversed?: boolean;
}

function ExperienceItem({
  company,
  companyUrl,
  period,
  role,
  description,
  isLast = false,
  delay,
  isReversed = false,
}: ExperienceItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={ref}
      className={`relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`flex flex-col ${isReversed ? "lg:items-end" : "lg:items-start"} gap-4`}>
        <div className={`flex ${isReversed ? "flex-row-reverse lg:flex-row" : "flex-row"} items-center gap-4`}>
          <div className="w-16 h-16 bg-brutalist-blue flex items-center justify-center flex-shrink-0 relative z-10">
            <span className="text-2xl font-medium text-brutalist-white">
              {company.charAt(0)}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-brutalist-white/50">
              {period}
            </span>
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brutalist-white hover:text-brutalist-blue transition-colors group"
            >
              <span className="text-xl font-medium">{company}</span>
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div
          className="bg-brutalist-white/5 backdrop-blur-sm border border-brutalist-white/10 p-5 sm:p-6 w-full lg:max-w-md"
        >
          <ul className="space-y-4">
            {description.map((item, index) => (
              <li
                key={index}
                className="text-brutalist-white/70 text-sm font-light leading-relaxed flex gap-3"
              >
                <span className="text-brutalist-blue mt-1.5 flex-shrink-0">
                  <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
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
      "Migración de hojas de cálculo Google Spreadsheets a un sistema unificado.",
    ],
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
      "Mantenimiento del sistema principal Angular de la empresa.",
    ],
  },
];

export function NewExperience() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

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

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 sm:py-28 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-brutalist-black" />
      <div className="absolute inset-0 bg-section-pattern opacity-60" />
      <div className="absolute inset-x-0 top-0 h-40 bg-section-fade-top" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-section-fade-bottom" />
      <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-section-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <span className="inline-block text-brutalist-white text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Trayectoria profesional
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brutalist-white">
            EXPERIENCIA <span className="text-brutalist-blue">LABORAL</span>
          </h2>
          <div className="mt-6 w-24 h-1 bg-brutalist-blue" />
        </div>

        <div className="relative space-y-16">
          <div className="pointer-events-none absolute left-8 top-0 bottom-0 w-0.5 bg-brutalist-blue lg:left-1/2" />
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={exp.company}
              {...exp}
              isLast={index === experiences.length - 1}
              delay={200 + index * 200}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
