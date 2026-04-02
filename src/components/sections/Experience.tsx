import { experiences } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceCard from "@/components/ui/ExperienceCard";

/*
  Experience — renders work history as a vertical list of cards.

  The space-y-6 creates consistent gaps between cards.
  Each card handles its own internal layout and styling.

  If you wanted a timeline design (line connecting dots down the left side),
  you'd add it here in this section component — not inside the cards.
  This separation means the cards could be reused in a different layout.
*/

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" />
        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
