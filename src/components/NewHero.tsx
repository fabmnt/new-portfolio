import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "./TranslationProvider";

interface StatProps {
  value: string;
  label: string;
}

function Stat({ value, label }: StatProps) {
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
      className={cn(
        "transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <div className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-extrabold text-brutalist-white mb-2">
        {value}
      </div>
      <div className="text-sm font-medium tracking-[0.2em] uppercase text-brutalist-white/60">
        {label}
      </div>
    </div>
  );
}

export function NewHero() {
  const { t } = useTranslations();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 sm:py-28 md:py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-brutalist-black" />
      <div className="absolute inset-0 bg-section-pattern opacity-60" />
      <div className="absolute inset-x-0 top-0 h-40 bg-section-fade-top" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-section-fade-bottom" />
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-section-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-16 items-center">
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-6">
              <div
                className={cn(
                  "transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
              >
                <span className="inline-block text-brutalist-white text-xs font-medium tracking-[0.3em] uppercase mb-4">
                  {t.hero.aboutMe}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-brutalist-white leading-tight">
                  {t.hero.headline}{" "}
                  <span className="text-brutalist-blue">{t.hero.highlight}</span>
                  {t.hero.headlineSuffix && ` ${t.hero.headlineSuffix}`}
                </h2>
              </div>

              <p
                className={cn(
                  "text-lg text-brutalist-white/70 font-light leading-relaxed transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
              >
                {t.hero.description1}
              </p>

              <p
                className={cn(
                  "text-lg text-brutalist-white/70 font-light leading-relaxed transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
              >
                {t.hero.description2}
              </p>
            </div>

            <div
              className={cn(
                "flex flex-wrap gap-4 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2 bg-brutalist-blue text-brutalist-white px-8 py-4 font-medium tracking-wider uppercase text-sm hover:bg-brutalist-blue/80 transition-colors duration-300 group"
              >
                {t.hero.viewExperience}
                <svg className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-brutalist-white/10 text-brutalist-white border border-brutalist-white/20 px-8 py-4 font-medium tracking-wider uppercase text-sm hover:bg-brutalist-white hover:text-brutalist-black transition-colors duration-300"
              >
                {t.hero.viewProjects}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            <Stat value="4+" label={t.hero.yearsExperience} />
            <Stat value="50+" label={t.hero.projectsCompleted} />
            <Stat value="3" label={t.hero.mainTechnologies} />
            <Stat value="100%" label={t.hero.commitment} />
          </div>
        </div>
      </div>
    </section>
  );
}
