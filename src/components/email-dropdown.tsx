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
import React from "react";

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
          size={"sm"}
          className="dark:bg-black dark:text-white dark:border-slate-800 dark:border"
        >
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
        <DropdownMenuItem onClick={handleCopy}>
          fabianmontoya2802@gmail.com{" "}
          {copying ? <Spinner /> : copied ? <ClipboardCheck /> : <Clipboard />}
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
