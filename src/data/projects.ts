import type { Project } from "@/types";

/*
  Projects — ordered by impact/impressiveness, not just chronology.
  The "featured" flag lets the component highlight certain projects
  (e.g., larger cards, shown first, different styling).

  Each project maps directly to a GitHub repo.
  Skills focus on technical concepts, not programming languages.
  Language/tool icons use the skill-icons light set from Iconify.
*/

export const projects: Project[] = [
  {
    title: "QuantumGuard",
    description:
      "Full-stack demo staging a live three-party man-in-the-middle attack: an Origin, a Target, and an Intruder join the same session and every packet routes through the Intruder. In classical mode they silently copy the AES key; in quantum mode BB84 exposes them. Implements BB84 in Qiskit Aer over 256 qubits, derives AES-128-GCM keys, and rejects any exchange above 11% QBER.",
    skills: ["Quantum Key Distribution", "Real-Time Systems", "Cryptography", "Full-Stack"],
    languages: [
      { name: "TypeScript", iconify: "skill-icons:typescript" },
      { name: "React", iconify: "skill-icons:react-light" },
      { name: "FastAPI", iconify: "skill-icons:fastapi" },
      { name: "Qiskit", localIcon: "/images/icons/qiskit.svg" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/QuantumGuard",
    liveUrl: "https://quantum-guard-eight.vercel.app/",
    featured: true,
    ratings: { complexity: 5, impact: 4, innovation: 5 },
  },
  {
    title: "Robotic Arm Manipulator Control",
    description:
      "End-to-end ROS2 robotic manipulation pipeline integrating ArUco vision, perspective calibration, inverse kinematics, and autonomous pick-and-place. Includes homography-based coordinate transformation and vacuum gripper control.",
    skills: ["ROS2", "Computer Vision", "Inverse Kinematics", "Motion Planning"],
    languages: [
      { name: "Python", iconify: "skill-icons:python-light" },
      { name: "ROS", iconify: "skill-icons:ros-light" },
      { name: "OpenCV", iconify: "skill-icons:opencv-light" },
      { name: "Docker", iconify: "skill-icons:docker" },
    ],
    githubUrl:
      "https://github.com/AhteshamAlvi/Robotics-Arm-Manipulator-Control",
    featured: true,
    ratings: { complexity: 5, impact: 4, innovation: 4 },
  },
  {
    title: "Mini C Compiler",
    description:
      "Multi-pass compiler for a C-like language, implemented twice from scratch — once in Rust, once in OCaml — featuring constant folding/propagation, algebraic simplification, dead-branch elimination, static type checking, and Hindley-Milner style type inference with constraint generation and unification.",
    skills: ["Compiler Design", "Type Theory", "Optimization Passes"],
    languages: [
      { name: "OCaml", iconify: "skill-icons:ocaml" },
      { name: "Rust", iconify: "skill-icons:rust" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/mini_C_compiler",
    featured: true,
    ratings: { complexity: 5, impact: 3, innovation: 4 },
  },
  {
    title: "Quantum Computing Projects",
    description:
      "Bell-state preparation and a CHSH inequality test executed on both Aer simulators and real IBM Quantum backends, observing hardware-measured violation of the classical bound. Also includes parameterized circuits for quantum machine-learning classification experiments.",
    skills: ["Quantum Circuits", "CHSH / Bell States", "Quantum ML", "IBM Quantum"],
    languages: [
      { name: "Python", iconify: "skill-icons:python-light" },
      { name: "Qiskit", localIcon: "/images/icons/qiskit.svg" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/Quantum_Projects",
    ratings: { complexity: 4, impact: 3, innovation: 5 },
  },
  {
    title: "Education Inequality ML Project",
    description:
      "Analyzed a 400-student socioeconomic dataset with chi-square, ANOVA, and Spearman hypothesis tests to identify predictors of cumulative college GPA, then trained Linear Regression and Random Forest models through a scikit-learn ColumnTransformer/Pipeline workflow for reproducible preprocessing and comparison. Published as an interactive results page.",
    skills: ["Machine Learning", "Statistical Analysis", "Data Visualization"],
    languages: [
      { name: "Python", iconify: "skill-icons:python-light" },
      { name: "Scikit-learn", iconify: "skill-icons:scikitlearn-light" },
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
      { name: "Linux", iconify: "skill-icons:linux-light" },
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
      { name: "Java", iconify: "skill-icons:java-light" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/Java_TankGame",
    ratings: { complexity: 3, impact: 2, innovation: 3 },
  },
  {
    title: "Runesmaker",
    description:
      "Generates a unique 3D rune for any word by translating it into 125 languages, deriving a 3D vector from the shape of each written form, smoothing those into a continuous vector field, tracing streamlines through it, and rendering the result as a tube-swept mesh in a custom Vulkan viewer. Fully deterministic — the same word always produces the same rune.",
    skills: ["Vulkan / GLSL", "Procedural Generation", "Vector Fields", "Mesh Generation"],
    languages: [
      { name: "Python", iconify: "skill-icons:python-light" },
      { name: "C++", iconify: "skill-icons:cpp" },
      { name: "Vulkan", iconify: "simple-icons:vulkan" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/Runesmaker",
    featured: true,
    ratings: { complexity: 5, impact: 2, innovation: 5 },
  },
  {
    title: "dnd_worlds — Tabletop Rules Engine",
    description:
      "A modular TypeScript engine for tabletop combat, character progression, equipment, and aura resource management, with deterministic turn and reaction state machines driving every encounter. Backed by regression coverage across 160+ Vitest test files.",
    skills: ["Rules Engine", "State Machines", "Combat Systems", "Type-Level Safety"],
    languages: [
      { name: "TypeScript", iconify: "skill-icons:typescript" },
      { name: "React", iconify: "skill-icons:react-light" },
      { name: "Vite", iconify: "skill-icons:vite-light" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/dnd_worlds",
    featured: true,
    ratings: { complexity: 5, impact: 3, innovation: 4 },
  },
  {
    title: "LeetCode Solutions",
    description:
      "Collection of LeetCode problem solutions auto-synced from my LeetCode account via glsync. Covers array manipulation, number theory, SQL queries, and algorithmic challenges across multiple difficulty levels.",
    skills: ["Algorithms", "Data Structures", "Problem Solving"],
    languages: [
      { name: "Python", iconify: "skill-icons:python-light" },
      { name: "Java", iconify: "skill-icons:java-light" },
      { name: "MySQL", iconify: "skill-icons:mysql-light" },
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
      { name: "Python", iconify: "skill-icons:python-light" },
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
      { name: "Python", iconify: "skill-icons:python-light" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/BasicChatbot",
    ratings: { complexity: 1, impact: 1, innovation: 2 },
  },
];
