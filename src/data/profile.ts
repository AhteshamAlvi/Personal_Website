import type { Education, SocialLink } from "@/types";

/*
  Profile data — your identity, bio, links, and education.
  Multiple sections pull from this file:
    - Hero uses name, title, and socialLinks
    - About uses bio
    - Education section uses the education object
*/

export const profile = {
  name: "Ahtesham Alvi",
  title: "Computer Science & Finance",
  subtitle: "University of Maryland, College Park",
  email: "ahtesham.alvi20@gmail.com",

  // The bio is an array of paragraphs — each string becomes a <p> tag.
  // This makes it easy to add/remove paragraphs without dealing with formatting.
  bio: [
    "I'm a senior at the University of Maryland, College Park, pursuing a dual degree in Computer Science through the Honors College and Finance through the Robert H. Smith School of Business, with minors in Data Science and Robotics & Autonomous Systems.",
    "My work spans computational biology, machine learning, robotics, and systems programming. Most recently I've been designing de novo protein binders for IBD therapeutics on GPU clusters, and shipping production Salesforce solutions as a software developer intern at fusionSpan.",
    "I'm drawn to problems where the honest answer is the interesting one — my protein research turned into a paper about why a widely trusted confidence score misses something it structurally cannot see.",
    "Outside of academics, I enjoy reading and writing. I believe clear communication is just as important as clean code.",
  ],
};

export const education: Education = {
  institution: "University of Maryland, College Park",
  degrees: [
    "B.S. Computer Science (Honors College)",
    "B.S. Finance (Robert H. Smith School of Business)",
  ],
  minors: ["Data Science", "Robotics and Autonomous Systems"],
  gpa: 3.441,
  honors: [
    "University Honors College (2023 — Present)",
    "Semester Academic Honors — Fall 2023, Spring 2024, Fall 2024",
    "FIRE Program Completion — Bio-Inspired Robotics stream (2024)",
  ],
  relevantCoursework: [
    "Software Engineering (CMSC435)",
    "Advanced Data Structures (CMSC420)",
    "Machine Learning (CMSC422)",
    "Algorithm Design & Analysis (CMSC451)",
    "Computer Networks (CMSC417)",
    "Data Science (CMSC320)",
    "Honors Research Seminar (CMSC396H)",
    "Independent Undergraduate Research (CMSC499A)",
    "Robotics Programming (ENAE450)",
    "Introduction to Robotics (ENME480)",
    "Robotics Project Laboratory (ENEE467)",
    "Advanced Financial Management (BMGT440)",
    "Quantitative Financial Analysis (BMGT347)",
    "Investments (BMGT343)",
    "Business Finance (BMGT340)",
    "Money and Banking (ECON330)",
    "Strategic Management (BMGT495)",
    "Differential Equations (MATH246)",
  ],
  graduationDate: "May 2027",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/AhteshamAlvi",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ahtesham-alvi",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:ahtesham.alvi20@gmail.com",
    icon: "Mail",
  },
];
