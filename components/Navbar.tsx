"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <header className="w-full border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      
      {/* Logo + Theme Toggle */}
<div className="flex items-center gap-3">
  <a
    href="/"
    className="text-lg font-bold tracking-tight text-black dark:text-white"
  >
    Smaran
  </a>

  {/* Dark mode toggle */}
  <button
    type="button"
    onClick={toggleTheme}
    aria-label={
      mounted
        ? isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
        : "Toggle dark mode"
    }
    aria-pressed={mounted ? isDark : false}
    className="group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 text-black transition-colors hover:bg-black hover:text-white dark:border-white/15 dark:text-white dark:hover:bg-white dark:hover:text-black"
  >
    {/* Sun */}
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`absolute h-4.5 w-4.5 transition-all duration-300 ${
        !mounted || !isDark
          ? "scale-100 rotate-0 opacity-100"
          : "scale-0 -rotate-90 opacity-0"
      }`}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M6.34 17.66l-1.41 1.41" />
      <path d="M19.07 4.93l-1.41 1.41" />
    </svg>

    {/* Moon */}
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`absolute h-4.5 w-4.5 transition-all duration-300 ${
        mounted && isDark
          ? "scale-100 rotate-0 opacity-100"
          : "scale-0 rotate-90 opacity-0"
      }`}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  </button>
</div>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-sm font-medium text-black dark:text-white">
          <a
            href="#work"
            className="transition-opacity hover:opacity-50"
          >
            Work
          </a>

          <a
            href="#learning"
            className="transition-opacity hover:opacity-50"
          >
            Learning
          </a>

          <a
            href="#skills"
            className="transition-opacity hover:opacity-50"
          >
            Skills
          </a>

          <a
            href="#about"
            className="transition-opacity hover:opacity-50"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition-opacity hover:opacity-50"
          >
            Contact
          </a>

          {/* Resume */}
          <a
            href="#"
            className="rounded-full bg-black px-5 py-2.5 text-white transition-transform hover:scale-105 dark:bg-white dark:text-black"
          >
            Resume ↗
          </a>

       
        </div>
      </nav>
    </header>
  );
}