export type PillarCategory = 'events' | 'marketing' | 'uiux' | 'content';

export type WritingCategory =
  | 'All'
  | 'Articles'
  | 'Blogs'
  | 'Marketing Copy'
  | 'Social Media Copy'
  | 'Brand Stories'
  | 'Event Content'
  | 'Creative Writing'
  | 'Opinions'
  | 'Campaign Copy';

export interface WritingItem {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  desc: string;
  content: string;
  tags: string[];
  coverImage?: string;
  featured?: boolean;
}

export interface EventItem {
  id: string;
  name: string;
  role: string;
  year: string;
  organization: string;
  badge: string;
  responsibilities: string;
  workedOn: string;
  learnings: string;
  tags: string[];
  gallery: {
    src: string;
    caption: string;
  }[];
}

export interface MarketingProject {
  id: string;
  title: string;
  tagline: string;
  objective: string;
  targetAudience: string;
  strategy: string;
  creativeAssets: string;
  outcome: string;
  learnings: string;
  tags: string[];
  isPlaceholder?: boolean;
}

export interface UiUxProject {
  id: string;
  title: string;
  category: string;
  platform: string;
  problem: string;
  user: string;
  research: string;
  userFlow: string;
  wireframes: string;
  designDecisions: string;
  learnings: string;
  figmaPreviewUrl?: string;
  coverImage: string;
  tags: string[];
}

export interface ProjectSummary {
  id: string;
  title: string;
  category: PillarCategory;
  categoryLabel: string;
  year: string;
  desc: string;
  skills: string;
  image: string;
  actionLabel: string;
  isPlaceholder?: boolean;
}

export interface CaseStudyData {
  title: string;
  category: string;
  overview: string;
  objective: string;
  challenge: string;
  approach: string;
  execution: string;
  outcome: string;
  learnings: string;
}

export interface LightboxData {
  isOpen: boolean;
  src: string;
  caption: string;
}
