export interface Project {
  title: string;
  description: string;
  images: string[];
  sourceUrl: string;
  websiteUrl?: string;
  privacy: ProjectPrivacy;
  techs: string[];
}

export type ProjectPrivacy = "public" | "private";
