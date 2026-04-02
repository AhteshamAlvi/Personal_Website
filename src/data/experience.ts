import type { Experience } from "@/types";

/*
  Work experience — ordered most recent first.
  The component renders them in this order, so put your most
  impressive/relevant positions at the top.

  Tips for bullet points:
    - Lead with a strong verb (Developed, Led, Managed, Designed)
    - Include measurable impact where possible (20% increase, 4000 documents)
    - Keep each bullet to 1-2 lines
*/

export const experiences: Experience[] = [
  {
    title: "Software Development Intern",
    company: "Urban Food Alliance",
    location: "Remote",
    startDate: "July 2025",
    endDate: "November 2025",
    bullets: [
      "Developed a Financial Literacy Chatbot using Python and NLP, improving accessibility to financial advice for underserved communities and increasing user engagement by 20%.",
      "Integrated NLP tools to enhance the chatbot's query understanding and response accuracy, refining dialogue quality by 30%.",
      "Applied Scrum methodology and utilized Git/GitHub for development and testing, leading to a 95% decrease in post-release issues.",
      "Developed and optimized software features for a mobile application, assisting in debugging to improve performance and reliability.",
    ],
    technologies: ["Python", "NLP", "Git", "Scrum", "Mobile Development"],
  },
  {
    title: "Budget Reviewer",
    company: "UMD Finance Committee",
    location: "College Park, MD",
    startDate: "September 2024",
    endDate: "Present",
    bullets: [
      "Review and approve budget requests from 200+ campus organizations, ensuring efficient resource allocation.",
      "Administer a $2.7 million annual budget, organizing expenditures and ensuring financial stability for student leadership.",
      "Analyze departmental budgets to ensure financial compliance and collaborate with teams to refine proposals and forecasts.",
      "Review and vote on crucial financial legislation for university student body government and funds management.",
    ],
    technologies: ["Financial Analysis", "Budget Management", "Excel"],
  },
  {
    title: "Office Assistant",
    company: "College of Computer, Mathematical, and Natural Sciences",
    location: "College Park, MD",
    startDate: "January 2024",
    endDate: "Present",
    bullets: [
      "Managed, scanned, and archived over 4,000 documents, improving file organization by 70% and retrieval efficiency.",
      "Audited and entered financial data, including W4 forms, into Workday and Excel, ensuring compliance with IRS regulations.",
      "Handled correspondence and communications with clients and vendors, and assisted with report and presentation preparation.",
    ],
    technologies: ["Workday", "Excel", "Document Management"],
  },
  {
    title: "Code Sensei",
    company: "Code Ninjas",
    location: "Yardley, PA",
    startDate: "June 2022",
    endDate: "December 2022",
    bullets: [
      "Taught JavaScript to 30+ children through interactive projects and coding tasks, achieving a 25% improvement in student comprehension.",
      "Mentored students in developing their own projects including coding games, robotic blocks, and beginner coding activities.",
      "Reviewed and provided feedback on code to ensure quality, and developed learning materials for programming languages.",
    ],
    technologies: ["JavaScript", "Teaching", "Curriculum Development"],
  },
  {
    title: "Marketing Manager & General Assistant",
    company: "AI Construction LLC",
    location: "Fairless Hills, PA",
    startDate: "June 2017",
    endDate: "Present",
    bullets: [
      "Remodeled multiple residential spaces including kitchens, bathrooms, and additions — handling cabinet installation, electrical work, plumbing, and flooring.",
      "Designed website layouts and marketing materials using Adobe Photoshop, and managed SEO and marketing strategy.",
      "Conducted market research to identify trends and analyzed performance metrics to optimize marketing initiatives.",
    ],
    technologies: ["Adobe Photoshop", "SEO", "Marketing", "Web Design"],
  },
];
