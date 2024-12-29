import type { Skill } from "./skills";

export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  sourceUrl: string;
  websiteUrl?: string;
  privacy: ProjectPrivacy;
  skills: Skill[];
}

export type ProjectPrivacy = "public" | "private";
