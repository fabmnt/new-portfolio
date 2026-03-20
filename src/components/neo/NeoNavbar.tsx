import { NeoButton } from "./NeoButton";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isHighlighted?: boolean;
}

function NavLink({ href, children, isHighlighted = false }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`font-headline font-bold uppercase tracking-tighter transition-all hover:-translate-y-1 active:translate-y-0 ${
        isHighlighted
          ? "text-neo-primary fixed:0 dark:text-blue-400 underline decoration-4 underline-offset-4"
          : "text-black dark:text-white hover:text-neo-primary dark:hover:text-blue-400"
      }`}
    >
      {children}
    </a>
  );
}

export function NeoNavbar() {
  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-none border-b-4 border-black dark:border-white shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[0px_4px_0px_0px_rgba(255,255,255,1)] sticky top-0 z-50 flex justify-between items-center w-full px-6 py-4">
      <div className="text-2xl font-black italic text-neo-primary dark:text-blue-400 border-2 border-black dark:border-white px-2 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-headline uppercase tracking-tighter">
        PORTFOLIO.EXE
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <NavLink href="#work">WORK</NavLink>
        <NavLink href="#bio">BIO</NavLink>
        <NavLink href="#ai">AI_LAB</NavLink>
        <NavLink href="#stack">STACK</NavLink>
        <NavLink href="#talk">TALK</NavLink>
      </div>
      <NeoButton variant="primary" size="md">
        RESUME
      </NeoButton>
    </nav>
  );
}