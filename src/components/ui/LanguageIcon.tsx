import type { LanguageIcon as LanguageIconType } from "@/types";

/*
  LanguageIcon — renders a programming language icon from Iconify (skill-icons set)
  or from a local SVG file. Same icon in both light and dark mode.
*/

export default function LanguageIcon({ lang }: { lang: LanguageIconType }) {
  const src = lang.iconify
    ? `https://api.iconify.design/${lang.iconify.replace(":", "/")}.svg`
    : lang.localIcon!;

  return (
    <div className="group relative flex items-center">
      <div className="rounded-md border border-border p-1 transition-all duration-200 hover:border-primary/50 hover:shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={lang.name}
          width={20}
          height={20}
          className="h-5 w-5 rounded-[3px]"
          loading="lazy"
        />
      </div>
      {/* Tooltip on hover */}
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
        {lang.name}
      </span>
    </div>
  );
}
