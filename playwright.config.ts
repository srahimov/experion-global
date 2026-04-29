import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load env file based on ENV variable
const env = process.env.ENV || 'dev';
dotenv.config({ path: path.resolve(process.cwd(), env === 'qa' ? '.env.qa' : '.env') });

export default defineConfig({
  testDir: './tests',
  timeout: Number(process.env.TIMEOUT) || 30000,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 4,
  fullyParallel: true,

  reporter: [
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['allure-playwright', { resultsDir: 'allure-results' }],
    ['line'],
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://experionglobal.com',
    headless: process.env.HEADLESS !== 'false',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    trace: 'on-first-retry',
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 7'] },
    },
  ],

  globalSetup: './src/setup/globalSetup.ts',
});