import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I am on the Experion home page', async function (this: CustomWorld) {
  await this.homePage.goto();
  await this.page.waitForLoadState('domcontentloaded');
});

Then('the page title should contain {string}', async function (this: CustomWorld, expectedTitle: string) {
  const title = await this.page.title();
  expect(title).toContain(expectedTitle);
});

Then('the Experion logo should be visible in the header', async function (this: CustomWorld) {
  const logo = this.page.locator('header img, .site-logo img, a img[alt*="xperion"]').first();
  await expect(logo).toBeVisible({ timeout: 10000 });
});

Then('the navigation menu toggle should be visible', async function (this: CustomWorld) {
  const toggle = this.page.locator('.elementor-menu-toggle, .hamburger, [class*="menu-toggle"]').first();
  await expect(toggle).toBeVisible({ timeout: 10000 });
});

Then('the hero section should be visible on the page', async function (this: CustomWorld) {
  await expect(this.page.locator('body')).toBeVisible();
  const heading = this.page.locator('h1, h2').first();
  await expect(heading).toBeVisible({ timeout: 15000 });
});

Then('the page should display the years of expertise section', async function (this: CustomWorld) {
  const section = this.page.getByText(/Years Of Expertise/i).first();
  await section.scrollIntoViewIfNeeded();
  await expect(section).toBeVisible({ timeout: 15000 });
});

Then('the home page should display the services section', async function (this: CustomWorld) {
  const section = this.page.getByText(/What We Do/i).first();
  await section.scrollIntoViewIfNeeded();
  await expect(section).toBeVisible({ timeout: 15000 });
});

Then('the home page should display the testimonials section', async function (this: CustomWorld) {
  const section = this.page.getByText(/Customer Speak/i).first();
  await section.scrollIntoViewIfNeeded();
  await expect(section).toBeVisible({ timeout: 15000 });
});

Then('the home page should display the blog section', async function (this: CustomWorld) {
  const section = this.page.getByText(/Stories From The Digital Domain/i).first();
  await section.scrollIntoViewIfNeeded();
  await expect(section).toBeVisible({ timeout: 15000 });
});

Then('the home page should have at least one {string} call to action link', async function (this: CustomWorld, ctaText: string) {
  const cta = this.page.getByRole('link', { name: new RegExp(ctaText, 'i') }).first();
  await expect(cta).toBeVisible({ timeout: 15000 });
});

When('I click the Experion logo', async function (this: CustomWorld) {
  const logo = this.page.locator('header a').first();
  await logo.click();
  await this.page.waitForLoadState('domcontentloaded');
});

Then('the URL should contain {string}', async function (this: CustomWorld, expectedUrl: string) {
  await expect(this.page).toHaveURL(new RegExp(expectedUrl, 'i'));
});

When('I click the navigation menu toggle', async function (this: CustomWorld) {
  const toggle = this.page.locator('.elementor-menu-toggle, [class*="menu-toggle"]').first();
  await toggle.click();
  await this.page.waitForTimeout(500);
});

Then('the {string} navigation link should be visible', async function (this: CustomWorld, linkText: string) {
  const link = this.page.getByRole('link', { name: new RegExp(linkText, 'i') }).first();
  await expect(link).toBeVisible({ timeout: 10000 });
});

Then('the footer should be visible on the page', async function (this: CustomWorld) {
  const footer = this.page.locator('footer');
  await footer.scrollIntoViewIfNeeded();
  await expect(footer).toBeVisible({ timeout: 10000 });
});

Then('the footer should display copyright information', async function (this: CustomWorld) {
  const footer = this.page.locator('footer');
  await footer.scrollIntoViewIfNeeded();
  const copyright = footer.getByText(/©|Copyright|Experion/i).first();
  await expect(copyright).toBeVisible({ timeout: 10000 });
});