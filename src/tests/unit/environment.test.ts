import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('Environment Config', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('should use BASE_URL from environment variables', async () => {
    vi.stubEnv('BASE_URL', 'https://experionglobal.com');
    const { config } = await import('../../config/environment');
    expect(config.baseUrl).toBe('https://experionglobal.com');
    vi.unstubAllEnvs();
  });

  it('should fall back to default base URL when BASE_URL is not set', async () => {
    vi.stubEnv('BASE_URL', '');
    const { config } = await import('../../config/environment');
    expect(config.baseUrl).toBe('https://experionglobal.com');
    vi.unstubAllEnvs();
  });

  it('should set headless to true by default', async () => {
    vi.stubEnv('HEADLESS', 'true');
    const { config } = await import('../../config/environment');
    expect(config.headless).toBe(true);
    vi.unstubAllEnvs();
  });

  it('should set headless to false when HEADLESS=false', async () => {
    vi.stubEnv('HEADLESS', 'false');
    const { config } = await import('../../config/environment');
    expect(config.headless).toBe(false);
    vi.unstubAllEnvs();
  });

  it('should default timeout to 30000', async () => {
    vi.stubEnv('TIMEOUT', '');
    const { config } = await import('../../config/environment');
    expect(config.timeout).toBe(30000);
    vi.unstubAllEnvs();
  });

  it('should use custom timeout when TIMEOUT is set', async () => {
    vi.stubEnv('TIMEOUT', '60000');
    const { config } = await import('../../config/environment');
    expect(config.timeout).toBe(60000);
    vi.unstubAllEnvs();
  });

  it('should export correct URLS constants', async () => {
    const { URLS } = await import('../../config/environment');
    expect(URLS.HOME).toBe('/');
    expect(URLS.SERVICES).toBe('/services/');
    expect(URLS.CONTACT).toBe('/contact-us/');
  });
});