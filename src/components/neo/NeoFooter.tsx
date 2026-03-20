interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white font-headline font-bold uppercase hover:italic transition-all scale-105 transition-transform"
    >
      {children}
    </a>
  );
}

export function NeoFooter() {
  return (
    <footer className="bg-green-500 dark:bg-green-700 w-full border-t-4 border-black dark:border-white flex flex-col md:flex-row justify-between items-center gap-8 px-10 py-16">
      <div className="text-lg font-black text-black dark:text-white font-headline uppercase">
        PORTFOLIO.EXE v2.4.0
      </div>
      <div className="text-black dark:text-white font-headline font-bold uppercase text-center md:text-left">
        ©2024 ENGINEER_IDENTITY. ALL RIGHTS RESERVED. BUILT WITH INTENTIONAL FRICTION.
      </div>
      <div className="flex gap-6 items-center">
        <FooterLink href="#">GITHUB</FooterLink>
        <FooterLink href="#">LINKEDIN</FooterLink>
        <FooterLink href="#">TWITTER</FooterLink>
        <FooterLink href="#">EMAIL</FooterLink>
      </div>
    </footer>
  );
}