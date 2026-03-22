import { useState, useEffect, useRef } from "react";
import { PROJECTS } from "@/constants/projects";
import type { Project } from "@/types/projects";
import { useTranslations } from "./TranslationProvider";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useTranslations();
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
      style={{ transitionDelay: `${300 + index * 150}ms` }}
    >
      <div className="relative bg-brutalist-white/5 backdrop-blur-sm border border-brutalist-white/10 overflow-hidden h-full">
        <div className="p-5 sm:p-6 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="w-14 h-14 flex items-center justify-center border border-brutalist-white bg-brutalist-white text-brutalist-black">
                <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-brutalist-white">
                {project.title}
              </h3>
            </div>
            <span className="text-xs font-medium tracking-widest px-3 py-1 border border-brutalist-white/30 text-brutalist-white/60">
              {project.privacy === "public" ? t.projects.public : t.projects.private}
            </span>
          </div>

          <p className="text-base font-normal leading-relaxed text-brutalist-white/70">
            {project.description}
          </p>

          <ul className="flex flex-wrap gap-3 pt-2" aria-label="Technologies used">
            {project.techs.map((tech) => (
              <li
                key={tech}
                className="text-xs font-medium tracking-wider px-4 py-2 border border-brutalist-white/20 bg-brutalist-white/5 text-brutalist-white/60"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 pt-4 border-t border-brutalist-white/10">
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-brutalist-white/70 hover:text-brutalist-blue transition-colors"
              >
                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                {t.projects.code}
              </a>
            )}
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-brutalist-white/70 hover:text-brutalist-blue transition-colors"
              >
                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {t.projects.visit}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function NewProjects() {
  const { t } = useTranslations();
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
      className="relative py-20 sm:py-28 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-brutalist-black" />
      <div className="absolute inset-0 bg-section-pattern opacity-60" />
      <div className="absolute inset-x-0 top-0 h-40 bg-section-fade-top" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-section-fade-bottom" />
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-section-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <span className="inline-block text-brutalist-white text-xs font-medium tracking-[0.3em] uppercase mb-4">
            {t.projects.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brutalist-white">
            {t.projects.title} <span className="text-brutalist-blue">{t.projects.highlight}</span>
          </h2>
          <div className="mt-6 w-24 h-1 bg-brutalist-blue" />
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
