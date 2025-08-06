import Button from "@/shared/ui/button";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const classes = {
  light: "left-[0%] translate-x-[0%]",
  dark: "left-[100%] translate-x-[-100%]",
};

export default function ToggleThemeButton() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }

    document.documentElement.classList.toggle("dark");
  }

  return (
    <Button
      onClick={toggleTheme}
      className="px-2 min-w-22 dark:bg-gray-900 transition-all ease-in-out"
      aria-label="Toggle theme"
    >
      <div
        className={twMerge(
          classes[theme],
          "mr-auto relative w-[1lh] h-[1lh] rounded-xl bg-gray-900 transition-all ease-in-out",
        )}
      ></div>
    </Button>
  );
}
