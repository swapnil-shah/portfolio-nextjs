import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Logo from "./Logo";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="my-6 w-full z-50">
      <div className="flex flex-row items-center justify-between w-full text-neutral-500">
        <div
          className={`w-8 h-8 rounded-full relative overflow-hidden ${
            theme === "light"
              ? "text-black"
              : "text-neutral-900 dark:text-neutral-50"
          }`}
        >
          <Logo />
        </div>
        {theme === "light" ? (
          <img
            src="/static/icons/moon.svg"
            width={30}
            height={30}
            alt="Toggle theme"
            className="cursor-pointer text-neutral-700"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        ) : (
          <img
            src="/static/icons/sun.svg"
            width={30}
            height={30}
            alt="Toggle theme"
            className="cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        )}
      </div>
    </div>
  );
}
