import { projectNameStore } from "@/store/project-store";
import { useStore } from "@nanostores/react";
export function ProjectViewer() {
  const projectName = useStore(projectNameStore);

  return (
    <div className="my-4">
      <img
        src="/ferreteria-login.png"
        className="rounded-xl shadow-xl shadow-slate-300 border aspect-square object-cover w-[520px] mx-auto h-auto"
      />
      <p>{projectName}</p>
    </div>
  );
}
