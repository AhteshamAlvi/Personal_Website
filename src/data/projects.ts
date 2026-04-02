import type { Project } from "@/types";

/*
  Projects — ordered by impact/impressiveness, not just chronology.
  The "featured" flag lets the component highlight certain projects
  (e.g., larger cards, shown first, different styling).

  Each project maps directly to a GitHub repo.
*/

export const projects: Project[] = [
  {
    title: "Robotic Arm Manipulator Control",
    description:
      "End-to-end ROS2 robotic manipulation pipeline integrating ArUco vision, perspective calibration, inverse kinematics, and autonomous pick-and-place. Includes homography-based coordinate transformation and vacuum gripper control.",
    technologies: ["ROS2", "Python", "Computer Vision", "Inverse Kinematics"],
    githubUrl:
      "https://github.com/AhteshamAlvi/Robotics-Arm-Manipulator-Control",
    featured: true,
  },
  {
    title: "Mini C Compiler",
    description:
      "Multi-pass compiler in OCaml featuring constant folding/propagation, algebraic simplification, dead-branch elimination, static type checking, and Hindley-Milner style type inference with constraint generation and unification.",
    technologies: ["OCaml", "Compiler Design", "Type Theory"],
    githubUrl: "https://github.com/AhteshamAlvi/mini_C_compiler",
    featured: true,
  },
  {
    title: "Quantum Computing Projects",
    description:
      "Quantum circuit implementations in Qiskit including Grover's search, Shor's factoring algorithm, and parameterized circuits for Quantum ML classification experiments on IBM Quantum hardware.",
    technologies: ["Qiskit", "Python", "IBM Quantum", "Quantum ML"],
    githubUrl: "https://github.com/AhteshamAlvi/Quantum_Projects",
  },
  {
    title: "Education Inequality ML Project",
    description:
      "Analyzed a 400-student socioeconomic dataset using statistical tests (chi-square, ANOVA, Spearman) and trained Linear Regression and Random Forest models to predict college GPA. Includes interactive visualizations.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Data Visualization"],
    githubUrl:
      "https://github.com/AhteshamAlvi/Education_Inequality_MLproject",
  },
  {
    title: "AST-Based Unix Shell",
    description:
      "Unix-style shell in C using a lexer and recursive-descent parser to build an AST with correct operator precedence. Supports pipes, sequencing, logical operators, subshells, I/O redirection, and built-ins.",
    technologies: ["C", "Systems Programming", "Parsing", "Unix"],
    githubUrl: "https://github.com/AhteshamAlvi/Mini_Unix_Shell",
  },
  {
    title: "Java Tank Game",
    description:
      "Two-player competitive tank game built in pure Java. Players control tanks with keyboard inputs to move, rotate, and shoot across a procedurally generated obstacle field. First to 5 hits wins.",
    technologies: ["Java", "Game Development", "OOP"],
    githubUrl: "https://github.com/AhteshamAlvi/Java_TankGame",
  },
  {
    title: "LeetCode Solutions",
    description:
      "Collection of LeetCode problem solutions auto-synced from my LeetCode account via glsync. Covers array manipulation, number theory, SQL queries, and algorithmic challenges across multiple difficulty levels.",
    technologies: ["Python", "Java", "SQL", "Algorithms"],
    githubUrl: "https://github.com/AhteshamAlvi/Leetcode_Solutions",
  },
  {
    title: "Algorithm Implementations",
    description:
      "Practice implementations of algorithms across multiple languages — dynamic programming, sorting, searching, and more. Built as a learning resource for algorithm design and cross-language proficiency.",
    technologies: ["Rust", "Python", "OCaml", "Dynamic Programming"],
    githubUrl: "https://github.com/AhteshamAlvi/Algorithm-Implementation",
  },
  {
    title: "Basic Chatbot",
    description:
      "Beginner chatbot in Python using a pattern-matching and template-based approach. Features separate prompt and response directories for modular conversation design.",
    technologies: ["Python", "NLP", "Chatbot Design"],
    githubUrl: "https://github.com/AhteshamAlvi/BasicChatbot",
  },
];
