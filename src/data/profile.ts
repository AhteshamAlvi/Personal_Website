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
    "I'm a junior at the University of Maryland, College Park, pursuing a dual degree in Computer Science through the Honors College and Finance through the Robert H. Smith School of Business, with minors in Data Science and Robotics & Autonomous Systems.",
    "My work spans machine learning, quantum computing, robotics, and systems programming. I'm driven by the intersection of computation and real-world impact.",
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
  gpa: 3.475,
  honors: [
    "Honors College",
    "Semester Academic Honors (multiple semesters)",
    "FIRE: First-Year Innovation & Research Experience — Completed",
  ],
  relevantCoursework: [
    "Data Structures & Algorithms",
    "Design & Analysis of Computer Algorithms",
    "Organization of Programming Languages",
    "Introduction to Computer Systems",
    "Introduction to Data Science",
    "Introduction to Robotics",
    "Computer Networks",
    "Machine Learning",
    "Applied Probability & Statistics",
    "Differential Equations",
    "Linear Algebra",
    "Business Finance",
    "Strategic Management",
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
