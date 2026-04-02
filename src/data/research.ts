import type { Research } from "@/types";

/*
  Research experience — separate from projects because research
  implies mentorship, methodology, and institutional context.
  If you publish papers later, add a "publicationUrl" field.
*/

export const research: Research[] = [
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
