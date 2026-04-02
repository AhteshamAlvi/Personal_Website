import { FlaskConical } from "lucide-react";
import { research } from "@/data/research";
import SectionHeading from "@/components/ui/SectionHeading";
import { GithubIcon } from "@/components/ui/Icons";

/*
  Research — showcases academic research experience.
  Structured differently from Projects because research implies
  institutional context, mentorship, and methodology.
*/

export default function Research() {
  return (
    <section id="research" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Research" />

        <div className="space-y-8">
          {research.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <FlaskConical className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted">{item.organization}</p>
                  <p className="text-sm text-muted">
                    {item.role} · {item.period}
                  </p>
                </div>
              </div>

              <p className="mt-4 leading-relaxed text-muted">
                {item.description}
              </p>

              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {item.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <GithubIcon className="h-4 w-4" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
