import { ArrowDown, FileText, Mail } from "lucide-react";
import { profile, socialLinks } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

/*
  Hero — the landing section, first thing visitors see.
  Communicates who you are in ~3 seconds: big name, clear subtitle, obvious CTAs.
  Full viewport height so it feels like a landing page.
*/

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail,
};

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-6 text-xl text-muted sm:text-2xl">
          {profile.title}
        </p>
        <p className="mt-2 text-lg text-muted">
          {profile.subtitle}
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          {socialLinks.map(({ name, url, icon }) => {
            const Icon = iconMap[icon];
            return (
              <a
                key={name}
                href={url}
                target={url.startsWith("mailto:") ? undefined : "_blank"}
                rel={url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="rounded-full p-3 text-muted transition-colors hover:bg-foreground/10 hover:text-foreground"
                aria-label={name}
              >
                {Icon && <Icon className="h-6 w-6" />}
              </a>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <FileText className="h-4 w-4" />
            View Resume
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            Learn More
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
