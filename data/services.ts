/**
 * Tech Emulsion Services Data
 * Shared across main services page, home page, and service subpages
 */
import { getImageUrl } from "lib/supabase-storage";

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
  /** Human-friendly label for nav/listing; H1 uses `title` */
  displayTitle?: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  /** SEO keywords for meta keywords and semantic relevance (used on service subpages). */
  seoKeywords?: string[];
  /** One-sentence definition for GEO/AEO (e.g. "What is X?"). */
  whatIs?: string;
  /** 3–5 bullet takeaways for AEO/snippet potential. */
  keyTakeaways?: string[];
  /** ISO date for schema dateModified (e.g. "2026-03-02"). */
  dateModified?: string;
  /** Slugs of related services for internal linking. */
  relatedServiceSlugs?: string[];
  /** Optional meta title override (e.g. include primary keyword; keep 50–60 chars). */
  seoTitle?: string;
  /** Portfolio page slugs for "See our work" (e.g. ["packassist", "farmin", "contentcompass"]). */
  portfolioSlugs?: string[];
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
      "Our engineers bring deep experience from 50+ shipped projects so your team gets solutions that are stable in production and easy to maintain.",
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

// Client logos for "Trusted by" strip (URLs from Supabase Storage)
// Light mode: black, dark mode: white. keepOriginal: no filter (IPG only)
export const trustedByLogos = [
  { src: getImageUrl("assets/clients/teadit.png"), alt: "Teadit" },
  { src: getImageUrl("assets/clients/Artis-lab.png"), alt: "Artis" },
  { src: getImageUrl("assets/clients/sonara.svg"), alt: "Sonara" },
  { src: getImageUrl("assets/clients/POPCARD_4.png"), alt: "Popcard" },
  { src: getImageUrl("assets/clients/nearshore.png"), alt: "Nearshore" },
  { src: getImageUrl("assets/clients/Sprintzeal_Logo.webp"), alt: "Sprintzeal" },
  { src: getImageUrl("assets/clients/farmin-white.png"), alt: "Farmin" },
  { src: getImageUrl("assets/clients/jarvis-logo.png"), alt: "Jarvis" },
  { src: getImageUrl("assets/clients/ibatu.png"), alt: "Ibatu" },
  { src: getImageUrl("assets/clients/Podcast-Beacon.png"), alt: "Podcast-Beacon" },
  { src: getImageUrl("assets/clients/Pensa.webp"), alt: "Pensa" },
  { src: getImageUrl("assets/clients/logo-black-small.png"), alt: "Logo" },
  { src: getImageUrl("assets/clients/Logo_IPG.jpg"), alt: "IPG", keepOriginal: true },
  { src: getImageUrl("assets/clients/atarim-white.svg"), alt: "Atarim" },
  { src: getImageUrl("assets/clients/republic_power_logo.jpeg"), alt: "Republic Power" },
  { src: getImageUrl("assets/clients/alifa.PNG"), alt: "Alifa" },
  { src: getImageUrl("assets/clients/Bubble.1.png"), alt: "Bubble" },
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
    title: "Developing an Agentic AI System",
    displayTitle: "Agentic AI Engineering",
    shortDescription:
      "We build autonomous AI agents that reason, plan, and execute multi-step tasks — from sales qualification chatbots to RAG-powered knowledge systems. Proven with Pack Assist, Farmin, and Content Compass.",
    fullDescription:
      "Tech Emulsion is a generative AI development company offering generative AI development services through agentic AI engineering. You get autonomous AI systems that perform complex tasks with minimal human intervention. Examples include cost-optimized AI sales agents (Pack Assist) with hybrid qualification flows and RAG-based fact-checking, object detection platforms (Farmin) using YOLO and satellite imagery, and multimodal analytics (Content Compass) with OpenAI and Twelve Labs. Our agents use LangGraph, LangChain, and custom frameworks—integrating with your APIs, databases, and tools so your workflows scale instead of your headcount.",
    image: getImageUrl("assets/whatWeDo/arseny-togulev-MECKPoKJYjM-unsplash.jpg"),
    tags: ["AI", "Automation", "Agents"],
    seoKeywords: [
      "developing an agentic ai system",
      "generative ai development services",
      "generative ai development company",
      "ai agent development services",
      "agentic ai web development",
    ],
    whatIs:
      "Agentic AI engineering is the practice of building autonomous AI systems that can plan, reason, and execute multi-step tasks with minimal human intervention. Tech Emulsion provides generative AI development services as a generative AI development company, delivering agentic AI agents that integrate with your APIs, databases, and tools.",
    keyTakeaways: [
      "Generative AI development company offering end-to-end generative AI development services.",
      "Agentic AI agents that qualify leads, power RAG knowledge systems, and perform multimodal analysis.",
      "Built with LangGraph, LangChain, OpenAI, and custom frameworks—proven in Pack Assist, Farmin, Content Compass.",
      "Cost-optimized flows, human-in-the-loop controls, and secure integration with your existing systems.",
      "From MVP to production: 24/7 support and maintenance included.",
    ],
    dateModified: "2026-03-02",
    relatedServiceSlugs: ["generative-ai-integration", "automation-solutions", "next-gen-saas"],
    seoTitle: "Agentic AI Engineering | Generative AI Development - Tech Emulsion",
    portfolioSlugs: ["packassist", "farmin", "contentcompass"],
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
      {
        question: "What is a generative AI development company?",
        answer:
          "A generative AI development company builds AI systems that generate content, make decisions, and automate complex tasks. Tech Emulsion offers generative AI development services including agentic AI agents, RAG systems, and multimodal AI—from MVP to enterprise.",
      },
      {
        question: "What is the typical timeline for agentic AI or generative AI development?",
        answer:
          "An MVP or proof-of-concept often takes 8–16 weeks. Full production-ready agentic AI systems typically take 3–6 months depending on scope, integrations, and data. We provide a detailed timeline after a discovery call.",
      },
    ],
  },
  {
    id: 2,
    slug: "next-gen-saas",
    title: "SaaS Development Services",
    displayTitle: "Next-Gen SaaS Development",
    shortDescription:
      "Cloud-native SaaS platforms from MVP to enterprise — subscription billing, multi-tenancy, and third-party integrations built in from day one. Proven with Atarim ($500K funded), Rack Room, and Farmin.",
    fullDescription:
      "Tech Emulsion provides SaaS development services and custom SaaS development for scalable, cloud-native platforms. We transformed Atarim from a WordPress plugin into a universal visual collaboration SaaS with AWS, region-based load balancing, and auto-scaling. We built Rack Room for complex booking management, Twilio SMS, and Gantt dashboards. Farmin combines AI and SaaS for satellite image analysis. Our stack: Next.js, React, Supabase, AWS, Stripe—with multi-tenancy, billing, and analytics from day one.",
    image: getImageUrl("assets/whatWeDo/carlos-muza-hpjSkU2UYSU-unsplash.jpg"),
    tags: ["SaaS", "Cloud", "Scalable"],
    seoKeywords: [
      "saas development services",
      "saas application development services",
      "saas product development services",
      "custom saas development",
    ],
    whatIs:
      "SaaS development services cover the design, build, and launch of software-as-a-service platforms. Tech Emulsion offers custom SaaS development from MVP to enterprise—cloud-native, with subscription billing, multi-tenancy, and integrations built in.",
    keyTakeaways: [
      "Full SaaS development services: MVP to enterprise, cloud-native architecture.",
      "Custom SaaS development with Stripe/Paddle billing, multi-tenancy, and analytics.",
      "Proven with Atarim, Rack Room, Farmin, Podcast Beacon—Next.js, React, AWS, Supabase.",
      "Visual collaboration, booking management, and AI-powered SaaS solutions.",
      "Ongoing maintenance, 24/7 support, and scalable infrastructure.",
    ],
    dateModified: "2026-03-02",
    relatedServiceSlugs: ["agentic-ai-engineering", "website-development", "devops-solutions"],
    portfolioSlugs: ["atarim", "rackroom", "farmin", "podcastbeacon"],
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
      {
        question: "What are SaaS application development services?",
        answer:
          "SaaS application development services include building scalable, multi-tenant web applications with subscription billing, user management, and integrations. We deliver custom SaaS development from MVP to enterprise with modern stacks like Next.js and AWS.",
      },
    ],
  },
  {
    id: 3,
    slug: "website-development",
    title: "Custom Website Development Company",
    displayTitle: "Innovative Website Development",
    shortDescription:
      "High-performance, SEO-friendly websites and custom ecommerce builds — marketing sites, portfolios, and conversion-focused pages that load fast, rank well, and turn visitors into leads.",
    fullDescription:
      "Tech Emulsion is a custom website development company and Next.js website development agency. We deliver fast, SEO-optimized websites using Next.js, React, and modern design principles—including custom ecommerce website development. We build marketing sites, landing pages, portfolios, and web applications with server-side rendering, optimized images, and Core Web Vitals in mind. Our portfolio includes client sites, campaign pages, and the Tech Emulsion site itself.",
    image: getImageUrl("assets/whatWeDo/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg"),
    tags: ["Web", "Next.js", "SEO"],
    seoKeywords: [
      "custom website development company",
      "custom ecommerce website development",
      "next.js website development agency",
      "next js website development agency",
    ],
    whatIs:
      "Innovative website development means building fast, SEO-friendly sites and apps with modern frameworks. As a custom website development company and Next.js website development agency, we deliver marketing sites, ecommerce, and web applications tailored to your brand and goals.",
    keyTakeaways: [
      "Custom website development company: unique sites, no templates, built for your brand.",
      "Next.js website development agency—SSR, static generation, and Core Web Vitals optimized.",
      "Custom ecommerce website development: Shopify, headless commerce, and conversion-focused stores.",
      "SEO-friendly, responsive, and performance-first—landing pages to full web apps.",
      "Portfolio includes Tech Emulsion and multiple client sites and campaigns.",
    ],
    dateModified: "2026-03-02",
    relatedServiceSlugs: ["next-gen-saas", "chrome-extensions", "qa-testing-automation"],
    portfolioSlugs: ["atarim", "billboardiq", "genai"],
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
      {
        question: "What does a Next.js website development agency do?",
        answer:
          "A Next.js website development agency builds high-performance, SEO-friendly websites using the Next.js framework. We offer custom website development and custom ecommerce website development with server-side rendering, fast load times, and mobile-responsive design.",
      },
    ],
  },
  {
    id: 4,
    slug: "chrome-extensions",
    title: "Develop Chrome Extension",
    displayTitle: "Custom Chrome Extensions",
    shortDescription:
      "We build Chrome extensions that extend your SaaS or automate your workflow — from design and build to Web Store publishing. Manifest V3 compliant. Proven with Atarim's visual feedback extension.",
    fullDescription:
      "Tech Emulsion helps you develop Chrome extensions that extend your product into the browser. We built Atarim's Chrome extension to enable visual feedback on any website—not just WordPress. Whether you need to develop a Chrome extension for productivity, data capture, or SaaS companions, we deliver Manifest V3–compliant extensions and Chrome Web Store publishing.",
    image: getImageUrl("assets/whatWeDo/growtika-fiao0RcVWBE-unsplash.jpg"),
    tags: ["Chrome", "Productivity", "Extensions"],
    seoKeywords: ["develop chrome extension", "how to develop chrome extension"],
    whatIs:
      "Chrome extension development is building browser add-ons that run inside Chrome. We help you develop Chrome extensions for SaaS companions, productivity, and data capture—Manifest V3 compliant and Web Store ready.",
    keyTakeaways: [
      "Develop Chrome extension with us: from idea to Chrome Web Store listing.",
      "How to develop Chrome extension: we handle architecture, build, and publishing.",
      "SaaS companion extensions (e.g. Atarim visual feedback on any site), productivity tools, data sync.",
      "Manifest V3 compliant; secure, minimal permissions, privacy-first.",
      "Full support for submission, compliance, and ongoing updates.",
    ],
    dateModified: "2026-03-02",
    relatedServiceSlugs: ["next-gen-saas", "website-development", "automation-solutions"],
    portfolioSlugs: ["atarim"],
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
      {
        question: "How to develop a Chrome extension?",
        answer:
          "To develop a Chrome extension: define your use case, choose Manifest V3, build the extension (popup, background, content scripts), test in Chrome, then submit to the Chrome Web Store. We handle the full process—design, development, and publishing.",
      },
    ],
  },
  {
    id: 5,
    slug: "devops-solutions",
    title: "DevOps as a Service",
    displayTitle: "Expert DevOps Solutions",
    shortDescription:
      "We set up and manage your cloud infrastructure on AWS — auto-scaling, CI/CD pipelines, region-based load balancing, and security hardening — so your product ships faster and stays reliable under load.",
    fullDescription:
      "Tech Emulsion offers DevOps as a service and devops managed services to modernize your infrastructure and delivery pipeline. We scaled Atarim on AWS with region-based load balancing and auto-scaling. We deployed Farmin for satellite image processing and Content Compass on Supabase Edge Functions. We implement CI/CD, containerization, cloud migration, and monitoring so your team can ship faster and with confidence.",
    image: getImageUrl("assets/whatWeDo/growtika-72dRZHuYJWE-unsplash.jpg"),
    tags: ["DevOps", "CI/CD", "Cloud"],
    seoKeywords: ["devops as a service", "devops managed services"],
    whatIs:
      "DevOps as a service means a team manages your CI/CD, cloud infrastructure, and deployment pipeline for you. Our devops managed services include AWS/GCP scaling, GitHub Actions pipelines, containerization, and 24/7 monitoring.",
    keyTakeaways: [
      "DevOps as a service: we own your CI/CD, cloud scaling, and deployment pipeline.",
      "DevOps managed services—AWS, Supabase, Railway; region-based load balancing and auto-scaling.",
      "CI/CD with GitHub Actions, GitLab CI, or Jenkins; Docker and Kubernetes when needed.",
      "Cloud migration from on-prem or legacy cloud with minimal downtime.",
      "Monitoring, alerting, and ongoing support included.",
    ],
    dateModified: "2026-03-02",
    relatedServiceSlugs: ["next-gen-saas", "qa-testing-automation", "automation-solutions"],
    portfolioSlugs: ["atarim", "farmin", "rackroom"],
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
      {
        question: "What are devops managed services?",
        answer:
          "DevOps managed services are ongoing infrastructure and pipeline management—CI/CD, cloud scaling, monitoring, and support. We offer devops as a service so you can focus on product while we keep deployments and infrastructure reliable.",
      },
    ],
  },
  {
    id: 6,
    slug: "generative-ai-integration",
    title: "Generative AI Integration Services",
    displayTitle: "Generative AI Integration",
    shortDescription:
      "We connect LLMs, RAG pipelines, and AI workflows directly into your product — making it smarter, more useful, and easier for customers to discover. Includes generative engine optimisation for AI search visibility.",
    fullDescription:
      "Tech Emulsion provides generative AI integration services and AI and GPT integration services. We bring LLMs, image generation, and AI-powered features into your products and workflows—with AI visibility solutions and best generative engine optimization so your product surfaces correctly in AI search and assistants. As a generative AI development company we offer best rated AI generative expand solutions that focus on clear business outcomes: OpenAI, Anthropic, open-source models, RAG, and custom fine-tuned integrations.",
    image: getImageUrl("assets/whatWeDo/randa-marzouk-ilwI-AIAQr4-unsplash.jpg"),
    tags: ["AI", "LLM", "Automation"],
    seoKeywords: [
      "generative ai integration services",
      "ai and gpt integration services",
      "generative ai development services",
      "generative ai development company",
      "ai visibility solutions with best generative engine optimization",
      "best rated ai generative expand solutions",
    ],
    whatIs:
      "Generative AI integration is embedding LLMs, RAG, and AI-generated content into your apps and workflows. We offer generative AI integration services and AI and GPT integration services—with generative engine optimization so your product is visible and effective in AI-driven search and experiences.",
    keyTakeaways: [
      "Generative AI integration services: LLM integration, RAG, image generation, and GPT integration.",
      "AI and GPT integration services—OpenAI, Claude, Llama; APIs and custom fine-tuning.",
      "AI visibility solutions with best generative engine optimization (GEO) for discoverability.",
      "Best rated AI generative expand solutions: token optimization, guardrails, and cost control.",
      "Industry-specific AI solutions and ongoing support.",
    ],
    dateModified: "2026-03-02",
    relatedServiceSlugs: ["agentic-ai-engineering", "automation-solutions", "next-gen-saas"],
    seoTitle: "Generative AI Integration Services | AI & GPT Integration - Tech Emulsion",
    portfolioSlugs: ["contentcompass", "farmin", "genai"],
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
      {
        question: "What are generative AI integration services?",
        answer:
          "Generative AI integration services include embedding LLMs, RAG, and AI content generation into your apps. We provide generative AI development services: OpenAI and GPT integration, vector databases, fine-tuning, and generative engine optimization for visibility.",
      },
      {
        question: "What is the typical timeline for generative AI integration?",
        answer:
          "Simple integrations (e.g. one LLM API) can be live in 2–4 weeks. Full generative AI integration with RAG, fine-tuning, and workflows typically takes 6–12 weeks. We scope timeline in the discovery phase.",
      },
    ],
  },
  {
    id: 7,
    slug: "qa-testing-automation",
    title: "QA and Testing Services",
    displayTitle: "QA Testing & Automation",
    shortDescription:
      "We make your software production-ready with functional, performance, and security testing — plus automated test suites in your CI/CD pipeline that catch bugs before they reach users.",
    fullDescription:
      "Tech Emulsion provides QA and testing services and QA automation testing services. We ensure your software meets quality standards before and after release. We integrate testing into every project—from Pack Assist and Atarim to Rack Room and Content Compass. We deliver functional testing, performance testing, security testing, and automated test suites (Cypress, Playwright, Jest) that run in your CI/CD pipeline.",
    image: getImageUrl("assets/whatWeDo/growtika-Am6pBe2FpJw-unsplash.jpg"),
    tags: ["QA", "Testing", "Automation"],
    seoKeywords: ["qa and testing services", "qa automation testing services"],
    whatIs:
      "QA and testing services cover functional, performance, security, and usability testing. Our QA automation testing services add automated test suites (Cypress, Playwright, Jest) that run in your CI/CD so every release is validated before deployment.",
    keyTakeaways: [
      "QA and testing services: functional, performance, security, and usability testing.",
      "QA automation testing services with Cypress, Playwright, Jest, or Selenium in CI/CD.",
      "Every delivered project includes QA—Pack Assist, Atarim, Rack Room, Content Compass.",
      "Catch bugs early, ship with confidence, and accelerate release cycles.",
      "Integrated with your pipeline (GitHub Actions, GitLab CI) for continuous testing.",
    ],
    dateModified: "2026-03-02",
    relatedServiceSlugs: ["devops-solutions", "next-gen-saas", "automation-solutions"],
    portfolioSlugs: ["packassist", "atarim", "rackroom", "contentcompass"],
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
      {
        question: "What are QA automation testing services?",
        answer:
          "QA automation testing services include building and maintaining automated test suites (e.g. Cypress, Playwright, Jest) that run in your CI/CD. We provide qa and testing services plus automation so you get fast feedback and consistent quality on every release.",
      },
    ],
  },
  {
    id: 8,
    slug: "automation-solutions",
    title: "Workflow Automation Services",
    displayTitle: "Automation Solutions",
    shortDescription:
      "We automate your manual workflows and connect your tools — Slack, Jira, Asana, Twilio, HubSpot — so your team spends time on decisions that move the business forward, not on repetitive operational tasks.",
    fullDescription:
      "Tech Emulsion delivers business automation solutions and workflow automation services. We transform manual, repetitive processes into efficient, error-free workflows—including automated customer service workflows utilizing process builder. Our AI automation service combines AI with automation for intelligent document processing and decision-making. We built Atarim's integrations with Slack, Jira, and Asana; Rack Room's Twilio SMS automation; and Content Compass's scraping pipelines. We analyze your operations, identify automation opportunities, and implement solutions that save time and reduce costs.",
    image: getImageUrl("assets/whatWeDo/automation.png"),
    tags: ["Automation", "Workflows", "Integration"],
    seoKeywords: [
      "workflow automation services",
      "business automation solutions",
      "automated customer service workflows utilizing process builder",
      "ai automation service",
    ],
    whatIs:
      "Business automation solutions replace manual, repetitive work with automated workflows and integrations. Our workflow automation services and AI automation service include automated customer service workflows utilizing process builder, API integrations, and intelligent process automation.",
    keyTakeaways: [
      "Business automation solutions: we analyze and automate workflows across sales, ops, and support.",
      "Workflow automation services—Slack, Jira, Asana, Twilio, CRMs, and custom integrations.",
      "Automated customer service workflows utilizing process builder and event-driven automation.",
      "AI automation service: intelligent document processing, data extraction, and decision workflows.",
      "Proven with Atarim, Rack Room, Content Compass; 24/7 support and optimization.",
    ],
    dateModified: "2026-03-02",
    relatedServiceSlugs: ["agentic-ai-engineering", "generative-ai-integration", "devops-solutions"],
    portfolioSlugs: ["atarim", "rackroom", "contentcompass"],
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
      {
        question: "What are workflow automation services?",
        answer:
          "Workflow automation services help you automate repetitive tasks and multi-step processes. We offer business automation solutions and AI automation service—including automated customer service workflows utilizing process builder—so you save time and reduce errors.",
      },
    ],
  },
];

/** Shared "How to get started" steps for service subpages (competitor-style process). */
export const processSteps = [
  { step: 1, title: "Share your goal", description: "Tell us your vision, constraints, and success criteria in a discovery call." },
  { step: 2, title: "We scope & plan", description: "We outline approach, timeline, and deliverables tailored to your needs." },
  { step: 3, title: "We deliver", description: "We build, test, and hand over—with ongoing support and maintenance available." },
];

/** Display labels for portfolio slugs used in "See our work" links. */
export const portfolioLabels: Record<string, string> = {
  packassist: "Pack Assist",
  farmin: "Farmin",
  contentcompass: "Content Compass",
  atarim: "Atarim",
  rackroom: "Rack Room",
  podcastbeacon: "Podcast Beacon",
  billboardiq: "CampaignOS",
  genai: "GenAI",
};

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
