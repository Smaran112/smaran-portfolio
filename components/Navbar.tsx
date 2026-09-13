"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

import { useTheme } from "@/components/ThemeProvider";

const emptySubscribe = () => () => {};

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isDark = mounted && theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo + Theme Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            scroll
            onClick={(e) => {
            
              if (window.location.pathname === "/") {
                e.preventDefault();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }
            }}
            className="text-lg font-bold tracking-tight text-[var(--color-ink)] transition-opacity hover:opacity-60"
          >
            Smaran
          </Link>

          {/* Theme Toggle */}
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
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink)] transition-all hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] dark:hover:bg-[var(--color-ink)]"
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
              className={`absolute h-4 w-4 transition-all duration-300 ${
                isDark
                  ? "scale-0 -rotate-90 opacity-0"
                  : "scale-100 rotate-0 opacity-100"
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
              className={`absolute h-4 w-4 transition-all duration-300 ${
                isDark
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-0 rotate-90 opacity-0"
              }`}
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
            </svg>
          </button>
        </div>

    {/* Navigation */}

       <div className="flex items-center gap-3 text-xs font-medium text-[var(--color-ink)] sm:gap-5 sm:text-sm">
        <a href="#work" className="transition-opacity hover:opacity-50">
        Work
        </a>

        <a
        href="#learning"
        className="transition-opacity hover:opacity-50"
        >
        Learning
        </a>

        <a href="#skills" className="transition-opacity hover:opacity-50">
        Skills
        </a>

        <a href="#about" className="transition-opacity hover:opacity-50">
        About
        </a>

        <a href="#contact" className="transition-opacity hover:opacity-50">
        Contact
        </a>

  <a
    href="/SmaranCV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-[var(--color-border)] px-3 py-2 text-xs font-medium text-[var(--color-ink)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] sm:px-5 sm:py-2.5 sm:text-sm"
  >
    CV
  </a>
</div>
      </nav>
    </header>
  );
}