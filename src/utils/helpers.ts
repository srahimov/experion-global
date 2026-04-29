/**
 * Generates a random string of specified length.
 */
export function randomString(length: number = 8): string {
  return Math.random().toString(36).substring(2, 2 + length);
}

/**
 * Generates a random email address for test use.
 */
export function randomEmail(prefix: string = 'test'): string {
  return `${prefix}.${randomString(6)}@example.com`;
}

/**
 * Generates a random phone number (US format).
 */
export function randomPhone(): string {
  const digits = Math.floor(Math.random() * 9000000000) + 1000000000;
  return `+1${digits}`;
}

/**
 * Waits for a specified number of milliseconds.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Formats a date as YYYY-MM-DD string.
 */
export function formatDate(date: Date = new Date()): string {
  return date.toISOString().split('T')[0];
}

/**
 * Truncates a string to a max length with ellipsis.
 */
export function truncate(str: string, maxLength: number): string {
  return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
}

/**
 * Normalizes whitespace in a string (trims and collapses internal spaces).
 */
export function normalizeWhitespace(str: string): string {
  return str.trim().replace(/\s+/g, ' ');
}

/**
 * Checks whether a string is a valid URL.
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Checks whether a string is a valid email.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Returns a test data object for Contact form.
 */
export function getTestContactData() {
  return {
    name: `Test User ${randomString(4)}`,
    email: randomEmail('auto'),
    phone: randomPhone(),
    message: 'This is an automated test message.',
  };
}