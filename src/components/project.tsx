import { PrivateIcon, PublicIcon } from "@/assets/icons/privacy";
import type { Project } from "@/types/projects";
import { Braces, Code, SquareArrowOutUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { projectNameStore } from "@/store/project-store";
import { cn } from "@/lib/utils";
import { useStore } from "@nanostores/react";

export function Project({ project }: { project: Project }) {
  const projectName = useStore(projectNameStore);
  const isProjectSelected = projectName === project.title;

  return (
    <div
      onMouseEnter={() => {
        projectNameStore.set(project.title);
      }}
      className="relative group rounded-2xl"
    >
      <article
        className={cn(
          "rounded-2xl p-4 group-hover:border-blue-500 dark:bg-black dark:border-slate-700 group-hover:bg-blue-50 bg-white z-20 relative h-full border border-slate-300/80 transition-all group-hover:-translate-y-3 group-hover:shadow-lg group-hover:shadow-blue-300",
          isProjectSelected &&
            "border-blue-500 shadow-blue-300 -translate-y-3 shadow-lg bg-blue-50"
        )}
      >
        <div className="flex flex-col gap-6 h-full">
          <header className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "rounded-lg py-2 px-3 group-hover:bg-blue-500 group-hover:text-white border",
                  isProjectSelected && "bg-blue-500 text-white"
                )}
              >
                <Code className="size-4" />
              </div>
              <h4 className="text-lg">{project.title}</h4>
            </div>
            <div>
              <div>
                {project.privacy === "public" ? (
                  <PublicIcon className="size-4" />
                ) : (
                  <PrivateIcon className="size-4" />
                )}
              </div>
            </div>
          </header>
          <div>
            <p className="text-sm text-slate-700">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techs.map((tech) => (
                <Badge
                  key={tech}
                  variant={"outline"}
                  className={cn(
                    "font-medium group-hover:bg-blue-500 group-hover:text-white",
                    isProjectSelected && "bg-blue-500 text-white"
                  )}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <footer className="flex justify-between mt-auto">
            <div>
              {project.privacy === "public" && (
                <Button
                  variant={"ghost"}
                  className="text-blue-500 hover:text-blue-600 bg-transparent hover:bg-transparent"
                >
                  Código <Braces className="size-2" />
                </Button>
              )}
            </div>
            <div>
              <Button className="bg-blue-500 hover:bg-blue-600">
                Website <SquareArrowOutUpRight className="size-2" />
              </Button>
            </div>
          </footer>
        </div>
      </article>
      <div className="absolute inset-0 bg-blue-500 rounded-2xl"></div>
    </div>
  );
}
