import { GraduationCap, Award, BookOpen } from "lucide-react";
import { education } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";

/*
  Education — displays your academic background in a structured card.

  Uses a card layout with three sub-sections:
  1. Main info (institution, degrees, GPA, graduation)
  2. Honors & achievements
  3. Relevant coursework (displayed as a wrapped list of pills)

  The coursework pills use a flex-wrap layout so they flow naturally
  across multiple lines regardless of screen width.
*/

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" />

        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          {/* Header row — institution and graduation date */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">{education.institution}</h3>
              <p className="mt-1 text-muted">
                Expected {education.graduationDate}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <GraduationCap className="h-4 w-4" />
              GPA: {education.gpa}
            </span>
          </div>

          {/* Degrees and minors */}
          <div className="mt-6">
            {education.degrees.map((degree) => (
              <p key={degree} className="text-lg font-medium">
                {degree}
              </p>
            ))}
            <p className="mt-2 text-muted">
              Minors: {education.minors.join(" · ")}
            </p>
          </div>

          {/* Honors */}
          <div className="mt-6">
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
              <Award className="h-4 w-4" />
              Honors & Achievements
            </h4>
            <ul className="mt-3 space-y-1.5">
              {education.honors.map((honor) => (
                <li
                  key={honor}
                  className="flex items-start gap-2 text-sm text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {honor}
                </li>
              ))}
            </ul>
          </div>

          {/* Relevant coursework */}
          <div className="mt-6">
            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
              <BookOpen className="h-4 w-4" />
              Relevant Coursework
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.relevantCoursework.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-border px-3 py-1 text-sm text-muted"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
