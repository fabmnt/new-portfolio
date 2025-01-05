import { cn } from "@/lib/utils";

export default function Container({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        props.className,
        "container mx-auto w-full px-4 sm:px-0 sm:w-[420px] lg:w-[860px]"
      )}
    >
      {children}
    </div>
  );
}
