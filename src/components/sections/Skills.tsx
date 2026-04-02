import { Clock } from "lucide-react";
import { skillCategories, certifications } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";

/*
  Skills — displays skills grouped by category + certifications.

  Layout: a responsive grid of category groups. Each group shows
  its name and a row of skill badges.

  The grid uses sm:grid-cols-2 lg:grid-cols-3 — same pattern as
  Projects. Consistency in grid columns across sections creates
  visual rhythm.
*/

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills" />

        {/* Skills by category */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="mt-12">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex flex-col gap-1 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-medium">{cert.name}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                    <Clock className="h-3.5 w-3.5" />
                    {cert.status} — Expected {cert.expectedCompletion}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
