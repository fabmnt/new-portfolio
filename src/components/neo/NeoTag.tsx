import { cn } from "@/lib/utils";

type TagVariant = "primary" | "secondary" | "tertiary";

interface NeoTagProps {
  variant?: TagVariant;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<TagVariant, string> = {
  primary: "bg-neo-primary-fixed border-2 border-black",
  secondary: "bg-neo-secondary-fixed border-2 border-black",
  tertiary: "bg-neo-tertiary-container border-2 border-black",
};

export function NeoTag({ variant = "primary", className, children }: NeoTagProps) {
  return (
    <span
      className={cn(
        "px-3 py-1 font-headline font-bold text-sm",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}