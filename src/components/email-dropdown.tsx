import { ChevronDown, Clipboard, Send } from "lucide-react";
import GmailIcon from "../assets/icons/gmail";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function EmailDropdown() {
  const mailtoURL = new URL("mailto:fabianmontoya2802@gmail.com");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"sm"}>
          <GmailIcon className="size-4" />
          <ChevronDown
            className="-me-1 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[--radix-dropdown-menu-trigger-width]">
        <DropdownMenuItem>
          fabianmontoya2802@gmail.com <Clipboard />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={mailtoURL.toString()} target="_blank">
            Enviar correo <Send />
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
