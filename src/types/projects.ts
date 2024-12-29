import type { SKILLS } from "@/constants/skills";

export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  sourceUrl: string;
  websiteUrl?: string;
  privacy: ProjectPrivacy;
  skills: Skills[];
}

export type Skills = (typeof SKILLS)[number];

export type ProjectPrivacy = "public" | "private";
