export type BlogType = 'technology' | 'business' | 'health' | 'entertainment' | 'hospitality';

export interface Blog {
  id: string;
  title: string;
  description: string;
  type: BlogType;
  createdAt: Date;
}

export interface BlogFormValues {
  title: string;
  description: string;
  type: BlogType;
}