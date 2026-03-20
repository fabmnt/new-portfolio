import { ChatPreview } from "./ChatPreview";

interface AIFeatureCardProps {
  icon: "database" | "forum" | "hub";
  title: string;
  description: string;
  variant?: "white" | "tertiary" | "secondary";
}

function AIFeatureCard({ icon, title, description, variant = "white" }: AIFeatureCardProps) {
  const iconBgClass =
    variant === "white"
      ? "bg-neo-primary"
      : variant === "tertiary"
      ? "bg-black"
      : "bg-neo-secondary";

  return (
    <div
      className={`p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all ${
        variant === "white"
          ? "bg-white text-black"
          : variant === "tertiary"
          ? "bg-neo-tertiary-container text-black"
          : "bg-neo-secondary-fixed text-black"
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-12 h-12 ${iconBgClass} flex items-center justify-center border-2 border-black text-white`}
        >
          <span className="material-symbols-outlined font-black">{icon}</span>
        </div>
        <h3 className="text-3xl font-headline font-black uppercase">{title}</h3>
      </div>
      <p className="text-lg font-bold">{description}</p>
    </div>
  );
}

export function NeoAI() {
  return (
    <section
      className="w-full py-32 bg-neo-ai-accent text-white relative overflow-hidden"
      id="ai"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #000, #000 1px, transparent 1px, transparent 40px)",
          backgroundSize: "100% 40px",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-6xl md:text-9xl font-headline font-black uppercase leading-none mb-6 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            NEO_CHAT_<br />
            <span className="text-neo-tertiary-container">LOGIC.</span>
          </h2>
          <p className="text-2xl font-body font-bold max-w-3xl bg-black px-6 py-4 border-l-8 border-neo-tertiary-container shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
            I INTEGRATE ADAPTIVE INTELLIGENCE INTO CORE ARCHITECTURES. BEYOND
            SIMPLE PROMPTS: I BUILD SELF-AWARE SYSTEMS.
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <AIFeatureCard
              icon="database"
              title="RAG_PIPELINE"
              description="Injecting proprietary knowledge into LLMs via high-performance vector stores and semantic retrieval loops."
              variant="white"
            />
            <AIFeatureCard
              icon="forum"
              title="CONVERSATIONAL_UI"
              description="Crafting neometic chat interfaces that prioritize intent, reducing user friction through predictive input mapping."
              variant="tertiary"
            />
            <AIFeatureCard
              icon="hub"
              title="MODEL_ORCHESTRATION"
              description="Multi-agent workflows where specialized models collaborate to solve complex architectural logic constraints."
              variant="secondary"
            />
          </div>
          <div className="lg:col-span-5 sticky top-32">
            <ChatPreview />
          </div>
        </div>
      </div>
    </section>
  );
}