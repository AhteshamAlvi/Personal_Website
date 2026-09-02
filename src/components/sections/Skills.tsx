import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";

/*
  Skills — displays skills grouped by category.

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
      </div>
    </section>
  );
}
