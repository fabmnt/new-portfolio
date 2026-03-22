import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitch() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") ?? "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme as "light" | "dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Button
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-pressed={theme === 'dark'}
      className="bg-brutalist-white/10 border-brutalist-white/20 text-brutalist-white hover:bg-brutalist-blue hover:text-brutalist-white hover:border-brutalist-blue"
      variant={"outline"}
      onClick={toggleTheme}
    >
      {theme === "light" ? <Moon size={24} aria-hidden="true" /> : <Sun size={24} aria-hidden="true" />}
    </Button>
  );
}