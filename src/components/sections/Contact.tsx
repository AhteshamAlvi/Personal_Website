import { Mail } from "lucide-react";
import { profile, socialLinks } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

/*
  Contact — email link + social links.
  No contact form — most people prefer email for a personal site.
  If you want a form later, use https://formspree.io (no backend needed).
*/

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail,
};

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
        <div className="mt-3 h-1 w-16 mx-auto rounded-full bg-primary" />

        <p className="mt-6 text-lg text-muted">
          I&apos;m always open to discussing new opportunities, research
          collaborations, or interesting projects. Feel free to reach out!
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Mail className="h-4 w-4" />
          {profile.email}
        </a>

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
      </div>
    </section>
  );
}
