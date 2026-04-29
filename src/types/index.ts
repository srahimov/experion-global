export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  link?: string;
}

export interface BlogPost {
  title: string;
  category: string;
  date?: string;
  author?: string;
}

export interface TestUser {
  name: string;
  email: string;
  phone?: string;
  company?: string;
}

export type BrowserName = 'chromium' | 'firefox' | 'webkit';

export type Environment = 'dev' | 'qa' | 'staging' | 'prod';

export interface PageMetadata {
  title: string;
  url: string;
  description?: string;
}