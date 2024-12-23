import { cn } from "@/lib/utils";

export default function Container({ children, ...props }: React.ComponentProps<'div'>) {
  return <div {...props} className={cn(props.className, 'container mx-auto')}>{children}</div>
}

