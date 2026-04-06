import type { Project } from "@/types";

/*
  Projects — ordered by impact/impressiveness, not just chronology.
  The "featured" flag lets the component highlight certain projects
  (e.g., larger cards, shown first, different styling).

  Each project maps directly to a GitHub repo.
  Skills focus on technical concepts, not programming languages.

  Language icons use the skill-icons set from Iconify.
  - Icons with dark/light variants use iconifyLight (shown in light mode)
    and iconifyDark (shown in dark mode).
  - Icons without variants use a single iconify field.
  - Local SVGs use localIcon for custom icons (e.g., Qiskit).
*/

export const projects: Project[] = [
  {
    title: "Robotic Arm Manipulator Control",
    description:
      "End-to-end ROS2 robotic manipulation pipeline integrating ArUco vision, perspective calibration, inverse kinematics, and autonomous pick-and-place. Includes homography-based coordinate transformation and vacuum gripper control.",
    skills: ["ROS2", "Computer Vision", "Inverse Kinematics", "Motion Planning"],
    languages: [
      { name: "Python", iconifyLight: "skill-icons:python-dark", iconifyDark: "skill-icons:python-light" },
    ],
    githubUrl:
      "https://github.com/AhteshamAlvi/Robotics-Arm-Manipulator-Control",
    featured: true,
    ratings: { complexity: 5, impact: 4, innovation: 4 },
  },
  {
    title: "Mini C Compiler",
    description:
      "Multi-pass compiler in OCaml featuring constant folding/propagation, algebraic simplification, dead-branch elimination, static type checking, and Hindley-Milner style type inference with constraint generation and unification.",
    skills: ["Compiler Design", "Type Theory", "Optimization Passes"],
    languages: [
      { name: "OCaml", iconify: "skill-icons:ocaml" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/mini_C_compiler",
    featured: true,
    ratings: { complexity: 5, impact: 3, innovation: 4 },
  },
  {
    title: "Quantum Computing Projects",
    description:
      "Quantum circuit implementations in Qiskit including Grover's search, Shor's factoring algorithm, and parameterized circuits for Quantum ML classification experiments on IBM Quantum hardware.",
    skills: ["Quantum Circuits", "Quantum ML", "Quantum Computing", "IBM Quantum"],
    languages: [
      { name: "Python", iconifyLight: "skill-icons:python-dark", iconifyDark: "skill-icons:python-light" },
      { name: "Qiskit", localIcon: "/images/icons/qiskit.svg" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/Quantum_Projects",
    ratings: { complexity: 4, impact: 3, innovation: 5 },
  },
  {
    title: "Education Inequality ML Project",
    description:
      "Analyzed a 400-student socioeconomic dataset using statistical tests (chi-square, ANOVA, Spearman) and trained Linear Regression and Random Forest models to predict college GPA. Includes interactive visualizations.",
    skills: ["Machine Learning", "Statistical Analysis", "Data Visualization"],
    languages: [
      { name: "Python", iconifyLight: "skill-icons:python-dark", iconifyDark: "skill-icons:python-light" },
    ],
    githubUrl:
      "https://github.com/AhteshamAlvi/Education_Inequality_MLproject",
    ratings: { complexity: 3, impact: 4, innovation: 3 },
  },
  {
    title: "AST-Based Unix Shell",
    description:
      "Unix-style shell in C using a lexer and recursive-descent parser to build an AST with correct operator precedence. Supports pipes, sequencing, logical operators, subshells, I/O redirection, and built-ins.",
    skills: ["Systems Programming", "Parsing", "Unix", "AST Construction"],
    languages: [
      { name: "C", iconify: "skill-icons:c" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/Mini_Unix_Shell",
    ratings: { complexity: 4, impact: 3, innovation: 3 },
  },
  {
    title: "Java Tank Game",
    description:
      "Two-player competitive tank game built in pure Java. Players control tanks with keyboard inputs to move, rotate, and shoot across a procedurally generated obstacle field. First to 5 hits wins.",
    skills: ["Game Development", "OOP", "Collision Detection"],
    languages: [
      { name: "Java", iconifyLight: "skill-icons:java-dark", iconifyDark: "skill-icons:java-light" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/Java_TankGame",
    ratings: { complexity: 3, impact: 2, innovation: 3 },
  },
  {
    title: "LeetCode Solutions",
    description:
      "Collection of LeetCode problem solutions auto-synced from my LeetCode account via glsync. Covers array manipulation, number theory, SQL queries, and algorithmic challenges across multiple difficulty levels.",
    skills: ["Algorithms", "Data Structures", "Problem Solving"],
    languages: [
      { name: "Python", iconifyLight: "skill-icons:python-dark", iconifyDark: "skill-icons:python-light" },
      { name: "Java", iconifyLight: "skill-icons:java-dark", iconifyDark: "skill-icons:java-light" },
      { name: "MySQL", iconifyLight: "skill-icons:mysql-dark", iconifyDark: "skill-icons:mysql-light" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/Leetcode_Solutions",
    ratings: { complexity: 2, impact: 2, innovation: 1 },
  },
  {
    title: "Algorithm Implementations",
    description:
      "Practice implementations of algorithms across multiple languages — dynamic programming, sorting, searching, and more. Built as a learning resource for algorithm design and cross-language proficiency.",
    skills: ["Dynamic Programming", "Algorithm Design", "Cross-Language Proficiency"],
    languages: [
      { name: "Rust", iconify: "skill-icons:rust" },
      { name: "Python", iconifyLight: "skill-icons:python-dark", iconifyDark: "skill-icons:python-light" },
      { name: "OCaml", iconify: "skill-icons:ocaml" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/Algorithm-Implementation",
    ratings: { complexity: 2, impact: 2, innovation: 2 },
  },
  {
    title: "Basic Chatbot",
    description:
      "Beginner chatbot in Python using a pattern-matching and template-based approach. Features separate prompt and response directories for modular conversation design.",
    skills: ["NLP", "Pattern Matching", "Modular Design"],
    languages: [
      { name: "Python", iconifyLight: "skill-icons:python-dark", iconifyDark: "skill-icons:python-light" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/BasicChatbot",
    ratings: { complexity: 1, impact: 1, innovation: 2 },
  },
];
