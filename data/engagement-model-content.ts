/**
 * Rich content for engagement model detail pages.
 * Used when a model has full page content (e.g. ai-enabled-teams, staff-augmentation).
 */

export interface EngagementModelContent {
  peaceOfMindIntro?: string;
  safeAndEmpowered: {
    intro: string;
    introSubtext?: string;
    bullets: string[];
    closing: string;
  };
  everythingYouNeedToKnow: {
    intro: string;
    introMain?: string;
    introRight?: string;
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
  /** Optional section headings to override default H2s on the page (e.g. for Solutions for enterprises). */
  sectionHeadings?: {
    safeAndEmpowered?: string;
    everythingYouNeedToKnow?: string;
    whatMakesSpecial?: string;
    sdlc?: string;
    clientOutcomes?: string;
    tools?: string;
    whyPartner?: string;
    faqs?: string;
  };
}

export const aiEnabledTeamsContent: EngagementModelContent = {
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
    introMain:
      "Traditional approaches each have their strengths. Staff augmentation gives companies the flexibility to expand headcount as needed, while dedicated development teams provide continuity, structure, and accountability across delivery. AI-enabled teams combine both, and raise the bar. With typical productivity gains of 15 percent or more, they offer clearer oversight, smarter workflows, and greater transparency into how tools are used and value is delivered.",
    introRight:
      "That uplift comes through using AI tools and practices that accelerate software development, streamline workflows, and reduce repetitive work, leaving engineers free to focus on high-value delivery. Independent research reinforces what we see in practice. AI-assisted software development is delivering measurable, scalable productivity gains:",
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
    { value: "100%", label: "Customer satisfaction across 50+ clients" },
    { value: "150+", label: "Deep AI experience rooted in successful projects across industries" },
    { value: "CTO-led", label: "CTO-led consulting is available to guide you through the evolving AI tooling landscape" },
    { value: "Human-first", label: "A human-first AI model where technology augments engineers without replacing them" },
    { value: "Procurement", label: "Procurement- and legal-friendly delivery setup designed for fast, secure sign-off" },
    { value: "3+ years", label: "Experience building and integrating remote development teams" },
  ],
  sectionHeadings: {
    safeAndEmpowered: "AI-Driven Development with Confidence",
    everythingYouNeedToKnow: "AI-Enabled Development Teams Explained",
    whatMakesSpecial: "What Makes AI-Powered Development Teams Unique",
    sdlc: "AI Across the Software Development Lifecycle",
    clientOutcomes: "Real Productivity Gains from AI-Enabled Development",
    tools: "AI Tools Used in Modern Development Workflows",
    whyPartner: "Why Organizations Choose AI-Enabled Development Teams",
    faqs: "Frequently Asked Questions",
  },
};

export const staffAugmentationContent: EngagementModelContent = {
  peaceOfMindIntro:
    "With Tech Emulsion, staff augmentation isn’t about throwing bodies at a problem. It’s about giving you the right people, plugged into your way of working, so you can move faster without losing control.",
  safeAndEmpowered: {
    intro:
      "We’ve spent years refining how external engineers can integrate with in-house teams without slowing them down. From clear communication protocols to shared tooling and delivery standards, our staff augmentation model is designed to feel like an extension of your own engineering organization.",
    introSubtext:
      "You stay in the driver’s seat on priorities, scope, and direction. We make sure every augmented engineer understands your context, respects your processes, and adds value from the first sprint instead of needing months to ramp.",
    bullets: [
      "Engineers matched to your tech stack, domain, and collaboration style",
      "Structured onboarding playbooks to align on rituals, standards, and expectations",
      "Clear ownership boundaries so augmented engineers support your team rather than disrupt it",
      "Ongoing performance monitoring and feedback loops managed by Tech Emulsion",
      "Flexible engagement models that let you scale up or down without HR overhead",
      "Transparent communication and reporting so you always know who is doing what and why",
    ],
    closing:
      "The result is a leaner, more capable team that can take on more work, hit deadlines with less stress, and keep quality high—without the long timelines or risk of traditional hiring.",
  },
  everythingYouNeedToKnow: {
    intro:
      "Different engagement models solve different problems. Staff augmentation gives you the flexibility to add specific skills to your existing team, while dedicated teams and project outsourcing shift more responsibility to an external partner. With Tech Emulsion, staff augmentation means you stay in full control of product decisions and priorities, while we shoulder the burden of finding, vetting, and supporting the right engineers. It’s a fit when you want to move faster, cover skill gaps, or kick off new work streams—without expanding permanent headcount.",
    introMain:
      "Staff augmentation lets you quickly add the skills and capacity you’re missing, while keeping ownership and decision-making inside your organization. You remain in charge of the roadmap, sprint planning, and architecture; we provide engineers who integrate into your tools, ceremonies, and standards as if they were in-house.",
    introRight:
      "Compared with traditional hiring, you save time and reduce risk. Compared with fully outsourced projects, you keep closer control over scope, quality, and trade-offs. Staff augmentation from Tech Emulsion is built for teams that know where they’re going and need a reliable way to get there faster.",
    researchBullets: [],
  },
  whatMakesSpecial: [
    {
      title: "Built-in flexibility",
      description:
        "Scale your team up or down as priorities change—without the lag and long-term commitments of traditional hiring. Add a single specialist or an entire pod to support a critical initiative, then adjust as your roadmap evolves.",
    },
    {
      title: "Tight integration with your team",
      description:
        "Our engineers work in your tools, follow your processes, and participate in your ceremonies. That keeps communication tight, reduces handoff friction, and ensures that decisions stay grounded in your product context.",
    },
    {
      title: "Reduced hiring and operational overhead",
      description:
        "We handle sourcing, vetting, contracts, benefits, and ongoing professional development. You get committed, high-performing engineers without adding to your HR, legal, or people management load.",
    },
    {
      title: "Access to specialized skills on demand",
      description:
        "Need short-term support in DevOps, data, mobile, or architecture? You can bring in targeted expertise for as long as you need it, without creating permanent roles that may be hard to keep fully utilized.",
    },
    {
      title: "Predictable costs",
      description:
        "Transparent rates and simple commercial terms make it easy to plan budgets. There are no surprise fees, and you can align engagement length and scope with business milestones.",
    },
  ],
  ctaBlocks: [
    {
      title: "Augment your team without the hiring headache",
      subtitle:
        "Skip the long search. We’ll introduce you to engineers who are ready to contribute quickly, aligned with your culture, stack, and ways of working.",
      buttonText: "Talk to us about staff augmentation",
    },
    {
      title: "Start small, scale with confidence",
      subtitle:
        "Begin with one or two engineers, see how the collaboration feels, and grow the team when you’re ready. We’ll support you at every step.",
      buttonText: "Plan your augmented team",
    },
  ],
  sdlcPhases: [
    {
      number: "01",
      title: "Discovery and planning",
      bullets: [
        "Bring in senior engineers, architects, or product-aligned technologists to stress-test assumptions and shape realistic delivery plans.",
        "Use augmented capacity to validate feasibility, plan technical spikes, and prepare your backlog without overloading your core team.",
        "Cover temporary gaps when internal leaders are focused on fundraising, restructuring, or other strategic work.",
      ],
    },
    {
      number: "02",
      title: "Design and prototyping",
      bullets: [
        "Pair UI/UX designers and frontend developers to move from concept to clickable prototypes faster.",
        "Leverage experienced engineers to create technical proof-of-concepts that de-risk major decisions before full build-out.",
        "Support internal teams by handling secondary features and experiments while your core team focuses on the main flows.",
      ],
    },
    {
      number: "03",
      title: "Implementation",
      bullets: [
        "Expand your feature teams with additional backend, frontend, or full-stack engineers to accelerate delivery.",
        "Assign augmented engineers to well-defined epics or services so they can make progress independently while staying aligned with your architecture.",
        "Use external specialists to handle integrations, migrations, or refactoring that your core team hasn’t had bandwidth to tackle.",
      ],
    },
    {
      number: "04",
      title: "Quality assurance",
      bullets: [
        "Add QA engineers or SDETs to strengthen test coverage and automation without pulling developers away from feature work.",
        "Use augmented QA capacity to run regression suites, exploratory testing, and cross-device validation ahead of major releases.",
        "Stabilize legacy systems by dedicating augmented engineers to bug fixing and hardening while your internal team focuses on new initiatives.",
      ],
    },
    {
      number: "05",
      title: "DevOps and operations",
      bullets: [
        "Bring in DevOps and cloud specialists to optimize CI/CD pipelines, infrastructure, and observability.",
        "Have augmented engineers own routine operational tasks and incident response playbooks so your core team can stay focused on roadmap work.",
        "Use external experts to guide cloud cost optimization, environment standardization, and security hardening.",
      ],
    },
    {
      number: "06",
      title: "Maintenance and continuous improvement",
      bullets: [
        "Keep critical systems healthy by dedicating augmented engineers to ongoing maintenance and incremental improvements.",
        "Smoothly roll out new features and refactors by using augmentation to manage technical debt alongside new development.",
        "Ensure knowledge is captured and shared so that your internal team stays in control, even as augmented engineers cycle on and off initiatives.",
      ],
    },
  ],
  outcomes: [
    {
      task: "Add two senior engineers to unblock a critical release",
      before: "8–10 weeks of hiring and onboarding",
      after: "2–3 weeks to ramp augmented team",
      savings: "70% faster",
    },
    {
      task: "Cover a short-term skill gap in DevOps",
      before: "3–4 months to recruit, hire, and train",
      after: "2 weeks to onboard an experienced DevOps engineer",
      savings: "60–70% faster",
    },
    {
      task: "Increase feature throughput for a key product",
      before: "Roadmap slipping by 1–2 sprints every quarter",
      after: "On-track delivery with added augmented capacity",
      savings: "1–2 sprints regained per quarter",
    },
    {
      task: "Support legacy system stabilization while building a new platform",
      before: "Core team context-switched between old and new systems",
      after: "Augmented engineers own stabilization, core team focuses on new platform",
      savings: "Significant reduction in context switching and unplanned work",
    },
  ],
  outcomesIntro:
    "Staff augmentation is ultimately about outcomes: more done, with less stress, at a predictable cost. Here are examples of how Tech Emulsion’s augmented teams help clients hit their goals faster.",
  outcomesClosing:
    "In practice, the impact shows up as more predictable delivery, fewer project delays, and teams that feel supported rather than stretched. We work with you to define the right success metrics for your augmented team and review them regularly.",
  tools: [
    "Jira, Azure Boards, or similar backlog tools",
    "GitHub, GitLab, or Bitbucket for version control and code review",
    "Slack, Microsoft Teams, or preferred communication platforms",
    "Zoom, Google Meet, or similar for ceremonies and ad-hoc collaboration",
    "CI/CD pipelines using GitHub Actions, GitLab CI, Azure DevOps, or similar",
    "Cloud platforms such as AWS, Azure, or Google Cloud",
  ],
  toolsIntro:
    "Our augmented engineers work inside your existing toolchain wherever possible, so there’s no disruption to how your team ships. When helpful, we’ll recommend improvements to your workflow and tooling—but decisions always remain with you.",
  faqs: [
    {
      question: "How is staff augmentation different from outsourcing a project?",
      answer:
        "With staff augmentation, you stay in control of the roadmap, backlog, and day-to-day direction. Our engineers join your team, work in your tools, and follow your processes. With full project outsourcing, more ownership of scope, planning, and delivery shifts to the vendor. Staff augmentation is a better fit when you have an established team and want to increase capacity or cover skill gaps while keeping product decisions in-house.",
    },
    {
      question: "How quickly can augmented engineers start contributing?",
      answer:
        "Most engineers begin adding tangible value within the first couple of sprints. We accelerate this by aligning on expectations upfront, using structured onboarding checklists, and ensuring they have access to the right documentation, people, and environments from day one.",
    },
    {
      question: "What level of control do we retain over augmented engineers?",
      answer:
        "You decide what they work on, how work is prioritized, and how success is measured. We stay closely involved to support performance, resolve any issues, and make sure expectations on both sides remain aligned. You get the benefit of extra capacity without losing managerial control.",
    },
    {
      question: "Can we start with a small engagement and grow later?",
      answer:
        "Yes. Many clients begin with one or two engineers to validate fit and collaboration, then expand the team once they see the impact. Our model is designed to scale up or down based on your needs, without lock-in to a fixed team size.",
    },
    {
      question: "How do you handle time zones and communication?",
      answer:
        "We match you with engineers who can collaborate effectively within your core working hours and who are comfortable with your preferred communication style. Clear overlap windows, agreed-upon response times, and shared rituals (like standups and demos) keep everyone aligned.",
    },
    {
      question: "What happens if a particular engineer isn’t the right fit?",
      answer:
        "If something isn’t working, we address it quickly and transparently. We can provide coaching, adjust responsibilities, or, when necessary, transition to a different engineer. Our goal is a long-term, healthy partnership, not forcing a mismatch.",
    },
  ],
  stats: [
    { value: "3+ years", label: "Experience building and integrating remote development teams" },
    { value: "30+ industries", label: "Domain experience spanning fintech, healthtech, ecommerce, and more" },
    { value: "Flexible", label: "Engagement structures that adapt to your roadmap, not the other way around" },
    { value: "Specialists", label: "Access to engineers across backend, frontend, mobile, DevOps, data, and QA" },
    { value: "Low overhead", label: "We handle HR, contracts, and people ops so you can focus on delivery" },
    { value: "Partner-first", label: "A collaboration model built on transparency, long-term fit, and shared outcomes" },
  ],
  sectionHeadings: {
    safeAndEmpowered: "Win with Software Team Augmentation",
    everythingYouNeedToKnow: "Staff Augmentation at a Glance",
    whatMakesSpecial: "Proven Expertise Across Industries",
    sdlc: "Staff Augmentation Process",
    clientOutcomes: "Client outcomes powered by this engagement model",
    tools: "Tools and platforms that support delivery",
    whyPartner: "What makes Tech Emulsion your reliable development partner?",
    faqs: "Frequently Asked Questions",
  },
};

export const dedicatedTeamsContent: EngagementModelContent = {
  peaceOfMindIntro:
    "Finding and keeping the right engineers can drag on for months and slow your roadmap. With Tech Emulsion dedicated development teams, you can spin up a cross-functional squad in weeks, reduce hiring overhead, and keep your focus on building the right product — without endless do-overs.",
  safeAndEmpowered: {
    intro:
      "The dedicated development team model is built for companies that need an agile, long-term engineering partner rather than a series of short-term contracts. Instead of piecing together capacity through individual hires, you work with Tech Emulsion to form a remote team that behaves like an extension of your in‑house staff, focused entirely on your projects.",
    introSubtext:
      "Your dedicated team can include developers, designers, QA engineers, project managers, and other specialists. They adopt your goals, stack, and delivery practices, so you get the flexibility to scale and innovate quickly — without the full overhead of hiring, onboarding, and managing every role internally.",
    bullets: [
      "A team of experts focused exclusively on your products and initiatives",
      "Cross-functional composition across engineering, QA, product, and design as needed",
      "Deep integration into your processes, tools, and culture, even when the team is fully remote",
      "Long-term engagement that preserves context and momentum across releases",
      "Ability to expand development capacity without adding permanent in‑house headcount",
      "Tech Emulsion handling recruiting, HR, and administrative burden so you can stay focused on outcomes",
    ],
    closing:
      "You get the right model to build the right product: a team that feels like your own, but with the flexibility and operational support of a specialist partner.",
  },
  everythingYouNeedToKnow: {
    intro:
      "Dedicated teams, staff augmentation, and time-and-materials all have a place — but they solve different problems. Dedicated teams give you a long-term, product-focused unit that owns delivery end to end. Staff augmentation is better for filling short-term skill gaps inside existing squads. Time-and-materials models work well when scope is evolving and you want maximum flexibility in what gets built next.",
    introMain:
      "With a dedicated team from Tech Emulsion, you get a stable group that learns your business, iterates with you, and stays accountable for outcomes. It’s particularly effective for complex, multi-technology projects, long-term initiatives, and products where requirements will naturally evolve over time.",
    introRight:
      "Compared to staff augmentation, you spend less time coordinating individual contributors and more time steering a cohesive team. Compared to classic time-and-materials work, you gain stronger commitment, clearer ownership, and easier scaling as your roadmap expands.",
    researchBullets: [
      {
        cite: "Dedicated teams",
        text: "Best suited for long-term, complex initiatives where you want a cross-functional group focused solely on your product, with strong ownership and continuity.",
      },
      {
        cite: "Staff augmentation",
        text: "Ideal when you need to temporarily plug gaps in your existing team or add specific expertise without changing your overall delivery model.",
      },
      {
        cite: "Time and material",
        text: "Useful for projects with unclear or changing requirements where you want the option to adjust scope frequently and stay closely involved in day-to-day decisions.",
      },
    ],
  },
  whatMakesSpecial: [
    {
      title: "Focused expertise and commitment",
      description:
        "Your Tech Emulsion dedicated team shows up every day to build your solution — not to juggle unrelated engagements. Each member is selected to fill real skill gaps and stay invested in your product’s success over the long term.",
    },
    {
      title: "Long-term cost efficiency",
      description:
        "While there’s an initial investment to stand up a dedicated team, over time it’s more efficient than stringing together short contracts and one-off vendors. You avoid repeated ramp-up periods and reduce the hidden costs of context switching and rework.",
    },
    {
      title: "Access to global talent",
      description:
        "You’re no longer constrained by your local hiring market. We tap into a global talent pool so you can assemble the right mix of seniority and specialties, then align working hours and communication patterns to your needs.",
    },
    {
      title: "Lower delivery and legal risk",
      description:
        "Tech Emulsion takes on the operational load of building and supporting the team — from contracts and compliance to performance management — so you don’t have to navigate every jurisdiction or HR nuance yourself.",
    },
    {
      title: "Faster time‑to‑market",
      description:
        "Because we maintain a ready pipeline of vetted engineers, you can get a dedicated team in place in weeks instead of months. Once embedded, their focus and familiarity with your product accelerate the delivery of new features and improvements.",
    },
    {
      title: "Scalability and flexibility",
      description:
        "You can adjust team size and composition as your product moves through discovery, launch, scaling, and optimization — without the friction and cost of hiring or laying off permanent staff.",
    },
  ],
  ctaBlocks: [
    {
      title: "Build a dedicated team that feels in‑house",
      subtitle:
        "Partner with Tech Emulsion to assemble a cross-functional team that works in your tools, follows your rituals, and focuses entirely on your roadmap.",
      buttonText: "Talk to us about dedicated teams",
    },
    {
      title: "Scale your product with confidence",
      subtitle:
        "Use a dedicated team to support long-term initiatives, accelerate delivery, and adapt to changing requirements without overloading your core organization.",
      buttonText: "Design your dedicated team",
    },
  ],
  sdlcPhases: [
    {
      number: "01",
      title: "Complex software development projects",
      bullets: [
        "Leverage a team with diverse skills across multiple technologies to handle complex, interconnected systems.",
        "Use dedicated engineers who can navigate intricate architectures instead of stitching together multiple short-term vendors.",
        "Maintain consistent standards and patterns across services, platforms, and integrations.",
      ],
    },
    {
      number: "02",
      title: "Long‑term initiatives",
      bullets: [
        "Keep the same team engaged over months or years so knowledge accumulates rather than resets with every new contractor.",
        "Align long-running programs — such as platform rebuilds or multi-phase rollouts — with a stable squad that understands your history and goals.",
        "Protect continuity even as priorities shift, thanks to a core group that stays close to your strategy.",
      ],
    },
    {
      number: "03",
      title: "Startups, product launches, and scale‑ups",
      bullets: [
        "Give early-stage products a full team without building an entire engineering department from scratch.",
        "Pivot more easily as you validate market fit, because your dedicated team can adjust scope and priorities alongside you.",
        "For scale-ups, add the bandwidth you need to expand features and markets without losing speed or quality.",
      ],
    },
    {
      number: "04",
      title: "Projects with evolving requirements",
      bullets: [
        "Adapt to user feedback and market signals with a team that expects and embraces change.",
        "Iterate continuously rather than being locked into a rigid, one‑off project plan.",
        "Keep your backlog prioritized and your roadmap current with regular check-ins and transparent reporting.",
      ],
    },
    {
      number: "05",
      title: "Specialized and R&D‑heavy work",
      bullets: [
        "Tap into niche skills — whether that’s AI/ML, data, AR/VR, or complex integrations — that may be hard to hire locally.",
        "Explore new technologies or markets with a team that can experiment, learn, and refine the approach.",
        "Ring‑fence innovation work so it moves forward without disrupting your core engineering squads.",
      ],
    },
    {
      number: "06",
      title: "Enterprise‑level digital transformations",
      bullets: [
        "Assign a dedicated team to manage modernization, migration, or re‑platforming programs across legacy systems.",
        "Coordinate with your internal stakeholders to align technical changes with broader business processes.",
        "Reduce disruption by having a single, accountable team orchestrate complex change instead of scattering responsibility.",
      ],
    },
  ],
  outcomes: [
    {
      task: "Replace months of hiring with a ready dedicated team",
      before: "4–6 months to recruit, hire, and onboard an in‑house team",
      after: "A few weeks to assemble and integrate a Tech Emulsion dedicated team",
      savings: "Significant reduction in time‑to‑start",
    },
    {
      task: "Control costs on long‑term development efforts",
      before: "Multiple short-term contracts and vendors with overlapping overhead",
      after: "One dedicated team with a predictable monthly cost structure",
      savings: "Lower total cost of ownership over the life of the project",
    },
    {
      task: "Accelerate feature time‑to‑market",
      before: "Internal team stretched thin across roadmap, bugs, and maintenance",
      after: "Dedicated squad focused on new delivery while core team handles strategy and critical operations",
      savings: "Faster release cycles and fewer bottlenecks",
    },
    {
      task: "Scale safely through growth and transformation",
      before: "Ad‑hoc scaling with inconsistent quality and limited continuity",
      after: "Structured, scalable team that can grow or reconfigure without losing context",
      savings: "Reduced risk during periods of rapid change",
    },
  ],
  outcomesIntro:
    "Dedicated teams are about sustained, predictable progress on ambitious work — from greenfield products to major transformations. The gains show up in how quickly you can start, how steadily you can ship, and how clearly you can see the impact of your investment.",
  outcomesClosing:
    "Over time, a Tech Emulsion dedicated team becomes a true strategic partner: a group that understands your product as deeply as your internal stakeholders and can keep delivering value through every stage of its lifecycle.",
  tools: [
    "Modern frontend frameworks such as React, Next.js, Angular, and Vue",
    "Backend stacks including .NET, Java, Node.js, PHP, Python, Go, and more",
    "Cloud platforms like AWS, Azure, and Google Cloud for scalable, resilient infrastructure",
    "Mobile technologies including iOS, Android, React Native, Flutter, and PWA",
    "Testing stacks such as Selenium, Cypress, Jest, and other automation frameworks",
    "Data and analytics tooling across SQL/NoSQL databases and modern data platforms",
    "Collaboration and delivery tools including Jira, Azure Boards, GitHub, GitLab, Slack, and Teams",
  ],
  toolsIntro:
    "Your dedicated team is powered by a modern tech stack across frontend, backend, cloud, mobile, testing, and data. We work within your existing standards wherever possible and recommend additions only when they clearly improve reliability, velocity, or maintainability.",
  faqs: [
    {
      question: "What happens if we don’t define our project goals clearly?",
      answer:
        "Vague objectives lead to misaligned expectations and rework. Before we start, we work with you to clarify desired outcomes, priorities, and constraints so the dedicated team knows exactly what success looks like and how to measure it.",
    },
    {
      question: "Why is cultural fit so important for a dedicated team?",
      answer:
        "A strong cultural match — in communication style, pace, and values — reduces friction and helps remote teams collaborate as if they were in the same room. We evaluate not just technical skills but also how well candidates align with your existing culture and working norms.",
    },
    {
      question: "How critical is technical evaluation when forming the team?",
      answer:
        "Thorough technical vetting is essential. We combine interviews, code reviews, and project history checks to ensure every engineer has the capabilities your project demands, so you don’t discover gaps mid‑delivery.",
    },
    {
      question: "What project management practices should we have in place?",
      answer:
        "Even the best team can drift without structure. We help you put in place a clear framework with regular check‑ins, progress tracking, visible metrics, and transparent reporting so you always know where things stand.",
    },
    {
      question: "How important is onboarding for a dedicated team?",
      answer:
        "Onboarding is where expectations, context, and culture are transferred. We use a structured onboarding plan that covers technical setup, processes, and ways of working so the team can contribute meaningfully within the first sprints.",
    },
    {
      question: "How should we plan for future scalability?",
      answer:
        "Scalability shouldn’t be an afterthought. Early in the engagement, we look at your growth trajectory and design the team and architecture so they can expand or reconfigure without chaos — whether that means adding more engineers, spinning off additional squads, or integrating new capabilities.",
    },
  ],
  stats: [
    { value: "3+ years", label: "Experience delivering complex software products and platforms" },
    { value: "Cross‑functional", label: "Teams combining engineering, QA, design, and delivery leadership" },
    { value: "Global", label: "Access to remote talent across multiple regions and time zones" },
    { value: "Scalable", label: "Engagements that can grow, shrink, or re-balance as your roadmap evolves" },
    { value: "ISO‑aligned", label: "Security and quality practices designed for enterprise expectations" },
    { value: "Weeks", label: "Typical time to kick off an initial dedicated team squad" },
  ],
  sectionHeadings: {
    safeAndEmpowered: "The Dedicated Team Model",
    everythingYouNeedToKnow: "Dedicated Teams vs Other Engagement Models",
    whatMakesSpecial: "Benefits of Dedicated Development Teams",
    sdlc: "Projects Best Suited for Dedicated Teams",
    clientOutcomes: "Engineering Teams Built for Success",
    tools: "Technology Expertise",
    whyPartner: "Engineering Teams Built for Success",
    faqs: "Frequently Asked Questions",
  },
};

export const projectOutsourcingContent: EngagementModelContent = {
  peaceOfMindIntro:
    "When competitors outpace you on technology, every month of delay increases risk. Our project-based development model helps you close that gap fast with a focused delivery team that understands your vision and ships solutions that drive profit and growth.",
  safeAndEmpowered: {
    intro:
      "Project-based engagements are ideal when you have a clearly defined outcome in mind but don’t want to stand up a full internal product organization to get there. Tech Emulsion takes responsibility for delivery while you stay focused on business strategy and customers.",
    introSubtext:
      "Looking to turn your business idea into reality, but don’t think you have enough technical savvy to address its engineering challenges? Here are the scenarios where a project-based model is the right answer.",
    bullets: [
      "You run a small to midsize business where technology isn’t your core offering or service, but you still need a robust digital solution.",
      "You’re a large enterprise taking the leap into digital transformation and want a specialist partner to own a defined initiative.",
      "You’ve never worked with an external software development partner before and want a low-risk engagement to get started.",
    ],
    closing:
      "In each case, you get a team that can scope, design, build, test, and launch your solution — so you can focus on running and growing the business.",
  },
  everythingYouNeedToKnow: {
    intro:
      "In a project-based engagement, you bring Tech Emulsion a defined goal — a new product, a critical feature set, a migration, or a modernization initiative. We scope the work, assemble a team, and deliver against agreed milestones, using a Time and Materials contract so you only pay for the time and resources actually invested.",
    introMain:
      "Project-based development is a strong fit when you want an experienced partner to take the reins on a specific initiative, from discovery through release. It’s especially useful when technology isn’t your core business, when you’re exploring digital transformation, or when you want to test the waters with a clearly bounded engagement.",
    introRight:
      "Compared to long-term dedicated teams or staff augmentation, project-based delivery gives you a tightly scoped, outcome-oriented engagement with clear budgets and timelines. You retain final say on priorities and approvals, while we handle day-to-day execution and risk management.",
    researchBullets: [
      {
        cite: "Best for SMBs",
        text: "Small and midsize businesses that need a one-off or limited-scope solution without building a full internal tech team.",
      },
      {
        cite: "Best for enterprises",
        text: "Large organizations that want to launch or modernize specific systems as part of a broader digital transformation program.",
      },
      {
        cite: "Best for first-time buyers",
        text: "Companies that haven’t worked with external developers before and prefer a low-risk, project-scoped engagement to start.",
      },
    ],
  },
  whatMakesSpecial: [
    {
      title: "A value-based approach",
      description:
        "We combine startup thinking with 3+ years of delivery experience to design project scopes that maximize business value. From prototypes and MVPs to full custom builds, we focus on outcomes, not just outputs.",
    },
    {
      title: "Real-time visibility into the project",
      description:
        "You stay informed at every stage. Your Tech Emulsion project manager provides regular status updates, test reports, and milestone reviews so you always know what’s been delivered, what’s coming next, and where risks lie.",
    },
    {
      title: "Optimize your resources",
      description:
        "With a Time and Materials contract, you pay only for the time and resources actually spent on your project. That keeps costs transparent, lets you adjust scope as you learn, and preserves control over your budget.",
    },
    {
      title: "Ramp up fast",
      description:
        "Once the scope is agreed, we assemble a project team quickly so work can start without long hiring cycles. As needs evolve, we can add engineers or specialists to keep pace with customer demands and new opportunities.",
    },
  ],
  ctaBlocks: [
    {
      title: "Turn your project vision into a working product",
      subtitle:
        "Bring us your goals, constraints, and timelines — we’ll handle scoping, staffing, and delivery so you can stay focused on the business.",
      buttonText: "Start a project-based engagement",
    },
    {
      title: "A low-risk way to work with an external partner",
      subtitle:
        "If it’s your first time collaborating with a software company, a project-based model gives you a clear, time-boxed way to see how we work.",
      buttonText: "Talk to us about project outsourcing",
    },
  ],
  sdlcPhases: [
    {
      number: "01",
      title: "Discovery",
      bullets: [
        "We dive into your company’s goals, challenges, and constraints to understand what success looks like.",
        "Our team estimates the time, cost, and resources needed to complete the project and validates feasibility.",
        "Together, we agree on scope, priorities, and initial milestones so expectations are aligned from the start.",
      ],
    },
    {
      number: "02",
      title: "Staffing",
      bullets: [
        "We build a project team that typically includes engineers, designers, and a project manager, tailored to your technical and strategic needs.",
        "Each team member is chosen for both technical fit and communication skills, so collaboration feels natural.",
        "We define collaboration tools, channels, and cadence so your stakeholders can stay involved at the right level.",
      ],
    },
    {
      number: "03",
      title: "Engineering",
      bullets: [
        "We design, build, and test the solution according to the agreed scope, using modern engineering practices and quality controls.",
        "Regular demos and checkpoints keep you close to the work, with room to refine details without derailing timelines.",
        "Our goal is a finished product that is on time, on budget, and within your anticipated project scope.",
      ],
    },
    {
      number: "04",
      title: "Release",
      bullets: [
        "Extensive QA and testing — functional, performance, and, where needed, security — are completed before launch.",
        "We help plan and execute a smooth rollout, from deployment steps to user communications if required.",
        "Post-release, we can support hypercare, handover to your internal team, or follow-on iterations depending on your needs.",
      ],
    },
  ],
  outcomes: [
    {
      task: "Deliver a new product without building an internal tech team",
      before: "12+ months to hire, onboard, and coordinate a full in‑house team",
      after: "A few weeks to kick off with a Tech Emulsion project squad",
      savings: "Significant reduction in time‑to‑first‑release",
    },
    {
      task: "Control spend on a one‑off initiative",
      before: "Unclear total cost when spreading work across ad hoc contractors",
      after: "Transparent Time and Materials engagement with clear reporting",
      savings: "Improved budget predictability and fewer hidden costs",
    },
    {
      task: "Launch a digital initiative in a non‑tech business",
      before: "Internal team lacks the engineering depth to deliver reliably",
      after: "Project-based team owning architecture, build, and testing",
      savings: "Lower delivery risk and faster path from idea to impact",
    },
    {
      task: "Test a new vendor relationship with low risk",
      before: "High commitment needed to build long-term teams or hire",
      after: "Clearly scoped project engagement with defined start and end",
      savings: "Lower organizational risk while you evaluate fit and results",
    },
  ],
  outcomesIntro:
    "Project outsourcing is about translating a well-defined goal into a working solution without adding permanent complexity to your organization. The impact shows up in faster starts, clearer budgets, and reduced delivery risk.",
  outcomesClosing:
    "Whether you’re building an MVP, modernizing a legacy workflow, or piloting a new digital initiative, Tech Emulsion project-based engagements give you a focused way to get it done — and a foundation for future collaboration if you choose to expand.",
  tools: [
    // Frontend
    "React",
    "Next.js",
    "Angular",
    "Vue",
    "React Native",
    "Ember",
    // Backend
    ".NET",
    "PHP",
    "Java",
    "Golang",
    "Node.js",
    "Python",
    "Elixir",
    "Scala",
    // Cloud
    "AWS",
    "Azure",
    "Google Cloud",
    "Oracle Cloud",
    "Kubernetes",
    "Serverless architectures",
    // Mobile
    "iOS",
    "Android",
    "React Native (mobile)",
    "Flutter",
    "Xamarin",
    "Progressive Web Apps (PWA)",
    // Testing
    "Selenium",
    "Cucumber",
    "TestNG",
    "SpecFlow",
    "TestComplete",
    // Blockchain
    "Solidity",
    "EOSJS",
    "Corda",
    "Web3",
    "Ethereum",
    // AI / ML
    "NumPy",
    "OpenNLP",
    "Google Cloud AutoML",
    "TensorFlow",
    "Azure Cognitive Services",
    "IBM Watson",
    // Big data & data science
    "Hadoop",
    "Cassandra",
    "Pandas",
    "Apache Spark",
    "Matplotlib",
    "Caret",
    "Kafka",
    // Methodologies
    "Scrum",
    "Kanban",
    "TDD/BDD/DDD",
    // Databases
    "MySQL",
    "Oracle",
    "DynamoDB",
    "PostgreSQL",
    "MongoDB",
    // 3rd party integrations
    "Multimedia APIs",
    "Social media APIs",
    "Booking APIs",
    "Google Maps APIs",
    "Payment gateways",
    // Salesforce
    "Salesforce Clouds and products",
    "Salesforce Lightning Platform",
    "Salesforce Apex",
    "Salesforce AppExchange",
    "Salesforce Pardot",
  ],
  toolsIntro:
    "Market leaders share a commitment to using the right technology at the right time. We harness a mix of proven platforms and emerging tools — from modern web and mobile frameworks to AI, IoT, and data platforms — to design a stack that supports your mission today and can evolve with it tomorrow.",
  faqs: [
    {
      question: "When should we choose a project-based engagement instead of a dedicated team or staff augmentation?",
      answer:
        "Choose a project-based model when you have a clearly defined initiative with a start and end point — like an MVP, a specific integration, or a modernization effort — and you want a partner to own delivery end to end. Dedicated teams and staff augmentation are better when you need ongoing capacity and long-term product ownership.",
    },
    {
      question: "How fixed is the scope in a project-based engagement?",
      answer:
        "We start with a well-defined scope so expectations are clear, but use a Time and Materials structure so we can adapt within agreed guardrails as we learn more. If larger changes are needed, we handle them through transparent change management to keep budgets and timelines under control.",
    },
    {
      question: "What do we see during the project — will we have visibility?",
      answer:
        "Yes. You get regular status updates, test reports, demos, and milestone reviews from your Tech Emulsion project manager. You’ll always know what’s been delivered, what’s in progress, and what’s coming next.",
    },
    {
      question: "Can we expand the engagement if the project is successful?",
      answer:
        "Absolutely. Many clients start with a single project-based engagement and then expand into follow-on projects, dedicated teams, or a hybrid model once they see the value of the collaboration.",
    },
    {
      question: "What happens after release?",
      answer:
        "After launch, we can provide hypercare, hand off the solution to your internal team, or scope a new engagement for maintenance and further enhancements. The right approach depends on how critical the system is and what internal capacity you have.",
    },
    {
      question: "Which industries are a good fit for project outsourcing with Tech Emulsion?",
      answer:
        "Our project-based work spans more than 30 industries, including fintech, healthcare, real estate, greentech, retail and consumer, education, marketing, logistics, insurance, and govtech. That breadth lets us apply proven patterns from one domain to another.",
    },
  ],
  stats: [
    { value: "30+ industries", label: "Custom software projects delivered across diverse business verticals" },
    { value: "End‑to‑end", label: "From discovery and architecture through build, test, and launch" },
    { value: "Time & Materials", label: "Transparent contracts that align cost with actual work delivered" },
    { value: "Modern stack", label: "Frontend, backend, cloud, mobile, and data tools tuned to your use case" },
    { value: "SMB & enterprise", label: "Experience working with both smaller businesses and large organizations" },
    { value: "Low‑risk start", label: "A bounded engagement that lets you evaluate Tech Emulsion as a long‑term partner" },
  ],
  sectionHeadings: {
    safeAndEmpowered: "When to consider a project-based engagement",
    everythingYouNeedToKnow: "Tap into project-based development",
    whatMakesSpecial: "A value-based approach",
    sdlc: "How we do it",
    clientOutcomes: "Client outcomes powered by this engagement model",
    tools: "Our technology stack",
    whyPartner: "What makes Tech Emulsion your reliable development partner?",
    faqs: "Frequently Asked Questions",
  },
};

export const solutionsForStartupsContent: EngagementModelContent = {
  peaceOfMindIntro:
    "Startups often need to shift direction or scale up on a dime. That means you need built-in flexibility and a partner who can move in lockstep with you as conditions change. Tech Emulsion offers exactly that: a deep understanding of what technical solutions you need at each stage, plus engineering teams that are just as ambitious as you are.",
  safeAndEmpowered: {
    intro:
      "Our services for startups are designed to match where you are today and where you want to be tomorrow — whether you need a part-time CTO, full-cycle software development, technology advisory, help scaling a mature startup, or a market-ready MVP.",
    introSubtext:"",
      // "Here’s how we support startups at every stage:",
    bullets: [
      "CTO as a Service — Hiring in-house technical leadership is slow; when you need guidance before committing to a full-time CTO, tap our CTO for support on everything from choosing a tech stack to planning your next steps.",
      "Software development services — We bring 3+ years of experience to full-cycle application development and time-saving integrations so you can outpace the competition.",
      "Technology advisory and consulting — Our consultants provide strategic guidance and technical expertise to build a roadmap and turn IT complexity into growth opportunities, from tech stack choices to implementation and launch plans.",
      "Scaling mature startups — When your product is already on the market, we deliver engineering teams and experienced leadership to help you catapult into the next stage of growth.",
      "MVP development — With swift iterations, comprehensive testing, and a focus on scalability, our engineers take you from initial concept to a high-performing, market-ready product.",
    ],
    closing:
      "Whatever stage you’re at, we’re built to move at startup speed without sacrificing quality or security.",
  },
  everythingYouNeedToKnow: {
    intro:
      "We meet startups wherever they are — pre-product, post-MVP, or scaling — and offer flexible partnership models so you can choose what fits best: staff augmentation for plug-and-play capacity, dedicated teams for long-term ownership, or project-based delivery for defined initiatives.",
    introMain:
      "Staff augmentation reinforces your operations with seasoned engineers who work in sync with your in-house team using shared tools and methodologies. Dedicated teams give you a long-term engineering partner to boost time-to-market and maintain a sustainable edge. Project-based delivery lets us manage the full development process so you can focus on growing the company.",
    introRight:
      "All three models are designed for startups that need to move fast and adapt quickly. We help you not only grow and increase profit but also continuously reinvent your business in the face of whatever comes next.",
    researchBullets: [
      {
        cite: "Staff augmentation",
        text: "Ideal for reinforcing operations without burning unnecessary resources, critical projects with tight deadlines and budgets, and seamless integration with your existing team.",
      },
      {
        cite: "Dedicated teams",
        text: "Ideal for long-term projects with growth potential, access to diverse technical expertise, and situations where local hiring is too slow or costly.",
      },
      {
        cite: "Project-based delivery",
        text: "Ideal for first-time collaboration with an external software provider, product expansion requiring specialized expertise, and end-to-end development projects. We handle business analysis, technical documentation, prototyping, design, development, and QA.",
      },
    ],
  },
  whatMakesSpecial: [
    {
      title: "Fintech",
      description:
        "We design robust fintech solutions that streamline financial operations and engage users. Secure transaction solutions, AI-driven analytics, and digital wallet capabilities help financial startups drive innovation and fuel growth they can bank on.",
    },
    {
      title: "Healthtech",
      description:
        "We build healthtech solutions that enhance provider and patient experiences and improve health outcomes, with security always prioritized. Our engineers help startups deliver more personalized, efficient, and accessible healthcare services at lower cost.",
    },
    {
      title: "Edtech",
      description:
        "We fuse technology and education to create transformative learning experiences — from interactive, digital-first platforms to gamification tools — with the needs of learners and educators front and center.",
    },
    {
      title: "Marketing and advertising",
      description:
        "With big data and AI, we equip marketing and advertising startups with personalized automation platforms that amplify customer engagement and drive strong campaigns, optimizing your startup’s brand, performance, and reach.",
    },
    {
      title: "Trusted by ambitious builders",
      description:
        "We help startups and forward-thinking enterprises not just grow and increase profit but continuously reinvent their businesses and industries in the face of whatever comes next.",
    },
    {
      title: "Security and compliance",
      description:
        "We develop solutions quickly without sacrificing quality or security. Tech Emulsion solutions prioritize compliance with country- or industry-specific regulations and emphasize continuous improvement. Your product — like our partnerships — is designed for long-term resilience, security, and results.",
    },
  ],
  ctaBlocks: [
    {
      title: "Engineer startup success with a partner that moves at your speed",
      subtitle:
        "From CTO-as-a-Service and MVP development to scaling mature startups, we bring 3+ years of industry experience and flexible engagement models built for fast-moving teams.",
      buttonText: "Explore solutions for startups",
    },
    {
      title: "Ready to build, scale, or reinvent?",
      subtitle:
        "Whether you’re choosing a tech stack, shipping an MVP, or preparing for your next growth stage, we’re here to help.",
      buttonText: "Talk to us about your startup",
    },
  ],
  sdlcPhases: [
    {
      number: "01",
      title: "CTO as a Service",
      bullets: [
        "Get strategic technical leadership before you’re ready to hire a full-time CTO.",
        "Support on tech stack selection, architecture decisions, and planning your next steps.",
        "A flexible, high-impact option for early-stage and scaling startups.",
      ],
    },
    {
      number: "02",
      title: "Software development services",
      bullets: [
        "Full-cycle application development and time-saving integrations backed by 3+ years of delivery experience.",
        "Expertise tailored so you can outpace the competition without overbuilding.",
        "Flexibility to scale the team up or down as your roadmap changes.",
      ],
    },
    {
      number: "03",
      title: "Technology advisory and consulting",
      bullets: [
        "Strategic guidance and technical expertise to build a roadmap and navigate IT complexity.",
        "Deep dive into your business requirements to inform decisions on technology investments.",
        "Support from tech stack choice through implementation and launch plans.",
      ],
    },
    {
      number: "04",
      title: "Scaling mature startups",
      bullets: [
        "For businesses that already have product-market fit and are ready for the next stage.",
        "Engineering teams and experienced leadership to catapult growth without losing focus.",
        "Processes and practices that support sustainable scaling.",
      ],
    },
    {
      number: "05",
      title: "MVP development",
      bullets: [
        "Swift iterations, comprehensive testing, and a signature focus on scalability.",
        "Efficient navigation from initial concept to a high-performing, market-ready product.",
        "A foundation that can grow with you from launch to scale.",
      ],
    },
  ],
  outcomes: [
    {
      task: "Average client savings per year",
      before: "Higher cost when building and maintaining everything in-house",
      after: "Efficient use of external expertise and flexible models",
      savings: "Meaningful cost savings per year",
    },
    {
      task: "Client exits and growth",
      before: "Slower path to acquisition or IPO without the right tech partner",
      after: "Startups supported through IPOs, acquisitions, and rapid expansion",
      savings: "Proven track record with high-growth outcomes",
    },
    {
      task: "Time to market",
      before: "Months lost to hiring and indecision on stack and architecture",
      after: "Faster path from idea to MVP and from MVP to scale",
      savings: "Quicker launches and iterations",
    },
    {
      task: "Partnership longevity",
      before: "Short-term vendors that churn",
      after: "Long-term partnerships designed for resilience and results",
      savings: "Multi-year relationships that compound value",
    },
  ],
  outcomesIntro:
    "We help startups and forward-thinking enterprises grow, increase profit, and continuously reinvent their businesses. The numbers below reflect the kind of outcomes our startup partners achieve.",
  outcomesClosing:
    "With access to experienced engineers and 3+ years of industry expertise, Tech Emulsion has helped startups reach major milestones including IPOs, acquisitions, and rapid expansion. We’re built to be your long-term technology partner.",
  tools: [
    "React, Next.js, Angular, Vue, React Native, Ember",
    ".NET, PHP, Java, Golang, Node.js, Python, Elixir, Scala",
    "AWS, Azure, Google Cloud, Kubernetes, Serverless",
    "iOS, Android, React Native, Flutter, Xamarin, PWA",
    "Selenium, Cucumber, TestNG, SpecFlow, TestComplete",
    "Solidity, Web3, Ethereum (blockchain)",
    "NumPy, TensorFlow, Azure Cognitive Services, Google Cloud AutoML (AI/ML)",
    "Hadoop, Apache Spark, Pandas, Kafka (big data)",
    "Scrum, Kanban, TDD/BDD/DDD",
    "MySQL, PostgreSQL, MongoDB, DynamoDB",
    "Payment gateways, Google Maps, social and booking APIs",
    "Salesforce (Lightning, Apex, AppExchange, Pardot)",
  ],
  toolsIntro:
    "We use a modern, battle-tested tech stack across frontend, backend, cloud, mobile, AI/ML, and data — so your startup builds on tools that scale and stay relevant as you grow.",
  faqs: [
    {
      question: "Which partnership model is best for an early-stage startup?",
      answer:
        "It depends on your stage and needs. Staff augmentation works well when you have a small in-house team and need to reinforce it for a critical push. Dedicated teams suit long-term product ownership and scaling. Project-based delivery is ideal for a first engagement or a clearly scoped initiative like an MVP or a single product expansion.",
    },
    {
      question: "Do you offer CTO-level support without a full-time hire?",
      answer:
        "Yes. Our CTO-as-a-Service gives you strategic technical leadership — from tech stack and architecture to roadmap planning — on a flexible basis until you’re ready to bring a full-time CTO in-house.",
    },
    {
      question: "How do you handle security and compliance for startups?",
      answer:
        "We develop quickly without sacrificing quality or security. Our solutions prioritize compliance with country- or industry-specific regulations and emphasize continuous improvement. Your product is designed for long-term resilience and security from day one.",
    },
    {
      question: "Can you help us scale after we’ve found product-market fit?",
      answer:
        "Yes. Our scaling-mature-startups offering delivers engineering teams and experienced leadership to support your next stage of growth — without the delay and cost of hiring everything in-house.",
    },
    {
      question: "What industries do you serve for startup solutions?",
      answer:
        "We work across fintech, healthtech, edtech, marketing and advertising, and many other domains. Our 3+ years of industry experience let us apply proven patterns so you can move faster and avoid common pitfalls.",
    },
    {
      question: "How long do typical startup partnerships last?",
      answer:
        "Our partnerships are designed for the long term. Many last multiple years as startups move from MVP to scale to exit. We focus on resilience, security, and results so the relationship and the product both stand the test of time.",
    },
  ],
  stats: [
    { value: "3+ years", label: "Industry expertise powering startup delivery and advisory" },
    { value: "Flexible models", label: "Staff augmentation, dedicated teams, and project-based delivery" },
    { value: "Client milestones", label: "Startups supported through IPOs, acquisitions, and rapid expansion" },
    { value: "Multi-year", label: "Partnerships built for long-term resilience and results" },
    { value: "Full stack", label: "From CTO-as-a-Service and MVP development to scaling mature startups" },
    { value: "Security-first", label: "Compliance and quality without slowing down your roadmap" },
  ],
  sectionHeadings: {
    safeAndEmpowered: "Our IT Services for Startups",
    everythingYouNeedToKnow: "Partnership Models",
    whatMakesSpecial: "IT Solutions for Every Domain",
    sdlc: "Our IT Services for Startups",
    clientOutcomes: "We Engineer Startup Success",
    tools: "Tools and platforms that support delivery",
    whyPartner: "We Engineer Startup Success",
    faqs: "Frequently Asked Questions",
  },
};

export const solutionsForEnterprisesContent: EngagementModelContent = {
  peaceOfMindIntro:
    "Enterprise organizations operate in complex environments where technology must scale, integrate with existing systems, and support continuous innovation. Tech Emulsion’s enterprise software development services help large organizations modernize infrastructure, build resilient digital platforms, and accelerate product innovation while maintaining security, reliability, and compliance.",
  safeAndEmpowered: {
    intro:
      "Our engineering teams partner with enterprise organizations to design and deliver large-scale technology solutions that improve operational efficiency and enable long-term growth. By combining deep technical expertise with strategic collaboration, we help enterprises transform ideas into high-impact digital products.",
    introSubtext:
      "From discovery and architecture planning through development, integration, and optimization, we ensure every solution is built for scalability, performance, and reliability.",
    bullets: [
      "Full-cycle software development — Strategic discovery and planning, scalable architecture, enterprise-grade applications, automated testing, and technical audits to keep systems performing efficiently.",
      "Enterprise-grade security and compliance — Secure software development, strict quality standards, and compliance with global industry regulations through secure infrastructure, code reviews, and continuous monitoring.",
      "Transparent and agile delivery — Regular progress updates, transparent workflows, and dedicated delivery management so you have clear oversight of milestones, timelines, and outcomes.",
      "DevOps, cloud, and infrastructure optimization — Advanced DevOps practices, cloud-native architecture, and migration strategies for flexible, scalable platforms.",
      "Enterprise modernization and legacy transformation — Refactoring legacy applications, cloud migration, and modern architectures to increase efficiency and unlock new opportunities.",
      "Flexible engagement models — Product discovery workshops, project outsourcing, staff augmentation, and dedicated engineering teams tailored to your enterprise needs.",
    ],
    closing:
      "With access to experienced engineers and 3+ years of enterprise delivery experience, we help organizations scale teams efficiently, align with enterprise goals, and maintain high standards of technical excellence.",
  },
  everythingYouNeedToKnow: {
    intro:
      "Every enterprise operates differently, so we offer flexible engagement models that adapt to your business needs and project requirements. You can combine discovery, outsourcing, augmentation, and dedicated teams in the way that fits your organization.",
    introMain:
      "Product discovery workshops help define project goals and technology strategies before development begins. Project outsourcing delegates complete software development projects to our engineering teams, who manage the entire lifecycle. Staff augmentation provides specialized engineers who integrate with your internal teams to accelerate development. Dedicated engineering teams act as long-term partners for complex initiatives and evolving product ecosystems.",
    introRight:
      "Our global network of engineering talent allows enterprises to build high-performing development teams quickly — without the challenges of traditional hiring — while collaborating closely with internal stakeholders to align with enterprise goals and maintain technical excellence.",
    researchBullets: [
      {
        cite: "Discovery workshops",
        text: "Define project goals and technology strategies before development begins, so investments are aligned with business outcomes.",
      },
      {
        cite: "Project outsourcing",
        text: "Delegate complete software development projects to experienced engineering teams who manage the full lifecycle from concept to deployment.",
      },
      {
        cite: "Staff augmentation",
        text: "Access specialized engineers who integrate directly with internal teams to accelerate development and fill skill gaps.",
      },
      {
        cite: "Dedicated teams",
        text: "Long-term engineering partners who support complex enterprise initiatives and evolving product ecosystems.",
      },
    ],
  },
  whatMakesSpecial: [
    {
      title: "Full-Cycle Software Development",
      description:
        "Our enterprise development services cover the complete software lifecycle. Strategic discovery and planning workshops set the right technical direction; our engineers design scalable architectures, build enterprise-grade applications, and ensure long-term maintainability. Automated testing and robust QA ensure reliability, while technical audits and optimization keep systems performing efficiently.",
    },
    {
      title: "Enterprise-Grade Security and Compliance",
      description:
        "Security and reliability are fundamental. Our processes prioritize secure software development, strict quality standards, and compliance with global industry regulations. Through secure infrastructure design, code reviews, and continuous monitoring, we help enterprises protect systems, data, and users while maintaining high performance and resilience.",
    },
    {
      title: "Transparent and Agile Delivery",
      description:
        "Enterprise development requires visibility and alignment. Our agile processes keep you fully informed and involved throughout the lifecycle. Regular progress updates, transparent workflows, and dedicated delivery management provide clear oversight of milestones, timelines, and outcomes — eliminating uncertainty and enabling faster, more confident decision-making.",
    },
    {
      title: "DevOps, Cloud, and Infrastructure Optimization",
      description:
        "Modern enterprise platforms depend on reliable, scalable infrastructure. We implement advanced DevOps practices that streamline deployment, automate workflows, and improve reliability. Cloud-native architecture, infrastructure optimization, and seamless migration strategies give you flexible platforms that support evolving business demands.",
    },
    {
      title: "Enterprise Modernization and Legacy Transformation",
      description:
        "We help enterprises transform legacy systems into flexible, modern platforms. By refactoring applications, migrating to the cloud, and implementing modern architectures, we enable increased efficiency, improved performance, and new opportunities for innovation.",
    },
    {
      title: "Engineering Teams Built for Enterprise Growth",
      description:
        "Our global network of engineering talent lets you build high-performing development teams quickly. With access to experienced engineers and specialists across multiple technology domains, organizations can scale efficiently without the challenges of traditional hiring, while maintaining high standards of technical excellence.",
    },
  ],
  ctaBlocks: [
    {
      title: "Modernize, scale, and innovate with confidence",
      subtitle:
        "From infrastructure modernization and legacy transformation to new digital platforms, we help enterprises balance operational stability with continuous innovation.",
      buttonText: "Explore enterprise solutions",
    },
    {
      title: "Partner with an engineering team built for enterprise scale",
      subtitle:
        "Flexible engagement models, enterprise-grade security, and transparent delivery — so you can move faster without compromising compliance or quality.",
      buttonText: "Talk to us about enterprise solutions",
    },
  ],
  sdlcPhases: [
    {
      number: "01",
      title: "Full-Cycle Software Development",
      bullets: [
        "Strategic discovery and planning workshops help identify the right technical direction for complex enterprise projects.",
        "Our engineers design scalable architectures, build enterprise-grade applications, and ensure long-term maintainability through modern engineering practices.",
        "Automated testing and robust quality assurance processes help ensure reliability, while targeted technical audits and optimization strategies keep systems performing efficiently.",
      ],
    },
    {
      number: "02",
      title: "Enterprise-Grade Security and Compliance",
      bullets: [
        "Security and reliability are fundamental for enterprise systems. Our engineering processes prioritize secure software development, strict quality standards, and compliance with global industry regulations.",
        "Through secure infrastructure design, code reviews, and continuous monitoring, we help enterprises protect their systems, data, and users.",
        "High performance and resilience are maintained throughout the lifecycle.",
      ],
    },
    {
      number: "03",
      title: "Transparent and Agile Delivery",
      bullets: [
        "Enterprise software development requires visibility and alignment across teams. Our agile processes ensure that organizations remain fully informed and involved throughout the development lifecycle.",
        "Regular progress updates, transparent workflows, and dedicated delivery management provide clear oversight of project milestones, timelines, and outcomes.",
        "This approach eliminates uncertainty and enables faster, more confident decision-making.",
      ],
    },
    {
      number: "04",
      title: "DevOps, Cloud, and Infrastructure Optimization",
      bullets: [
        "Modern enterprise platforms depend on reliable infrastructure and scalable cloud environments. Our teams implement advanced DevOps practices that streamline deployment, automate workflows, and improve system reliability.",
        "Through cloud-native architecture, infrastructure optimization, and seamless migration strategies, enterprises gain flexible and scalable platforms.",
        "Platforms are capable of supporting evolving business demands.",
      ],
    },
    {
      number: "05",
      title: "Enterprise Modernization and Legacy Transformation",
      bullets: [
        "Many enterprise organizations rely on legacy systems that limit innovation and scalability. Our modernization services help companies transform existing platforms into flexible, modern systems.",
        "By refactoring legacy applications, migrating systems to the cloud, and implementing modern architectures, we enable enterprises to increase efficiency, improve performance, and unlock new opportunities for innovation.",
      ],
    },
  ],
  outcomes: [
    {
      task: "Scale development capacity without traditional hiring",
      before: "Long cycles to recruit, onboard, and retain enterprise-grade talent",
      after: "Access to experienced engineers and specialists who integrate with your goals",
      savings: "Faster time to full productivity",
    },
    {
      task: "Modernize legacy systems and infrastructure",
      before: "Legacy systems limiting innovation and scalability",
      after: "Refactored applications, cloud migration, and modern architectures",
      savings: "Increased efficiency and new opportunities",
    },
    {
      task: "Maintain security and compliance at scale",
      before: "Compliance and security gaps as systems grow",
      after: "Secure development practices and continuous monitoring aligned with regulations",
      savings: "Reduced risk and sustained compliance",
    },
    {
      task: "Improve delivery visibility and decision-making",
      before: "Uncertainty around milestones, timelines, and outcomes",
      after: "Regular updates, transparent workflows, and dedicated delivery management",
      savings: "Faster, more confident decisions",
    },
  ],
  outcomesIntro:
    "Enterprise software development demands scale, security, and clarity. The outcomes below reflect how Tech Emulsion helps large organizations modernize, deliver with confidence, and stay ahead in rapidly evolving markets.",
  outcomesClosing:
    "Through collaborative partnerships, advanced technology expertise, and scalable development processes, we help enterprises transform their digital capabilities and balance immediate needs with long-term strategic growth.",
  tools: [
    "Cloud: AWS, Azure, Google Cloud, Kubernetes, serverless",
    "Backend: .NET, Java, Node.js, Python, Go, Scala",
    "Frontend: React, Angular, Vue, Next.js",
    "Data & AI: Big data systems, advanced analytics, AI/ML platforms",
    "DevOps: CI/CD, infrastructure as code, monitoring and observability",
    "Databases: SQL and NoSQL, data warehouses, streaming",
    "Security: Secure SDLC, compliance frameworks, identity and access management",
    "Enterprise: ERP/CRM integration, legacy modernization, API ecosystems",
  ],
  toolsIntro:
    "Our engineers work across a wide range of technologies and enterprise platforms — including modern cloud infrastructure, artificial intelligence, big data systems, and advanced analytics. By integrating cutting-edge technology with proven engineering practices, we help enterprises build intelligent digital platforms that support innovation, automation, and scalable growth.",
  faqs: [
    {
      question: "How do you ensure security and compliance for enterprise systems?",
      answer:
        "We prioritize secure software development, strict quality standards, and compliance with global industry regulations. Our processes include secure infrastructure design, code reviews, and continuous monitoring so enterprises can protect their systems, data, and users while maintaining high performance and resilience.",
    },
    {
      question: "What engagement models do you offer for enterprises?",
      answer:
        "We offer product discovery workshops, project outsourcing, staff augmentation, and dedicated engineering teams. Each model can be used alone or combined so you can adapt to unique business needs and project requirements.",
    },
    {
      question: "Can you help us modernize legacy systems?",
      answer:
        "Yes. Our modernization services help enterprises transform legacy platforms into flexible, modern systems through refactoring, cloud migration, and modern architecture — increasing efficiency, improving performance, and unlocking new opportunities for innovation.",
    },
    {
      question: "How do you keep us informed during large enterprise projects?",
      answer:
        "We use agile processes with regular progress updates, transparent workflows, and dedicated delivery management. You get clear oversight of milestones, timelines, and outcomes so you can make faster, more confident decisions without uncertainty.",
    },
    {
      question: "Do you work with our existing infrastructure and tools?",
      answer:
        "Yes. We design solutions to integrate with your existing systems, cloud environments, and tooling. Our focus is on scalability, performance, and long-term maintainability so new work fits seamlessly into your enterprise landscape.",
    },
    {
      question: "How do you support both innovation and operational stability?",
      answer:
        "Enterprise companies need to innovate while maintaining stability. We deliver technology solutions that support immediate operational needs and long-term strategic growth through collaborative partnerships, advanced expertise, and scalable development processes.",
    },
  ],
  stats: [
    { value: "3+ years", label: "Enterprise software development and delivery experience" },
    { value: "Full-cycle", label: "From discovery and architecture through development, security, and optimization" },
    { value: "Flexible models", label: "Discovery workshops, project outsourcing, staff augmentation, dedicated teams" },
    { value: "Security & compliance", label: "Secure SDLC, quality standards, and alignment with global regulations" },
    { value: "Modernization", label: "Legacy transformation, cloud migration, and modern architecture" },
    { value: "Transparent delivery", label: "Agile processes, regular updates, and dedicated delivery management" },
  ],
  sectionHeadings: {
    safeAndEmpowered: "Enterprise Software Engineering Expertise",
    everythingYouNeedToKnow: "Flexible Enterprise Engagement Models",
    whatMakesSpecial: "Enterprise Software Engineering Expertise",
    sdlc: "Full-Cycle Software Development and Delivery",
    clientOutcomes: "Driving Enterprise Innovation",
    tools: "Enterprise Technology Expertise",
    whyPartner: "Engineering Teams Built for Enterprise Growth",
    faqs: "Frequently Asked Questions",
  },
};

export const solutionsForAiCompaniesContent: EngagementModelContent = {
  peaceOfMindIntro:
    "Artificial intelligence is transforming how businesses innovate, automate processes, and unlock new opportunities for growth. With the right combination of high-quality data, advanced algorithms, and scalable infrastructure, AI solutions can turn complex challenges into powerful business outcomes. Our AI software development approach combines strong engineering expertise, proven methodologies, and continuous monitoring to ensure that every solution delivers measurable value and long-term performance.",
  safeAndEmpowered: {
    intro:
      "Our AI software development services help companies move from idea to production — whether you need a new AI product, enterprise-grade AI solutions, a proof of concept, or AI integrated into existing systems. We support the full lifecycle with consulting, training, and optimization so your AI initiatives align with business goals and deliver reliable results.",
    introSubtext:
      "Here’s how we support AI companies and product teams:",
    bullets: [
      "AI product development — We help transform innovative ideas into fully functional AI-powered products. From concept validation and feature prioritization to full implementation and ongoing improvements, we build high-performance AI products using both open-source and custom models, with market and audience analysis so the product aligns with real user needs.",
      "Enterprise AI development — Our engineers design enterprise-grade AI solutions that unlock the full value of your data, streamline operations, enhance decision-making, and integrate seamlessly with existing systems. From data preparation and model selection through training, optimization, and deployment, we ensure solutions operate efficiently and deliver reliable results.",
      "Proof of concept and MVP development — When you want to validate an AI idea or reduce development risk, a PoC helps determine technical feasibility and an MVP enables early user testing and feedback. These early stages let you refine the product and build confidence before full-scale implementation.",
      "AI integration for existing software — We enhance your current products and internal systems with intelligent features such as predictive analytics, automation, and natural language capabilities while maintaining system stability and compliance with industry regulations.",
      "AI consulting and advisory — Our consultants help you define your AI roadmap, select the right technologies, and identify the most valuable opportunities for AI implementation so every initiative aligns with business goals and delivers measurable results.",
      "AI training and optimization — We prepare datasets, train machine learning models, and evaluate performance for high accuracy and reliability. We also analyze existing AI models and recommend improvements to increase efficiency and output quality.",
    ],
    closing:
      "From NLP and computer vision to structured data analysis and industry-specific use cases, we combine deep technical expertise with scalable infrastructure and modern development practices so you can unlock new levels of efficiency, automation, and business intelligence.",
  },
  everythingYouNeedToKnow: {
    intro:
      "Next-generation AI solutions span natural language processing, computer vision, and structured data analysis — and apply across fintech, healthtech, real estate, retail, education, and more. Tech Emulsion helps you choose the right use cases, build and deploy models responsibly, and integrate AI into products and operations without compromising stability or compliance.",
    introMain:
      "Natural language processing enables systems to understand and process human language at scale — from chatbots and virtual assistants to speech recognition, sentiment analysis, and machine translation. Computer vision lets machines interpret and analyze visual information for image recognition, OCR, and augmented reality. Structured data analysis extracts insights from large datasets to support predictive and prescriptive analytics, recommendation engines, and segmentation.",
    introRight:
      "We apply these capabilities across industries: fintech for risk analysis, fraud detection, and algorithmic trading; healthtech for diagnostics, remote monitoring, and personalized care; real estate for property chatbots and virtual tours; retail and ecommerce for recommendations, dynamic pricing, and demand forecasting; and education for adaptive learning and administrative automation.",
    researchBullets: [
      {
        cite: "NLP",
        text: "Chatbots, virtual assistants, speech recognition, text-to-speech, summarization, sentiment analysis, machine translation, and multilingual content localization.",
      },
      {
        cite: "Computer vision",
        text: "Image recognition, facial recognition, OCR, and augmented reality applications.",
      },
      {
        cite: "Structured data analysis",
        text: "Predictive and prescriptive analytics, recommendation engines, and customer or market segmentation.",
      },
    ],
  },
  whatMakesSpecial: [
    {
      title: "AI product development",
      description:
        "We help companies transform innovative ideas into fully functional AI-powered products. From concept validation and feature prioritization to full implementation and ongoing improvements, our teams build high-performance AI products using both open-source and custom models, with market and audience analysis to ensure alignment with real user needs and competitiveness in rapidly evolving markets.",
    },
    {
      title: "Enterprise AI development",
      description:
        "Our engineers design enterprise-grade AI solutions that help organizations unlock the full value of their data. These solutions streamline operations, enhance decision-making, and integrate seamlessly with existing enterprise systems — from data preparation and model selection through training, optimization, and deployment.",
    },
    {
      title: "Proof of concept and MVP development",
      description:
        "When businesses want to validate an AI idea or reduce development risks, a PoC helps determine technical feasibility while an MVP enables early user testing and feedback. These early stages allow organizations to refine their product and build confidence before full-scale implementation.",
    },
    {
      title: "AI integration for existing software",
      description:
        "Organizations can enhance their current products and internal systems by integrating AI capabilities. Our teams integrate intelligent features such as predictive analytics, automation, and natural language capabilities while maintaining system stability and compliance with industry regulations.",
    },
    {
      title: "AI consulting and advisory",
      description:
        "Choosing the right AI strategy requires careful planning. Our consultants help organizations define their AI roadmap, select the right technologies, and identify the most valuable opportunities for AI implementation so every initiative aligns with business goals and delivers measurable results.",
    },
    {
      title: "AI training and optimization",
      description:
        "Successful AI systems require high-quality data and continuous improvement. Our engineers prepare datasets, train machine learning models, and evaluate performance to achieve high accuracy and reliability. We also analyze existing AI models and recommend improvements to increase efficiency and output quality.",
    },
  ],
  ctaBlocks: [
    {
      title: "Turn data into actionable insights with AI",
      subtitle:
        "From PoC and MVP to enterprise AI and integration, we help you build intelligent products and future-ready platforms that support sustainable growth.",
      buttonText: "Explore AI solutions",
    },
    {
      title: "AI solutions built for innovation",
      subtitle:
        "Our AI engineering teams help businesses create intelligent products and build technology platforms that unlock new levels of efficiency, automation, and business intelligence.",
      buttonText: "Talk to us about AI development",
    },
  ],
  sdlcPhases: [
    {
      number: "01",
      title: "Mathematical formalization",
      bullets: [
        "Every AI project begins with clearly defined objectives and measurable performance metrics.",
        "We establish accuracy, precision, recall, and other evaluation indicators so success is defined up front.",
      ],
    },
    {
      number: "02",
      title: "Data collection",
      bullets: [
        "Reliable data sources are identified and prepared through structured data pipelines and ETL processes.",
        "We ensure high-quality inputs for AI training and validate data availability and suitability.",
      ],
    },
    {
      number: "03",
      title: "Exploratory data analysis",
      bullets: [
        "Data scientists analyze datasets to uncover patterns, identify anomalies, and validate key assumptions before model development begins.",
        "Findings inform feature design and model selection.",
      ],
    },
    {
      number: "04",
      title: "Data preparation",
      bullets: [
        "Data is cleaned, structured, and enhanced to improve model performance.",
        "This stage may involve feature engineering, data transformation, and dataset augmentation.",
      ],
    },
    {
      number: "05",
      title: "Model training and validation",
      bullets: [
        "Machine learning models are trained using selected datasets and validated using independent test data.",
        "We ensure accurate predictions and reliable outputs before deployment.",
      ],
    },
    {
      number: "06",
      title: "AI deployment",
      bullets: [
        "Once validated, the model is integrated into production environments.",
        "We connect the model to applications, APIs, or enterprise systems to deliver real-time insights.",
      ],
    },
    {
      number: "07",
      title: "AI monitoring",
      bullets: [
        "Continuous monitoring ensures that models maintain performance over time.",
        "We track system behavior, retrain models when necessary, and improve results as new data becomes available.",
      ],
    },
  ],
  outcomes: [
    {
      task: "Deliver AI products from concept to production",
      before: "Long cycles and unclear feasibility without specialized AI teams",
      after: "Structured PoC, MVP, and full implementation with measurable outcomes",
      savings: "Faster path to market and reduced risk",
    },
    {
      task: "Integrate AI into existing systems",
      before: "Legacy systems and siloed data limiting AI adoption",
      after: "Intelligent features and analytics with stability and compliance",
      savings: "Higher efficiency and better decisions",
    },
    {
      task: "Scale AI across the organization",
      before: "Ad hoc models and limited engineering capacity",
      after: "Enterprise-grade AI with training, optimization, and monitoring",
      savings: "Reliable, long-term performance",
    },
    {
      task: "Align AI initiatives with business goals",
      before: "Unclear ROI and scattered AI experiments",
      after: "Defined roadmap, right technologies, and measurable results",
      savings: "Strategic impact and sustainable growth",
    },
  ],
  outcomesIntro:
    "AI solutions built for innovation require the right expertise, data, and infrastructure. The outcomes below reflect how Tech Emulsion helps AI companies and product teams deliver measurable value and long-term performance.",
  outcomesClosing:
    "Artificial intelligence has become a core driver of digital transformation across industries. By combining deep technical expertise with scalable infrastructure and modern development practices, our AI engineering teams help businesses turn data into actionable insights, create intelligent products, and build future-ready technology platforms that support sustainable growth.",
  tools: [
    "Programming: Python, R, C++",
    "Machine learning: TensorFlow, PyTorch, scikit-learn, Keras, XGBoost, LightGBM, CatBoost",
    "Deep learning: fast.ai, PyTorch, Transformers, PyTorch Lightning",
    "NLP: NLTK, spaCy, Transformers, Gensim, FastText",
    "Computer vision: OpenCV, YOLO, Mask R-CNN, Detectron2, Torchvision",
    "Cloud: Amazon SageMaker, Azure Machine Learning, Google AI Platform, Google Cloud AutoML",
    "Big data: Apache Hadoop, Apache Spark, Apache Kafka",
  ],
  toolsIntro:
    "Our AI technology stack spans programming languages, machine learning and deep learning frameworks, NLP and computer vision tools, and major cloud and big data platforms. We use the right combination of open-source and cloud-native tools to build, train, deploy, and monitor AI solutions at scale.",
  faqs: [
    {
      question: "How do you approach AI product development?",
      answer:
        "We help transform innovative ideas into fully functional AI-powered products. From concept validation and feature prioritization to full implementation and ongoing improvements, we build high-performance AI products using both open-source and custom models. Our process includes market and audience analysis so the product aligns with real user needs and stays competitive.",
    },
    {
      question: "Can you help us validate an AI idea before full-scale development?",
      answer:
        "Yes. We offer proof of concept (PoC) and MVP development. A PoC helps determine technical feasibility, while an MVP enables early user testing and feedback. These stages let you refine the product and build confidence before committing to full-scale implementation.",
    },
    {
      question: "Do you integrate AI into existing software and systems?",
      answer:
        "Yes. We enhance current products and internal systems with intelligent features such as predictive analytics, automation, and natural language capabilities while maintaining system stability and compliance with industry regulations.",
    },
    {
      question: "What industries do you serve for AI solutions?",
      answer:
        "We deliver AI solutions across fintech, healthtech, real estate, retail and ecommerce, education, and more. Use cases include risk analysis, fraud detection, diagnostics, recommendation engines, dynamic pricing, adaptive learning, and intelligent automation.",
    },
    {
      question: "How do you ensure AI models perform well over time?",
      answer:
        "We focus on high-quality data, rigorous training and validation, and continuous monitoring. We track system behavior, retrain models when necessary, and recommend improvements to increase efficiency and output quality as new data becomes available.",
    },
    {
      question: "Do you provide AI consulting and strategy?",
      answer:
        "Yes. Our consultants help organizations define their AI roadmap, select the right technologies, and identify the most valuable opportunities for AI implementation so every initiative aligns with business goals and delivers measurable results.",
    },
  ],
  stats: [
    { value: "3+ years", label: "Experience in AI and software development" },
    { value: "AI specialists", label: "Engineers and specialists focused on AI, ML, and data" },
    { value: "AI projects", label: "Completed AI projects across industries and use cases" },
    { value: "Cloud partnerships", label: "Strategic experience with AWS, Microsoft, and Google AI and cloud platforms" },
    { value: "Full lifecycle", label: "From PoC and MVP to enterprise AI, integration, and monitoring" },
    { value: "Measurable value", label: "Focus on outcomes, accuracy, and long-term performance" },
  ],
  sectionHeadings: {
    safeAndEmpowered: "AI Software Development Services",
    everythingYouNeedToKnow: "Next-Generation AI Solutions",
    whatMakesSpecial: "AI Software Development Services",
    sdlc: "AI Model Development Process",
    clientOutcomes: "AI Expertise and Experience",
    tools: "AI Technology Stack",
    whyPartner: "AI Solutions Built for Innovation",
    faqs: "Frequently Asked Questions",
  },
};

export function getEngagementModelContent(slug: string): EngagementModelContent | null {
  if (slug === "ai-enabled-teams") return aiEnabledTeamsContent;
  if (slug === "staff-augmentation") return staffAugmentationContent;
  if (slug === "dedicated-teams") return dedicatedTeamsContent;
  if (slug === "project-outsourcing") return projectOutsourcingContent;
  if (slug === "solutions-for-startups") return solutionsForStartupsContent;
  if (slug === "solutions-for-enterprises") return solutionsForEnterprisesContent;
  if (slug === "solutions-for-ai-companies") return solutionsForAiCompaniesContent;
  return null;
}
