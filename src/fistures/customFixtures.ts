import { test as base, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ServicesPage } from '../pages/ServicesPage';
import { ContactPage } from '../pages/ContactPage';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export type CustomFixtures = {
  homePage: HomePage;
  servicesPage: ServicesPage;
  contactPage: ContactPage;
  header: Header;
  footer: Footer;
};

export const test = base.extend<CustomFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  servicesPage: async ({ page }, use) => {
    await use(new ServicesPage(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
  header: async ({ page }, use) => {
    await use(new Header(page));
  },
  footer: async ({ page }, use) => {
    await use(new Footer(page));
  },
});

export { expect } from '@playwright/test';