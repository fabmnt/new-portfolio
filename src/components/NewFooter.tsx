import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import LinkedIn from "@/assets/icons/linkedin";
import GithubIcon from "../assets/icons/github";
import TwitterIcon from "../assets/icons/twitter";

export function NewFooter() {
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
    <footer
      ref={ref}
      className="relative py-16 overflow-hidden bg-brutalist-black"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-brutalist-yellow/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div
          className={`mb-12 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brutalist-white mb-4">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-brutalist-white/60 font-light max-w-md mx-auto">
            Estoy siempre abierto a nuevos desafíos y oportunidades de colaboración.
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <a
            href="mailto:fabianmontoya2802@gmail.com"
            className="inline-flex items-center gap-3 bg-brutalist-yellow text-brutalist-black px-8 py-4 font-bold tracking-wider uppercase text-sm hover:bg-brutalist-white transition-colors duration-300 group"
          >
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Enviar correo
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/fabián-montoya-963247345"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-brutalist-white/10 border border-brutalist-white/20 text-brutalist-white hover:bg-brutalist-white hover:text-brutalist-black transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedIn className="!size-5" />
            </a>
            <a
              href="https://x.com/fabmntp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-brutalist-white/10 border border-brutalist-white/20 text-brutalist-white hover:bg-brutalist-white hover:text-brutalist-black transition-colors duration-300"
              aria-label="X"
            >
              <TwitterIcon className="!size-5" />
            </a>
            <a
              href="https://github.com/fabmnt"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-brutalist-white/10 border border-brutalist-white/20 text-brutalist-white hover:bg-brutalist-white hover:text-brutalist-black transition-colors duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="!size-5" />
            </a>
          </div>
        </div>

        <div
          className={`pt-8 border-t border-brutalist-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <p className="text-brutalist-white/40 text-sm font-light">
            fabianmontoya2802@gmail.com
          </p>
          <p className="text-brutalist-white/40 text-sm font-light">
            © {new Date().getFullYear()} Fabian Montoya. Todos los derechos reservados.
          </p>
        </div>

        <div
          className={`mt-8 text-center transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-brutalist-white/40 text-xs font-bold tracking-wider uppercase hover:text-brutalist-yellow transition-colors duration-300"
          >
            ← Ver portfolio original
          </a>
        </div>
      </div>
    </footer>
  );
}