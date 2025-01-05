import { Button } from "./ui/button";

type NavLinkProps = React.PropsWithChildren<React.ComponentProps<"a">>;

export function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <Button
      asChild
      variant={"ghost"}
      className="dark:bg-black dark:text-white "
    >
      <a {...props}>{children}</a>
    </Button>
  );
}
