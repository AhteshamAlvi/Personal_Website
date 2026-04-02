import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/*
  cn() = "classnames" utility. Combines two libraries:

  1. clsx - Lets you conditionally include classes:
     cn("px-4", isActive && "bg-blue-500", disabled && "opacity-50")
     → "px-4 bg-blue-500" (if isActive=true, disabled=false)

  2. tailwind-merge - Resolves conflicting Tailwind classes:
     cn("bg-red-500", "bg-blue-500")
     → "bg-blue-500" (last one wins, instead of both being in the string)

  Without tailwind-merge, both classes would be in the string and
  the browser would apply whichever appears last in the CSS file,
  which is unpredictable.

  Usage in components:
    <div className={cn("base-styles", props.className)} />
    This lets parent components override styles cleanly.
*/
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
