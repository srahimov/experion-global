import { FullConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

async function globalSetup(config: FullConfig): Promise<void> {
  const env = process.env.ENV || 'dev';
  const envFile = env === 'qa' ? '.env.qa' : '.env';

  dotenv.config({ path: path.resolve(process.cwd(), envFile) });

  console.log(`\n🚀 Global Setup — Environment: ${env.toUpperCase()}`);
  console.log(`   Base URL : ${process.env.BASE_URL}`);
  console.log(`   Headless : ${process.env.HEADLESS}`);
  console.log(`   Browser  : ${process.env.BROWSER}\n`);
}

export default globalSetup;