import { Button } from "./ui/button";

type NavLinkProps = React.PropsWithChildren<React.ComponentProps<"a">>;

export function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <Button
      asChild
      variant={"ghost"}
      className="bg-transparent text-inherit hover:bg-inherit rounded-none p-0 h-auto"
    >
      <a {...props}>{children}</a>
    </Button>
  );
}