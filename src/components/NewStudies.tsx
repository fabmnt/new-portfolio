import { useState, useEffect, useRef } from "react";
import { useTranslations } from "./TranslationProvider";

interface StudyItemProps {
  logo: string;
  logoAlt: string;
  title: string;
  institution: string;
  year: string;
  index: number;
}

function StudyItem({ logo, logoAlt, title, institution, year, index }: StudyItemProps) {
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
      className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${200 + index * 150}ms` }}
    >
        <div className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 bg-brutalist-white/5 backdrop-blur-sm border border-brutalist-white/10">
        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-brutalist-white/20 flex-shrink-0 bg-brutalist-black/50">
          <img
            src={logo}
            alt={logoAlt}
            className="w-full h-full object-contain p-2 brightness-90"
          />
        </div>

        <div className="flex-1 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <h3 className="text-xl font-semibold tracking-tight text-brutalist-white">
              {title}
            </h3>
            <time className="text-sm text-brutalist-white/50 font-medium" dateTime={year}>
              {year}
            </time>
          </div>
          <p className="text-base font-normal text-brutalist-white/70">
            {institution}
          </p>
        </div>

        {index < 2 && (
          <div className="absolute left-20 top-full w-0.5 h-8 bg-brutalist-white/20" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}

const studies = [
  {
    logo: "/unan-leon-logo.png",
    logoAlt: "Logo de la UNAN León",
    title: "Ingeniería en Sistemas de Información",
    institution: "Universidad Nacional Autónoma de Nicaragua - León (UNAN - LEÓN)",
    year: "2019 - 2024",
  },
  {
    logo: "/uni-logo.png",
    logoAlt: "Logo de la UNI",
    title: "Curso Internacional de Hacking Ético y Ciberseguridad",
    institution: "Posgrado Universidad Nacional de Ingeniería",
    year: "2024",
  },
  {
    logo: "/inatec-logo.jpg",
    logoAlt: "Logo del INATEC",
    title: "Técnico en Contabilidad General",
    institution: "Instituto Nacional Tecnológico",
    year: "2024",
  },
];

const studiesEn = [
  {
    logo: "/unan-leon-logo.png",
    logoAlt: "UNAN León Logo",
    title: "Information Systems Engineering",
    institution: "Universidad Nacional Autónoma de Nicaragua - León (UNAN - LEÓN)",
    year: "2019 - 2024",
  },
  {
    logo: "/uni-logo.png",
    logoAlt: "UNI Logo",
    title: "International Ethical Hacking and Cybersecurity Course",
    institution: "Graduate School - Universidad Nacional de Ingeniería",
    year: "2024",
  },
  {
    logo: "/inatec-logo.jpg",
    logoAlt: "INATEC Logo",
    title: "General Accounting Technician",
    institution: "Instituto Nacional Tecnológico",
    year: "2024",
  },
];

export function NewStudies() {
  const { t, locale } = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const studiesData = locale === "en" ? studiesEn : studies;
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
      id="studies"
      ref={ref}
      className="relative py-20 sm:py-28 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-brutalist-black" />
      <div className="absolute inset-0 bg-section-pattern opacity-60" />
      <div className="absolute inset-x-0 top-0 h-40 bg-section-fade-top" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-section-fade-bottom" />
      <div className="absolute bottom-1/4 left-1/4 w-1/2 h-1/2 bg-section-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <span className="inline-block text-brutalist-white text-xs font-medium tracking-[0.3em] uppercase mb-4">
            {t.studies.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brutalist-white">
            {t.studies.title}{" "}
            <span className="text-brutalist-blue">{t.studies.highlight}</span>
          </h2>
          <div className="mt-6 w-24 h-1 bg-brutalist-blue" />
        </div>

        <div className="space-y-4">
          {studiesData.map((study, index) => (
            <StudyItem key={study.title} {...study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
