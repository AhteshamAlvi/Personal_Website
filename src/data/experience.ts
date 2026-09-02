import type { Experience } from "@/types";

/*
  Work experience — ordered most recent first.
  Technologies focus on conceptual/technical skills, not programming languages.
  Icons show languages/tools via Iconify (skill-icons, devicon, logos, vscode-icons, simple-icons).
*/

export const experiences: Experience[] = [
  {
    title: "Software Developer Intern",
    company: "fusionSpan",
    location: "Rockville, MD",
    startDate: "June 2026",
    endDate: "August 2026",
    bullets: [
      "Salesforce platform engineering for national trade associations and nonprofits.",
      "Diagnosed and repaired 50+ client-reported and backlog defects over an 11-week term, working tickets solo against per-ticket senior-developer code review — including restoring a broken shopping-cart flow in a client-facing web application.",
      "Wrote and modernized dozens of Apex test classes across eight client orgs (MCAA, MHI, MSCI, NAEYC, NCAA, AAAS, ASQ, NBAA), realigning legacy suites with each codebase to keep deployments clearing Salesforce's 75% coverage gate.",
      "Built new Jenkins test environments and deployed test-suite updates and validation-rule changes into multiple production orgs.",
      "Designed and built a five-skill Claude agent toolchain spanning the full ticket lifecycle: persistent cross-session Jira ticket notes, PMD static-analysis triage and repair for Apex, Confluence documentation generated from actual git diffs rather than conversation history, and a categorized reusable-code library with an automated consistency audit.",
      "Engineered that toolchain for reliability and token cost — explicit negative-trigger conditions on every skill to prevent misfires, progressive-disclosure reference files separating templates from logic, and an index-first read strategy — then shipped it to the intern cohort with sandbox test scripts and testing procedures.",
    ],
    technologies: [
      "Salesforce Platform",
      "Apex Testing",
      "CI / Static Analysis",
      "Agent Tooling",
      "Client Delivery",
    ],
    icons: [
      { name: "Salesforce", iconify: "logos:salesforce" },
      { name: "Jenkins", iconify: "skill-icons:jenkins-light" },
      { name: "Jira", iconify: "logos:jira" },
      { name: "Confluence", iconify: "logos:confluence" },
      { name: "Claude", iconify: "simple-icons:anthropic" },
    ],
  },
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
    technologies: ["NLP", "Agile/Scrum", "Version Control", "Mobile Development", "Chatbot Design"],
    icons: [
      { name: "Python", iconify: "skill-icons:python-light" },
      { name: "Flask", iconify: "skill-icons:flask-light" },
      { name: "React", iconify: "skill-icons:react-light" },
      { name: "HTML", iconify: "skill-icons:html" },
      { name: "CSS", iconify: "skill-icons:css" },
      { name: "Azure", iconify: "skill-icons:azure-light" },
      { name: "OpenAPI", iconify: "devicon:openapi" },
      { name: "OpenAI", iconify: "simple-icons:openai" },
      { name: "Git", iconify: "skill-icons:git" },
    ],
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
    technologies: ["Financial Analysis", "Budget Management", "Compliance"],
    icons: [
      { name: "Excel", iconify: "vscode-icons:file-type-excel" },
    ],
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
    technologies: ["Document Management", "Data Entry", "Financial Compliance"],
    icons: [
      { name: "Adobe Acrobat", iconify: "simple-icons:adobeacrobatreader" },
      { name: "Excel", iconify: "vscode-icons:file-type-excel" },
    ],
  },
  {
    title: "Code Sensei",
    company: "Code Ninjas",
    location: "Yardley, PA",
    startDate: "June 2022",
    endDate: "December 2022",
    bullets: [
      "Taught JavaScript fundamentals to 30+ students aged 7-14 through project-based instruction built around games and coding tasks.",
      "Mentored students in developing their own projects including coding games, robotic blocks, and beginner coding activities.",
      "Reviewed and provided feedback on code to ensure quality, and developed learning materials for programming languages.",
    ],
    technologies: ["Teaching", "Curriculum Development", "Code Review"],
    icons: [
      { name: "JavaScript", iconify: "skill-icons:javascript" },
      { name: "Unity", iconify: "skill-icons:unity-light" },
    ],
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
    technologies: ["SEO", "Marketing Strategy", "Web Design", "Market Research"],
    icons: [
      { name: "HTML", iconify: "skill-icons:html" },
      { name: "CSS", iconify: "skill-icons:css" },
      { name: "Photoshop", iconify: "skill-icons:photoshop" },
    ],
  },
];
