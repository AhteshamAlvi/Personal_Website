import { Mail } from "lucide-react";
import { socialLinks } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

/*
  Footer — server component (no "use client"), ships zero JS.
  Icon mapping bridges string names in data files to React components.
*/

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail,
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Ahtesham Alvi. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ name, url, icon }) => {
            const Icon = iconMap[icon];
            return (
              <a
                key={name}
                href={url}
                target={url.startsWith("mailto:") ? undefined : "_blank"}
                rel={url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="text-muted transition-colors hover:text-foreground"
                aria-label={name}
              >
                {Icon && <Icon className="h-5 w-5" />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
