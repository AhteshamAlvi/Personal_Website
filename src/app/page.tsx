import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Skills from "@/components/sections/Skills";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

/*
  Home — the main (and only) page.

  This is a "composition" component — it doesn't contain any logic or styling.
  It just imports section components and renders them in order.

  The order here IS the order visitors see.
  To rearrange sections, just move the components around.
  To add a new section, import it and drop it in.
*/

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Research />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
}
