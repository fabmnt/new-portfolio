import { useState, useEffect } from "react";
import LinkedIn from "@/assets/icons/linkedin";
import GithubIcon from "../assets/icons/github";
import TwitterIcon from "../assets/icons/twitter";
import { EmailDropdown } from "./email-dropdown";
import { ThemeSwitch } from "./theme-switch";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const socialLinks = [
  { href: "https://www.linkedin.com/in/fabián-montoya-963247345", icon: LinkedIn, label: "LinkedIn" },
  { href: "https://x.com/fabmntp", icon: TwitterIcon, label: "X" },
  { href: "https://github.com/fabmnt", icon: GithubIcon, label: "GitHub" },
];

export function NewPresentation() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-brutalist-yellow via-brutalist-pink to-brutalist-purple opacity-90" />
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjMEExQTBBIi8+Cjwvc3ZnPg==')] opacity-20" />

      <nav className={cn(
        "relative z-10 flex justify-between items-center p-6 lg:p-8 transition-all duration-1000",
        isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
      )}>
        <div className="flex items-center gap-4">
          <Button
            variant={"outline"}
            onClick={() => window.location.href = "/"}
            className="bg-transparent border-brutalist-white text-brutalist-white hover:bg-brutalist-white hover:text-brutalist-black font-bold tracking-wider uppercase text-sm rounded-none border-2"
          >
            ← Original
          </Button>
        </div>

        <div className={cn(
          "transition-all duration-1000 delay-200",
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        )}>
          <ThemeSwitch client:load />
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center relative z-10 px-6 lg:px-8">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "space-y-8 transition-all duration-1000 delay-300",
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <div className="space-y-4">
              <span className={cn(
                "inline-block bg-brutalist-black text-brutalist-yellow px-4 py-2 text-xs font-bold tracking-[0.3em] uppercase transition-all duration-700 delay-500",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              )}>
                Full Stack Developer
              </span>
              
              <h1 className={cn(
                "text-6xl lg:text-8xl font-extrabold text-brutalist-black leading-none tracking-tight transition-all duration-700 delay-600",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                FABIAN
                <br />
                <span className="text-brutalist-white bg-brutalist-black inline-block px-2">MONTOYA</span>
              </h1>
            </div>

            <p className={cn(
              "text-xl lg:text-2xl text-brutalist-black font-light max-w-md leading-relaxed transition-all duration-700 delay-700",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Diseño, desarrollo e implemento soluciones informáticas que permiten a empresas evolucionar.
            </p>

            <div className={cn(
              "flex flex-wrap items-center gap-4 transition-all duration-700 delay-800",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <a
                href="/fabian-montoya-cv.pdf"
                download
                className="inline-flex items-center gap-3 bg-brutalist-yellow text-brutalist-black px-8 py-4 font-bold tracking-wider uppercase text-sm hover:bg-brutalist-white transition-colors duration-300 group"
              >
                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm98.88 133.234c19.636 0 37.082 6.789 49.929 16.971c11.88 9.452 17.444 18.907 22.298 27.393l-33.923 16.949c-2.427-5.565-5.347-11.387-12.846-17.682c-8.248-6.552-16.478-8.484-23.524-8.484c-27.626 0-42.17 25.693-42.17 54.287c0 37.573 19.161 56.22 42.17 56.22c22.3 0 31.278-15.51 37.08-25.435L219.6 302.66c-6.315 9.926-12.374 19.635-25.95 29.069c-7.262 5.09-23.977 15.037-47.736 15.037C100.586 346.766 64 313.81 64 255.87c0-50.636 34.415-90.637 82.88-90.637m75.483 5.328h45.565L303.31 292.24l35.125-121.678H384l-59.379 171.112H281.01z"/>
                </svg>
                DESCARGAR CV
              </a>

              <div className="flex items-center gap-3">
                {socialLinks.map((link, index) => (
                  <div key={link.label} className={cn(
                    "transition-all duration-500",
                    isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  )} style={{ transitionDelay: `${900 + index * 100}ms` }}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.label}
                      className="flex items-center justify-center h-11 w-11 bg-brutalist-black/10 border border-brutalist-black/20 text-brutalist-black hover:bg-brutalist-black hover:text-brutalist-white transition-colors duration-300"
                      aria-label={link.label}
                    >
                      <link.icon className="!size-5" />
                    </a>
                  </div>
                ))}
                <div className={cn(
                  "transition-all duration-500",
                  isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
                )} style={{ transitionDelay: "1200ms" }}>
                  <EmailDropdown client:load />
                </div>
              </div>
            </div>
          </div>

          <div className={cn(
            "flex justify-center lg:justify-end transition-all duration-1000 delay-500",
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}>
            <div className="relative">
              <div className="absolute -inset-4 bg-brutalist-cyan rotate-6 opacity-60 animate-pulse" />
              <div className="absolute -inset-8 bg-brutalist-pink -rotate-6 opacity-40 animate-pulse" style={{ animationDelay: "0.5s" }} />
              <Avatar className="w-64 h-64 lg:w-80 lg:h-80 border-4 border-brutalist-black relative z-10">
                <AvatarImage src="/icon-face.png" alt="Fabian Montoya" />
                <AvatarFallback className="bg-brutalist-yellow text-brutalist-black text-4xl font-bold">FM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className={cn(
        "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-1500",
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        <div className="flex flex-col items-center gap-2 text-brutalist-black animate-bounce">
          <span className="text-xs font-bold tracking-[0.3em] uppercase">Scroll</span>
          <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </header>
  );
}