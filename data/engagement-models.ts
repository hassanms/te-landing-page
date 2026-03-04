/**
 * Tech Emulsion Engagement Models
 * Used for navbar dropdown and engagement models pages
 */

export interface EngagementModelItem {
  id: number;
  slug: string;
  title: string;
  /** Optional hero title for detail page (defaults to title). */
  heroTitle?: string;
  /** Optional hero tagline above the main heading. */
  heroTagline?: string;
  /** Optional hero description for detail page (can contain multiple paragraphs separated by \n\n). */
  heroDescription?: string;
  /** Optional hero CTA button text. */
  heroCta?: string;
}

export const engagementModelsData: EngagementModelItem[] = [
  {
    id: 1,
    slug: "ai-enabled-teams",
    title: "AI-enabled teams",
    heroTitle: "AI-enabled development teams",
    heroTagline: "Optimize your development by 15%, keep full oversight",
    heroDescription:
      "Bringing AI into your development lifecycle shouldn't mean giving up control, quality, security, or team harmony. Backed by 20+ years of delivery excellence, our AI-powered development teams drive 15 percent more efficiency, without disruption, delays, or bumping up your rate card.\n\nPre-vetted tools, built-in compliance, and seamless day-to-day collaboration mean you scale faster, ship smarter, and stay fully in control at every step.",
    heroCta: "Get 15% more, same rate",
  },
  { id: 2, slug: "staff-augmentation", title: "Staff augmentation" },
  {
    id: 3,
    slug: "dedicated-teams",
    title: "Dedicated teams",
    heroTitle: "Dedicated development teams",
    heroTagline: "A long-term, cross-functional team focused entirely on your product",
    heroDescription:
      "Hiring top developers one by one can take months and drain your attention. With Tech Emulsion dedicated development teams, you can assemble a remote, cross-functional squad in weeks, reduce delivery costs, and keep your roadmap moving.\n\nThink of it as an extension of your internal staff: a stable team of engineers, designers, QA specialists, and delivery leads who focus solely on your projects, follow your processes, and help you respond quickly to changing market demands.",
    heroCta: "Explore dedicated teams",
  },
  {
    id: 4,
    slug: "project-outsourcing",
    title: "Project outsourcing",
    heroTitle: "Tap into project-based development",
    heroTagline: "Project-based delivery to close your technology gap fast",
    heroDescription:
      "The moment your competitors pull ahead on technology, your business is at risk. In those moments, time is everything. You need engineers who understand your vision and can build the kind of solutions that drive profit and growth — before the window of opportunity closes.\n\nTech Emulsion’s project-based development model gives you a focused delivery team and a clear, time-boxed engagement so you can launch with confidence without standing up a full internal product organization.",
    heroCta: "Start a project-based engagement",
  },
  { id: 5, slug: "solutions-for-startups", title: "Solutions for startups" },
  { id: 6, slug: "solutions-for-enterprises", title: "Solutions for enterprises" },
  { id: 7, slug: "solutions-for-ai-companies", title: "Solutions for AI companies" },
];
