import { FlaskConical, FileText, Presentation, Mic, Image as ImageIcon } from "lucide-react";
import { research } from "@/data/research";
import SectionHeading from "@/components/ui/SectionHeading";
import { GithubIcon } from "@/components/ui/Icons";
import LanguageIcon from "@/components/ui/LanguageIcon";

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
                {item.icons && item.icons.length > 0 && (
                  <div className="flex shrink-0 items-center gap-1.5">
                    {item.icons.map((icon) => (
                      <LanguageIcon key={icon.name} lang={icon} />
                    ))}
                  </div>
                )}
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

              {/*
                Papers — rendered only when a research entry has them.
                A paper without a `url` is still listed (title, venue, status)
                but not linked, so work that isn't publicly shareable yet
                can be credited without exposing the PDF.
              */}
              {item.papers && item.papers.length > 0 && (
                <div className="mt-6 space-y-3 rounded-lg border border-border bg-background/50 p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {item.papers.length > 1 ? "Papers" : "Paper"}
                  </h4>
                  {item.papers.map((paper) => (
                    <div key={paper.title} className="text-sm">
                      <p className="font-medium leading-snug">{paper.title}</p>
                      <p className="mt-1 text-xs text-muted">
                        {[paper.venue, paper.status, paper.authorship]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                      {(paper.url || paper.slidesUrl) && (
                        <div className="mt-2 flex flex-wrap items-center gap-4">
                          {paper.url && (
                            <a
                              href={paper.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
                            >
                              <FileText className="h-3.5 w-3.5" />
                              Read paper
                            </a>
                          )}
                          {paper.slidesUrl && (
                            <a
                              href={paper.slidesUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
                            >
                              <Presentation className="h-3.5 w-3.5" />
                              Slides
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Conference presentations — posters and talks. */}
              {item.presentations && item.presentations.length > 0 && (
                <div className="mt-4 space-y-3 rounded-lg border border-border bg-background/50 p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {item.presentations.length > 1
                      ? "Presentations"
                      : "Presentation"}
                  </h4>
                  {item.presentations.map((pres) => (
                    <div key={pres.title} className="text-sm">
                      <p className="flex items-start gap-2 font-medium leading-snug">
                        <Mic className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-muted" />
                        {pres.title}
                      </p>
                      <p className="mt-1 text-xs text-muted">{pres.venue}</p>
                      <p className="mt-0.5 text-xs text-muted">
                        {pres.date} · {pres.authorship}
                      </p>
                      {pres.url && (
                        <a
                          href={pres.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
                        >
                          <ImageIcon className="h-3.5 w-3.5" />
                          View poster
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}

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
