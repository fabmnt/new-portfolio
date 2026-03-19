import { useState, useEffect, useRef } from "react";
import { PROJECTS } from "@/constants/projects";
import type { Project } from "@/types/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
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

  const colorSchemes = [
    { bg: "bg-brutalist-yellow", text: "text-brutalist-black", border: "border-brutalist-yellow", hoverBg: "bg-brutalist-yellow/20" },
    { bg: "bg-brutalist-pink", text: "text-brutalist-white", border: "border-brutalist-pink", hoverBg: "bg-brutalist-pink/20" },
    { bg: "bg-brutalist-blue", text: "text-brutalist-white", border: "border-brutalist-blue", hoverBg: "bg-brutalist-blue/20" },
  ];

  const colorScheme = colorSchemes[index % colorSchemes.length];

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${300 + index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative bg-brutalist-black border-2 border-brutalist-white/10 overflow-hidden transition-all duration-500 h-full",
          isHovered && cn(colorScheme.border, "-translate-y-2", colorScheme.hoverBg)
        )}
      >
        <div
          className={cn(
            "absolute top-0 left-0 right-0 h-2 transition-all duration-500",
            colorScheme.bg
          )}
        />

        <div className="p-8 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div
                className={cn(
                  "w-14 h-14 flex items-center justify-center transition-all duration-300 border-2",
                  colorScheme.bg,
                  colorScheme.text,
                  isHovered && "scale-110"
                )}
              >
                <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className={cn(
                "text-2xl font-black tracking-tight transition-colors duration-300",
                isHovered ? colorScheme.text : "text-brutalist-white"
              )}>
                {project.title}
              </h3>
            </div>
            <span className={cn(
              "text-xs font-black tracking-widest px-3 py-1 border-2 transition-colors duration-300",
              isHovered ? colorScheme.border : "border-brutalist-white/30",
              isHovered ? colorScheme.text : "text-brutalist-white/60"
            )}>
              {project.privacy === "public" ? "PÚBLICO" : "PRIVADO"}
            </span>
          </div>

          <p className={cn(
            "text-base font-medium leading-relaxed transition-colors duration-300",
            isHovered ? "text-brutalist-white" : "text-brutalist-white/70"
          )}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className={cn(
                  "text-xs font-bold tracking-wider px-4 py-2 border-2 transition-all duration-300",
                  isHovered 
                    ? cn(colorScheme.border, colorScheme.text, "bg-opacity-20") 
                    : "bg-brutalist-white/5 border-brutalist-white/20 text-brutalist-white/60"
                )}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-brutalist-white/10">
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-black tracking-wider uppercase transition-colors duration-300",
                  isHovered ? colorScheme.text : "text-brutalist-white/50"
                )}
              >
                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Código
              </a>
            )}
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-black tracking-wider uppercase transition-colors duration-300",
                  isHovered ? "text-brutalist-cyan" : "text-brutalist-white/50"
                )}
              >
                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visitar
              </a>
            )}
          </div>
        </div>

        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-1 transition-all duration-500",
          colorScheme.bg
        )} />
      </div>
    </div>
  );
}

export function NewProjects() {
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
      id="projects"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-brutalist-black" />

      <div className="absolute top-0 left-0 w-96 h-96 bg-brutalist-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brutalist-pink/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <span className="inline-block text-brutalist-yellow text-xs font-black tracking-[0.3em] uppercase mb-4">
            Portfolio showcase
          </span>
          <h2 className="text-5xl lg:text-6xl font-black text-brutalist-white">
            PROYECTOS <span className="text-brutalist-yellow">DESTACADOS</span>
          </h2>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-brutalist-yellow via-brutalist-pink to-brutalist-purple" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}