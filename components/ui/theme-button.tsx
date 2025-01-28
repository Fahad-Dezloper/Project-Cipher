"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <button className="flex items-center gap-2 p-3 bg-gray-100 hover:bg-gray-200 dark:bg-black duration-150 ease-in-out transition-all rounded-lg" onClick={handleToggle}>
      {isDarkMode ? (
        <Moon className="h-5 w-5 text-black dark:text-white" />
      ) : (
        <Sun className="h-5 w-5 text-black" />
      )}
    </button>
  );
}
