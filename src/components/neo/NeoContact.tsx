import { NeoButton } from "./NeoButton";

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

function SocialLink({ href, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="text-2xl font-headline font-black uppercase border-b-4 border-neo-primary hover:text-neo-primary transition-colors"
    >
      {children}
    </a>
  );
}

export function NeoContact() {
  return (
    <section
      className="w-full py-40 bg-neo-surface flex flex-col items-center justify-center text-center px-6"
      id="talk"
    >
      <h2 className="text-5xl md:text-8xl font-headline font-black uppercase mb-12 max-w-4xl drop-shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
        READY TO <span className="bg-neo-primary text-white px-4">DEPLOY</span> SOMETHING MASSIVE?
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl">
        <input
          className="flex-grow bg-white border-4 border-black p-6 text-2xl font-headline font-bold focus:bg-neo-tertiary-container focus:ring-0 outline-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          placeholder="YOUR_EMAIL_HERE"
          type="email"
        />
        <NeoButton variant="primary" size="lg">
          INITIATE_CONTACT
        </NeoButton>
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-12">
        <SocialLink href="#">GITHUB</SocialLink>
        <SocialLink href="#">LINKEDIN</SocialLink>
        <SocialLink href="#">X_TWITTER</SocialLink>
      </div>
    </section>
  );
}