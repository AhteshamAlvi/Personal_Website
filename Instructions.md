# How to Build a Website from Scratch

A complete, self-contained guide to building a modern website using Next.js, React, TypeScript, and Tailwind CSS. Follow these steps in order — every command is copy-paste ready.

This guide uses a personal portfolio as its running example, but the architecture applies to any kind of site (blog, SaaS landing page, documentation site, etc.).

---

## Prerequisites

- **Node.js** (v18 or later): [https://nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js)
- **Git**: [https://git-scm.com](https://git-scm.com)
- A code editor (VS Code recommended)

Verify your setup:
```bash
node --version    # Should be v18+
npm --version     # Should be v9+
git --version
```

---

## Phase 1: Scaffold the Project

### Step 1: Initialize a Next.js Project

Next.js is a React framework that handles routing, server-side rendering (for SEO), and production builds. The `create-next-app` CLI scaffolds a working project with all configuration pre-done.

```bash
npx create-next-app@latest my-site --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
cd my-site
```

Replace `my-site` with your project name (must be lowercase, no spaces — use hyphens).

**What each flag does:**

| Flag | Purpose |
|------|---------|
| `--typescript` | Adds TypeScript for type-safe code (catches bugs at compile time, not runtime) |
| `--tailwind` | Pre-configures Tailwind CSS (utility-first CSS: write `className="flex"` instead of separate CSS files) |
| `--eslint` | Adds a linter that catches common JS/React mistakes |
| `--app` | Uses Next.js App Router (folder-based routing — each folder in `app/` becomes a URL route) |
| `--src-dir` | Puts app code under `src/` so the root stays clean for config files |
| `--import-alias "@/*"` | Lets you write `import X from "@/lib/utils"` instead of `"../../../lib/utils"` |
| `--use-npm` | Uses npm as the package manager (vs yarn or pnpm) |

> **Note:** npm requires lowercase package names. If your folder has capital letters, either use a lowercase name or create in a temp folder and move the files.

**What gets created:**

| File/Folder | Purpose |
|---|---|
| `src/app/` | Your pages, layouts, and styles |
| `public/` | Static files served as-is (images, PDFs, favicon) |
| `package.json` | Dependencies and scripts (`npm run dev`, `npm run build`) |
| `tsconfig.json` | TypeScript compiler settings |
| `next.config.ts` | Next.js configuration |
| `postcss.config.mjs` | PostCSS pipeline (Tailwind plugs in here) |
| `eslint.config.mjs` | Linting rules |
| `node_modules/` | Installed packages (never edit, never commit — .gitignore handles this) |

### Step 2: Install Additional Dependencies

These are common packages useful for almost any website. Pick what you need:

**Recommended for most sites:**
```bash
npm install next-themes lucide-react clsx tailwind-merge
```

| Package | Why | When to skip |
|---------|-----|--------------|
| `next-themes` | Dark/light mode toggle. Handles the tricky SSR hydration problem (server doesn't know your theme preference, so without this you'd get a flash of the wrong theme on load) | If you don't want a theme toggle |
| `lucide-react` | Icon library. Tree-shakeable — only the icons you import get bundled, not all 1000+ | If you'll use a different icon set or no icons |
| `clsx` | Conditionally join CSS classnames: `clsx("bg-white", isActive && "bg-blue-500")` | Almost never — this is useful on any project |
| `tailwind-merge` | Resolves conflicting Tailwind classes: `bg-white` + `bg-blue-500` → keeps only `bg-blue-500` | If you don't pass dynamic classnames to components |

**Other common packages depending on your site type:**

| Package | Use case |
|---------|----------|
| `framer-motion` | Scroll animations, page transitions, micro-interactions |
| `@mdx-js/mdx` + `next-mdx-remote` | Blog posts or docs written in Markdown with embedded React components |
| `zustand` or `jotai` | Lightweight state management (if React's useState/useContext isn't enough) |
| `react-hook-form` + `zod` | Complex forms with validation (contact forms, signup flows) |

### Step 3: Create the Directory Structure

```bash
mkdir -p src/components/layout src/components/sections src/components/ui src/data src/lib src/types src/hooks public/images
```

**What each folder is for:**

```
src/
├── app/              ← Pages and layouts (Next.js routes live here)
├── components/
│   ├── layout/       ← Persistent UI that wraps pages: Navbar, Footer, Sidebar
│   ├── sections/     ← Major content blocks (e.g., Hero, Pricing, Features, About)
│   └── ui/           ← Small reusable pieces: buttons, badges, cards, modals
├── data/             ← Your content as typed TypeScript objects (alternative: use a CMS)
├── hooks/            ← Custom React hooks
├── lib/              ← Utility functions
└── types/            ← TypeScript interface definitions
public/
├── images/           ← Photos, logos, Open Graph preview images
└── favicon.ico       ← Browser tab icon
```

**Adapt this structure to your site type:**
- **Portfolio**: `sections/` = Hero, About, Projects, Experience, Skills, Contact
- **Blog**: Add `src/content/` for MDX posts; `sections/` might just be a post list
- **SaaS landing page**: `sections/` = Hero, Features, Pricing, Testimonials, CTA, FAQ
- **Documentation site**: Replace `sections/` with `docs/` pages; consider a sidebar layout

> **Principle:** The folder structure is a suggestion, not a rule. The key idea is separating *layout* (persistent wrappers), *sections/pages* (main content), *ui* (reusable small components), and *data* (content separate from presentation).

**Verify it works:**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) — you should see the Next.js welcome page. Press `Ctrl+C` to stop the server.

---

## Phase 2: Foundation (Styles, Layout, Types)

This phase sets up the visual foundation — colors, fonts, dark mode, utility functions, and data types — before you build any actual sections.

### Step 4: Set Up Global Styles (`src/app/globals.css`)

Replace the generated `globals.css` with your color scheme. This file is the one CSS file that applies to your entire site.

**Key concept — CSS Custom Properties (variables):**
```css
--background: #ffffff;          /* Define a variable */
background: var(--background);  /* Use it */
```
Dark mode works by swapping variable values. Every component using `var(--background)` automatically updates — one change, entire site switches.

**Important:** We use **class-based dark mode** (a `.dark` class on `<html>`) rather than the default `prefers-color-scheme` media query. This is what lets users toggle the theme with a button.

```css
/* src/app/globals.css */

@import "tailwindcss";

/* Light mode (default) */
:root {
  --background: #ffffff;
  --foreground: #111827;
  --muted: #6b7280;
  --border: #e5e7eb;
  --card: #f9fafb;
  --primary: #2563eb;
  --primary-foreground: #ffffff;
}

/* Dark mode — activated by class="dark" on <html> */
.dark {
  --background: #030712;
  --foreground: #f9fafb;
  --muted: #9ca3af;
  --border: #1f2937;
  --card: #111827;
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
}

/* Register custom colors with Tailwind so you can use bg-background, text-muted, etc. */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-border: var(--border);
  --color-card: var(--card);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --font-sans: var(--font-inter);  /* Change to your font variable */
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-inter), system-ui, sans-serif;
}

/* Smooth scrolling for anchor links. Respects "reduce motion" OS settings. */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
```

**Customize for your site:**
- Change the color hex values to match your brand/preference
- Add more variables as needed (e.g., `--accent`, `--destructive` for error states)
- The `@theme inline` block is Tailwind v4 specific — it registers your variables as usable Tailwind utility classes
- Use `#030712` for dark background (not pure `#000000`, which is harsh on eyes)

### Step 5: Set Up Fonts and Root Layout (`src/app/layout.tsx`)

`layout.tsx` wraps every page on your site. It's where you configure fonts, metadata (SEO), and providers (like dark mode).

**Why `next/font/google`?** Normally, Google Fonts means an extra network request that slows your page. `next/font` downloads the font at build time and self-hosts it — zero external requests, no layout shift.

**Why `ThemeProvider`?** It's a React Context provider from `next-themes` that reads saved theme preference from `localStorage`, applies the `.dark` class, and provides a `useTheme()` hook for the toggle button.

```tsx
/* src/app/layout.tsx */

import type { Metadata } from "next";
import { Inter } from "next/font/google";   // Swap Inter for any Google Font
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",  // Show fallback font immediately, swap when loaded
});

export const metadata: Metadata = {
  title: "Your Site Title",
  description: "A short description for search engines and social shares.",
  keywords: ["keyword1", "keyword2"],
  authors: [{ name: "Your Name" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Key details:**
- **`suppressHydrationWarning`** on `<html>` is needed because `next-themes` adds the `dark` class on the client side, causing a harmless mismatch with the server-rendered HTML
- **`defaultTheme="system"`** — first-time visitors get their OS preference; after toggling, the choice is saved to `localStorage`
- **`antialiased`** — Tailwind class that smooths font rendering on screens
- **To use a different font:** replace `Inter` with any font from `next/font/google` (e.g., `Poppins`, `Roboto`, `Playfair_Display`). Update the variable name to match.

### Step 6: Create the `cn()` Utility (`src/lib/utils.ts`)

A small but essential helper used in almost every component:

```ts
/* src/lib/utils.ts */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx (conditional classnames) with tailwind-merge (conflict resolution).
 *
 * Examples:
 *   cn("px-4", isActive && "bg-blue-500")       → "px-4 bg-blue-500" (if active)
 *   cn("bg-red-500", "bg-blue-500")              → "bg-blue-500" (conflict resolved)
 *   cn("base-styles", props.className)            → parent can override styles
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Why this matters:** When you build reusable components (Button, Card, etc.), parents often need to override styles via `className`. Without `tailwind-merge`, conflicting classes like `bg-red-500` and `bg-blue-500` both end up in the string, and which wins depends on unpredictable CSS source order.

### Step 7: Define TypeScript Types (`src/types/index.ts`)

Interfaces define the "shape" of your data. They ensure:
1. You can't misspell field names
2. Your editor autocompletes as you type
3. Changing a field name shows every place that needs updating

**Define types that match your site's content.** Here are common patterns:

```ts
/* src/types/index.ts */

// Portfolio example
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;       // "?" = optional field
  featured?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;         // Use "Present" for current positions
  bullets: string[];
  technologies?: string[];
}

// Blog example — you'd define these instead/additionally
// export interface BlogPost {
//   title: string;
//   slug: string;
//   date: string;
//   summary: string;
//   tags: string[];
//   content: string;       // or MDX source
// }

// SaaS example
// export interface Feature {
//   title: string;
//   description: string;
//   icon: string;
// }
// export interface PricingTier {
//   name: string;
//   price: number;
//   features: string[];
//   recommended?: boolean;
// }
```

**Adapt to your site:** Only define the types you actually need. The examples above show portfolio, blog, and SaaS patterns — pick what applies.

**Verify the build:**
```bash
npm run build
```
You should see "Compiled successfully" with no errors. This confirms TypeScript, Tailwind, and Next.js are all configured correctly.

---

## Phase 3: Data Layer

### Step 8: Create Content Data Files

This is the key architectural decision: **separate content from presentation.** Your data lives in TypeScript files as typed arrays/objects. Components import the data and render it. Benefits:

- Update your resume bullets without touching component code
- TypeScript catches typos and missing fields instantly
- Adding a new item (project, job, etc.) = adding an object to an array — the UI auto-expands

Create one file per content type in `src/data/`. Each file imports its type from `src/types/` and exports a typed array or object.

**Pattern — every data file looks like this:**
```ts
/* src/data/[content-type].ts */

import type { YourType } from "@/types";

export const items: YourType[] = [
  {
    title: "First Item",
    description: "Details here...",
    // ... fields matching your interface
  },
  {
    title: "Second Item",
    // ...
  },
];
```

**What to put in each file depends on your site type:**

| Site Type | Data Files You'd Create |
|-----------|------------------------|
| **Portfolio** | `profile.ts` (bio, links), `experience.ts` (jobs), `projects.ts`, `skills.ts`, `research.ts` |
| **Blog** | `posts.ts` or individual MDX files in `src/content/`, `categories.ts` |
| **SaaS Landing** | `features.ts`, `pricing.ts`, `testimonials.ts`, `faq.ts` |
| **Documentation** | `navigation.ts` (sidebar structure), content in MDX files |

**Tips for writing good data files:**

1. **Order matters** — arrays render in order. Put your most impressive/recent items first.
2. **Use `featured` or `highlighted` booleans** to flag key items the component can visually emphasize.
3. **Keep text concise** — website text should be scannable. Save the long-form details for your resume PDF.
4. **Use arrays for multi-paragraph text** — `bio: ["Paragraph 1", "Paragraph 2"]` is easier to manage than one giant string with `\n`.
5. **Human-readable labels** — use "Data Structures & Algorithms" not "CMSC351". Visitors won't know your course codes.

**Portfolio example — profile data:**
```ts
/* src/data/profile.ts */
import type { Education, SocialLink } from "@/types";

export const profile = {
  name: "Your Name",
  title: "Your Title or Specialty",
  subtitle: "Your University or Company",
  email: "you@example.com",
  bio: [
    "First paragraph about who you are.",
    "Second paragraph about what you do.",
  ],
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/you", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/you", icon: "Linkedin" },
  { name: "Email", url: "mailto:you@example.com", icon: "Mail" },
];
```

**SaaS example — features data:**
```ts
/* src/data/features.ts */
export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "Lightning Fast",
    description: "Built on edge infrastructure for sub-100ms responses.",
    icon: "Zap",
  },
  // ...
];
```

**Verify after creating all data files:**
```bash
npm run build
```
If TypeScript finds any mismatch between your types and your data (missing field, wrong type, typo), the build will fail with a helpful error message pointing to the exact line.

---

## Phase 4: Layout Components (Navbar, Footer)

Layout components wrap your page content and persist across all pages. They live in `src/components/layout/`.

### Step 9: ThemeToggle (`src/components/ui/ThemeToggle.tsx`)

Build this first because the Navbar uses it.

**Key concept — `"use client"`:** In Next.js App Router, components are **server components** by default (render on the server, ship zero JS). Anything interactive (clicks, state, effects) needs `"use client"` to tell Next.js it must run in the browser.

**Key concept — hydration mismatch:** The server doesn't know if the user prefers dark or light mode (that's in the browser's `localStorage`). If we render the icon immediately, we'd get a flash of the wrong one. Solution: render a same-sized placeholder until the client mounts.

```tsx
/* src/components/ui/ThemeToggle.tsx */
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => { setMounted(true); }, []);

  // Same-size placeholder prevents layout shift
  if (!mounted) return <div className="h-9 w-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 transition-colors hover:bg-foreground/10"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
```

**Notes:**
- `aria-label` is required on icon-only buttons for screen reader accessibility
- `hover:bg-foreground/10` = 10% opacity of the foreground color — a subtle hover that works in both themes

### Step 10: Navbar (`src/components/layout/Navbar.tsx`)

The Navbar handles:
- **Sticky positioning** — stays at the top as you scroll
- **Backdrop blur** — frosted-glass effect when scrolled
- **Active section highlighting** — uses `IntersectionObserver` to track which section is in view
- **Responsive design** — horizontal links on desktop, hamburger menu on mobile

**Key concepts:**
- `useState` — React's way to track changing values (is the menu open? which section is active?)
- `useEffect` — Runs code after render (setting up scroll/intersection listeners)
- `IntersectionObserver` — Browser API that tells you when elements enter/leave the viewport
- `{ passive: true }` on scroll listeners — tells the browser this handler won't block scrolling, improving performance

```tsx
/* src/components/layout/Navbar.tsx */
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

// Each entry maps to a section's id attribute on the page.
// To add a section: add it here AND create a section component with a matching id.
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  // ... add your sections
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for background styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is in view for active link highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Trigger when section midpoint is in center
    );
    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.replace("#", ""));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled
        ? "border-b border-border bg-background/80 backdrop-blur-md shadow-sm"
        : "bg-transparent"
    )}>
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="text-lg font-semibold">YourInitials</a>

        {/* Desktop links — hidden below md breakpoint */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              activeSection === href.replace("#", "") ? "text-primary" : "text-muted hover:text-foreground"
            )}>{label}</a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile hamburger — shown below md breakpoint */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 hover:bg-foreground/10"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-muted hover:text-foreground">
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
```

**Responsive pattern:** `hidden md:flex` means "hidden by default (mobile), visible as flex above 768px". This is Tailwind's mobile-first approach — write mobile styles first, override for larger screens.

### Step 11: Footer (`src/components/layout/Footer.tsx`)

The simplest layout component. No `"use client"` needed — it's a server component (zero JS shipped).

**Important: brand icons.** Libraries like `lucide-react` don't include brand logos (GitHub, LinkedIn, Twitter) due to trademark licensing. Use inline SVGs for these. The SVGs should use `fill="currentColor"` so they inherit text color and adapt to light/dark mode automatically.

```tsx
/* src/components/layout/Footer.tsx */
import { Mail } from "lucide-react";

// Brand icons as inline SVGs (lucide-react doesn't include brand logos)
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387..." />
    </svg>
  );
}
// Get full SVG paths from https://simpleicons.org

// Map string names (from data files) to React components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: GithubIcon,
  Mail,
};
```

**The icon mapping pattern** bridges your data layer (stores icon names as strings) with React (needs components to render). This keeps data files free of React imports.

### Wire Layout into Root Layout

Add Navbar and Footer to `src/app/layout.tsx` so they appear on every page:

```tsx
/* In src/app/layout.tsx — inside ThemeProvider: */
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <Navbar />
  <main className="flex-1">{children}</main>
  <Footer />
</ThemeProvider>
```

**Critical:** Add `flex flex-col` to `<body>` and `flex-1` to `<main>`. This is a flexbox trick that makes the footer stick to the bottom even on short pages:
- `<body>` is a column flex container spanning full screen height (`min-h-screen`)
- `<main>` grows to fill available space (`flex-1`)
- `<Footer>` sits at the bottom naturally — no sticky/fixed positioning needed

**Verify:**
```bash
npm run build
```

---

## Phase 5: Section Components

Now you build the actual content sections. Each section is a React component in `src/components/sections/` that imports its data from `src/data/`.

### Reusable Components First

Before building sections, create reusable UI pieces they'll share.

**SectionHeading** (`src/components/ui/SectionHeading.tsx`) — Consistent heading for every section. Takes a `title` string, renders an `<h2>` with an accent underline. Ensures heading hierarchy is correct for accessibility/SEO.

```tsx
export default function SectionHeading({ title }: { title: string; className?: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
    </div>
  );
}
```

**Card components** (ProjectCard, ExperienceCard, SkillBadge) — Small presentational components that receive a single item via props and render it. Benefits:
- The section component handles layout (grid, stack, timeline)
- The card handles its own internal styling
- Cards are reusable in different layouts without changes

### Building Each Section

**Every section follows this pattern:**
```tsx
<section id="section-name" className="py-16 md:py-24">
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <SectionHeading title="Section Title" />
    {/* Section content */}
  </div>
</section>
```

- `id` attribute = enables navbar anchor linking (`href="#section-name"`)
- `py-16 md:py-24` = vertical padding (4rem mobile, 6rem desktop)
- `max-w-5xl` = constrains content width (64rem). Use `max-w-3xl` for text-heavy sections.
- `px-4 sm:px-6 lg:px-8` = horizontal padding that grows on wider screens

**Section types and their layouts:**

| Section | Layout Pattern | Key Tailwind |
|---------|---------------|--------------|
| **Hero** | Centered, full viewport | `min-h-[calc(100vh-4rem)] text-center` |
| **About** | Narrow text column | `max-w-3xl space-y-4 leading-relaxed` |
| **Education** | Single card with sub-sections | `rounded-xl border bg-card p-6` |
| **Experience** | Vertical stack of cards | `space-y-6` with ExperienceCard children |
| **Projects** | Responsive grid | `grid gap-6 sm:grid-cols-2 lg:grid-cols-3` |
| **Research** | Card(s) with icon header | Similar to Experience but with icon badge |
| **Skills** | Grid of grouped pill badges | `grid sm:grid-cols-2 lg:grid-cols-3` with `flex-wrap` pills |
| **Resume** | Centered CTA | `text-center` with download button |
| **Contact** | Centered with email + social links | `text-center` with icon row |

**Useful Tailwind patterns for sections:**

1. **`space-y-N`** — Adds consistent vertical gaps between children (e.g., `space-y-4` = 1rem between paragraphs)
2. **`flex-wrap gap-2`** — Items flow left-to-right and wrap to next line. Perfect for tag/badge lists.
3. **`mt-auto` in `flex-col`** — Pushes content to the bottom of a card. Keeps card grids aligned when content heights vary.
4. **`bg-primary/10`** — 10% opacity of your primary color. Great for subtle tinted badges.
5. **`uppercase tracking-wider text-sm`** — Label-style text for category headings.

### Assembling the Page

`src/app/page.tsx` is a pure composition component — it imports all sections and renders them in order:

```tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
// ... import all sections

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* ... all sections in desired order */}
    </>
  );
}
```

`<>...</>` is a React Fragment — wraps multiple elements without adding an extra DOM node. The `<main>` wrapper is already in `layout.tsx`.

To rearrange sections, just move the imports. To add a new section, create the component and drop it in.

### Static Files

Place downloadable files (resume PDF, etc.) in the `public/` folder. Next.js serves them at the root URL:
- File at `public/resume.pdf` → accessible at `/resume.pdf`
- File at `public/images/headshot.jpg` → accessible at `/images/headshot.jpg`

### Brand Icons Gotcha

Icon libraries like `lucide-react` typically don't include brand logos (GitHub, LinkedIn, Twitter/X) due to trademark licensing. Solutions:
1. **Inline SVGs** — Get paths from [Simple Icons](https://simpleicons.org), wrap in a React component with `fill="currentColor"` for theme adaptation
2. **`react-icons`** — Alternative library that includes brand icons (heavier bundle)
3. **`@icons-pack/react-simple-icons`** — Dedicated brand icon package

**Verify:**
```bash
npm run build
```
Should compile all sections with zero errors.

---

## Phase 6: Polish (SEO, Accessibility)

### Step 23: SEO Setup

SEO (Search Engine Optimization) makes your site discoverable in search results. Three files to add:

**1. `src/app/robots.ts`** — Tells crawlers which pages to index:
```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://yourdomain.com/sitemap.xml",  // Update with your domain
  };
}
```
Next.js automatically serves this as `/robots.txt`.

**2. `src/app/sitemap.ts`** — Lists all URLs for crawlers:
```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yourdomain.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add more pages here if you have /blog, /projects/[slug], etc.
  ];
}
```

**3. Open Graph + JSON-LD in `layout.tsx`:**

Add Open Graph meta tags to your `metadata` export for social sharing previews:
```ts
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
  openGraph: {
    title: "Your Title",
    description: "Your description",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Title",
    description: "Your description",
  },
};
```

Add JSON-LD structured data (machine-readable info for Google rich results):
```ts
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",           // Or "Organization", "Product", etc.
  name: "Your Name",
  jobTitle: "Your Title",
  url: "https://yourdomain.com",
  sameAs: ["https://github.com/you", "https://linkedin.com/in/you"],
};
```

Inject it into `<head>`:
```tsx
<head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
</head>
```

**Schema types for different sites:**
- Portfolio/personal: `"@type": "Person"`
- Business/SaaS: `"@type": "Organization"` or `"@type": "SoftwareApplication"`
- Blog: `"@type": "Blog"` with `"@type": "BlogPosting"` for each post
- E-commerce: `"@type": "Product"` with pricing and review data

### Step 24: Accessibility

**Skip-to-content link** — essential for keyboard and screen reader users. Add it at the top of `<body>`, before the Navbar:

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
>
  Skip to content
</a>
```

And add `id="main-content"` to your `<main>` tag.

**How `sr-only` + `focus:not-sr-only` works:**
- `sr-only` hides the element visually but keeps it in the accessibility tree
- `focus:not-sr-only` makes it visible when the user Tabs to it
- Mouse users never see it; keyboard users see it immediately

**Accessibility checklist for any site:**
- [ ] Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- [ ] Single `<h1>` per page, proper `<h2>`→`<h3>` hierarchy
- [ ] `aria-label` on all icon-only buttons and links
- [ ] `alt` text on all images
- [ ] Sufficient color contrast (4.5:1 for text — check at [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/))
- [ ] Focus-visible outlines on interactive elements
- [ ] Skip-to-content link
- [ ] `lang="en"` on `<html>` tag
- [ ] `target="_blank"` links have `rel="noopener noreferrer"`

**Verify the build:**
```bash
npm run build
```
You should see `/robots.txt` and `/sitemap.xml` in the routes list.

---

*More phases will be added as we continue building.*
