import dotenv from 'dotenv';
import path from 'path';

const env = process.env.ENV || 'dev';
const envFile = env === 'qa' ? '.env.qa' : '.env';

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

export interface EnvironmentConfig {
  baseUrl: string;
  environment: string;
  headless: boolean;
  browser: string;
  timeout: number;
}

export const config: EnvironmentConfig = {
  baseUrl: process.env.BASE_URL || 'https://experionglobal.com',
  environment: process.env.ENVIRONMENT || 'dev',
  headless: process.env.HEADLESS !== 'false',
  browser: process.env.BROWSER || 'chromium',
  timeout: Number(process.env.TIMEOUT) || 30000,
};

export const URLS = {
  HOME: '/',
  SERVICES: '/services/',
  CONTACT: '/contact-us/',
} as const;