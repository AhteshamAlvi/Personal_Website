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

*More phases will be added as we continue building.*
