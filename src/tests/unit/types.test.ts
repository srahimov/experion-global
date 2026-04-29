import { describe, it, expect } from 'vitest';
import type {
  ContactFormData,
  ServiceCard,
  BlogPost,
  TestUser,
  BrowserName,
  Environment,
  PageMetadata,
} from '../../types';

describe('Type contracts — ContactFormData', () => {
  it('should accept a valid ContactFormData object with required fields', () => {
    const data: ContactFormData = {
      name: 'John Doe',
      email: 'john@example.com',
    };
    expect(data.name).toBe('John Doe');
    expect(data.email).toBe('john@example.com');
  });

  it('should accept a ContactFormData object with all optional fields', () => {
    const data: ContactFormData = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '+11234567890',
      company: 'Acme Corp',
      message: 'Hello there',
    };
    expect(data.phone).toBe('+11234567890');
    expect(data.company).toBe('Acme Corp');
    expect(data.message).toBe('Hello there');
  });
});

describe('Type contracts — ServiceCard', () => {
  it('should accept a valid ServiceCard object', () => {
    const card: ServiceCard = {
      title: 'Quality Engineering',
      description: 'Full-cycle testing and automation.',
      link: '/services/quality-engineering',
    };
    expect(card.title).toBe('Quality Engineering');
    expect(card.link).toBeDefined();
  });

  it('should work without optional link field', () => {
    const card: ServiceCard = {
      title: 'DevSecOps',
      description: 'Rapid and agile software delivery.',
    };
    expect(card.link).toBeUndefined();
  });
});

describe('Type contracts — BlogPost', () => {
  it('should accept a valid BlogPost object', () => {
    const post: BlogPost = {
      title: 'The Future of Product Engineering',
      category: 'Software',
      date: '2026-04-28',
      author: 'reshma.miriam',
    };
    expect(post.title).toBeTruthy();
    expect(post.category).toBe('Software');
  });
});

describe('Type contracts — PageMetadata', () => {
  it('should accept a valid PageMetadata object', () => {
    const meta: PageMetadata = {
      title: 'Experion Technologies',
      url: 'https://experionglobal.com',
      description: 'Product Engineering company',
    };
    expect(meta.title).toBeTruthy();
    expect(meta.url).toContain('experionglobal');
  });
});

describe('Type contracts — BrowserName & Environment literals', () => {
  it('should accept valid BrowserName values', () => {
    const browsers: BrowserName[] = ['chromium', 'firefox', 'webkit'];
    expect(browsers).toHaveLength(3);
    browsers.forEach(b => expect(typeof b).toBe('string'));
  });

  it('should accept valid Environment values', () => {
    const envs: Environment[] = ['dev', 'qa', 'staging', 'prod'];
    expect(envs).toHaveLength(4);
    envs.forEach(e => expect(typeof e).toBe('string'));
  });
});

describe('Type contracts — TestUser', () => {
  it('should accept a valid TestUser object', () => {
    const user: TestUser = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+11234567890',
      company: 'Test Corp',
    };
    expect(user.name).toBeTruthy();
    expect(user.email).toContain('@');
  });
});