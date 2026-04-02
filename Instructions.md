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

*More phases will be added as we continue building.*
