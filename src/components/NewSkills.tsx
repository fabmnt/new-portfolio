import { useState, useEffect, useRef } from "react";
import AstroIcon from "../assets/icons/astro.tsx";
import ReactIcon from "../assets/icons/react.tsx";
import AngularIcon from "../assets/icons/angular.tsx";
import NextJsIcon from "../assets/icons/nextjs.tsx";
import TypeScriptIcon from "../assets/icons/typescript.tsx";
import PythonIcon from "../assets/icons/python.tsx";
import { cn } from "@/lib/utils";

interface SkillItemProps {
  name: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
}

function SkillItem({ name, color, icon: Icon, index }: SkillItemProps) {
  const [isHovered, setIsHovered] = useState(false);
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative p-6 bg-brutalist-white/5 border border-brutalist-white/10 transition-all duration-500",
          isHovered && "bg-brutalist-white/10 border-brutalist-white/20 -translate-y-2"
        )}
        style={{
          boxShadow: isHovered ? `0 10px 40px -10px ${color}40` : "none",
        }}
      >
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-0.5 transition-all duration-500",
            isHovered && "h-full opacity-15"
          )}
          style={{ background: `linear-gradient(90deg, ${color}, ${color})` }}
        />

        <div className="flex flex-col items-center gap-4">
          <div
            className={cn(
              "w-16 h-16 flex items-center justify-center transition-all duration-300",
              isHovered && "scale-110"
            )}
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon className={cn("!size-8", isHovered && "")} style={{ color }} />
          </div>
          <span
            className={cn(
              "text-sm font-bold tracking-wider uppercase transition-all duration-300",
              isHovered ? "text-white" : "text-brutalist-white/70"
            )}
            style={isHovered ? { color } : {}}
          >
            {name}
          </span>
        </div>

        <div
          className={cn(
            "absolute bottom-0 left-0 w-full h-0.5 transition-all duration-500",
            isHovered && "h-full opacity-15"
          )}
          style={{ background: `linear-gradient(90deg, ${color}, ${color})` }}
        />
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
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-brutalist-black" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brutalist-purple/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <span className="inline-block text-brutalist-cyan text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Stack tecnológico
          </span>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-brutalist-white">
            HABILIDADES
          </h2>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-brutalist-cyan via-brutalist-blue to-brutalist-purple" />
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
              className="px-4 py-2 bg-brutalist-white/5 border border-brutalist-white/10 text-brutalist-white/60 text-xs font-bold tracking-wider uppercase hover:border-brutalist-cyan hover:text-brutalist-cyan transition-colors duration-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}