/**
 * Rich content for engagement model detail pages.
 * Used when a model has full page content (e.g. ai-enabled-teams).
 */

export interface AIEnabledTeamsContent {
  peaceOfMindIntro?: string;
  safeAndEmpowered: {
    intro: string;
    introSubtext?: string;
    bullets: string[];
    closing: string;
  };
  everythingYouNeedToKnow: {
    intro: string;
    researchBullets: { cite: string; text: string }[];
    cta?: { title: string; description: string; buttonText: string; buttonHref: string };
  };
  whatMakesSpecial: { title: string; description: string }[];
  ctaBlocks: { title: string; subtitle: string; buttonText: string }[];
  sdlcPhases: { number: string; title: string; bullets: string[] }[];
  outcomes: { task: string; before: string; after: string; savings: string }[];
  outcomesIntro?: string;
  outcomesClosing?: string;
  tools: string[];
  toolsIntro?: string;
  faqs: { question: string; answer: string }[];
  stats: { value: string; label: string }[];
}

export const aiEnabledTeamsContent: AIEnabledTeamsContent = {
  peaceOfMindIntro:
    "At Tech Emulsion, peace of mind isn't a fine-print phrase in the contract. It's the standard we bring to every day and every engagement.",
  safeAndEmpowered: {
    intro:
      "We saw AI's potential early, but we knew trust had to come first. Before rolling anything out to clients, we tested it where it mattered most across code, quality, and high-impact processes, tracking gains, mitigating risks, and shaping a system around what actually delivers.",
    introSubtext:
      "What began as hands-on experimentation is now a company-wide framework designed to embed AI-driven efficiency without ever risking control, transparency, security, or delivery pace.",
    bullets: [
      "A company-wide AI policy built around ethics, accountability, and transparency",
      "Clearly defined tiers for high- and low-risk use cases",
      "A list of approved AI tools for internal use, along with recommended AI tools to strengthen the entire software development lifecycle",
      "A formal process for onboarding and governing new tools and AI products",
      "A growing knowledge base of documented efficiency wins and high-performing prompt sets",
      "Teamwide training, structured knowledge-sharing, and an internal AI challenge that keeps our talent sharp",
    ],
    closing:
      "By the time our engineers are in your codebase, the groundwork is done. You get tools that perform, people who know exactly how to use them, and a delivery model built to scale safely.",
  },
  everythingYouNeedToKnow: {
    intro:
      "Traditional approaches each have their strengths. Staff augmentation gives companies the flexibility to expand headcount as needed, while dedicated development teams provide continuity, structure, and accountability across delivery. AI-enabled teams combine both, and raise the bar. With typical productivity gains of 15 percent or more, they offer clearer oversight, smarter workflows, and greater transparency into how tools are used and value is delivered. That uplift comes through using AI tools and practices that accelerate software development, streamline workflows, and reduce repetitive work, leaving engineers free to focus on high-value delivery. Independent research reinforces what we see in practice. AI-assisted software development is delivering measurable, scalable productivity gains:",
    researchBullets: [
      {
        cite: "Accenture",
        text: "reports that 74 percent of organizations state their generative AI and automation investments meet or exceed expectations, with AI-led processes driving 2.5x higher revenue growth and 2.4x greater productivity than peers.",
      },
      {
        cite: "DORA research",
        text: "shows that increasing an individual's AI adoption by 25 percent correlates with a 2.1 percent increase in productivity and a 2.2 percent increase in job satisfaction.",
      },
      {
        cite: "McKinsey",
        text: "projects $4.4 trillion in long-term productivity growth potential from corporate AI use cases.",
      },
    ],
  },
  whatMakesSpecial: [
    {
      title: "Built-in efficiency",
      description:
        "Expect 15% more efficiency compared to traditional delivery models, with no added headcount or cost. The lift comes from AI-driven software development where vetted tools accelerate delivery speed and throughput while developers maintain control and lead the process with consistency and accountability.",
    },
    {
      title: "Full control over tools",
      description:
        "The AI ecosystem always belongs to you. Only vetted and legally cleared tools are recommended, and nothing is implemented beyond the list you approve. Our AI-augmented software engineering also excludes vendor lock-in or data sharing, giving you predictability, transparency, and independence across every engagement.",
    },
    {
      title: "Ethics as a foundation",
      description:
        "Responsible AI use is embedded in our company-wide policy, with transparent AI practices for your project and a documented approvals process supported by a clear register of tools permitted for specific use cases.",
    },
    {
      title: "Simple licensing",
      description:
        "You won't pay extra for standard tools like Cursor or Visual Studio. If a proprietary or client-specific AI tool is approved, its license fee is simply added to your monthly bill. Costs remain predictable, transparent, and easy to manage.",
    },
    {
      title: "Security",
      description:
        "Security remains paramount in every implementation. Only pre-screened tools classified as low risk are introduced, with continuous monitoring in place to catch changes early. Every layer is supported by our ISO-certified security management system, so you benefit from AI efficiency with the assurance that compliance and protection are never compromised.",
    },
  ],
  ctaBlocks: [
    {
      title: "Your tools. Your call. Our delivery.",
      subtitle:
        "Stay in command of your stack and standards, and we'll take care of execution. You set the direction, we guarantee fast, secure delivery every sprint.",
      buttonText: "Start your project",
    },
    {
      title: "Faster delivery. Smarter flow.",
      subtitle:
        "AI-enabled teams deliver more without changing your crew or your rate card. You get faster delivery, optimized workflows that drive ROI, and full transparency from start to finish.",
      buttonText: "Gain higher productivity with an AI-enabled team",
    },
  ],
  sdlcPhases: [
    {
      number: "01",
      title: "Project management",
      bullets: [
        "Backlog refinement becomes proactive, with tasks prioritized, dependencies flagged early, and large user stories broken into manageable pieces.",
        "With AI-enabled software development, potential roadblocks surface before sprint reviews, giving teams time to mitigate issues and maintain momentum.",
        "Workloads balance more effectively across availability and skill sets, making delivery forecasts more realistic and less prone to surprises.",
      ],
    },
    {
      number: "02",
      title: "UI/UX and product design",
      bullets: [
        "Wireframes convert quickly into polished mockups aligned with predefined style guides and design systems.",
        "A/B testing becomes faster by automatically generating multiple layouts and design variations.",
        "Accessibility issues such as weak contrast or unreadable fonts are detected during design reviews, not after release.",
        "Fonts, colors, and components flow seamlessly from design tools into developer-ready formats.",
      ],
    },
    {
      number: "03",
      title: "Coding",
      bullets: [
        "Natural language prompts generate scaffolding that captures intent and accelerates setup.",
        "Refactoring suggestions sharpen readability, maintainability, and performance.",
        "Code reviews improve as bugs, security gaps, and style violations are identified early.",
        "Enforcement of consistent style and formatting is automated, strengthening quality.",
        "Common validation scenarios, such as input checks or data constraints, are generated within minutes.",
      ],
    },
    {
      number: "04",
      title: "Quality assurance",
      bullets: [
        "Test scripts translate directly from specifications.",
        "Unit, integration, regression, and automation tests spin up from prompts or existing code.",
        "AI scanning of codebases increases coverage, identifies untested paths, and recommends test cases.",
        "Validation rules and edge case scenarios are generated automatically, ensuring intended behaviors hold.",
        "During demos, discrepancies between expected and actual outcomes are flagged in real time.",
        "Bug reporting sharpens with continuous monitoring of logs and root cause analysis.",
      ],
    },
    {
      number: "05",
      title: "DevOps",
      bullets: [
        "Infrastructure scripts are drafted or updated automatically, making provisioning faster but still compliant with requirements.",
        "CI/CD pipeline performance is constantly monitored to identify bottlenecks. Teams receive straightforward suggestions to speed up builds and deployments.",
        "Repetitive approvals and rollbacks stop wasting time, thanks to automated workflows.",
        "Instead of wading through endless logs, teams get concise summaries that dramatically reduce triage time.",
        "Monitoring is less noisy: anomalies surface, irrelevant alerts stay quiet.",
        "Root cause analysis connects the dots across logs, traces, and metrics, quickly highlighting the most likely sources of trouble.",
        "Configuration templates and scripts are generated upfront to ensure consistency and reproducibility in development, staging, and production environments.",
      ],
    },
    {
      number: "06",
      title: "Documentation and knowledge management",
      bullets: [
        "AI-powered development teams convert high-level requirements into structured specifications ready for review.",
        "New developers ramp up faster with onboarding guides, walkthroughs, and role-specific starter kits.",
        "Documentation remains accurate and consistent, automatically updated as knowledge grows.",
        "RAG-based assistants provide project-specific answers without the need to sift through wikis or archives.",
      ],
    },
    {
      number: "07",
      title: "Analytics",
      bullets: [
        "AI-powered teams don't have to write complex SQL queries from scratch. Instead, they can describe their intent in plain language and instantly receive ready-to-run ones.",
        "Repetitive steps like data cleaning, transformation, or formatting are automated, so analysts spend more time interpreting results.",
        "Teams get visualizations and recommendations tailored to the data, making it easier to spot trends and share insights.",
        "Dashboards stay updated without manual intervention. Data is refreshed, anomalies are highlighted, and key metrics are surfaced automatically.",
      ],
    },
  ],
  outcomes: [
    { task: "Generate onboarding test outlines", before: "4 hours", after: "1.2 hour", savings: "67%" },
    { task: "Customize MUI slider component", before: "2.5 hours", after: "1 hour", savings: "60%" },
    { task: "Update API from class changes", before: "2 hours", after: "10 minutes", savings: "92%" },
    { task: "Create logic to validate resume items in code", before: "2 hours", after: "20 minutes", savings: "83%" },
    { task: "Automate the deployment script", before: "2 hours", after: "10 minutes", savings: "92%" },
    { task: "Generate mock data objects (~170 lines)", before: "40 minutes", after: "5 minutes", savings: "87%" },
  ],
  outcomesIntro:
    "We've tracked hundreds of use cases across delivery and documented the results. The examples below show how AI translates into tangible time savings and measurable efficiency gains.",
  outcomesClosing:
    "Our experience shows that AI cuts minutes and hours from individual tasks, and at scale, entire days fall off delivery cycles. We work with you to set the right KPIs for your project and track every result transparently.",
  tools: [
    "OpenAI models (GPT family)",
    "X models (Grok)",
    "GitHub Copilot",
    "Smartsheet AI",
    "Anthropic models (Claude family)",
    "Mistral models (Mistral, Mixtral)",
    "Cursor AI",
    "Figma AI",
    "Google models (Gemini family)",
    "Meta models (Llama family)",
    "Power BI Copilot",
    "n8n",
  ],
  toolsIntro:
    "We work with a curated set of AI products trusted across industries, while our AI-augmented software engineering services keep your stack flexible. If your team already has preferred platforms, we integrate them seamlessly, so you get the lift of AI with no friction: secure, scalable, and built to deliver peace of mind at every step.",
  faqs: [
    {
      question: "How can I be sure AI will deliver real business value?",
      answer:
        "Independent research from McKinsey, Accenture, and Google's DORA confirms measurable productivity gains from AI-assisted software development. Our own delivery record proves it too: internal projects show a consistent 15% uplift in team performance and workflow efficiency with AI integrated into delivery.",
    },
    {
      question: "If AI makes developers faster, why not reduce team size?",
      answer:
        "AI accelerates throughput, but fewer engineers can create bottlenecks over time. Complex tasks like architecture design, debugging, and product alignment still require human expertise. AI supports productivity by handling repetitive work, while our engineers keep delivery moving at pace and safeguard quality, avoiding short-term savings that compromise long-term performance.",
    },
    {
      question: "What if there's no increase in productivity?",
      answer:
        "Our AI-assisted delivery drives measurable productivity gains of 15%. The exact lift varies by baseline and project scope, but even modest gains build on a delivery model already known for its consistency, efficiency, and performance.",
    },
    {
      question: "Will our IP be safe?",
      answer:
        "There are real IP and legal risks with any use of AI, and part of our role is to understand them and help you navigate the landscape. Tech Emulsion recommends using only tools that do not use your data for model training, and whose vendors clearly confirm that you retain ownership and control of all outputs. We also work strictly within your internally approved toolset and never introduce new tools without your consent. To reduce the risk of third-party infringements, our team follows recognized best practices in how AI is configured and used, while expecting clients to conduct their own legal and IP review where needed.",
    },
    {
      question: "We already have internal AI tools. Can you use them?",
      answer:
        "Yes. We integrate seamlessly with your existing stack and governance. If additional tools could add measurable value, we'll recommend them, but the decision is always yours.",
    },
    {
      question: "What to do if a tool causes issues mid-project?",
      answer:
        "Our engineers continuously steer AI to keep delivery on track. If a tool underperforms, you'll know right away, and we'll suggest corrective actions or replace it with another vetted option. There's never an \"It's AI, not us\" moment; accountability stays with us.",
    },
    {
      question: "Do you log everything that AI touches, so we're audit-ready?",
      answer:
        "Yes, if you want every AI-assisted workflow logged and documented. We tailor transparency to your compliance needs.",
    },
    {
      question: "Will an AI-enabled team be more expensive than a traditional development team?",
      answer:
        "The only potential added cost is proprietary AI tool licenses, which are always outlined upfront. In every case, fees remain minimal, predictable, and fully transparent.",
    },
    {
      question: "Is there a risk of over-relying on AI tools instead of human expertise?",
      answer:
        "No. Our delivery model is human-first: AI is an accelerator, not a decision-maker. Experienced AI engineers remain fully responsible for architecture, design choices, and code quality.",
    },
  ],
  stats: [
    { value: "20+", label: "Years of proven delivery expertise with 550+ global clients" },
    { value: "150+", label: "Deep AI experience rooted in successful projects across industries" },
    { value: "CTO-led", label: "CTO-led consulting is available to guide you through the evolving AI tooling landscape" },
    { value: "Human-first", label: "A human-first AI model where technology augments engineers without replacing them" },
    { value: "Procurement", label: "Procurement- and legal-friendly delivery setup designed for fast, secure sign-off" },
    { value: "ISO-27001", label: "ISO-27001 certified security management system ensuring compliance and peace of mind at scale" },
  ],
};

export function getEngagementModelContent(slug: string): AIEnabledTeamsContent | null {
  if (slug === "ai-enabled-teams") return aiEnabledTeamsContent;
  return null;
}
