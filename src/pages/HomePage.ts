import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { URLS } from '../config/environment';

export class HomePage extends BasePage {
  // Locators
  readonly heroSection: Locator;
  readonly heroHeading: Locator;
  readonly aboutSection: Locator;
  readonly statsSection: Locator;
  readonly servicesSection: Locator;
  readonly serviceCards: Locator;
  readonly testimonialsSection: Locator;
  readonly blogSection: Locator;
  readonly blogCards: Locator;
  readonly ctaKnowMoreButtons: Locator;
  readonly yearsExpertiseText: Locator;

  constructor(page: Page) {
    super(page);
    this.heroSection         = page.locator('.rev_slider_wrapper, [class*="slider"]').first();
    this.heroHeading         = page.locator('h1, .tp-caption').first();
    this.aboutSection        = page.locator('section').filter({ hasText: 'Years Of Expertise' });
    this.statsSection        = page.locator('section').filter({ hasText: 'Engineering Maestros' });
    this.servicesSection     = page.locator('section').filter({ hasText: 'What We Do' });
    this.serviceCards        = page.locator('.elementor-widget-wrap').filter({ hasText: 'DevSecOps' });
    this.testimonialsSection = page.locator('section').filter({ hasText: 'Customer Speak' });
    this.blogSection         = page.locator('section').filter({ hasText: 'Stories From The Digital Domain' });
    this.blogCards           = page.locator('article, .elementor-post');
    this.ctaKnowMoreButtons  = page.getByRole('link', { name: /Know More/i });
    this.yearsExpertiseText  = page.getByText(/Years Of Expertise/i);
  }

  async goto(): Promise<void> {
    await this.navigateTo(URLS.HOME);
  }

  async assertPageLoaded(): Promise<void> {
    await this.assertPageTitle(/Experion Technologies/i);
    await expect(this.yearsExpertiseText).toBeVisible({ timeout: 15000 });
  }

  async clickFirstKnowMore(): Promise<void> {
    await this.ctaKnowMoreButtons.first().click();
  }

  async getBlogCardCount(): Promise<number> {
    return this.blogCards.count();
  }

  async assertHeroVisible(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
  }

  async assertServicesVisible(): Promise<void> {
    await expect(this.yearsExpertiseText).toBeVisible();
  }

  async assertTestimonialsVisible(): Promise<void> {
    const testimonials = this.page.getByText(/Customer Speak/i).first();
    await expect(testimonials).toBeVisible({ timeout: 15000 });
  }
}