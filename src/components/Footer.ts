import { Page, Locator, expect } from '@playwright/test';

export class Footer {
  private readonly page: Page;
  readonly footer: Locator;
  readonly footerLinks: Locator;
  readonly copyrightText: Locator;
  readonly socialLinks: Locator;
  readonly linkedInLink: Locator;
  readonly twitterLink: Locator;

  constructor(page: Page) {
    this.page          = page;
    this.footer        = page.locator('footer');
    this.footerLinks   = page.locator('footer a');
    this.copyrightText = page.locator('footer').getByText(/©|Copyright|Experion/i).first();
    this.socialLinks   = page.locator('footer a[href*="linkedin"], footer a[href*="twitter"], footer a[href*="facebook"]');
    this.linkedInLink  = page.locator('a[href*="linkedin"]').first();
    this.twitterLink   = page.locator('a[href*="twitter"]').first();
  }

  async assertFooterVisible(): Promise<void> {
    await this.footer.scrollIntoViewIfNeeded();
    await expect(this.footer).toBeVisible({ timeout: 10000 });
  }

  async assertCopyrightVisible(): Promise<void> {
    await this.footer.scrollIntoViewIfNeeded();
    await expect(this.copyrightText).toBeVisible({ timeout: 10000 });
  }

  async getFooterLinksCount(): Promise<number> {
    return this.footerLinks.count();
  }

  async clickFooterLink(linkText: string): Promise<void> {
    await this.footerLinks.filter({ hasText: linkText }).first().click();
  }
}