import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { GithubIcon } from "@/components/ui/Icons";

/*
  ProjectCard — renders a single project in a card format.
  Uses "flex flex-col" + "mt-auto" to push tech tags and links
  to the bottom, keeping cards aligned in a grid.
*/

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, technologies, githubUrl, liveUrl } = project;

  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-lg">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>

      <div className="mt-auto" />

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
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
