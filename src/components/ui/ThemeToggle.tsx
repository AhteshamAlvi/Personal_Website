"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

/*
  ThemeToggle — switches between light and dark mode.

  Why the "mounted" state?
  The server doesn't know the user's theme preference (it's in localStorage).
  If we render the icon immediately, the server might show Sun while the
  client wants Moon — causing a hydration mismatch flash.

  Solution: render nothing until the component has mounted on the client,
  then show the correct icon. This is a common pattern with next-themes.
*/
export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Only runs on the client after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Render an invisible placeholder with the same dimensions
  // to prevent layout shift when the real button appears
  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 transition-colors hover:bg-foreground/10"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
