import { profile } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";

/*
  About — your bio in a few paragraphs.

  This section is intentionally simple. The bio array from profile.ts
  is mapped to <p> tags. Each paragraph gets bottom margin for spacing.

  The max-w-3xl (48rem) constrains line length for readability.
  Lines longer than ~75 characters become hard to read — the eye
  loses its place when jumping back to the start of the next line.
*/

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About" />
        <div className="space-y-4 text-lg leading-relaxed text-muted">
          {profile.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
