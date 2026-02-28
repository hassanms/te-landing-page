/**
 * Tech Emulsion Services Data
 * Shared across main services page, home page, and service subpages
 */

export interface ValueProp {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceOffering {
  title: string;
  description: string;
  icon: string;
}

export interface IndustryItem {
  name: string;
  description: string;
  icon: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  valueProps: ValueProp[];
  offerings: ServiceOffering[];
  industries?: IndustryItem[];
  benefits: BenefitItem[];
  faqs: FAQItem[];
}

// Shared benefits across all services (PureLogics-style copy)
export const sharedBenefits: BenefitItem[] = [
  {
    title: "Unmatched Talent",
    description:
      "Our engineers possess best-in-class expertise to integrate cutting-edge solutions into your business.",
    icon: "FiUsers",
  },
  {
    title: "Custom Solutions",
    description:
      "We do custom software development to fit your industry and requirements so that you can get maximum output from it.",
    icon: "FiSettings",
  },
  {
    title: "Transformative Innovation",
    description:
      "We strive to grow your business progress with innovative practices and modern technology.",
    icon: "FiGlobe",
  },
  {
    title: "Exceptional UX",
    description:
      "From usability to seamless interaction, user experience matters a lot. That's why our development services always endeavor to create an intuitive experience in everything we build.",
    icon: "FiSmartphone",
  },
  {
    title: "Elite Security & Privacy",
    description:
      "Your data privacy is a primal responsibility that we fulfill remarkably. We are ready to sign an NDA to assure you that your data is protected without any breaches.",
    icon: "FiShield",
  },
  {
    title: "Maintenance & Support",
    description:
      "After delivery, we don't leave you alone. Our engineers are always available for 24/7 support and maintenance to keep your applications updated.",
    icon: "FiHeadphones",
  },
];

// Shared industries across services (image-style: icon, heading, description)
export const sharedIndustries: IndustryItem[] = [
  {
    name: "Internet & Technology",
    description:
      "Accelerating business operations with automation, data solutions, and digital tools is a genuine benefit. Our team has accomplished various development projects for the IT industry.",
    icon: "FiCpu",
  },
  {
    name: "Healthcare",
    description:
      "We have worked on technology solutions for the healthcare industry, enabling exceptional patient care, robust systems, and better treatment workflows with our software solutions.",
    icon: "FiActivity",
  },
  {
    name: "Retail",
    description:
      "Our solutions improve inventory management, demand forecasting, and customer satisfaction, ultimately leading to revenue growth for retail businesses.",
    icon: "FiShoppingCart",
  },
  {
    name: "Banking & Finance",
    description:
      "Businesses are experiencing advanced customer engagement, early fraud detection, deep data insights, and financial services optimization by integrating our solutions into their systems.",
    icon: "FiDollarSign",
  },
  {
    name: "Travel",
    description:
      "From online booking to destination recommendation, modern technology has enhanced the competencies of travel agencies. We aid travel companies by breaking barriers to traditional travel and equipping them with modern technology.",
    icon: "FiGlobe",
  },
  {
    name: "Web 3.0",
    description:
      "3D ecosystems, avatar modeling, and NFTs can come into existence quickly with our technology solutions collectively empowering the Web 3.0 world. Our experts have the proper expertise to redefine your industry.",
    icon: "FiBox",
  },
];

// Impact stats for services page hero (Gojilabs-style proof bar)
export const impactStats = [
  { stat: "100%", label: "Client Satisfaction", icon: "FiCheckCircle" },
  { stat: "50+", label: "Clients Served", icon: "FiUsers" },
  { stat: "8+", label: "Service Areas", icon: "FiLayers" },
  { stat: "24/7", label: "Support Available", icon: "FiHeadphones" },
];

// Outcome-focused results copy for services section
export const resultsCopy = [
  { stat: "30%", label: "Faster Delivery" },
  { stat: "50+", label: "Clients Served" },
  { stat: "100+", label: "Projects Delivered" },
  { stat: "24/7", label: "Support Available" },
];

// Client logos for "Trusted by" strip (paths relative to public)
// Light mode: black, dark mode: white. keepOriginal: no filter (IPG only)
export const trustedByLogos = [
  { src: "/assets/clients/teadit.png", alt: "Teadit" },
  { src: "/assets/clients/Artis-lab.png", alt: "Artis" },
  { src: "/assets/clients/sonara.svg", alt: "Sonara" },
  { src: "/assets/clients/POPCARD_4.png", alt: "Popcard" },
  { src: "/assets/clients/nearshore.png", alt: "Nearshore" },
  { src: "/assets/clients/Sprintzeal_Logo.webp", alt: "Sprintzeal" },
  { src: "/assets/clients/farmin-white.png", alt: "Farmin" },
  { src: "/assets/clients/jarvis-logo.png", alt: "Jarvis" },
  { src: "/assets/clients/ibatu.png", alt: "Ibatu" },
  { src: "/assets/clients/Podcast-Beacon.png", alt: "Podcast-Beacon" },
  { src: "/assets/clients/Pensa.webp", alt: "Pensa" },
  { src: "/assets/clients/logo-black-small.png", alt: "Logo" },
  { src: "/assets/clients/Logo_IPG.jpg", alt: "IPG", keepOriginal: true },
  { src: "/assets/clients/atarim-white.svg", alt: "Atarim" },
  { src: "/assets/clients/republic_power_logo.jpeg", alt: "Republic Power" },
  { src: "/assets/clients/alifa.PNG", alt: "Alifa" },
  { src: "/assets/clients/Bubble.1.png", alt: "Bubble" },
];

// Main value propositions for the services landing page
export const mainValueProps: ValueProp[] = [
  {
    title: "Scalable Solutions",
    description: "Build for growth with architecture designed to scale with your business.",
    icon: "FiTrendingUp",
  },
  {
    title: "AI-Powered Innovation",
    description: "Leverage cutting-edge AI and automation to transform your operations.",
    icon: "FiCpu",
  },
  {
    title: "Expert Delivery",
    description: "Experienced teams deliver production-ready solutions on time.",
    icon: "FiCheckCircle",
  },
  {
    title: "24/7 Support",
    description: "Ongoing maintenance and support to keep your systems running smoothly.",
    icon: "FiHeadphones",
  },
];

export const servicesData: ServiceData[] = [
  {
    id: 1,
    slug: "agentic-ai-engineering",
    title: "Agentic AI Engineering",
    shortDescription:
      "We build autonomous AI agents that reason, plan, and execute multi-step tasks—from sales qualification chatbots to RAG-powered knowledge systems. Proven with Pack Assist, Farmin, and Content Compass.",
    fullDescription:
      "Agentic AI Engineering delivers autonomous AI systems that perform complex tasks with minimal human intervention. We've built cost-optimized AI sales agents (Pack Assist) with hybrid qualification flows and RAG-based fact-checking, object detection platforms (Farmin) using YOLO and satellite imagery, and multimodal analytics (Content Compass) with OpenAI and Twelve Labs. Our agents use LangGraph, LangChain, and custom frameworks—integrating with your APIs, databases, and tools for workflows that scale.",
    image: "/assets/whatWeDo/arseny-togulev-MECKPoKJYjM-unsplash.jpg",
    tags: ["AI", "Automation", "Agents"],
    valueProps: [
      {
        title: "Cost-Optimized Agents",
        description: "Hybrid flows and model selection to reduce AI costs while maintaining accuracy—as we did with Pack Assist.",
        icon: "FiZap",
      },
      {
        title: "RAG & Fact-Checking",
        description: "Eliminate hallucinations with retrieval-augmented generation and knowledge bases.",
        icon: "FiDatabase",
      },
      {
        title: "Tool & API Integration",
        description: "Agents that connect to your APIs, databases, and business tools for real workflows.",
        icon: "FiTool",
      },
      {
        title: "Human-in-the-Loop",
        description: "CSR dashboards and escalation paths for when agents need human support.",
        icon: "FiUser",
      },
    ],
    offerings: [
      {
        title: "AI Sales & Qualification Agents",
        description:
          "Chatbots that qualify leads, answer FAQs, and hand off to humans—like Pack Assist for packaging sales.",
        icon: "FiMessageCircle",
      },
      {
        title: "RAG & Knowledge Systems",
        description:
          "Document Q&A, semantic search, and fact-checking with Pinecone, pgvector, or custom vector stores.",
        icon: "FiDatabase",
      },
      {
        title: "Object Detection & Computer Vision",
        description:
          "YOLO, OpenCV, and satellite imagery analysis—as in Farmin for cars, ships, and change detection.",
        icon: "FiImage",
      },
      {
        title: "Multimodal AI Analysis",
        description:
          "Text, image, video, and document analysis with OpenAI, Twelve Labs, and custom pipelines.",
        icon: "FiCpu",
      },
    ],
    industries: sharedIndustries,
    benefits: sharedBenefits,
    faqs: [
      {
        question: "What is agentic AI and how does it differ from traditional AI?",
        answer:
          "Agentic AI refers to AI systems that can autonomously plan, reason, and execute multi-step tasks. Unlike traditional AI that responds to single prompts, agentic AI can use tools, access external data, and make decisions to achieve complex goals with minimal human intervention. We've built agents like Pack Assist (sales qualification) and Content Compass (multimodal analytics) that demonstrate this capability.",
      },
      {
        question: "What technologies do you use for agentic AI development?",
        answer:
          "We use LangGraph, LangChain, Python FastAPI, React, and custom implementations. We integrate OpenAI (GPT-4o-mini, GPT-4.1), Anthropic, Pinecone, MongoDB, and tool-calling APIs—as seen in Pack Assist, Farmin, and Content Compass.",
      },
      {
        question: "Can agentic AI integrate with our existing systems?",
        answer:
          "Yes. We design agents to integrate with your existing APIs, databases, CRMs, and internal tools. Pack Assist uses a Zendesk-style agent dashboard; Farmin integrates with Mapbox and AWS; Content Compass connects to Supabase and Apify. We ensure secure, authenticated access and minimal disruption.",
      },
    ],
  },
  {
    id: 2,
    slug: "next-gen-saas",
    title: "Next-Gen SaaS Development",
    shortDescription:
      "We build scalable SaaS platforms from MVP to enterprise—proven with Atarim ($500K funded), Rack Room, Farmin, and Podcast Beacon. Cloud-native, subscription billing, and integrations built in.",
    fullDescription:
      "Next-Gen SaaS Development delivers cloud-native platforms that scale with your business. We transformed Atarim from a WordPress plugin into a universal visual collaboration SaaS with AWS, region-based load balancing, and auto-scaling. We built Rack Room for complex booking management, Twilio SMS, and Gantt dashboards. Farmin combines AI and SaaS for satellite image analysis. Our stack: Next.js, React, Supabase, AWS, Stripe—with multi-tenancy, billing, and analytics from day one.",
    image: "/assets/whatWeDo/carlos-muza-hpjSkU2UYSU-unsplash.jpg",
    tags: ["SaaS", "Cloud", "Scalable"],
    valueProps: [
      {
        title: "Cloud-Native & Scalable",
        description: "AWS, region-based load balancing, and auto-scaling—as we did for Atarim.",
        icon: "FiCloud",
      },
      {
        title: "Subscription & Billing",
        description: "Stripe, Paddle, or custom billing integrated from the start.",
        icon: "FiCreditCard",
      },
      {
        title: "Modern Tech Stack",
        description: "Next.js, React, Supabase, Railway—fast, maintainable, and proven.",
        icon: "FiCode",
      },
      {
        title: "Integrations Built-In",
        description: "Slack, Jira, Asana, Twilio—we integrate with the tools your users already use.",
        icon: "FiLink",
      },
    ],
    offerings: [
      {
        title: "SaaS MVP Development",
        description:
          "Rapidly build and launch your SaaS MVP—Pack Assist was delivered in 8 weeks with full agent dashboard.",
        icon: "FiSend",
      },
      {
        title: "Visual Collaboration & Project Management",
        description:
          "Kanban boards, WYSIWYG editors, visual feedback—like Atarim for design teams.",
        icon: "FiLayers",
      },
      {
        title: "Resource & Booking Management",
        description:
          "Complex scheduling, Gantt charts, client tracking—as in Rack Room.",
        icon: "FiClock",
      },
      {
        title: "Admin & Analytics Dashboards",
        description:
          "Real-time insights, user management, and business metrics.",
        icon: "FiBarChart",
      },
    ],
    industries: sharedIndustries,
    benefits: sharedBenefits,
    faqs: [
      {
        question: "What types of SaaS platforms does Tech Emulsion develop?",
        answer:
          "We develop visual collaboration tools (Atarim), resource and booking management (Rack Room), AI-powered analytics (Farmin, Content Compass), and industry-specific SaaS. All are tailored to your business with scalable, secure architecture.",
      },
      {
        question: "How long does it take to build a SaaS MVP?",
        answer:
          "Typical MVP timelines range from 8–16 weeks. Pack Assist was delivered in 8 weeks; we can provide a detailed timeline after a discovery call.",
      },
      {
        question: "Do you support ongoing maintenance and updates?",
        answer:
          "Yes. We offer ongoing maintenance, feature updates, and 24/7 support. Atarim and Rack Room run on infrastructure we built and continue to support.",
      },
    ],
  },
  {
    id: 3,
    slug: "website-development",
    title: "Innovative Website Development",
    shortDescription:
      "High-performance, SEO-friendly websites and landing pages built with Next.js and React. Marketing sites, portfolios, and conversion-focused pages that drive growth.",
    fullDescription:
      "Innovative Website Development delivers fast, SEO-optimized websites using Next.js, React, and modern design principles. We build marketing sites, landing pages, portfolios, and web applications—server-side rendering, optimized images, and Core Web Vitals in mind. Our portfolio includes client sites, campaign pages, and the Tech Emulsion site itself.",
    image: "/assets/whatWeDo/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg",
    tags: ["Web", "Next.js", "SEO"],
    valueProps: [
      {
        title: "SEO-Optimized",
        description: "Server-side rendering, meta tags, and structured data for top search rankings.",
        icon: "FiSearch",
      },
      {
        title: "Responsive Design",
        description: "Beautiful, fast experiences across desktop, tablet, and mobile.",
        icon: "FiSmartphone",
      },
      {
        title: "Performance First",
        description: "Fast load times, optimized images, and minimal Core Web Vitals impact.",
        icon: "FiZap",
      },
      {
        title: "Conversion Ready",
        description: "Clear CTAs, forms, and analytics to drive leads and sales.",
        icon: "FiTarget",
      },
    ],
    offerings: [
      {
        title: "Next.js Website Development",
        description:
          "High-performance, SEO-friendly sites with server-side rendering and static generation.",
        icon: "FiGlobe",
      },
      {
        title: "Landing Pages",
        description:
          "Conversion-focused landing pages for campaigns, product launches, and lead capture.",
        icon: "FiLayout",
      },
      {
        title: "E-commerce Websites",
        description:
          "Shopify, custom storefronts, and headless commerce solutions.",
        icon: "FiShoppingCart",
      },
      {
        title: "Web Applications",
        description:
          "Interactive web apps with dashboards, forms, and real-time features.",
        icon: "FiCode",
      },
    ],
    industries: sharedIndustries,
    benefits: sharedBenefits,
    faqs: [
      {
        question: "Can you help with Next.js website development?",
        answer:
          "Yes. We specialize in Next.js for high-performance, SEO-friendly websites. The Tech Emulsion site and our client projects use Next.js with responsive design, server-side rendering, and performance optimization.",
      },
      {
        question: "Do you offer custom website development?",
        answer:
          "Absolutely. We build custom websites tailored to your brand, audience, and business goals. No templates—every project is designed and developed from scratch.",
      },
      {
        question: "How do you ensure websites are fast and SEO-friendly?",
        answer:
          "We use Next.js for SSR/SSG, optimize images and assets, implement proper meta tags and structured data, and follow Core Web Vitals best practices.",
      },
    ],
  },
  {
    id: 4,
    slug: "chrome-extensions",
    title: "Custom Chrome Extensions",
    shortDescription:
      "We build Chrome extensions that extend your SaaS or workflow—like Atarim's extension for visual feedback on any website. Manifest V3 compliant, Web Store ready.",
    fullDescription:
      "Custom Chrome Extensions extend your product into the browser. We built Atarim's Chrome extension to enable visual feedback on any website—not just WordPress. We build extensions for productivity, data capture, SaaS companions, and integrations—all compliant with Manifest V3 and Chrome Web Store policies.",
    image: "/assets/whatWeDo/growtika-fiao0RcVWBE-unsplash.jpg",
    tags: ["Chrome", "Productivity", "Extensions"],
    valueProps: [
      {
        title: "SaaS Companion",
        description: "Extend your product into the browser—like Atarim's extension for feedback on any site.",
        icon: "FiPackage",
      },
      {
        title: "Seamless Integration",
        description: "Connect with your SaaS, APIs, and internal tools.",
        icon: "FiLink",
      },
      {
        title: "Manifest V3 Ready",
        description: "Built to Chrome's latest standards for long-term compatibility.",
        icon: "FiCheckCircle",
      },
      {
        title: "Secure & Private",
        description: "Minimal permissions, secure storage, and privacy-first design.",
        icon: "FiShield",
      },
    ],
    offerings: [
      {
        title: "SaaS Companion Extensions",
        description:
          "Browser extensions that extend your SaaS—visual feedback, data capture, or workflow tools.",
        icon: "FiPackage",
      },
      {
        title: "Productivity Extensions",
        description:
          "Bookmark managers, note-taking, tab management, and workflow automation.",
        icon: "FiTool",
      },
      {
        title: "Data Capture & Sync",
        description:
          "Extract and sync data from web pages to your systems (with consent and ToS compliance).",
        icon: "FiDatabase",
      },
      {
        title: "Chrome Web Store Publishing",
        description:
          "We handle submission, compliance, and ongoing updates for the Chrome Web Store.",
        icon: "FiUpload",
      },
    ],
    industries: sharedIndustries,
    benefits: sharedBenefits,
    faqs: [
      {
        question: "What can Chrome extensions be used for?",
        answer:
          "Chrome extensions can extend your SaaS (like Atarim's visual feedback on any website), automate tasks, capture data, and integrate with your product. We build extensions for productivity, data sync, and business-specific workflows.",
      },
      {
        question: "Are your extensions Manifest V3 compliant?",
        answer:
          "Yes. All our extensions are built for Manifest V3, Chrome's current standard, ensuring long-term compatibility and store approval.",
      },
      {
        question: "Can you help with Chrome Web Store publishing?",
        answer:
          "Yes. We handle submission, compliance, and ongoing updates for the Chrome Web Store.",
      },
    ],
  },
  {
    id: 5,
    slug: "devops-solutions",
    title: "Expert DevOps Solutions",
    shortDescription:
      "We scale and secure your infrastructure—AWS, region-based load balancing, auto-scaling, and CI/CD. Proven with Atarim, Farmin, and Rack Room.",
    fullDescription:
      "Expert DevOps Solutions modernize your infrastructure and delivery pipeline. We scaled Atarim on AWS with region-based load balancing and auto-scaling. We deployed Farmin for satellite image processing and Content Compass on Supabase Edge Functions. We implement CI/CD, containerization, cloud migration, and monitoring so your team can ship faster and with confidence.",
    image: "/assets/whatWeDo/growtika-72dRZHuYJWE-unsplash.jpg",
    tags: ["DevOps", "CI/CD", "Cloud"],
    valueProps: [
      {
        title: "Cloud Scaling",
        description: "AWS, region-based load balancing, and auto-scaling—as we did for Atarim.",
        icon: "FiCloud",
      },
      {
        title: "CI/CD Pipelines",
        description: "Automated build, test, and deploy pipelines for faster releases.",
        icon: "FiGitMerge",
      },
      {
        title: "Serverless & Edge",
        description: "Supabase Edge Functions, serverless processing for scalable workloads.",
        icon: "FiZap",
      },
      {
        title: "Monitoring & Alerts",
        description: "Observability, logging, and alerting for proactive issue detection.",
        icon: "FiActivity",
      },
    ],
    offerings: [
      {
        title: "Cloud Infrastructure & Scaling",
        description:
          "AWS, GCP, or Azure—region-based load balancing, auto-scaling, and infrastructure as code.",
        icon: "FiCloud",
      },
      {
        title: "CI/CD Setup",
        description:
          "GitHub Actions, GitLab CI, or Jenkins pipelines for automated testing and deployment.",
        icon: "FiGitBranch",
      },
      {
        title: "Cloud Migration",
        description:
          "Migrate from on-prem or legacy cloud to modern cloud architecture with minimal downtime.",
        icon: "FiTrendingUp",
      },
      {
        title: "Containerization",
        description:
          "Docker, Kubernetes, and container orchestration for scalability.",
        icon: "FiBox",
      },
    ],
    industries: sharedIndustries,
    benefits: sharedBenefits,
    faqs: [
      {
        question: "What DevOps tools do you use?",
        answer:
          "We use AWS (Atarim, Farmin), Supabase (Content Compass, Rack Room), Railway, GitHub Actions, Docker, and Terraform. We tailor the stack to your needs and existing tools.",
      },
      {
        question: "Can you help migrate existing infrastructure?",
        answer:
          "Yes. We help migrate from on-prem, legacy cloud, or monoliths to modern, scalable cloud infrastructure with minimal downtime.",
      },
      {
        question: "Do you offer 24/7 monitoring and support?",
        answer:
          "Yes. We can set up monitoring, alerting, and provide ongoing support for your infrastructure.",
      },
    ],
  },
  {
    id: 6,
    slug: "generative-ai-integration",
    title: "Generative AI Integration",
    shortDescription:
      "Harness the power of AI to revolutionize your operations. We integrate advanced generative AI solutions to automate tasks, enhance creativity, and boost efficiency.",
    fullDescription:
      "Generative AI Integration brings LLMs, image generation, and AI-powered features into your products and workflows. We integrate OpenAI, Anthropic, open-source models, and custom fine-tuned solutions to transform how you work.",
    image: "/assets/whatWeDo/randa-marzouk-ilwI-AIAQr4-unsplash.jpg",
    tags: ["AI", "LLM", "Automation"],
    valueProps: [
      {
        title: "LLM Integration",
        description: "ChatGPT, Claude, and open-source models integrated into your apps.",
        icon: "FiMessageCircle",
      },
      {
        title: "RAG & Knowledge",
        description: "Document Q&A, semantic search, and intelligent retrieval.",
        icon: "FiDatabase",
      },
      {
        title: "Image & Content Gen",
        description: "DALL-E, Stable Diffusion, and content generation pipelines.",
        icon: "FiImage",
      },
      {
        title: "Cost & Guardrails",
        description: "Token optimization, caching, and safety controls.",
        icon: "FiShield",
      },
    ],
    offerings: [
      {
        title: "LLM Integration",
        description:
          "Integrate GPT-4, Claude, Llama, and other models into your applications via APIs.",
        icon: "FiCpu",
      },
      {
        title: "RAG Systems",
        description:
          "Build document Q&A, knowledge bases, and semantic search with vector databases.",
        icon: "FiSearch",
      },
      {
        title: "AI-Powered Workflows",
        description:
          "Automate content creation, summarization, classification, and extraction.",
        icon: "FiZap",
      },
      {
        title: "Fine-Tuning & Custom Models",
        description:
          "Fine-tune models on your data for domain-specific performance.",
        icon: "FiSettings",
      },
    ],
    industries: sharedIndustries,
    benefits: sharedBenefits,
    faqs: [
      {
        question: "What AI integration services do you offer?",
        answer:
          "We integrate generative AI (LLMs, RAG, image generation) into your apps and workflows. This includes OpenAI, Anthropic, open-source models, vector databases, and custom fine-tuned solutions.",
      },
      {
        question: "How do you handle AI costs and rate limits?",
        answer:
          "We implement token optimization, caching, model selection, and guardrails to control costs and ensure reliable performance within provider limits.",
      },
      {
        question: "Can you build custom AI solutions for our industry?",
        answer:
          "Yes. We develop industry-specific AI solutions with fine-tuned models, custom prompts, and domain-aware RAG systems.",
      },
    ],
  },
  {
    id: 7,
    slug: "qa-testing-automation",
    title: "QA Testing & Automation",
    shortDescription:
      "We ensure your software is bug-free and production-ready—functional, performance, and security testing, plus automated test suites in CI/CD for every project we deliver.",
    fullDescription:
      "QA Testing & Automation ensures your software meets quality standards before and after release. We integrate testing into every project—from Pack Assist and Atarim to Rack Room and Content Compass. We provide functional testing, performance testing, security testing, and automated test suites (Cypress, Playwright, Jest) that run in your CI/CD pipeline.",
    image: "/assets/whatWeDo/growtika-Am6pBe2FpJw-unsplash.jpg",
    tags: ["QA", "Testing", "Automation"],
    valueProps: [
      {
        title: "Comprehensive Coverage",
        description: "Functional, performance, security, and usability testing.",
        icon: "FiCheckCircle",
      },
      {
        title: "Test Automation",
        description: "Automated test suites that run in CI/CD for fast feedback.",
        icon: "FiZap",
      },
      {
        title: "Bug-Free Releases",
        description: "Catch issues early and ship with confidence.",
        icon: "FiShield",
      },
      {
        title: "Faster Delivery",
        description: "Reduce manual testing time and accelerate release cycles.",
        icon: "FiTrendingUp",
      },
    ],
    offerings: [
      {
        title: "Functional Testing",
        description:
          "Manual and automated testing of features, flows, and edge cases.",
        icon: "FiCheckSquare",
      },
      {
        title: "Performance Testing",
        description:
          "Load testing, stress testing, and performance profiling.",
        icon: "FiActivity",
      },
      {
        title: "Security Testing",
        description:
          "Vulnerability scanning, penetration testing, and security audits.",
        icon: "FiShield",
      },
      {
        title: "Test Automation Frameworks",
        description:
          "Cypress, Playwright, Jest, or Selenium—integrated with your CI/CD.",
        icon: "FiCode",
      },
    ],
    industries: sharedIndustries,
    benefits: sharedBenefits,
    faqs: [
      {
        question: "What QA testing services do you provide?",
        answer:
          "We provide functional testing, performance testing, security testing, usability testing, and automated testing. Every project we deliver—Pack Assist, Atarim, Rack Room, Content Compass—includes QA to ensure bug-free, production-ready software.",
      },
      {
        question: "Do you offer test automation services?",
        answer:
          "Yes. We build automated test suites with Cypress, Playwright, Jest, or Selenium, integrated into your CI/CD for continuous testing.",
      },
      {
        question: "How do you integrate testing with our development process?",
        answer:
          "We integrate test automation into your CI/CD pipeline (GitHub Actions, GitLab CI, etc.) so tests run on every commit and before deployment.",
      },
    ],
  },
  {
    id: 8,
    slug: "automation-solutions",
    title: "Automation Solutions",
    shortDescription:
      "We automate workflows and integrate your systems—Slack, Jira, Asana, Twilio, and more. Proven with Atarim's integrations, Rack Room's SMS automation, and Content Compass's scraping pipelines.",
    fullDescription:
      "Automation Solutions transform manual, repetitive processes into efficient, error-free workflows. We built Atarim's integrations with Slack, Jira, and Asana. We automated Rack Room's Twilio SMS notifications for bookings. Content Compass uses automated scraping and AI enrichment. We analyze your operations, identify automation opportunities, and implement solutions that save time and reduce costs.",
    image: "/assets/whatWeDo/automation.png",
    tags: ["Automation", "Workflows", "Integration"],
    valueProps: [
      {
        title: "Workflow Automation",
        description: "Automate repetitive tasks and multi-step processes.",
        icon: "FiZap",
      },
      {
        title: "Integration",
        description: "Connect systems, APIs, and tools for seamless data flow.",
        icon: "FiLink",
      },
      {
        title: "Error Reduction",
        description: "Eliminate manual errors and ensure consistency.",
        icon: "FiCheckCircle",
      },
      {
        title: "Cost Savings",
        description: "Reduce labor costs and free your team for higher-value work.",
        icon: "FiDollarSign",
      },
    ],
    offerings: [
      {
        title: "Business Process Automation",
        description:
          "Analyze and automate workflows across sales, ops, support, and finance.",
        icon: "FiRepeat",
      },
      {
        title: "API & System Integration",
        description:
          "Connect CRMs, ERPs, databases, and third-party APIs.",
        icon: "FiZap",
      },
      {
        title: "Document & Data Processing",
        description:
          "Automate data entry, extraction, and document processing.",
        icon: "FiFileText",
      },
      {
        title: "Scheduled & Event-Driven",
        description:
          "Cron jobs, webhooks, and event-triggered automation.",
        icon: "FiClock",
      },
    ],
    industries: sharedIndustries,
    benefits: sharedBenefits,
    faqs: [
      {
        question: "Do you offer workflow automation services?",
        answer:
          "Yes. We analyze your workflows, identify automation opportunities, and implement solutions. We've built Atarim's Slack/Jira/Asana integrations, Rack Room's Twilio SMS automation, and Content Compass's scraping pipelines.",
      },
      {
        question: "What systems can you integrate?",
        answer:
          "We integrate Slack, Jira, Asana, Twilio, CRMs (Salesforce, HubSpot), ERPs, databases, APIs, and many third-party tools. We connect to your existing systems with secure, authenticated integrations.",
      },
      {
        question: "Do you provide AI automation services?",
        answer:
          "Yes. We combine AI with automation for intelligent document processing, data extraction, classification, and decision-making workflows—as in Content Compass's multimodal AI analysis.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
