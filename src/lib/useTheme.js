import { useState, useCallback, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Try to get theme from localStorage or default to "light"
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return { theme, toggleTheme };
}
