import type { SkillCategory } from "@/types";

/*
  Skills grouped by category for visual organization.
  The component renders each category as a labeled group with
  pill badges for individual skills.

  Group by domain/purpose, not by proficiency level — visitors
  care more about WHAT you can do than your self-assessed rating.
*/

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "Java", "C/C++", "Rust", "OCaml", "JavaScript", "SQL"],
  },
  {
    name: "ML & Data Science",
    skills: [
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "Data Analysis",
      "Tableau",
      "R",
    ],
  },
  {
    name: "Web & Frameworks",
    skills: ["React", "Next.js", "HTML/CSS", "OpenAI API", "MCP"],
  },
  {
    name: "Robotics & Hardware",
    skills: ["ROS2 (Humble)", "Gazebo", "Arduino", "Qiskit"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git/GitHub", "Linux", "Azure", "Microsoft Office", "Excel"],
  },
  {
    name: "Professional",
    skills: [
      "Scrum/Agile",
      "Team Collaboration",
      "Mentorship",
      "Technical Writing",
    ],
  },
];

/*
  Certifications — separate from skills because they have
  additional context (completion status, issuing body).
*/
export const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    status: "In Progress",
    expectedCompletion: "March 2026",
  },
  {
    name: "Professional Scrum Master I & II (PSM I & II)",
    status: "In Progress",
    expectedCompletion: "March 2026",
  },
];
