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
    skills: [
      "Python", "TypeScript", "JavaScript", "Java", "C/C++", "Rust",
      "OCaml", "SQL", "SOQL", "Apex", "Bash", "GLSL", "LaTeX",
    ],
  },
  {
    name: "Computational Biology",
    skills: [
      "RFdiffusion", "ProteinMPNN", "BindCraft", "AlphaFold2-Multimer",
      "ColabFold", "Boltz-2", "Rosetta", "ipSAE", "PyMOL", "BioPython",
      "SLURM/HPC",
    ],
  },
  {
    name: "ML & Data",
    skills: [
      "PyTorch", "Scikit-learn", "XGBoost", "imbalanced-learn", "Pandas",
      "NumPy", "SciPy", "NetworkX", "node2vec", "DuckDB", "astroquery",
      "Tableau",
    ],
  },
  {
    name: "Robotics & Quantum",
    skills: [
      "ROS2 (Humble)", "Gazebo", "OpenCV", "Arduino", "Qiskit",
      "IBM Quantum hardware",
    ],
  },
  {
    name: "Web & Frameworks",
    skills: [
      "React", "Next.js", "Tailwind CSS", "Vite", "Node.js", "FastAPI",
      "REST APIs", "WebSockets", "Vercel", "Render",
    ],
  },
  {
    name: "Systems & Tooling",
    skills: [
      "Linux", "Docker", "Jenkins (CI)", "PMD", "Git/GitHub", "Vitest",
      "pytest", "Vulkan", "Azure",
    ],
  },
  {
    name: "Platforms & AI Tooling",
    skills: [
      "Salesforce", "Jira", "Confluence", "Workday", "Claude Agent SDK",
      "Claude Skills", "MCP", "OpenAI API", "Excel",
    ],
  },
  {
    name: "Professional",
    skills: [
      "Scrum/Agile", "Team Collaboration", "Mentorship", "Technical Writing",
    ],
  },
];
