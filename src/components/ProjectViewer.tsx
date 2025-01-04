import { PROJECTS } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { projectNameStore } from "@/store/project-store";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
export function ProjectViewer() {
  const projectName = useStore(projectNameStore);
  const project = PROJECTS.find((p) => p.title === projectName);
  const [currentImage, setCurrentImage] = useState("");
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  useEffect(() => {
    const startImagePlay = (images: string[]) => {
      let index = 0;
      setCurrentImage(images[index]);
      index = (index + 1) % images.length;
      const interval = setInterval(() => {
        setCurrentImage(images[index]);
        index = (index + 1) % images.length;
      }, 5000);
      return interval;
    };

    if (project == null) {
      return;
    }

    const interval = startImagePlay(project.images);
    return () => {
      clearInterval(interval);
    };
  }, [projectName]);

  return (
    <div className="bg-white my-4 relative">
      <h4 className="absolute -top-5 right-0 z-50 rounded-full font-light text-lg inline-flex p-2 px-4 border bg-slate-200">
        {project?.title}
      </h4>
      <img
        onLoad={() => setIsLoadingImage(false)}
        src={`/${currentImage}`}
        alt={projectName}
        className={cn(
          "rounded-2xl object-contain border-2 p-6 opacity-85 w-full h-[240px] sm:h-[540px] mx-auto",
          isLoadingImage ? "hidden" : "block"
        )}
      />
      {isLoadingImage && (
        <div className="w-full h-[420px] opacity-85 border-4 p-6 rounded-2xl mx-auto bg-slate-300 animate-pulse" />
      )}
    </div>
  );
}
