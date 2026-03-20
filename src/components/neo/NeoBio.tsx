import { cn } from "@/lib/utils";

interface StatBoxProps {
  value: string;
  label: string;
  variant?: "surface" | "tertiary";
  className?: string;
}

function StatBox({ value, label, variant = "surface", className }: StatBoxProps) {
  return (
    <div
      className={cn(
        "p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        variant === "surface" ? "bg-neo-surface text-black" : "bg-neo-tertiary-container text-black",
        className
      )}
    >
      <span className="block font-headline font-black text-4xl mb-2">{value}</span>
      <span className="font-bold uppercase">{label}</span>
    </div>
  );
}

export function NeoBio() {
  return (
    <section className="w-full py-24 bg-neo-secondary text-white relative" id="bio">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative inline-block mb-12">
              <h2 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tight relative z-10 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                ENGINEER_IDENTITY
              </h2>
              <div className="absolute -bottom-2 left-0 w-full h-8 bg-neo-tertiary-container -z-10 -rotate-2" />
            </div>
            <div className="space-y-8 text-xl md:text-2xl font-body font-semibold">
              <p className="border-l-8 border-neo-tertiary-container pl-6 py-2 bg-black/20">
                I don't just write code; I architect resilient ecosystems. My
                philosophy is rooted in "Intentional Friction"—creating
                interfaces that feel mechanical and substantial.
              </p>
              <p>
                With a background in low-level systems and high-level UX design,
                I bridge the gap between "it works" and "it's unforgettable."
                Every pixel is a calculated risk.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-8">
                <StatBox value="08+" label="YEARS_EXP" variant="surface" />
                <StatBox value="124" label="NODES_SHIPPED" variant="tertiary" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-lg aspect-square bg-neo-surface-container-highest border-4 border-black relative shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
              <img
                alt="Male Engineer Portrait"
                className="w-full h-full object-cover grayscale mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3_fE076_rYx9f-z7V7D9Y9U0u8z-E-9-9-9-9-9-9-9-9-9-9-9-9-9-9-9-9-9-9-9-9-9-9-9"
              />
              <div className="absolute top-4 right-4 bg-neo-primary text-white p-3 border-2 border-black font-black font-headline">
                CORE_BRAIN
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <div className="w-6 h-6 bg-neo-tertiary-container border-2 border-black" />
                <div className="w-6 h-6 bg-neo-primary border-2 border-black" />
                <div className="w-6 h-6 bg-neo-secondary-fixed border-2 border-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}