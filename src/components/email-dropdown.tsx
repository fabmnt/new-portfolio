import { ChevronDown, Clipboard, ClipboardCheck, Send } from "lucide-react";
import GmailIcon from "../assets/icons/gmail";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Spinner } from "./ui/spinner";

export function EmailDropdown() {
  const [copying, setCopying] = useState(false);
  const mailtoURL = new URL("mailto:fabianmontoya2802@gmail.com");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copying]);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (copying) return;
    if (copied) return;
    setCopying(true);
    await navigator.clipboard.writeText("fabianmontoya2802@gmail.com");
    setCopied(true);
    setCopying(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"outline"}
          className="bg-brutalist-black/10 text-brutalist-black border-brutalist-black/20 hover:bg-brutalist-black hover:text-brutalist-white h-11 w-11 p-0 flex items-center justify-center"
        >
          <GmailIcon className="!size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[--radix-dropdown-menu-trigger-width] bg-brutalist-black border-brutalist-white/20">
        <DropdownMenuItem
          className="text-brutalist-white hover:bg-brutalist-white/10 focus:bg-brutalist-white/10"
          onClick={handleCopy}
        >
          fabianmontoya2802@gmail.com{" "}
          {copying ? <Spinner /> : copied ? <ClipboardCheck className="text-brutalist-blue" /> : <Clipboard />}
        </DropdownMenuItem>
        <DropdownMenuItem className="text-brutalist-white hover:bg-brutalist-white/10 focus:bg-brutalist-white/10" asChild>
          <a href={mailtoURL.toString()} target="_blank">
            Enviar correo <Send className="size-3 ml-2" />
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}