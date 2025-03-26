"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function AppUtil() {
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    document.addEventListener(
      "keydown",
      (e) => {
        if (e.altKey && e.key === "t") {
          setTheme(theme === "dark" ? "light" : "dark");
        }
      },
      { signal }
    );

    return () => abortController.abort();
  }, [setTheme, theme]);
  return null;
}
