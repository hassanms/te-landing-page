import { Job } from "./types";

// Initial sample jobs. These are intentionally similar in spirit to the
// Zoho Careers layout while remaining specific to Tech Emulsion.
export const jobs: Job[] = [
  {
    id: "web-developer",
    slug: "web-developers",
    title: "Web Developers",
    company: "Tech Emulsion",
    employmentType: "Full-time",
    department: "Engineering",
    locations: ["Peshawar, Pakistan"],
    region: "APAC",
    country: "Pakistan",
    industry: "Technology",
    shortDescription:
      "Develop new components based on design specs, write maintainable code, and optimize applications for performance.",
    description:
      "As a Web Developer at Tech Emulsion, you will build and maintain high‑quality web experiences for our global clients. You will work closely with designers, PMs, and other engineers to ship features that are performant, accessible, and delightful to use.",
    requirements: [
      "2+ years of professional experience with modern JavaScript and TypeScript.",
      "Strong experience with React / Next.js and component‑based architectures.",
      "Solid understanding of HTML5, CSS3, and responsive design best practices.",
      "Familiarity with Git, code review workflows, and basic CI/CD concepts.",
    ],
    responsibilities: [
      "Develop new components and pages based on design specs and UX flows.",
      "Write clean, maintainable, and well‑tested code.",
      "Identify performance bottlenecks and propose optimizations.",
      "Collaborate with designers and product managers to refine requirements.",
      "Participate in code reviews and knowledge‑sharing sessions.",
    ],
    experienceLevel: "Mid-level (2–4 years)",
    skills: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Git"],
    benefits: [
      "Collaborative engineering culture with regular feedback.",
      "Opportunities to work on AI‑powered and data‑driven products.",
      "On‑site office with a close‑knit team in Peshawar.",
    ],
    postedDate: new Date().toISOString(),
    applicationDeadline: null,
    status: "open",
  },
  {
    id: "ai-engineer",
    slug: "ai-engineer",
    title: "AI Engineer",
    company: "Tech Emulsion",
    employmentType: "Full-time",
    department: "AI & Data",
    locations: ["Peshawar, Pakistan"],
    region: "APAC",
    country: "Pakistan",
    industry: "Technology",
    shortDescription:
      "Design and ship production‑grade AI systems and LLM‑powered features used by real customers.",
    description:
      "As an AI Engineer at Tech Emulsion, you will help design, prototype, and ship AI‑powered experiences across our products and client projects. You’ll work on everything from prompt design and evaluation to integrating vector search, monitoring, and safety guardrails.",
    requirements: [
      "Experience working with modern LLMs and vector databases.",
      "Strong programming skills in TypeScript, Python, or similar.",
      "Understanding of prompt engineering, evaluation, and observability.",
      "Familiarity with cloud platforms and deploying AI workloads.",
    ],
    responsibilities: [
      "Build and maintain AI‑powered features and workflows.",
      "Design evaluation strategies and metrics for AI features.",
      "Collaborate with product and engineering to ship experiments quickly.",
      "Implement observability and safety guardrails around AI usage.",
    ],
    experienceLevel: "Mid-level / Senior",
    skills: ["LLMs", "Vector Search", "TypeScript", "Python", "Prompt Design"],
    benefits: [
      "Hands‑on work with the latest AI tooling and infrastructure.",
      "Influence the AI strategy across multiple products.",
    ],
    postedDate: new Date().toISOString(),
    applicationDeadline: null,
    status: "open",
  },
];

export default jobs;

