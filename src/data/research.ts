import type { Research } from "@/types";

/*
  Research experience — separate from projects because research
  implies mentorship, methodology, and institutional context.
  Technologies focus on conceptual/technical skills, not programming languages.
  Icons show languages/tools via Iconify skill-icons.

  Authorship and paper titles here mirror the formal citations in the CV
  (see public/cv.pdf) — keep them in sync when the CV changes.
*/

export const research: Research[] = [
  {
    title: "De Novo Protein Binder Design for IBD Therapeutics (IL-23)",
    organization:
      "University of Maryland — Independent Undergraduate Research (CMSC499A), advised by Prof. Fardina Alam",
    role: "Undergraduate Researcher",
    period: "March 2026 — Present",
    description:
      "Part of a two-student team designing de novo miniprotein binders against the IL-23R-binding face of the IL-23 p19 subunit (PDB 3DUH) — a target no prior de novo work had addressed, since existing miniprotein efforts aim at the IL-23 receptor rather than the cytokine itself.",
    bullets: [
      "Built the project's computational scaffold and co-designed its first pipeline arm — a 9-stage RFdiffusion to ProteinMPNN to ColabFold workflow on SLURM HPC — then ran and analyzed the resulting screen, which produced no reliable binder across 972 designs (best ipSAE 0.30, none above the 0.60 reliable-interface threshold).",
      "Diagnosed the pessimistic single-sequence ColabFold signal from that screen as a scoring artifact rather than evidence of unfoldable designs: a roughly 56-point binder-pLDDT under-rating relative to AlphaFold initial-guess on identical backbones.",
      "The second pipeline arm, led by the primary author, applied interface-optimized hallucination (BindCraft) under the same scoring path — 42 of 50 designs above the 0.60 threshold, including five all-alpha-helical leads of 72-104 residues with Rosetta interface energies of -57 to -87 REU.",
      "First-authored a follow-on study superposing all 50 accepted designs into the experimental IL-23:IL-23R assembly: all 50 overlap the IL-23R-bound region, but 45 also clash with the obligate p40 subunit (0 to more than 3,500 atom pairs).",
      "Showed that constraint is tracked by none of nine interface-confidence metrics, corroborated by an independent sequence-only Boltz-2 analysis (Spearman rho = -0.60) — establishing assembly compatibility as a validation step distinct from interface confidence.",
    ],
    technologies: [
      "RFdiffusion",
      "ProteinMPNN",
      "AlphaFold2-Multimer",
      "BindCraft",
      "Boltz-2",
      "Rosetta",
      "ipSAE",
      "SLURM / HPC",
    ],
    icons: [
      { name: "Python", iconify: "skill-icons:python-light" },
      { name: "Linux", iconify: "skill-icons:linux-light" },
    ],
    papers: [
      {
        title:
          "De Novo Design of Miniprotein Candidate Neutralizers Targeting the IL-23 Cytokine Subunit p19: A Rigorously Scored Pipeline Comparison",
        venue: "IEEE BIBM 2026",
        status: "Under review",
        authorship: "R. Paladugu, F. Alam, A. Alvi",
        url: "/papers/ibd-il23-p19-pipeline-comparison.pdf",
      },
      {
        title:
          "What Interface Confidence Cannot See: Assembly-Level Steric Validation of De Novo IL-23 p19 Binder Designs",
        status: "Manuscript in preparation",
        authorship: "A. Alvi, F. Alam — first author",
        url: "/papers/ibd-assembly-steric-validation.pdf",
      },
    ],
  },
  {
    title: "Temporal Robustness of Social Bot Detection",
    organization:
      "University of Maryland — Honors Research Seminar (CMSC396H)",
    role: "Undergraduate Researcher",
    period: "April 2026 — May 2026",
    description:
      "Tested whether bot detection classifiers trained on historical Twitter/X data still work on modern bots, by training every model family on every era and measuring what happens when the eras do not match.",
    bullets: [
      "Engineered account, behavioral, graph (PageRank, reciprocity, ego density), and node2vec features over four Twitter/X bot benchmarks — Cresci-2015, Cresci-2017, TwiBot-20, and TwiBot-22 — spanning 2015-2022 with up to 1M users and 88M tweets, normalized into a shared schema in DuckDB, NetworkX, and pandas.",
      "Trained six supervised classifiers (logistic regression, ridge, lasso, linear SVM, random forest, XGBoost) across all 16 train/test dataset pairs under a per-pair feature contract, yielding a 4x4 cross-era transfer matrix per classifier.",
      "Found every classifier attains near-perfect in-distribution AUC — up to 0.9955 — yet falls below 0.60 mean AUC across datasets, and that model family governs transfer behavior more than algorithm choice: the four linear models behave near-identically while the two tree-based models follow a distinct pattern.",
      "Attributed the generalization gap to dataset construction, labeling, and class balance alongside bot evolution, since models trained on newer data sometimes transferred worse to older data — indicating single-benchmark accuracy overstates real-world reliability.",
    ],
    technologies: [
      "Graph Features (node2vec, PageRank)",
      "Temporal Distribution Shift",
      "Model Evaluation",
      "DuckDB",
      "XGBoost",
    ],
    icons: [
      { name: "Python", iconify: "skill-icons:python-light" },
      { name: "Scikit-learn", iconify: "skill-icons:scikitlearn-light" },
      { name: "Pandas", iconify: "devicon:pandas" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/Twibot_Detection_Research",
    papers: [
      {
        title:
          "Evaluating the Temporal Robustness of Twitter Bot Detection Models",
        venue: "Course research paper, CMSC396H",
        status: "2026",
        authorship:
          "A. Alvi, M. Morton, D. Scott, Y. Senthilkumar, T. Tang — first author",
        url: "/papers/social-bot-detection.pdf",
        slidesUrl: "/papers/cmsc396h-slides.pdf",
      },
    ],
  },
  {
    title: "Exoplanet Habitability Classification",
    organization: "University of Maryland, College Park",
    role: "Independent Research",
    period: "January 2026 — June 2026",
    description:
      "Consolidated four astronomical catalogs into a single feature-rich dataset and trained a semi-supervised model to assign habitability classes to confirmed exoplanets that had none.",
    bullets: [
      "Merged the NASA Exoplanet Archive, the Habitable Exoplanets Catalog, ESA Gaia DR3, and SIMBAD into one dataset, maximizing both feature count and sample size.",
      "Trained a semi-supervised three-class model (non-habitable / mesoplanet / psychroplanet) on roughly 5,600 labeled planets, then predicted a habitability class for roughly 600 unlabeled confirmed exoplanets.",
      "Handled severe class imbalance with imbalanced-learn resampling and gradient-boosted ensembles.",
    ],
    technologies: [
      "Semi-Supervised Learning",
      "Class Imbalance",
      "Feature Engineering",
      "astroquery",
      "XGBoost",
    ],
    icons: [
      { name: "Python", iconify: "skill-icons:python-light" },
      { name: "Scikit-learn", iconify: "skill-icons:scikitlearn-light" },
    ],
    githubUrl:
      "https://github.com/AhteshamAlvi/Exoplanet-Habitability-Classification-ML-Model",
  },
  {
    title: "RoboRaptor — Articulated-Wing Gliding Robot",
    organization:
      "FIRE Research Internship (FIRE199), University of Maryland — advised by Dr. Lena Johnson",
    role: "Undergraduate Research Intern",
    period: "May 2024 — July 2024",
    description:
      "Led a three-person team building a bird-inspired tethered gliding robot with articulating flapping wings, instrumented to characterize wind and atmospheric effects on flapping and gliding flight.",
    bullets: [
      "Advanced the design across four prototypes benchmarked against house sparrow, peregrine falcon, and golden eagle wing geometry, raising the model's aspect ratio from 2.92 to 6.24.",
      "Replaced wooden dowel spars with carbon fiber and aluminum after in-flight structural failures.",
      "Wrote Arduino firmware for servo wing-torque control and SD-card flight telemetry, integrating an onboard wind sensor on a 3D-printed electronics plate.",
      "Achieved sustained flight in winds above 7 mph with in-flight wing actuation and directional control.",
    ],
    technologies: [
      "Firmware Engineering",
      "CAD / 3D Printing",
      "Telemetry",
      "Aeroelastics",
    ],
    icons: [
      { name: "Arduino", iconify: "skill-icons:arduino" },
      { name: "C++", iconify: "skill-icons:cpp" },
      { name: "AutoCAD", iconify: "skill-icons:autocad-light" },
    ],
    githubUrl: "https://github.com/AhteshamAlvi/Flapping_Winged_Glider",
    papers: [
      {
        title: "RoboRaptor: Final Project Report",
        venue: "Course research report, FIRE199",
        status: "2024",
        authorship: "A. Alvi, P. Sethy, S. Jayanthi — first author",
        url: "/papers/roboraptor-final-report.pdf",
      },
    ],
    presentations: [
      {
        title: "RoboRaptor: Articulated Wing Glider",
        venue:
          "Summer Undergraduate Research Conference (SURC) — Grand Ballroom, Stamp Student Union, University of Maryland",
        date: "July 19, 2024",
        authorship: "A. Alvi, P. Sethy, S. Jayanthi, L. Johnson — first author",
        url: "/papers/roboraptor-poster.pdf",
      },
    ],
  },
  {
    title: "SeaTerp — Bioinspired Turtle Robot for Chesapeake Bay Monitoring",
    organization:
      "FIRE Bio-Inspired Robotics (FIRE298), University of Maryland — advised by Dr. Lena Johnson",
    role: "Undergraduate Researcher",
    period: "August 2024 — December 2024",
    description:
      "Co-developed a tethered, sea-turtle-inspired underwater robot to survey dissolved-oxygen levels in the Chesapeake Bay dead zone, where nutrient runoff drives algal blooms that strip oxygen from the water column.",
    bullets: [
      "Built the locomotion and sensing stack on an Arduino Uno driving six DC motors through two Adafruit FeatherWing controllers — crankshaft-actuated flippers, twin rear propellers, and a two-motor buoyancy bladder — instrumented with a dissolved-solids sensor and an onboard camera.",
      "Iterated the hull across successive CAD and 3D-printed revisions, moving from a rounded profile to a flatter ballast form for hydrodynamic stability.",
      "Validated subsystems over 20 bench trials spanning buoyancy control, dissolved-solids sensing at three water qualities, crankshaft actuation, and differential propulsion.",
      "The robot achieved 360-degree maneuvering and sampled water quality successfully, with an underwater trial ending early on hull ingress.",
    ],
    technologies: [
      "CAD / 3D Printing",
      "Sensor Integration",
      "Underwater Robotics",
      "Motor Control",
    ],
    icons: [
      { name: "Arduino", iconify: "skill-icons:arduino" },
      { name: "C++", iconify: "skill-icons:cpp" },
      { name: "Autodesk", iconify: "simple-icons:autodesk" },
    ],
    papers: [
      {
        title:
          "Exploring the Use of Bioinspired Robots in Treating the Chesapeake Bay Dead Zone",
        venue: "Course conference paper, FIRE298",
        status: "2024",
        authorship:
          "A. Srivatsa, T. Zhang, A. Alvi, G. Khawaja, L. Johnson",
        url: "/papers/seaterp-conference-paper.pdf",
      },
    ],
    presentations: [
      {
        title: "Sea Terp",
        venue:
          "The FIRE Summit — Colony Ballroom & Charles Carroll Room, Stamp Student Union, University of Maryland",
        date: "December 2024",
        authorship: "A. Alvi, G. Khawaja, A. Srivatsa, T. Zhang — first author",
        url: "/papers/seaterp-poster.pdf",
      },
    ],
  },
];
