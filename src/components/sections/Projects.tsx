import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";

/*
  Projects — displays project cards in a responsive grid.

  Grid breakdown:
    - Mobile (<640px):  1 column  — cards stack vertically
    - Tablet (640px+):  2 columns — comfortable side-by-side
    - Desktop (1024px+): 3 columns — full grid utilization

  Featured projects could be given special treatment here
  (e.g., spanning 2 columns with sm:col-span-2), but for now
  all cards are equal in the grid.
*/

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Projects" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
