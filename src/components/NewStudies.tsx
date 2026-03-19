import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

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
  const [isHovered, setIsHovered] = useState(false);
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

  const colorSchemes = [
    { accent: "bg-brutalist-yellow", text: "text-brutalist-yellow" },
    { accent: "bg-brutalist-pink", text: "text-brutalist-pink" },
    { accent: "bg-brutalist-cyan", text: "text-brutalist-cyan" },
  ];

  const colorScheme = colorSchemes[index % colorSchemes.length];

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${200 + index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "flex items-start gap-6 p-6 border-2 transition-all duration-300",
          isHovered 
            ? "bg-brutalist-white/5 border-brutalist-yellow" 
            : "bg-brutalist-white/5 border-brutalist-white/10"
        )}
      >
        <div
          className={cn(
            "w-20 h-20 flex items-center justify-center border-2 flex-shrink-0 transition-all duration-300",
            isHovered ? "border-brutalist-yellow" : "border-brutalist-white/20",
            "bg-brutalist-black/50"
          )}
        >
          <img
            src={logo}
            alt={logoAlt}
            className="w-full h-full object-contain p-2 brightness-90"
          />
        </div>

        <div className="flex-1 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <h3 className={cn(
                "text-xl font-black tracking-tight transition-colors duration-300",
                isHovered ? colorScheme.text : "text-brutalist-white"
              )}>
                {title}
              </h3>
              <span
                className={cn(
                  "text-xs font-black tracking-wider px-3 py-1 border-2",
                  colorScheme.accent,
                  "text-brutalist-black border-brutalist-black"
                )}
              >
                {year}
              </span>
            </div>
          </div>
          <p className={cn(
            "text-base font-medium transition-colors duration-300",
            isHovered ? "text-brutalist-white" : "text-brutalist-white/70"
          )}>
            {institution}
          </p>
        </div>

        <div
          className={cn(
            "absolute left-20 top-full w-0.5 h-8 transition-all duration-300",
            isHovered ? "bg-brutalist-yellow" : "bg-brutalist-white/20",
            index === 2 && "hidden"
          )}
        />
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

export function NewStudies() {
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
      id="studies"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-brutalist-black" />

      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brutalist-orange/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brutalist-yellow/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <span className="inline-block text-brutalist-orange text-xs font-black tracking-[0.3em] uppercase mb-4">
            Formación académica
          </span>
          <h2 className="text-5xl lg:text-6xl font-black text-brutalist-white">
            ESTUDIOS Y{" "}
            <span className="text-brutalist-orange">CERTIFICADOS</span>
          </h2>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-brutalist-yellow via-brutalist-orange to-brutalist-pink" />
        </div>

        <div className="space-y-4">
          {studies.map((study, index) => (
            <StudyItem key={study.title} {...study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}