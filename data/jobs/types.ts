export type EmploymentType = "Full-time" | "Part-time" | "Contract" | "Internship";

export interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  employmentType: EmploymentType;
  department: string;
  locations: string[];
  region: string;
  country: string;
  industry: string;
  shortDescription: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  experienceLevel: string;
  skills: string[];
  benefits?: string[];
  postedDate: string;
  applicationDeadline?: string | null;
  status: "open" | "closed" | "filled";
}

export interface JobFilters {
  search?: string;
  location?: string;
  department?: string;
  employmentType?: EmploymentType | "All";
}

