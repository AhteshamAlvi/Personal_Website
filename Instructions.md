# How to Build a Website from Scratch

A complete guide to building modern websites with Next.js, React, TypeScript, and Tailwind CSS. Covers everything from simple static sites to complex multi-page applications with APIs, authentication, and databases. Every command is copy-paste ready.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Phase 1: Scaffold](#phase-1-scaffold-the-project)
3. [Phase 2: Foundation](#phase-2-foundation-styles-layout-types)
4. [Phase 3: Data Layer](#phase-3-data-layer)
5. [Phase 4: Layout Components](#phase-4-layout-components)
6. [Phase 5: Pages & Sections](#phase-5-pages--sections)
7. [Phase 6: Multi-Page Routing](#phase-6-multi-page-routing)
8. [Phase 7: API Routes & Server Actions](#phase-7-api-routes--server-actions)
9. [Phase 8: Forms & Validation](#phase-8-forms--validation)
10. [Phase 9: Database Integration](#phase-9-database-integration)
11. [Phase 10: Authentication](#phase-10-authentication)
12. [Phase 11: State Management](#phase-11-state-management)
13. [Phase 12: Animations & Transitions](#phase-12-animations--transitions)
14. [Phase 13: SEO & Accessibility](#phase-13-seo--accessibility)
15. [Phase 14: Testing](#phase-14-testing)
16. [Phase 15: Deployment](#phase-15-deployment)
17. [Quick Reference](#quick-reference)

---

## Prerequisites

- **Node.js** (v18+): [https://nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js)
- **Git**: [https://git-scm.com](https://git-scm.com)
- A code editor (VS Code recommended)
- A Vercel account linked to your GitHub

```bash
node --version    # Should be v18+
npm --version     # Should be v9+
git --version
```

---

## Phase 1: Scaffold the Project

### Step 1: Initialize a Next.js Project

Next.js is a React framework that handles routing, server-side rendering, and production builds.

```bash
npx create-next-app@latest my-site --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
cd my-site
```

Replace `my-site` with your project name (must be lowercase, hyphens only — no spaces or capitals).

**What each flag does:**

| Flag | Purpose |
|------|---------|
| `--typescript` | Type-safe code — catches bugs at compile time, not runtime |
| `--tailwind` | Utility-first CSS (`className="flex"` instead of separate CSS files) |
| `--eslint` | Linter that catches common JS/React mistakes |
| `--app` | App Router — folder-based routing where each folder in `app/` becomes a URL |
| `--src-dir` | Keeps app code under `src/` so root stays clean for configs |
| `--import-alias "@/*"` | Write `import X from "@/lib/utils"` instead of `"../../../lib/utils"` |
| `--use-npm` | Use npm as package manager |

**What gets created:**

| File/Folder | Purpose |
|---|---|
| `src/app/` | Pages, layouts, and styles |
| `public/` | Static files served as-is (images, PDFs, favicon) |
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript settings |
| `next.config.ts` | Next.js configuration |
| `node_modules/` | Installed packages (never edit, never commit) |

### Step 2: Install Dependencies

Pick packages based on what your site needs:

**Core (recommended for most sites):**
```bash
npm install next-themes lucide-react clsx tailwind-merge
```

| Package | Purpose |
|---------|---------|
| `next-themes` | Dark/light mode toggle with SSR hydration handling |
| `lucide-react` | Tree-shakeable icon library (1000+ icons, only imports what you use) |
| `clsx` | Conditionally join CSS classnames: `clsx("bg-white", isActive && "bg-blue-500")` |
| `tailwind-merge` | Resolves conflicting Tailwind classes so parent overrides work |

**Extended (add as needed):**

| Package | Use Case |
|---------|----------|
| `framer-motion` | Scroll animations, page transitions, micro-interactions |
| `@mdx-js/mdx` + `next-mdx-remote` | Markdown with embedded React (blogs, docs) |
| `zustand` or `jotai` | Lightweight global state management |
| `react-hook-form` + `zod` | Complex forms with schema validation |
| `prisma` or `drizzle-orm` | Database ORM (type-safe queries) |
| `next-auth` (Auth.js) | Authentication (OAuth, credentials, magic links) |
| `@tanstack/react-query` | Server state, caching, background refetching |
| `sharp` | Image optimization (Next.js uses this under the hood) |
| `resend` or `nodemailer` | Send transactional emails |
| `stripe` | Payments and subscriptions |
| `uploadthing` or `@vercel/blob` | File uploads |
| `socket.io` or `pusher` | Real-time features (chat, notifications) |

### Step 3: Create Directory Structure

```bash
mkdir -p src/components/layout src/components/sections src/components/ui src/data src/lib src/types src/hooks public/images
```

```
src/
├── app/              ← Pages and layouts (Next.js routes)
├── components/
│   ├── layout/       ← Persistent wrappers: Navbar, Footer, Sidebar
│   ├── sections/     ← Major content blocks (Hero, Features, Pricing, etc.)
│   └── ui/           ← Reusable pieces: buttons, badges, cards, modals, inputs
├── data/             ← Content as typed TypeScript objects
├── hooks/            ← Custom React hooks
├── lib/              ← Utility functions, API clients, constants
└── types/            ← TypeScript interfaces
public/
├── images/           ← Photos, logos, OG preview images
└── favicon.ico       ← Browser tab icon
```

> **Principle:** Separate *layout* (persistent wrappers), *sections/pages* (main content), *ui* (reusable small components), and *data* (content separate from presentation). This structure scales — add folders as complexity grows.

**Verify:**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) — you should see the Next.js welcome page.

---

## Phase 2: Foundation (Styles, Layout, Types)

### Step 4: Global Styles (`src/app/globals.css`)

Replace the generated file with your color scheme. This is the one CSS file applied to the entire site.

**Key concept — CSS Custom Properties:**
```css
--background: #ffffff;          /* Define */
background: var(--background);  /* Use */
```
Dark mode works by swapping variable values inside a `.dark` class. Every component using `var(--background)` auto-updates.

```css
/* src/app/globals.css */

@import "tailwindcss";

/* Light mode */
:root {
  --background: #ffffff;
  --foreground: #111827;
  --muted: #6b7280;
  --border: #e5e7eb;
  --card: #f9fafb;
  --primary: #2563eb;
  --primary-foreground: #ffffff;
  --destructive: #ef4444;
  --success: #22c55e;
  --warning: #f59e0b;
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
  --destructive: #f87171;
  --success: #4ade80;
  --warning: #fbbf24;
}

/* Register with Tailwind v4 so you can use bg-background, text-muted, etc. */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-border: var(--border);
  --color-card: var(--card);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-destructive: var(--destructive);
  --color-success: var(--success);
  --color-warning: var(--warning);
  --font-sans: var(--font-inter);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-inter), system-ui, sans-serif;
}

/* Smooth anchor scrolling (respects reduced-motion OS setting) */
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}
```

**Customization:**
- Swap hex values for your brand colors
- Add more variables: `--accent`, `--ring` (focus ring color), `--input` (form inputs)
- Use `#030712` (not pure `#000000`) for dark backgrounds — less harsh on eyes
- `@theme inline` is Tailwind v4 syntax that registers CSS variables as utility classes

### Step 5: Root Layout (`src/app/layout.tsx`)

The root layout wraps every page. It sets fonts, metadata, and global providers.

```tsx
/* src/app/layout.tsx */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",    // Show fallback font immediately, swap when loaded
});

export const metadata: Metadata = {
  title: "Site Title",
  description: "Short description for search engines and social shares.",
  keywords: ["keyword1", "keyword2"],
  authors: [{ name: "Your Name" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Key details:**
- **`suppressHydrationWarning`** — needed because `next-themes` adds `dark` class client-side, causing a harmless server/client mismatch
- **`defaultTheme="system"`** — first-time visitors get their OS preference
- **`flex min-h-screen flex-col`** on body + `flex-1` on main = sticky footer without positioning hacks
- **Font swap:** Replace `Inter` with any `next/font/google` font. Update the variable name to match.

### Step 6: `cn()` Utility (`src/lib/utils.ts`)

```ts
/* src/lib/utils.ts */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge classnames with Tailwind conflict resolution.
 * cn("bg-red-500", "bg-blue-500") → "bg-blue-500"
 * cn("px-4", isActive && "bg-blue-500") → conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Use `cn()` in every component that accepts a `className` prop. Without `tailwind-merge`, conflicting classes like `bg-red-500` + `bg-blue-500` both stay in the string, and CSS source order decides the winner unpredictably.

### Step 7: TypeScript Types (`src/types/index.ts`)

Define interfaces for your data. They give you autocomplete, catch typos, and flag missing fields at build time.

```ts
/* src/types/index.ts */

// Define types that match your site's content. Examples:

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Content card (works for projects, features, case studies, etc.)
export interface ContentItem {
  title: string;
  description: string;
  tags?: string[];
  url?: string;
  image?: string;
  featured?: boolean;
}

// Timeline entry (works for experience, education, changelog, etc.)
export interface TimelineEntry {
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

// Grouped list (works for skills, features by category, etc.)
export interface GroupedList {
  category: string;
  items: string[];
}
```

Adapt these to your needs. Only define what you'll actually use.

**Verify:**
```bash
npm run build
```

---

## Phase 3: Data Layer

### Step 8: Content Data Files

**Core principle: separate content from presentation.** Data lives in typed TypeScript files. Components import and render it. This means:
- Update text without touching component code
- TypeScript catches typos and missing fields
- Adding an item = adding an object to an array — the UI auto-expands

**Pattern — every data file follows this shape:**
```ts
/* src/data/[content-type].ts */

import type { YourType } from "@/types";

export const items: YourType[] = [
  {
    title: "First Item",
    description: "Details...",
  },
  // ...
];
```

**Create files for each content type your site needs.** Common patterns:

| Site Type | Data Files |
|-----------|-----------|
| Any site | `navigation.ts` (nav links), `site-config.ts` (name, URL, socials) |
| Landing page | `features.ts`, `pricing.ts`, `testimonials.ts`, `faq.ts` |
| Blog | Individual MDX files or `posts.ts` |
| Documentation | `sidebar.ts` (nav structure), content in MDX |
| E-commerce | `products.ts`, `categories.ts` |
| Dashboard | `menu-items.ts`, `config.ts` |

**Tips:**
1. **Order matters** — arrays render in order. Put important items first.
2. **Use `featured` booleans** to flag key items for visual emphasis.
3. **Keep text scannable** — short descriptions, save details for dedicated pages.
4. **Use arrays for multi-paragraph text** — `["Paragraph 1", "Paragraph 2"]` is cleaner than one string with `\n`.

**Verify:**
```bash
npm run build
```

---

## Phase 4: Layout Components

Layout components persist across pages: Navbar, Footer, Sidebar. They live in `src/components/layout/`.

### Step 9: ThemeToggle (`src/components/ui/ThemeToggle.tsx`)

**Key concept — `"use client"`:** In Next.js App Router, components are server components by default (zero JS shipped). Anything interactive needs the `"use client"` directive.

**Key concept — hydration mismatch:** The server doesn't know the user's theme preference. We render a placeholder until the client mounts.

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

### Step 10: Navbar (`src/components/layout/Navbar.tsx`)

Handles sticky positioning, backdrop blur on scroll, active section highlighting via `IntersectionObserver`, and responsive hamburger menu.

```tsx
/* src/components/layout/Navbar.tsx */
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  // Add your sections here — each href must match a section's id attribute
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
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
        <a href="#" className="text-lg font-semibold">Logo</a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              activeSection === href.replace("#", "")
                ? "text-primary"
                : "text-muted hover:text-foreground"
            )}>{label}</a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 hover:bg-foreground/10"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-muted hover:text-foreground"
            >{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
```

**For multi-page sites**, replace `#section` anchors with page routes (`/about`, `/blog`) and use `usePathname()` from `next/navigation` for active link highlighting instead of `IntersectionObserver`.

### Step 11: Footer (`src/components/layout/Footer.tsx`)

No `"use client"` needed — pure server component, zero JS shipped.

```tsx
/* src/components/layout/Footer.tsx */

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
```

**Brand icons note:** `lucide-react` doesn't include brand logos (GitHub, LinkedIn, Twitter) due to trademark licensing. Create inline SVG components with `fill="currentColor"` so they adapt to themes. Get paths from [Simple Icons](https://simpleicons.org). Alternative: use `react-icons` or `@icons-pack/react-simple-icons`.

### Step 12: Wire Layout into Root Layout

Update `src/app/layout.tsx`:

```tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
  >
    Skip to content
  </a>
  <Navbar />
  <main id="main-content" className="flex-1">{children}</main>
  <Footer />
</ThemeProvider>
```

The `flex-1` on `<main>` + `flex flex-col min-h-screen` on `<body>` makes the footer stick to the bottom on short pages.

**Verify:**
```bash
npm run build
```

---

## Phase 5: Pages & Sections

### Step 13: Reusable UI Components

Build small presentational components before sections:

**SectionHeading** — consistent heading for every section:
```tsx
/* src/components/ui/SectionHeading.tsx */
export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
    </div>
  );
}
```

**Card** — generic content card:
```tsx
/* src/components/ui/Card.tsx */
import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(
      "rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-lg",
      className
    )}>
      {children}
    </div>
  );
}
```

**Badge** — pill-shaped tag:
```tsx
/* src/components/ui/Badge.tsx */
export default function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
      {label}
    </span>
  );
}
```

### Step 14: Building Sections

Every section follows this structure:

```tsx
<section id="section-name" className="py-16 md:py-24">
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <SectionHeading title="Section Title" />
    {/* Content */}
  </div>
</section>
```

- `id` — enables anchor linking (`href="#section-name"`)
- `py-16 md:py-24` — vertical padding (4rem mobile, 6rem desktop)
- `max-w-5xl` — constrains width. Use `max-w-3xl` for text-heavy sections, `max-w-7xl` for wide layouts.

**Common layout patterns:**

| Layout | Tailwind Classes | Good For |
|--------|-----------------|----------|
| Centered hero | `min-h-[calc(100vh-4rem)] flex items-center justify-center text-center` | Landing sections |
| Responsive grid | `grid gap-6 sm:grid-cols-2 lg:grid-cols-3` | Cards, features, products |
| Vertical stack | `space-y-6` | Timeline, FAQ, experience |
| Two-column | `grid gap-8 lg:grid-cols-2` | Text + image, sidebar content |
| Masonry-like | `columns-1 sm:columns-2 lg:columns-3 gap-6` | Gallery, testimonials |
| Pill/tag list | `flex flex-wrap gap-2` | Skills, tags, categories |

**Useful Tailwind patterns:**
- `mt-auto` in `flex-col` — pushes content to the bottom of a flex container (aligns card grids)
- `bg-primary/10` — 10% opacity of primary color (subtle tinted badges)
- `space-y-N` — consistent vertical gaps between children
- `prose` — Tailwind Typography plugin for rich text/markdown content
- `line-clamp-3` — truncate text to 3 lines with ellipsis

### Step 15: Assemble the Page

`src/app/page.tsx` composes all sections:

```tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
// ... all section imports

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* All sections in desired order */}
    </>
  );
}
```

`<>...</>` is a React Fragment — wraps elements without adding a DOM node.

### Static Files

Place downloadable files in `public/`. Next.js serves them at the root URL:
- `public/resume.pdf` → `/resume.pdf`
- `public/images/logo.png` → `/images/logo.png`

**Verify:**
```bash
npm run build
```

---

## Phase 6: Multi-Page Routing

Next.js App Router uses folder-based routing. Each folder inside `src/app/` with a `page.tsx` becomes a route.

### Step 16: Static Routes

```
src/app/
├── page.tsx              → /
├── about/page.tsx        → /about
├── blog/page.tsx         → /blog
├── contact/page.tsx      → /contact
└── pricing/page.tsx      → /pricing
```

Each `page.tsx` is a default export:
```tsx
/* src/app/about/page.tsx */
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="mt-4 text-muted">Content here...</p>
    </div>
  );
}
```

### Step 17: Dynamic Routes

Square brackets create parameterized routes:

```
src/app/blog/[slug]/page.tsx    → /blog/my-first-post, /blog/another-post
src/app/users/[id]/page.tsx     → /users/123, /users/456
```

```tsx
/* src/app/blog/[slug]/page.tsx */

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  // Fetch post data using slug
  return <article>{/* Post content */}</article>;
}

// Optional: pre-generate pages at build time for static sites
export async function generateStaticParams() {
  return [
    { slug: "first-post" },
    { slug: "second-post" },
  ];
}
```

### Step 18: Nested Layouts

Each route can have its own `layout.tsx` that wraps its child pages:

```
src/app/
├── layout.tsx                  ← Root layout (Navbar + Footer)
├── (marketing)/
│   ├── layout.tsx              ← Marketing layout (maybe no sidebar)
│   ├── page.tsx                → /
│   └── pricing/page.tsx        → /pricing
└── dashboard/
    ├── layout.tsx              ← Dashboard layout (sidebar + header)
    ├── page.tsx                → /dashboard
    └── settings/page.tsx       → /dashboard/settings
```

**Route groups** `(parentheses)` organize routes without affecting the URL. `(marketing)` doesn't add `/marketing/` to the path.

```tsx
/* src/app/dashboard/layout.tsx */
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
```

### Step 19: Loading & Error States

```tsx
/* src/app/blog/loading.tsx — shown while page data loads */
export default function Loading() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}

/* src/app/blog/error.tsx — shown when page throws an error */
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="py-24 text-center">
      <h2 className="text-2xl font-bold">Something went wrong</h2>
      <button onClick={reset} className="mt-4 rounded-lg bg-primary px-4 py-2 text-primary-foreground">
        Try again
      </button>
    </div>
  );
}
```

### Step 20: Not Found Page

```tsx
/* src/app/not-found.tsx */
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg text-muted">Page not found.</p>
      <Link href="/" className="mt-6 rounded-lg bg-primary px-6 py-3 text-primary-foreground">
        Go Home
      </Link>
    </div>
  );
}
```

---

## Phase 7: API Routes & Server Actions

### Step 21: API Routes

Create API endpoints at `src/app/api/[route]/route.ts`:

```ts
/* src/app/api/contact/route.ts */
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;

  // Validate
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields required" },
      { status: 400 }
    );
  }

  // Process (send email, save to DB, etc.)
  // await sendEmail({ to: "you@example.com", subject: `From ${name}`, body: message });

  return NextResponse.json({ success: true });
}

export async function GET() {
  // Return data
  return NextResponse.json({ status: "ok" });
}
```

Accessible at `POST /api/contact` and `GET /api/contact`.

### Step 22: Server Actions

Server Actions run on the server but are called directly from client components — no API route needed. Simpler for form submissions and mutations.

```tsx
/* src/app/actions.ts */
"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validate, save to DB, send email, etc.

  return { success: true };
}
```

Use in a component:
```tsx
"use client";
import { submitContactForm } from "@/app/actions";

export default function ContactForm() {
  return (
    <form action={submitContactForm}>
      <input name="name" required />
      <input name="email" type="email" required />
      <textarea name="message" required />
      <button type="submit">Send</button>
    </form>
  );
}
```

---

## Phase 8: Forms & Validation

### Step 23: React Hook Form + Zod

For complex forms, use `react-hook-form` for state management and `zod` for schema validation:

```bash
npm install react-hook-form zod @hookform/resolvers
```

```tsx
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("name")}
          placeholder="Name"
          className="w-full rounded-lg border border-border bg-background px-4 py-2"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>
      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-border bg-background px-4 py-2"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>
      <div>
        <textarea
          {...register("message")}
          placeholder="Message"
          rows={4}
          className="w-full rounded-lg border border-border bg-background px-4 py-2"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-primary px-6 py-2 text-primary-foreground disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
```

**For simple forms** (newsletter signup, search), native HTML validation + a Server Action is enough. Only add `react-hook-form` + `zod` when you have multiple fields, complex validation, or need fine-grained error handling.

---

## Phase 9: Database Integration

### Step 24: Prisma Setup

Prisma is the most popular TypeScript ORM. Type-safe queries, auto-generated client, visual DB browser.

```bash
npm install prisma @prisma/client
npx prisma init
```

This creates `prisma/schema.prisma`. Define your models:

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"    // or "mysql", "sqlite", "mongodb"
  url      = env("DATABASE_URL")
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
}

model User {
  id    String @id @default(cuid())
  email String @unique
  name  String?
  posts Post[]
}
```

```bash
# Create/update database tables from your schema
npx prisma db push

# Generate the TypeScript client
npx prisma generate

# Visual database browser
npx prisma studio
```

**Create a singleton client** (`src/lib/db.ts`):
```ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
```

**Use in server components or API routes:**
```tsx
import { db } from "@/lib/db";

export default async function BlogPage() {
  const posts = await db.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}
```

**Database providers for Vercel:**
- **Vercel Postgres** (`@vercel/postgres`) — managed PostgreSQL, tight integration
- **PlanetScale** — serverless MySQL
- **Supabase** — PostgreSQL + auth + real-time
- **Neon** — serverless PostgreSQL
- **SQLite** (local dev only) — change provider to `"sqlite"`, no server needed

Add `DATABASE_URL` to your `.env` file (never commit this):
```
DATABASE_URL="postgresql://user:password@host:5432/dbname"
```

On Vercel: Settings → Environment Variables → add `DATABASE_URL`.

### Step 25: Alternative — Drizzle ORM

Lighter-weight alternative to Prisma. SQL-like syntax, smaller bundle:

```bash
npm install drizzle-orm postgres
npm install -D drizzle-kit
```

```ts
/* src/lib/schema.ts */
import { pgTable, text, boolean, timestamp } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content"),
  published: boolean("published").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});
```

---

## Phase 10: Authentication

### Step 26: Auth.js (NextAuth)

```bash
npm install next-auth@beta
```

```ts
/* src/auth.ts */
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // Email/password (requires your own verification logic)
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Verify against your database
        return null; // Return user object or null
      },
    }),
  ],
});
```

```ts
/* src/app/api/auth/[...nextauth]/route.ts */
import { handlers } from "@/auth";
export const { GET, POST } = handlers;
```

**Protect pages:**
```tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/login");

  return <div>Welcome, {session.user?.name}</div>;
}
```

**Protect API routes:**
```ts
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  // ... handle authenticated request
}
```

**Middleware** — protect entire route groups:
```ts
/* src/middleware.ts */
export { auth as middleware } from "@/auth";

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
```

---

## Phase 11: State Management

### Step 27: When to Use What

| Approach | Use When |
|----------|----------|
| `useState` | Local component state (toggle, form input, counter) |
| `useContext` | Shared state across a subtree (theme, locale, auth) |
| URL search params | Filterable/sortable lists, paginated content |
| `zustand` | Global client state that many components read/write |
| `@tanstack/react-query` | Server data with caching, refetching, optimistic updates |
| Server components | Data that doesn't change based on user interaction |

### Step 28: Zustand (Global State)

```bash
npm install zustand
```

```ts
/* src/lib/stores/cart-store.ts */
import { create } from "zustand";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  clearCart: () => set({ items: [] }),
  total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
}));
```

Use in any client component:
```tsx
"use client";
import { useCartStore } from "@/lib/stores/cart-store";

export default function CartButton() {
  const items = useCartStore((state) => state.items);
  return <button>Cart ({items.length})</button>;
}
```

### Step 29: URL State for Filters

```tsx
"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function FilterBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams.get("category") || "all";

  function setCategory(category: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", category);
    router.push(`?${params.toString()}`);
  }

  return (
    <div className="flex gap-2">
      {["all", "frontend", "backend", "design"].map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={cn(
            "rounded-full px-4 py-1 text-sm",
            currentCategory === cat ? "bg-primary text-primary-foreground" : "bg-card"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
```

Benefits: shareable URLs, browser back/forward works, SSR-compatible.

---

## Phase 12: Animations & Transitions

### Step 30: CSS Transitions (No Library)

Tailwind includes transition utilities:
```tsx
<div className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
  Hover me
</div>

<div className={cn(
  "transition-all duration-300",
  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
)}>
  Collapsible content
</div>
```

### Step 31: Framer Motion

```bash
npm install framer-motion
```

**Fade-in on scroll:**
```tsx
"use client";
import { motion } from "framer-motion";

export default function FadeInSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
```

**Staggered list animation:**
```tsx
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

<motion.div variants={container} initial="hidden" animate="show">
  {items.map((i) => (
    <motion.div key={i.id} variants={item}>
      {i.name}
    </motion.div>
  ))}
</motion.div>
```

**Page transitions** with `layout.tsx`:
```tsx
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

---

## Phase 13: SEO & Accessibility

### Step 32: SEO Files

**`src/app/robots.ts`:**
```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://yourdomain.com/sitemap.xml",
  };
}
```

**`src/app/sitemap.ts`:**
```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/blog", "/contact"].map((route) => ({
    url: `https://yourdomain.com${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // For dynamic pages, fetch slugs from DB:
  // const posts = await db.post.findMany({ select: { slug: true, updatedAt: true } });
  // const postPages = posts.map(p => ({ url: `https://yourdomain.com/blog/${p.slug}`, ... }));

  return [...staticPages];
}
```

### Step 33: Metadata & Structured Data

**Per-page metadata:**
```tsx
/* src/app/about/page.tsx */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Site Name",
  description: "Learn more about us.",
  openGraph: {
    title: "About | Site Name",
    description: "Learn more about us.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/og-about.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Site Name",
    description: "Learn more about us.",
  },
};
```

**Dynamic metadata for dynamic routes:**
```tsx
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.summary,
  };
}
```

**JSON-LD structured data** (add to layout or individual pages):
```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",          // Or "Person", "Organization", "Product", "Blog", etc.
  name: "Site Name",
  url: "https://yourdomain.com",
};

// In your component's return:
<head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
</head>
```

### Step 34: Accessibility Checklist

- [ ] Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`
- [ ] Single `<h1>` per page, proper `<h2>` → `<h3>` hierarchy
- [ ] `aria-label` on icon-only buttons and links
- [ ] `alt` text on all `<img>` elements
- [ ] Color contrast ≥ 4.5:1 for text ([webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/))
- [ ] Focus-visible outlines on interactive elements (Tailwind's `focus-visible:ring-2`)
- [ ] Skip-to-content link (see Step 12)
- [ ] `lang="en"` on `<html>`
- [ ] `target="_blank"` links have `rel="noopener noreferrer"`
- [ ] Forms have associated `<label>` elements or `aria-label`
- [ ] Error messages are linked to inputs via `aria-describedby`
- [ ] No content conveyed by color alone
- [ ] Keyboard navigation works for all interactive elements

**Verify:**
```bash
npm run build
```
Check that `/robots.txt` and `/sitemap.xml` appear in the routes list.

---

## Phase 14: Testing

### Step 35: Unit & Component Tests

```bash
npm install -D jest @testing-library/react @testing-library/jest-dom @types/jest jest-environment-jsdom ts-jest
```

**`jest.config.ts`:**
```ts
import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterSetup: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;
```

**`jest.setup.ts`:**
```ts
import "@testing-library/jest-dom";
```

**Example test:**
```tsx
/* src/components/ui/__tests__/Badge.test.tsx */
import { render, screen } from "@testing-library/react";
import Badge from "../Badge";

describe("Badge", () => {
  it("renders the label", () => {
    render(<Badge label="TypeScript" />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });
});
```

```bash
npx jest                    # Run all tests
npx jest --watch            # Watch mode
npx jest --coverage         # Coverage report
```

### Step 36: End-to-End Tests (Playwright)

```bash
npm install -D @playwright/test
npx playwright install
```

```ts
/* e2e/home.spec.ts */
import { test, expect } from "@playwright/test";

test("homepage loads and has correct title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Site Name/);
});

test("navigation works", async ({ page }) => {
  await page.goto("/");
  await page.click('a[href="/about"]');
  await expect(page).toHaveURL("/about");
});

test("dark mode toggle works", async ({ page }) => {
  await page.goto("/");
  await page.click('[aria-label*="Switch to"]');
  await expect(page.locator("html")).toHaveClass(/dark/);
});
```

```bash
npx playwright test         # Run all tests
npx playwright test --ui    # Interactive UI mode
```

---

## Phase 15: Deployment

### Step 37: Deploy to Vercel

Push your code to GitHub, then deploy:

**First time (browser):**
1. Go to [vercel.com/new](https://vercel.com/new)
2. Select your repository
3. Vercel auto-detects Next.js — default settings are correct
4. Click **Deploy** (~1-2 minutes)
5. You get a URL like `your-project.vercel.app`

**After first deploy:** Every `git push` to `main` auto-redeploys. Pull request pushes create preview deployments.

**CLI (optional):**
```bash
npm install -g vercel
vercel              # Preview deployment
vercel --prod       # Production deployment
```

**Environment variables:** Vercel dashboard → Settings → Environment Variables. Add `DATABASE_URL`, API keys, auth secrets, etc. Never commit these to git.

**Custom domain:** Vercel dashboard → Settings → Domains. Add your domain, then update your DNS records (Vercel shows you exactly what to set). Free SSL included.

### Step 38: Alternative — GitHub Pages (Static Only)

For static sites only (no API routes, no server components with DB access).

**Configure static export** in `next.config.ts`:
```ts
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // basePath: "/repo-name",  ← if not using a custom domain
};
```

**Add `.github/workflows/deploy.yml`:**
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
      - uses: actions/deploy-pages@v4
```

Enable in repo Settings → Pages → Source: "GitHub Actions".

### Step 39: Post-Deployment Checklist

- [ ] All pages load at production URL
- [ ] Dark/light mode persists between visits
- [ ] All links work (internal and external)
- [ ] Static file downloads work (PDFs, images)
- [ ] Mobile responsive (test on phone or [responsivedesignchecker.com](https://responsivedesignchecker.com))
- [ ] [PageSpeed Insights](https://pagespeed.web.dev) score ≥ 90
- [ ] [Lighthouse](https://developer.chrome.com/docs/lighthouse/) accessibility audit passes
- [ ] Open Graph previews render correctly ([opengraph.xyz](https://opengraph.xyz))
- [ ] Environment variables are set in Vercel dashboard
- [ ] Error pages (404, 500) display correctly

### Ongoing Updates

```bash
# 1. Edit locally
# 2. Verify
npm run dev
npm run build

# 3. Push — Vercel auto-deploys
git add <files>
git commit -m "Description of change"
git push
```

---

## Quick Reference

### Commands
```bash
npm run dev           # Dev server at localhost:3000
npm run build         # Production build (catches all TypeScript errors)
npm run start         # Serve production build locally
npm run lint          # Check for code issues
npx prisma studio     # Visual database browser
npx prisma db push    # Sync schema to database
npx jest              # Run unit tests
npx playwright test   # Run E2E tests
vercel                # Preview deployment
vercel --prod         # Production deployment
```

### Where Things Live
| What | Where |
|------|-------|
| Pages & routes | `src/app/` — folder = route |
| Page content | `src/data/*.ts` |
| Section components | `src/components/sections/*.tsx` |
| Reusable UI | `src/components/ui/*.tsx` |
| Layout wrappers | `src/components/layout/*.tsx` |
| API endpoints | `src/app/api/*/route.ts` |
| Server actions | `src/app/actions.ts` or colocated |
| Global styles | `src/app/globals.css` |
| Types | `src/types/index.ts` |
| Utilities | `src/lib/*.ts` |
| Database schema | `prisma/schema.prisma` |
| Static files | `public/` |
| Environment vars | `.env` (local), Vercel dashboard (production) |

### Adding a New Section (Single-Page Site)
1. Create `src/components/sections/NewSection.tsx`
2. Import and render in `src/app/page.tsx`
3. Add `{ label: "New", href: "#new-section" }` to `navLinks` in Navbar
4. Set `id="new-section"` on the section

### Adding a New Page (Multi-Page Site)
1. Create `src/app/new-page/page.tsx`
2. Auto-available at `/new-page`
3. Add metadata export for SEO
4. Add to `sitemap.ts`
5. Add navigation link in Navbar

### Server vs Client Components
| Feature | Server (default) | Client (`"use client"`) |
|---------|-----------------|------------------------|
| Direct DB access | Yes | No |
| `useState`, `useEffect` | No | Yes |
| Event handlers (onClick) | No | Yes |
| `async/await` in component | Yes | No |
| Ships JS to browser | No | Yes |
| Access cookies/headers | Yes | Via hooks only |

**Rule of thumb:** Keep components as server components. Only add `"use client"` when you need interactivity.
