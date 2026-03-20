import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "surface" | "tertiary";
type ButtonSize = "sm" | "md" | "lg";

interface NeoButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-neo-primary text-neo-on-primary border-4 border-black hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:shadow-none",
  secondary:
    "bg-neo-secondary-fixed text-white border-4 border-black hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:shadow-none",
  surface:
    "bg-neo-surface text-black border-4 border-black hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:shadow-none",
  tertiary:
    "bg-neo-tertiary-container text-black border-4 border-black hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:shadow-none",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-lg",
  lg: "px-8 py-4 text-2xl",
};

export function NeoButton({
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
  type = "button",
  disabled = false,
}: NeoButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "font-headline font-black uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:shadow-none",
        variantClasses[variant],
        sizeClasses[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}