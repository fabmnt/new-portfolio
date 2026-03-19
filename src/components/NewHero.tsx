import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = "", duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

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

  return <span ref={ref}>{count}{suffix}</span>;
}

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}

function Stat({ value, suffix = "", label, delay }: StatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="text-5xl lg:text-7xl font-extrabold text-brutalist-white mb-2">
        <AnimatedCounter end={value} suffix={suffix} />
      </div>
      <div className="text-sm font-bold tracking-[0.2em] uppercase text-brutalist-white/60">
        {label}
      </div>
    </div>
  );
}

export function NewHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-brutalist-black" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent_49%,#3366FF_50%,transparent_51%)] bg-[length:60px_100%]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(0deg,transparent_49%,#3366FF_50%,transparent_51%)] bg-[length:100%_60px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div
                className={cn(
                  "transition-all duration-1000",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                )}
              >
                <span className="inline-block text-brutalist-cyan text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Sobre mí
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-brutalist-white leading-tight">
                  Convirtiendo ideas en{" "}
                  <span className="text-brutalist-yellow">experiencias</span>{" "}
                  digitales extraordinarias
                </h2>
              </div>

              <p
                className={cn(
                  "text-lg text-brutalist-white/70 font-light leading-relaxed transition-all duration-1000 delay-200",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                )}
              >
                Como ingeniero en sistemas con pasión por el desarrollo full stack, 
                me especializo en crear soluciones tecnológicas que transforman la manera 
                en que las empresas se conectan con sus usuarios.
              </p>

              <p
                className={cn(
                  "text-lg text-brutalist-white/70 font-light leading-relaxed transition-all duration-1000 delay-300",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                )}
              >
                Desde elegantes plataformas comerciales hasta complejos sistemas de inventario 
                y facturación, cada proyecto es una oportunidad para innovar.
              </p>
            </div>

            <div
              className={cn(
                "flex flex-wrap gap-4 transition-all duration-1000 delay-500",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              )}
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2 bg-brutalist-yellow text-brutalist-black px-8 py-4 font-bold tracking-wider uppercase text-sm hover:bg-brutalist-white transition-colors duration-300 group"
              >
                Ver experiencia
                <svg className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-brutalist-white/10 text-brutalist-white border border-brutalist-white/20 px-8 py-4 font-bold tracking-wider uppercase text-sm hover:bg-brutalist-white hover:text-brutalist-black transition-colors duration-300"
              >
                Ver proyectos
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <Stat value={4} suffix="+" label="Años de experiencia" delay={0} />
            <Stat value={50} suffix="+" label="Proyectos completados" delay={100} />
            <Stat value={3} suffix="" label="Tecnologías principales" delay={200} />
            <Stat value={100} suffix="%" label="Compromiso" delay={300} />
          </div>
        </div>
      </div>
    </section>
  );
}