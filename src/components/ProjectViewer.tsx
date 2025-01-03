import { PROJECTS } from "@/constants/projects";
import { projectNameStore } from "@/store/project-store";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
export function ProjectViewer() {
  const projectName = useStore(projectNameStore);
  const project = PROJECTS.find((p) => p.title === projectName);
  const [currentImage, setCurrentImage] = useState("");

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
    <div className="my-4 relative">
      <img
        src={`/${currentImage}`}
        alt={projectName}
        className="rounded-xl object-contain border-4 p-6 opacity-85 w-full h-[420px] mx-auto"
      />
    </div>
  );
}
