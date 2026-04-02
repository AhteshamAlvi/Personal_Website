import { cn } from "@/lib/utils";

/*
  SectionHeading — reusable heading for every content section.

  Why a component for just an <h2>?
  1. Consistent styling across all sections (font size, weight, spacing, accent line)
  2. Single place to change if you want to update the look site-wide
  3. Enforces heading hierarchy — all sections use <h2>, keeping the
     document outline valid for accessibility and SEO

  Props:
    - title: the heading text
    - className: optional overrides from the parent component
*/
interface SectionHeadingProps {
  title: string;
  className?: string;
}

export default function SectionHeading({
  title,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {/* Accent line — a small visual divider under the heading */}
      <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
    </div>
  );
}
