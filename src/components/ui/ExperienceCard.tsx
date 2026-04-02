import type { Experience } from "@/types";

/*
  ExperienceCard — renders a single work experience entry.

  This is a "presentational" component — it receives data via props
  and renders it. It doesn't fetch data or manage state.

  The timeline dot and line are handled by the parent Experience section,
  not by this card. This keeps the card reusable in other layouts.
*/

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { title, company, location, startDate, endDate, bullets, technologies } =
    experience;

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      {/* Header — role, company, dates */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted">
            {company} · {location}
          </p>
        </div>
        <span className="text-sm text-muted sm:text-right">
          {startDate} — {endDate}
        </span>
      </div>

      {/* Bullet points */}
      <ul className="mt-4 space-y-2">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
            {bullet}
          </li>
        ))}
      </ul>

      {/* Technology tags — only shown if present */}
      {technologies && technologies.length > 0 && (
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
      )}
    </div>
  );
}
