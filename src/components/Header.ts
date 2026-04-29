import { Page, Locator, expect } from '@playwright/test';

export class Header {
  private readonly page: Page;
  readonly logo: Locator;
  readonly menuToggle: Locator;
  readonly navLinks: Locator;
  readonly recruitmentAlert: Locator;

  constructor(page: Page) {
    this.page             = page;
    this.logo             = page.locator('a img[alt*="Experion"], .site-logo, header img').first();
    this.menuToggle       = page.locator('.hamburger, [class*="menu-toggle"], .elementor-menu-toggle').first();
    this.navLinks         = page.locator('nav a, .nav-menu a, .elementor-nav-menu a');
    this.recruitmentAlert = page.locator('[class*="fraud"], [class*="alert"]').first();
  }

  async assertLogoVisible(): Promise<void> {
    await expect(this.logo).toBeVisible({ timeout: 10000 });
  }

  async clickLogo(): Promise<void> {
    await this.logo.click();
  }

  async openMobileMenu(): Promise<void> {
    await this.menuToggle.click();
  }

  async getNavLinksCount(): Promise<number> {
    return this.navLinks.count();
  }

  async clickNavLink(linkText: string): Promise<void> {
    await this.navLinks.filter({ hasText: linkText }).first().click();
  }

  async assertHeaderVisible(): Promise<void> {
    await expect(this.page.locator('header')).toBeVisible();
  }
}