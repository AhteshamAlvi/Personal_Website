import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { GithubIcon } from "@/components/ui/Icons";

/*
  ProjectCard — renders a single project in a card format.
  Uses "flex flex-col" + "mt-auto" to push tech tags and links
  to the bottom, keeping cards aligned in a grid.
  Includes rating bars for complexity, impact, and innovation.
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

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, technologies, githubUrl, liveUrl, ratings } = project;

  return (
    <div
      className="grid row-span-5 gap-0 rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-lg"
      style={{ gridTemplateRows: "subgrid" }}
    >
      {/* Row 1: Title */}
      <h3 className="text-lg font-semibold self-start">{title}</h3>

      {/* Row 2: Description */}
      <p className="mt-2 text-sm leading-relaxed text-muted self-start">{description}</p>

      {/* Row 3: Ratings */}
      <div className="mt-4 space-y-1.5 self-end">
        {ratingLabels.map(({ key, label }) => (
          <RatingBar key={key} label={label} value={ratings[key]} />
        ))}
      </div>

      {/* Row 4: Technologies */}
      <div className="mt-4 flex flex-wrap gap-2 content-start self-start">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
          >
            {tech}
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
