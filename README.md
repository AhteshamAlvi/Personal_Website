# Ahtesham Alvi — Personal Website

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **next-themes** (dark/light mode)
- **lucide-react** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/           Page, layout, global styles, SEO
├── components/
│   ├── layout/    Navbar, Footer
│   ├── sections/  Hero, About, Education, Experience, Projects, Research, Skills, Resume, Contact
│   └── ui/        ThemeToggle, SectionHeading, ProjectCard, ExperienceCard, SkillBadge, Icons
├── data/          Content (profile, experience, projects, skills, research)
├── lib/           Utilities
└── types/         TypeScript interfaces
```

## Updating Content

Edit the files in `src/data/` — no component changes needed.

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` auto-deploys.
