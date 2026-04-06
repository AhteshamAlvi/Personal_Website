import { ExternalLink } from "lucide-react";
import type { Project, LanguageIcon } from "@/types";
import { GithubIcon } from "@/components/ui/Icons";

/*
  ProjectCard — renders a single project in a card format.
  Uses CSS subgrid (6 rows) to align content across cards in a grid.
  Includes language icons via Iconify API, rating bars, and skill badges.
*/

interface ProjectCardProps {
  project: Project;
}

const ratingLabels = [
  { key: "complexity" as const, label: "Complexity" },
  { key: "impact" as const, label: "Impact" },
  { key: "innovation" as const, label: "Innovation" },
];

function RatingBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-20 text-xs text-muted">{label}</span>
      <div className="flex flex-1 gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full ${
              i < value ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function LanguageIconDisplay({ lang }: { lang: LanguageIcon }) {
  const src = lang.iconify
    ? `https://api.iconify.design/${lang.iconify.replace(":", "/")}.svg`
    : lang.localIcon!;

  return (
    <div className="group relative flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={lang.name}
        width={20}
        height={20}
        className="h-5 w-5"
        loading="lazy"
      />
      {/* Tooltip */}
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
        {lang.name}
      </span>
    </div>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, skills, languages, githubUrl, liveUrl, ratings } = project;

  return (
    <div
      className="grid row-span-5 gap-0 rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-lg"
      style={{ gridTemplateRows: "subgrid" }}
    >
      {/* Row 1: Title + Language Icons */}
      <div className="flex items-start justify-between gap-2 self-start">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex shrink-0 items-center gap-2 pt-1">
          {languages.map((lang) => (
            <LanguageIconDisplay key={lang.name} lang={lang} />
          ))}
        </div>
      </div>

      {/* Row 2: Description */}
      <p className="mt-2 text-sm leading-relaxed text-muted self-start">{description}</p>

      {/* Row 3: Ratings */}
      <div className="mt-4 space-y-1.5 self-end">
        {ratingLabels.map(({ key, label }) => (
          <RatingBar key={key} label={label} value={ratings[key]} />
        ))}
      </div>

      {/* Row 4: Skills */}
      <div className="mt-4 flex flex-wrap gap-2 content-start self-start">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Row 5: Links */}
      <div className="mt-4 flex items-center gap-3 self-end">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          aria-label={`View ${title} on GitHub`}
        >
          <GithubIcon className="h-4 w-4" />
          Source
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            aria-label={`View ${title} live demo`}
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
