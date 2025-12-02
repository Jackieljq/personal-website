"use client";

import { useEffect, useState } from "react";

type Theme = "theme-light" | "theme-dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("theme-light");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("theme") as Theme | null;

    if (stored === "theme-light" || stored === "theme-dark") {
      setTheme(stored);
      document.documentElement.className = stored;
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialTheme: Theme = prefersDark ? "theme-dark" : "theme-light";
    setTheme(initialTheme);
    document.documentElement.className = initialTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "theme-light" ? "theme-dark" : "theme-light";
    setTheme(nextTheme);
    if (typeof window !== "undefined") {
      document.documentElement.className = nextTheme;
      window.localStorage.setItem("theme", nextTheme);
    }
  };

  return (
    <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>
      <span>{theme === "theme-light" ? "☀️ Light" : "🌙 Dark"}</span>
    </button>
  );
}
