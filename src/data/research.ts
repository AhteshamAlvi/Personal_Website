import type { Research } from "@/types";

/*
  Research experience — separate from projects because research
  implies mentorship, methodology, and institutional context.
  If you publish papers later, add a "publicationUrl" field.
*/

export const research: Research[] = [
  {
    title: "IBD Miniprotein Binder Design Pipeline",
    organization: "University of Maryland, Department of Computer Science",
    role: "Undergraduate Researcher",
    period: "March 2026 — Present",
    description:
      "Developing a computational pipeline for designing miniprotein binders (5–15 kDa) targeting IL-23 and alpha-4-beta-7 integrin for inflammatory bowel disease (IBD) therapeutics.",
    bullets: [
      "Implemented a 9-stage structure-based protein design pipeline integrating RFdiffusion for de novo backbone generation, ProteinMPNN for inverse folding sequence design, and AlphaFold2-Multimer for structural validation.",
      "Built hotspot identification and pocket extraction modules to map binding epitopes and encode geometric constraints for diffusion-based protein generation.",
      "Developed backbone filtering and binding evaluation stages scoring interface quality via buried surface area, shape complementarity, and binding free energy (ddG).",
      "Engineered multi-objective candidate ranking with diversity filtering to select optimal therapeutic binder candidates.",
    ],
    technologies: [
      "Python",
      "RFdiffusion",
      "ProteinMPNN",
      "AlphaFold2",
      "Computational Biology",
    ],
  },
  {
    title: "Exoplanet Habitability Classification",
    organization: "University of Maryland, College Park",
    role: "Independent Research",
    period: "January 2026 — Present",
    description:
      "Developing neural and embedding-based ML models to predict exoplanet habitability using NASA and JPL datasets, projecting catalog entries into a learned habitability space for similarity-based classification.",
    bullets: [
      "Engineering feature encodings of planetary parameters and training custom neural networks for similarity-based habitability classification.",
      "Identifying candidate habitable exoplanets by projecting NASA catalog entries into a learned habitability embedding space.",
      "Processing and cleaning multi-source astronomical datasets from NASA Exoplanet Archive and JPL for model training and validation.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "Pandas",
      "NASA Exoplanet Archive",
      "Machine Learning",
    ],
    githubUrl:
      "https://github.com/AhteshamAlvi/Exoplanet-Habitability-Classification-ML-Model",
  },
  {
    title: "Bioinspired Robotics — Flapping Winged Glider (RoboRaptor)",
    organization:
      "FIRE: First-Year Innovation & Research Experience, University of Maryland",
    role: "Undergraduate Research Intern",
    period: "May 2024 — July 2024",
    description:
      "Led development of a bio-inspired articulated flapping-wing robotic glider integrating servo actuation, lightweight aeroelastic airframe, onboard sensing, and telemetry for wind–flight interaction research.",
    bullets: [
      "Engineered Arduino Nano firmware unifying flapping control, torque modulation, remote receiver interfacing, sensor acquisition, and ~30 Hz OpenLog SD-card telemetry logging.",
      "Designed and iterated carbon-fiber wing spars and 3D-printed servo mounts to withstand cyclic flapping loads, vibration, and torque stresses.",
      "Built wind and inertial sensing pipeline to record environmental and flight dynamics data for analysis of aeroelastic behavior.",
      "Conducted wind-dependent flight experiments validating stable tethered gliding, servo-driven flapping, and directional control across multiple prototype iterations.",
    ],
    technologies: [
      "Arduino",
      "C++",
      "CAD/3D Printing",
      "Sensor Integration",
      "Telemetry",
    ],
    githubUrl: "https://github.com/AhteshamAlvi/Flapping_Winged_Glider",
  },
];
