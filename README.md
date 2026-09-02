# Ahtesham Alvi — Personal Website

Personal portfolio site built with Next.js, TypeScript, and Tailwind CSS. Single page,
statically rendered, with all content driven by typed data files rather than markup.

Live at [ahteshamalvi.com](https://ahteshamalvi.com).

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **next-themes** (dark/light mode)
- **lucide-react** (UI icons) + [Iconify](https://icon-sets.iconify.design) (language/tool logos)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Project Structure

```
src/
├── app/           Page, layout, global styles, SEO metadata, JSON-LD, sitemap, robots
├── components/
│   ├── layout/    Navbar, Footer
│   ├── sections/  Hero, About, Education, Experience, Projects, Research, Skills, Resume, Contact
│   └── ui/        ProjectCard, ExperienceCard, LanguageIcon, SectionHeading, SkillBadge,
│                  ThemeToggle, Icons
├── data/          Content: profile, experience, projects, research, skills
├── lib/           Utilities (cn — clsx + tailwind-merge)
└── types/         TypeScript interfaces for every data shape

public/
├── resume.pdf     One-page resume (linked from Hero and Resume sections)
├── cv.pdf         Full CV
├── papers/        Research papers and slide decks
└── images/        Headshot, local icon SVGs
```

## Updating Content

Edit the files in `src/data/` — the section components read from them, so no component
changes are needed for ordinary updates. Every shape is defined in `src/types/index.ts`,
so a renamed or missing field fails at `tsc`, not silently at runtime.

| File | Drives |
| --- | --- |
| `profile.ts` | Name, bio, education, GPA, coursework, social links |
| `experience.ts` | Work history (most recent first) |
| `research.ts` | Research entries, papers, conference presentations |
| `projects.ts` | Project cards, ordered by impact rather than chronology |
| `skills.ts` | Skill groups |

### Adding a paper

Papers live on a research entry's optional `papers` array:

```ts
papers: [
  {
    title: "Evaluating the Temporal Robustness of Twitter Bot Detection Models",
    venue: "Course research paper, CMSC396H",   // optional
    status: "2026",
    authorship: "A. Alvi, M. Morton, ... — first author",
    url: "/papers/social-bot-detection.pdf",     // optional
    slidesUrl: "/papers/cmsc396h-slides.pdf",    // optional
  },
],
```

**`url` is optional on purpose.** A paper with no `url` still renders its title, venue,
status, and authorship — it just isn't linked. That way work that can't be shared yet
(under review, in preparation, embargoed) can be credited without exposing the PDF.
Drop the `url` line to unpublish a PDF while keeping the citation.

Paper titles and authorship strings should mirror the formal citations in `public/cv.pdf`
— that document is the source of truth when the two disagree.

Conference presentations work the same way via an entry's `presentations` array.

### Adding a PDF

Put it in `public/papers/` and reference it as `/papers/<name>.pdf`. LaTeX output with
figures is often several MB; compress before committing:

```bash
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.5 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -dDetectDuplicateImages=true -dColorImageResolution=200 -dGrayImageResolution=200 -sOutputFile=out.pdf in.pdf
```

That typically cuts a figure-heavy paper roughly 10x while keeping text and tables sharp.

### Icons

Language and tool icons resolve through Iconify by ID (`skill-icons:python-light`,
`logos:salesforce`, `simple-icons:anthropic`). Browse IDs at
[icon-sets.iconify.design](https://icon-sets.iconify.design). To verify one resolves:

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://api.iconify.design/skill-icons/python-light.svg
```

For anything Iconify doesn't carry, drop an SVG in `public/images/icons/` and use
`localIcon` instead of `iconify` on the `LanguageIcon`.

### Adding a section

Add the component under `src/components/sections/`, render it in `src/app/page.tsx`, and
add a matching entry to `navLinks` in `src/components/layout/Navbar.tsx`. The navbar's
IntersectionObserver highlights the active link by section `id`, so the `id` must match
the nav `href`.

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` auto-deploys.
