import { Button } from "./ui/button";

type NavLinkProps = React.PropsWithChildren<React.ComponentProps<"a">>;

export function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <Button
      asChild
      size={"sm"}
      className="dark:bg-black dark:text-white dark:border-slate-800 dark:border"
    >
      <a {...props}>{children}</a>
    </Button>
  );
}
