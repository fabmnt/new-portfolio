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
    <div className="bg-white dark:bg-black my-4 relative">
      <h4 className="absolute -top-5 right-0 z-50 rounded-full font-light inline-flex p-1.5 px-4 border border-slate-300  bg-slate-200 dark:border-slate-800 dark:bg-black">
        {project?.title}
      </h4>
      <div className="rounded-2xl bg-white border border-slate-300/80 dark:border-slate-800 w-full px-6 py-8 dark:bg-black">
        <img
          onLoad={() => setIsLoadingImage(false)}
          src={`/${currentImage}`}
          alt={projectName}
          className={cn(
            "object-cover rounded-md opacity-80 w-full h-[240px] sm:h-[420px] mx-auto",
            isLoadingImage ? "hidden" : "block"
          )}
        />
        {isLoadingImage && (
          <div className="w-full h-[240px] sm:h-[420px] opacity-85 rounded-2xl mx-auto dark:bg-slate-800 bg-slate-300 animate-pulse" />
        )}
      </div>
    </div>
  );
}
