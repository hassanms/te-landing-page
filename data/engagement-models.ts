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
  { id: 3, slug: "dedicated-teams", title: "Dedicated teams" },
  { id: 4, slug: "project-outsourcing", title: "Project outsourcing" },
  { id: 5, slug: "solutions-for-startups", title: "Solutions for startups" },
  { id: 6, slug: "solutions-for-enterprises", title: "Solutions for enterprises" },
  { id: 7, slug: "solutions-for-ai-companies", title: "Solutions for AI companies" },
];
