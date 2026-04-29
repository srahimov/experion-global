import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I am on the Experion contact us page', async function (this: CustomWorld) {
  await this.contactPage.goto();
  await this.page.waitForLoadState('domcontentloaded');
});

Then('the page should display {string} text', async function (this: CustomWorld, expectedText: string) {
  const element = this.page.getByText(new RegExp(expectedText, 'i')).first();
  await expect(element).toBeVisible({ timeout: 15000 });
});

Then('the contact page should display the {string} contact option', async function (this: CustomWorld, option: string) {
  const element = this.page.getByText(new RegExp(`^${option}$`, 'i')).first();
  await element.scrollIntoViewIfNeeded();
  await expect(element).toBeVisible({ timeout: 10000 });
});

Then('the contact page should display email {string}', async function (this: CustomWorld, email: string) {
  const emailLink = this.page.getByText(email).first();
  await emailLink.scrollIntoViewIfNeeded();
  await expect(emailLink).toBeVisible({ timeout: 10000 });
});

Then('the contact page should display office location for {string}', async function (this: CustomWorld, country: string) {
  const location = this.page.getByText(new RegExp(country, 'i')).first();
  await location.scrollIntoViewIfNeeded();
  await expect(location).toBeVisible({ timeout: 10000 });
});

Then('the contact page should display more than {int} office locations', async function (this: CustomWorld, count: number) {
  const locations = this.page.getByText(/USA|India|UK|Australia|Japan/i);
  const locationCount = await locations.count();
  expect(locationCount).toBeGreaterThan(count);
});