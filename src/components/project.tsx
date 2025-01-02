import { PublicIcon } from "@/assets/icons/privacy";
import type { Project } from "@/types/projects";
import { Braces, Code, SquareArrowOutUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { projectNameStore } from "@/store/project-store";

export function Project({ project }: { project: Project }) {
  return (
    <div
      onMouseEnter={() => {
        projectNameStore.set(project.title);
      }}
      className="relative bg-white group rounded-2xl"
    >
      <article className="rounded-2xl p-4 group-hover:border-blue-500 bg-white border-primary z-20 relative h-full border border-slate-300 transition-all group-hover:-translate-y-3 group-hover:shadow-lg group-hover:shadow-blue-300">
        <div className="flex flex-col gap-6 h-full">
          <header className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="rounded-lg py-2 px-3 group-hover:bg-blue-500 group-hover:text-white border">
                <Code className="size-4" />
              </div>
              <h4 className="text-lg">{project.title}</h4>
            </div>
            <div>
              <div>
                <PublicIcon className="size-4" />
              </div>
            </div>
          </header>
          <div>
            <p className="text-sm text-slate-700">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techs.map((tech) => (
                <Badge key={tech} variant={"outline"} className="font-medium">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <footer className="flex justify-between mt-auto">
            <div>
              <Button
                variant={"outline"}
                className="bg-transparent hover:bg-transparent"
              >
                Código <Braces className="size-2" />
              </Button>
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
