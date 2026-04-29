import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { URLS } from '../config/environment';
import { ContactFormData } from '../types';

export class ContactPage extends BasePage {
  readonly pageHeading: Locator;
  readonly breadcrumb: Locator;
  readonly helpText: Locator;
  readonly generalCard: Locator;
  readonly salesCard: Locator;
  readonly careersCard: Locator;
  readonly contactForm: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly officeLocations: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading    = page.getByRole('heading', { name: /Contact Us/i }).first();
    this.breadcrumb     = page.locator('.breadcrumbs, [class*="breadcrumb"]');
    this.helpText       = page.getByText(/What can we help you with/i);
    this.generalCard    = page.getByText(/General/i).first();
    this.salesCard      = page.getByText(/Sales/i).first();
    this.careersCard    = page.getByText(/Careers/i).first();
    this.contactForm    = page.locator('form').first();
    this.nameInput      = page.locator('input[name*="name"], input[placeholder*="Name"], input[id*="name"]').first();
    this.emailInput     = page.locator('input[type="email"], input[name*="email"], input[placeholder*="Email"]').first();
    this.phoneInput     = page.locator('input[type="tel"], input[name*="phone"], input[placeholder*="Phone"]').first();
    this.messageInput   = page.locator('textarea').first();
    this.submitButton   = page.getByRole('button', { name: /Submit|Send|Contact/i });
    this.successMessage = page.getByText(/Thank you|success|received/i).first();
    this.officeLocations = page.getByText(/Trivandrum|India|USA|UK/i).first();
  }

  async goto(): Promise<void> {
    await this.navigateTo(URLS.CONTACT);
  }

  async assertPageLoaded(): Promise<void> {
    await this.assertUrl(/contact-us/i);
    await expect(this.helpText).toBeVisible({ timeout: 15000 });
  }

  async assertContactOptionsVisible(): Promise<void> {
    await expect(this.generalCard).toBeVisible();
    await expect(this.salesCard).toBeVisible();
    await expect(this.careersCard).toBeVisible();
  }

  async fillContactForm(data: ContactFormData): Promise<void> {
    if (await this.nameInput.isVisible()) {
      await this.nameInput.fill(data.name);
    }
    if (await this.emailInput.isVisible()) {
      await this.emailInput.fill(data.email);
    }
    if (data.phone && await this.phoneInput.isVisible()) {
      await this.phoneInput.fill(data.phone);
    }
    if (data.message && await this.messageInput.isVisible()) {
      await this.messageInput.fill(data.message);
    }
  }

  async assertBreadcrumb(): Promise<void> {
    await expect(this.page.getByText(/Home/i).first()).toBeVisible();
  }
}