import { useState, useEffect, useRef } from "react";
import AstroIcon from "../assets/icons/astro.tsx";
import ReactIcon from "../assets/icons/react.tsx";
import AngularIcon from "../assets/icons/angular.tsx";
import NextJsIcon from "../assets/icons/nextjs.tsx";
import TypeScriptIcon from "../assets/icons/typescript.tsx";
import PythonIcon from "../assets/icons/python.tsx";

interface SkillItemProps {
  name: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
}

function SkillItem({ name, color, icon: Icon, index }: SkillItemProps) {
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
      style={{ transitionDelay: `${200 + index * 100}ms` }}
    >
      <div className="relative p-6 bg-brutalist-white/5 backdrop-blur-sm border border-brutalist-white/10">
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-16 h-16 flex items-center justify-center"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon className="!size-8" style={{ color }} />
          </div>
          <span className="text-sm font-bold tracking-wider uppercase text-brutalist-white/70">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}

const skills = [
  { name: "Astro", color: "#FF5D01", icon: AstroIcon },
  { name: "React", color: "#00D8FF", icon: ReactIcon },
  { name: "Angular", color: "#c3002f", icon: AngularIcon },
  { name: "Next.js", color: "#FFFFFF", icon: NextJsIcon },
  { name: "TypeScript", color: "#3178c6", icon: TypeScriptIcon },
  { name: "Python", color: "#4584b6", icon: PythonIcon },
];

export function NewSkills() {
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
      id="skills"
      ref={ref}
      className="relative py-20 sm:py-28 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-brutalist-black" />
      <div className="absolute inset-0 bg-section-pattern opacity-60" />
      <div className="absolute inset-x-0 top-0 h-40 bg-section-fade-top" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-section-fade-bottom" />
      <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-section-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <span className="inline-block text-brutalist-blue text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Stack tecnológico
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brutalist-white">
            HABILIDADES
          </h2>
          <div className="mt-6 mx-auto w-24 h-1 bg-brutalist-blue" />
          <p className="mt-8 text-brutalist-white/60 font-light max-w-2xl mx-auto">
            Tecnologías que domino y con las que construyo soluciones modernas y escalables
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <SkillItem key={skill.name} {...skill} index={index} />
          ))}
        </div>

        <div
          className={`mt-16 flex flex-wrap justify-center gap-4 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {["Node.js", "TanStack Query", "RxJS", "Tailwind CSS", "Git", "REST APIs", "SQL", "MongoDB"].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 bg-brutalist-white/5 border border-brutalist-white/10 text-brutalist-white/60 text-xs font-bold tracking-wider uppercase hover:border-brutalist-blue hover:text-brutalist-blue transition-colors duration-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
