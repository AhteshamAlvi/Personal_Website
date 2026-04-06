"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

/*
  Navigation links — each maps to a section's id attribute.
  When clicked, the browser smooth-scrolls to that section
  (thanks to scroll-behavior: smooth in globals.css).

  To add a new section: add it here AND create the section component with a matching id.
*/
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  /*
    Scroll listener — adds a subtle background/shadow to the navbar
    once the user scrolls down. This differentiates the navbar from
    the hero section at the top of the page.
  */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll(); // Check immediately on mount (fixes navbar flash on mid-page refresh)
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*
    IntersectionObserver — watches each section and tracks which one
    is currently in the viewport. This powers the "active link" highlight
    in the navbar so users always know where they are on the page.

    rootMargin: "-50% 0px" means a section is "active" when its midpoint
    crosses the viewport center, not when its top edge enters.
  */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    // Observe all sections that have ids matching our nav links
    navLinks.forEach(({ href }) => {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo / Name — clicking scrolls to top */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight transition-colors hover:text-primary"
        >
          AA
        </a>

        {/* Desktop navigation — hidden on mobile, shown on md+ screens */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                activeSection === href.replace("#", "")
                  ? "text-primary"
                  : "text-muted hover:text-foreground"
              )}
            >
              {label}
            </a>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile: theme toggle + hamburger button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 transition-colors hover:bg-foreground/10"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown — only rendered when open */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={handleLinkClick}
              className={cn(
                "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                activeSection === href.replace("#", "")
                  ? "text-primary"
                  : "text-muted hover:text-foreground"
              )}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
