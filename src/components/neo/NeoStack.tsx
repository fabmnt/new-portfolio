import { NeoTag } from "./NeoTag";

interface SkillCategoryCardProps {
  icon: string;
  iconFilled?: boolean;
  title: string;
  skills: string[];
  variant?: "primary" | "secondary";
}

function SkillCategoryCard({
  icon,
  iconFilled = false,
  title,
  skills,
  variant = "primary",
}: SkillCategoryCardProps) {
  return (
    <div className="col-span-2 bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all">
      <div className="flex items-center gap-4 mb-8">
        <span
          className="material-symbols-outlined text-4xl"
          style={{ fontVariationSettings: iconFilled ? '"FILL" 1' : '"FILL" 0' }}
        >
          {icon}
        </span>
        <h3 className="text-3xl font-headline font-black uppercase">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`px-4 py-2 border-2 border-black font-headline font-black uppercase ${
              variant === "primary" ? "bg-neo-primary-fixed" : "bg-neo-secondary-fixed"
            }`}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

function StrengthsYaml() {
  return (
    <div className="col-span-2 md:col-span-4 mt-12">
      <div
        className="bg-neo-surface-dim border-4 border-neo-on-surface shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
        style={{ boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)" }}
      >
        <div className="bg-neo-primary border-b-4 border-black px-4 py-2 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-neo-error border border-black" />
            <div className="w-3 h-3 rounded-full bg-neo-tertiary-fixed border border-black" />
            <div className="w-3 h-3 rounded-full bg-neo-secondary-fixed border border-black" />
          </div>
          <span className="text-white font-headline font-black text-sm uppercase">
            STRENGTHS.YAML
          </span>
        </div>
        <div className="p-8 font-mono text-lg text-neo-on-surface leading-relaxed">
          <p>
            <span className="text-neo-primary-dim font-bold">architecture:</span> "distributive"
          </p>
          <p>
            <span className="text-neo-primary-dim font-bold">scalability:</span> "horizontal"
          </p>
          <p>
            <span className="text-neo-primary-dim font-bold">optimization:</span> "obsessive"
          </p>
          <p>
            <span className="text-neo-primary-dim font-bold">philosophy:</span> "brutalism"
          </p>
          <p className="mt-4 text-neo-secondary font-black">
            # System initialized with 100% confidence.
          </p>
        </div>
      </div>
    </div>
  );
}

export function NeoStack() {
  return (
    <section
      className="w-full py-32 bg-neo-tertiary-container text-black border-y-8 border-black relative overflow-hidden"
      id="stack"
    >
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-6xl md:text-9xl font-headline font-black uppercase mb-20 text-center leading-none">
          TECHNICAL_ <br />
          <span className="bg-black text-white px-4">ARMORY.</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkillCategoryCard
            icon="terminal"
            iconFilled
            title="CORE_LOGIC"
            skills={["NODE.JS", "GO_LANG", "PYTHON", "RUST", "REDIS", "DOCKER"]}
            variant="primary"
          />
          <SkillCategoryCard
            icon="layers"
            iconFilled
            title="VISUAL_ENGINE"
            skills={["REACT_NEXT", "TYPESCRIPT", "TAILWIND", "THREE.JS", "WEBGL", "FRAMER"]}
            variant="secondary"
          />
          <StrengthsYaml />
        </div>
      </div>
    </section>
  );
}