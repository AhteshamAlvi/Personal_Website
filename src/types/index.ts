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

export interface Project {
  title: string;
  description: string;
  technologies: string[];
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

export interface Research {
  title: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
  technologies?: string[];
  githubUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Name of the lucide-react icon to use
}
