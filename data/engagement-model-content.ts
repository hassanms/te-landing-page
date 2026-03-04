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
    { value: "ISO-27001", label: "ISO-27001 certified security management system ensuring compliance and peace of mind at scale" },
  ],
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
    { value: "20+ years", label: "Experience building and integrating remote development teams" },
    { value: "30+ industries", label: "Domain experience spanning fintech, healthtech, ecommerce, and more" },
    { value: "Flexible", label: "Engagement structures that adapt to your roadmap, not the other way around" },
    { value: "Specialists", label: "Access to engineers across backend, frontend, mobile, DevOps, data, and QA" },
    { value: "Low overhead", label: "We handle HR, contracts, and people ops so you can focus on delivery" },
    { value: "Partner-first", label: "A collaboration model built on transparency, long-term fit, and shared outcomes" },
  ],
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
    { value: "20+ years", label: "Experience delivering complex software products and platforms" },
    { value: "Cross‑functional", label: "Teams combining engineering, QA, design, and delivery leadership" },
    { value: "Global", label: "Access to remote talent across multiple regions and time zones" },
    { value: "Scalable", label: "Engagements that can grow, shrink, or re-balance as your roadmap evolves" },
    { value: "ISO‑aligned", label: "Security and quality practices designed for enterprise expectations" },
    { value: "Weeks", label: "Typical time to kick off an initial dedicated team squad" },
  ],
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
        "We combine startup thinking with decades of delivery experience to design project scopes that maximize business value. From prototypes and MVPs to full custom builds, we focus on outcomes, not just outputs.",
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
};

export function getEngagementModelContent(slug: string): EngagementModelContent | null {
  if (slug === "ai-enabled-teams") return aiEnabledTeamsContent;
  if (slug === "staff-augmentation") return staffAugmentationContent;
  if (slug === "dedicated-teams") return dedicatedTeamsContent;
  if (slug === "project-outsourcing") return projectOutsourcingContent;
  return null;
}
