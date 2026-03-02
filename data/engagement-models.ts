/**
 * Tech Emulsion Engagement Models
 * Used for navbar dropdown and engagement models pages
 */

export interface EngagementModelItem {
  id: number;
  slug: string;
  title: string;
}

export const engagementModelsData: EngagementModelItem[] = [
  { id: 1, slug: "ai-enabled-teams", title: "AI-enabled teams" },
  { id: 2, slug: "staff-augmentation", title: "Staff augmentation" },
  { id: 3, slug: "dedicated-teams", title: "Dedicated teams" },
  { id: 4, slug: "project-outsourcing", title: "Project outsourcing" },
  { id: 5, slug: "solutions-for-startups", title: "Solutions for startups" },
  { id: 6, slug: "solutions-for-enterprises", title: "Solutions for enterprises" },
  { id: 7, slug: "solutions-for-ai-companies", title: "Solutions for AI companies" },
];
