"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { LanguageIcon as LanguageIconType } from "@/types";

/*
  LanguageIcon — renders a programming language icon that adapts to the current theme.

  Uses the Iconify API (skill-icons set) which provides colored square icons.
  Icons with dark/light variants swap automatically when the theme changes.
  Local SVGs (via localIcon) are used for custom icons like Qiskit.

  Needs "use client" because it reads the theme via useTheme().
*/

function getIconUrl(iconId: string): string {
  return `https://api.iconify.design/${iconId.replace(":", "/")}.svg`;
}

export default function LanguageIcon({ lang }: { lang: LanguageIconType }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Determine the correct icon source based on theme
  let src: string;
  if (lang.localIcon) {
    src = lang.localIcon;
  } else if (lang.iconifyLight && lang.iconifyDark) {
    // Has theme variants — swap based on current theme
    const iconId = mounted && resolvedTheme === "dark"
      ? lang.iconifyDark
      : lang.iconifyLight;
    src = getIconUrl(iconId);
  } else {
    // Single icon for both modes
    src = getIconUrl(lang.iconify!);
  }

  return (
    <div className="group relative flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={lang.name}
        width={20}
        height={20}
        className="h-5 w-5 rounded-[4px]"
        loading="lazy"
      />
      {/* Tooltip on hover */}
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
        {lang.name}
      </span>
    </div>
  );
}
