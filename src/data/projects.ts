import type { Project } from "@/types";

/*
  Projects — ordered by impact/impressiveness, not just chronology.
  The "featured" flag lets the component highlight certain projects
  (e.g., larger cards, shown first, different styling).

  Each project maps directly to a GitHub repo.
*/

export const projects: Project[] = [
  {
    title: "Exoplanet Habitability Classification",
    description:
      "Neural and embedding-based ML models that predict exoplanet habitability using NASA and JPL datasets. Features custom neural networks for similarity-based classification, projecting NASA catalog entries into a learned habitability space.",
    technologies: ["Python", "PyTorch", "Pandas", "NASA Exoplanet Archive"],
    githubUrl:
      "https://github.com/AhteshamAlvi/Exoplanet-Habitability-Classification-ML-Model",
    featured: true,
  },
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
    title: "Flapping Winged Glider",
    description:
      "Bio-inspired articulated flapping-wing robotic glider (RoboRaptor) with servo actuation, onboard sensing, and telemetry. Engineered Arduino firmware for flapping control and ~30 Hz data logging.",
    technologies: ["Arduino", "C++", "CAD", "Sensor Integration"],
    githubUrl: "https://github.com/AhteshamAlvi/Flapping_Winged_Glider",
  },
];
