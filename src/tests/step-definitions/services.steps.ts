import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I am on the Experion product engineering services page', async function (this: CustomWorld) {
  await this.servicesPage.goto();
  await this.page.waitForLoadState('domcontentloaded');
});

Then('the page should display {string} service', async function (this: CustomWorld, serviceName: string) {
  const service = this.page.getByText(new RegExp(serviceName, 'i')).first();
  await service.scrollIntoViewIfNeeded();
  await expect(service).toBeVisible({ timeout: 15000 });
});

Then('the services page should display the case studies section', async function (this: CustomWorld) {
  const caseStudies = this.page.getByText(/Success Stories|Case Studies/i).first();
  await caseStudies.scrollIntoViewIfNeeded();
  await expect(caseStudies).toBeVisible({ timeout: 15000 });
});

Then('the page should contain text about {string}', async function (this: CustomWorld, keyword: string) {
  const text = this.page.getByText(new RegExp(keyword, 'i')).first();
  await expect(text).toBeVisible({ timeout: 15000 });
});