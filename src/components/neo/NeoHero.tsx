import { NeoButton } from "./NeoButton";

export function NeoHero() {
  return (
    <header className="relative w-full min-h-screen flex items-center bg-neo-primary overflow-hidden pt-20">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <div className="inline-block bg-neo-tertiary-container border-4 border-black px-4 py-2 mb-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-headline font-black text-2xl uppercase italic">
            HELLO_WORLD.PDF
          </div>
          <h1 className="text-6xl md:text-9xl font-headline font-black text-white leading-none tracking-tighter mb-8 drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] uppercase">
            I BUILD <br />
            <span className="text-neo-tertiary-container">DIGITAL</span> <br />
            PHYSICS.
          </h1>
          <p className="text-xl md:text-3xl font-body font-bold text-neo-on-primary max-w-2xl mb-12 bg-black/10 p-4 border-l-8 border-black">
            FULL-STACK ENGINEER SPECIALIZING IN HIGH-PRESSURE SYSTEMS, NEOMETRIC
            INTERFACES, AND PURE LOGIC.
          </p>
          <div className="flex flex-wrap gap-6">
            <NeoButton variant="secondary" size="lg">
              VIEW_PROJECTS
            </NeoButton>
            <NeoButton variant="surface" size="lg">
              CONTACT_ME
            </NeoButton>
          </div>
        </div>
        <div className="lg:col-span-4 hidden lg:block">
          <div className="relative bg-white border-4 border-black p-4 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <img
              alt="Abstract Code Blueprint"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all border-4 border-black"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8YnT2XlO0Kz8vUCsK5fEcPumehy8oUmLexdRsET6vEC1zl_7KP4Ljk7iEOftM-dbhJ_ABcSpRNXuLmY0YqvWuWoUWwUStCYwYObthIfYIN4LPfJwYZuulNZMGf2bhRqWD1H-kJq-v1-Xb6vHgahakIwF9PDhztTwii8BW9KflANcGG_PriOr5GRjwNTxNtagW-Vaq3VrXdD5kGfmM9S-_vcuCuWlVWVncPHhUkKeShhuyc7_vwrltvduFsFTAl3-PLFTTQnytHml0"
            />
            <div className="absolute -bottom-8 -left-8 bg-neo-tertiary-container border-4 border-black p-4 font-headline font-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              ACTIVE_NODE_01
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px]"
          data-name="Layer 1"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58,114.65,245.42,70.53,321.39,56.44Z"
            fill="#006a2d"
          />
        </svg>
      </div>
    </header>
  );
}