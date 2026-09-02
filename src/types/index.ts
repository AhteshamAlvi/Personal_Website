/*
  TypeScript interfaces define the shape of your data.
  Every data file and component that uses this data imports from here.
  If you rename a field, TypeScript will flag every place that needs updating.
*/

export interface ProjectRatings {
  complexity: number;  // 1–5: technical depth of the implementation
  impact: number;      // 1–5: usefulness or real-world significance
  innovation: number;  // 1–5: creativity and uniqueness of approach
}

export interface LanguageIcon {
  name: string;              // Display name (e.g., "Python")
  iconify?: string;          // Iconify icon ID (e.g., "skill-icons:python-light")
  localIcon?: string;        // Path to local icon in public/ (e.g., "/images/icons/qiskit.svg")
}

export interface Project {
  title: string;
  description: string;
  skills: string[];
  languages: LanguageIcon[];
  githubUrl: string;
  liveUrl?: string; // "?" means optional — not every project has a live demo
  featured?: boolean;
  ratings: ProjectRatings;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string; // Use "Present" for current positions
  bullets: string[];
  technologies?: string[];
  icons?: LanguageIcon[];
}

export interface Education {
  institution: string;
  degrees: string[];
  minors: string[];
  gpa: number;
  honors: string[];
  relevantCoursework: string[];
  graduationDate: string;
}

export interface SkillCategory {
  name: string; // e.g., "Languages", "Frameworks & Libraries", "Tools"
  skills: string[];
}

export interface Paper {
  title: string;
  venue?: string;        // e.g., "IEEE BIBM 2026" — omit for unsubmitted work
  status: string;        // e.g., "Under review", "Preprint", "Course paper"
  authorship: string;    // e.g., "Sole author", "First author of 5"
  url?: string;          // Path to the PDF in public/ — omit if not publicly shareable
  slidesUrl?: string;    // Optional companion slide deck
}

export interface Presentation {
  title: string;
  venue: string;      // e.g., "The FIRE Summit, Stamp Student Union, UMD"
  date: string;
  authorship: string; // e.g., "First author"
}

export interface Research {
  title: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
  technologies?: string[];
  icons?: LanguageIcon[];
  githubUrl?: string;
  papers?: Paper[];
  presentations?: Presentation[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Name of the lucide-react icon to use
}
