import { setWorldConstructor, World, IWorldOptions, Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium, firefox, webkit } from 'playwright';
import { config } from '../../config/environment';
import { logger } from '../../utils/logger';
import { HomePage } from '../../pages/HomePage';
import { ServicesPage } from '../../pages/ServicesPage';
import { ContactPage } from '../../pages/ContactPage';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  // Page Objects
  homePage!: HomePage;
  servicesPage!: ServicesPage;
  contactPage!: ContactPage;
  header!: Header;
  footer!: Footer;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
  const browserName = config.browser;
  logger.info(`Launching browser: ${browserName}`);

  this.browser = browserName === 'firefox'
    ? await firefox.launch({ headless: config.headless })
    : browserName === 'webkit'
    ? await webkit.launch({ headless: config.headless })
    : await chromium.launch({ headless: config.headless });

  this.context = await this.browser.newContext({
    baseURL: config.baseUrl,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  });

  this.page = await this.context.newPage();

  // Initialise page objects
  this.homePage     = new HomePage(this.page);
  this.servicesPage = new ServicesPage(this.page);
  this.contactPage  = new ContactPage(this.page);
  this.header       = new Header(this.page);
  this.footer       = new Footer(this.page);

  logger.info('Browser and page objects initialised');
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === 'FAILED') {
    const screenshot = await this.page.screenshot({ fullPage: true });
    this.attach(screenshot, 'image/png');
    logger.error(`Scenario FAILED: ${scenario.pickle.name}`);
  }

  await this.page.close();
  await this.context.close();
  await this.browser.close();
  logger.info('Browser closed');
});

BeforeAll(async function () {
  logger.info('=== Test Suite Starting ===');
  logger.info(`Environment : ${config.environment}`);
  logger.info(`Base URL    : ${config.baseUrl}`);
});

AfterAll(async function () {
  logger.info('=== Test Suite Completed ===');
});