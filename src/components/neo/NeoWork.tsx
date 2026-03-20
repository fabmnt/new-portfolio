import { NeoTag } from "./NeoTag";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: { label: string; variant: "primary" | "secondary" | "tertiary" }[];
  imageSrc: string;
  imageAlt: string;
  badgeLabel: string;
  badgePosition: "left" | "right";
  shadowColor: string;
  isReversed?: boolean;
}

function ProjectCard({
  title,
  description,
  tags,
  imageSrc,
  imageAlt,
  badgeLabel,
  badgePosition,
  shadowColor,
  isReversed = false,
}: ProjectCardProps) {
  return (
    <div className="w-full group">
      <div
        className={`grid lg:grid-cols-12 items-stretch bg-white border-4 border-black transition-all hover:shadow-[20px_20px_0px_0px_${shadowColor}] hover:-translate-x-2 hover:-translate-y-2`}
        style={{ boxShadow: `12px 12px 0px 0px ${shadowColor}` }}
      >
        <div
          className={`lg:col-span-7 border-b-4 lg:border-b-0 ${
            isReversed ? "lg:border-l-4 order-2 lg:order-2" : "lg:border-r-4 order-1 lg:order-1"
          } border-black overflow-hidden relative`}
        >
          <img
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            src={imageSrc}
          />
          <div
            className={`absolute top-0 p-4 font-headline font-black text-xl border-b-4 border-r-4 border-black ${
              badgePosition === "left" ? "left-0" : "right-0"
            } ${badgePosition === "left" ? "bg-neo-primary text-white" : "bg-neo-tertiary-container text-black"}`}
          >
            {badgeLabel}
          </div>
        </div>
        <div
          className={`lg:col-span-5 p-10 flex flex-col justify-between ${isReversed ? "order-1 lg:order-1" : "order-2 lg:order-2"}`}
        >
          <div>
            <h3 className="text-4xl font-headline font-black uppercase mb-4">{title}</h3>
            <p className="text-xl font-body font-bold mb-8 text-neo-on-surface-variant">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map((tag, index) => (
                <NeoTag key={index} variant={tag.variant}>
                  {tag.label}
                </NeoTag>
              ))}
            </div>
          </div>
          <button className="w-full bg-black text-white py-4 font-headline font-black text-xl uppercase flex items-center justify-center gap-4 hover:bg-neo-primary transition-colors">
            DEPLOY_LIVE
            <span className="material-symbols-outlined">arrow_outward</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function NeoWork() {
  return (
    <section className="w-full py-32 bg-neo-surface overflow-hidden" id="work">
      <div className="px-6 mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
        <h2 className="text-7xl md:text-9xl font-headline font-black uppercase text-black leading-none">
          SELECTED_ <br />
          <span className="text-neo-primary">OUTPUTS.</span>
        </h2>
        <div className="text-right">
          <p className="font-headline font-black text-2xl uppercase border-b-4 border-black inline-block mb-2">
            PROD_ENV_ONLY
          </p>
          <p className="font-body font-bold text-lg max-w-xs">
            A collection of high-performance architectural deployments.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-16 px-6">
        <ProjectCard
          title="NEO_EXCHANGE_V4"
          description="High-frequency crypto asset exchange with sub-50ms latency. Architected using Rust and React-Internal logic."
          tags={[
            { label: "RUST", variant: "primary" },
            { label: "WASM", variant: "secondary" },
            { label: "KAFKA", variant: "tertiary" },
          ]}
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCDVyuBTA46Pf6Yz05ozbNG5Dw8Wanp6Sk6m3NePd1yb6HWYUpstPbpNIjBEj-X47C0opyreBREFNWaVTmo-qHunqsRpr2ZeA_voefTT5f_kyi9UsiUSAZAbAk0dQxD6tQOfudmox6Uz4pIiMWsjSNw96jfztGMWYwONDy54b3QvufukZ_JWKXAQnNF2yBT713EjXJyGYtNE138aq11zFovixnyKEA1lM2uFUgduhTRqH58SUfTH0YX5RNi_-m4qOGzdYINt2Ix4lYk"
          imageAlt="Fintech Interface"
          badgeLabel="PROJECT_001"
          badgePosition="left"
          shadowColor="#7b9cff"
        />
        <ProjectCard
          title="QUANTUM_GRID_OS"
          description="A headless CMS built for procedural game assets. Handles 1M+ concurrent asset requests via edge workers."
          tags={[
            { label: "TYPESCRIPT", variant: "primary" },
            { label: "GO_LANG", variant: "secondary" },
            { label: "POSTGRES", variant: "tertiary" },
          ]}
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCbLfjLyxcy0mG7dT_Rl66U-DyNbA6g5mhdc6ME-o-2Zmbk5pti1EwrkuOXuvOtkCOSDufvM5pFohvb2DCZ7Hw5b-fBvI9Gj1zZXHqJOZOiAX6yFSCztvO-pm2x0-up913C5xvnkjbtPyxTv35iKnRbDz-ZBFMDvCiDnHyIEmvqYSraBNvWgNyYnOsvXi1NwsIT-QzNHr7kImy8NaJ90UKnlEfxEsBwj592cniGY_Ey75YjDVEOpMWfUKWKJch_PUjoh4TkoDErPfs6"
          imageAlt="Abstract Grid"
          badgeLabel="PROJECT_002"
          badgePosition="right"
          shadowColor="#fed01b"
          isReversed
        />
      </div>
    </section>
  );
}