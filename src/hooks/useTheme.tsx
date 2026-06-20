"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

const STORAGE_KEY = "culters-theme";

/**
 * Theme provider: persists the choice in localStorage and toggles the
 * `dark` class on <html> so Tailwind `dark:` variants apply everywhere.
 * The initial class is set by a tiny inline script in layout.tsx to
 * avoid a flash of the wrong theme on load.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // Sync React state with whatever the no-flash script applied.
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // localStorage unavailable (private mode etc.) — non-fatal.
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
