import { Button } from "./ui/button";

type NavLinkProps = React.PropsWithChildren<React.ComponentProps<"a">>;

export function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <Button asChild size={"sm"}>
      <a {...props}>{children}</a>
    </Button>
  );
}
