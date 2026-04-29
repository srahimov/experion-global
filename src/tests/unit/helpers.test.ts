import { describe, it, expect } from 'vitest';
import {
  randomString,
  randomEmail,
  randomPhone,
  formatDate,
  truncate,
  normalizeWhitespace,
  isValidUrl,
  isValidEmail,
  getTestContactData,
} from '../../utils/helpers';

describe('randomString()', () => {
  it('should return a string of default length 8', () => {
    const result = randomString();
    expect(result).toBeTypeOf('string');
    expect(result.length).toBe(8);
  });

  it('should return a string of the specified length', () => {
    expect(randomString(4).length).toBe(4);
    expect(randomString(12).length).toBe(12);
  });

  it('should return different values on each call', () => {
    const a = randomString();
    const b = randomString();
    expect(a).not.toBe(b);
  });
});

describe('randomEmail()', () => {
  it('should return a valid email address', () => {
    const email = randomEmail();
    expect(isValidEmail(email)).toBe(true);
  });

  it('should use the provided prefix', () => {
    const email = randomEmail('qa');
    expect(email.startsWith('qa.')).toBe(true);
  });

  it('should default to "test" prefix', () => {
    const email = randomEmail();
    expect(email.startsWith('test.')).toBe(true);
  });

  it('should always end with @example.com', () => {
    const email = randomEmail();
    expect(email.endsWith('@example.com')).toBe(true);
  });
});

describe('randomPhone()', () => {
  it('should return a string starting with +1', () => {
    const phone = randomPhone();
    expect(phone.startsWith('+1')).toBe(true);
  });

  it('should return exactly 12 characters (+1 and 10 digits)', () => {
    const phone = randomPhone();
    expect(phone.length).toBe(12);
  });

  it('should only contain digits after +1', () => {
    const phone = randomPhone();
    const digits = phone.replace('+1', '');
    expect(/^\d{10}$/.test(digits)).toBe(true);
  });
});

describe('formatDate()', () => {
  it('should return a date string in YYYY-MM-DD format', () => {
    const result = formatDate(new Date('2025-06-15'));
    expect(result).toBe('2025-06-15');
  });

  it('should use today\'s date when no argument is passed', () => {
    const result = formatDate();
    expect(/^\d{4}-\d{2}-\d{2}$/.test(result)).toBe(true);
  });

  it('should handle month and day padding correctly', () => {
    const result = formatDate(new Date('2025-01-05'));
    expect(result).toBe('2025-01-05');
  });
});

describe('truncate()', () => {
  it('should truncate a string longer than maxLength', () => {
    const result = truncate('Hello World', 5);
    expect(result).toBe('Hello...');
  });

  it('should not truncate a string equal to maxLength', () => {
    const result = truncate('Hello', 5);
    expect(result).toBe('Hello');
  });

  it('should not truncate a string shorter than maxLength', () => {
    const result = truncate('Hi', 10);
    expect(result).toBe('Hi');
  });

  it('should return an empty string unchanged', () => {
    expect(truncate('', 5)).toBe('');
  });
});

describe('normalizeWhitespace()', () => {
  it('should trim leading and trailing whitespace', () => {
    expect(normalizeWhitespace('  hello  ')).toBe('hello');
  });

  it('should collapse multiple internal spaces into one', () => {
    expect(normalizeWhitespace('hello   world')).toBe('hello world');
  });

  it('should handle tabs and newlines', () => {
    expect(normalizeWhitespace('hello\t\nworld')).toBe('hello world');
  });

  it('should return an empty string when input is only whitespace', () => {
    expect(normalizeWhitespace('     ')).toBe('');
  });
});

describe('isValidUrl()', () => {
  it('should return true for a valid https URL', () => {
    expect(isValidUrl('https://experionglobal.com')).toBe(true);
  });

  it('should return true for a valid http URL', () => {
    expect(isValidUrl('http://example.com/path?query=1')).toBe(true);
  });

  it('should return false for a string without protocol', () => {
    expect(isValidUrl('experionglobal.com')).toBe(false);
  });

  it('should return false for a plain word', () => {
    expect(isValidUrl('notaurl')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isValidUrl('')).toBe(false);
  });
});

describe('isValidEmail()', () => {
  it('should return true for a valid email', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });

  it('should return true for emails with subdomains', () => {
    expect(isValidEmail('user@mail.example.co.uk')).toBe(true);
  });

  it('should return false for an email without @', () => {
    expect(isValidEmail('userexample.com')).toBe(false);
  });

  it('should return false for an email without domain', () => {
    expect(isValidEmail('user@')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });
});

describe('getTestContactData()', () => {
  it('should return an object with required fields', () => {
    const data = getTestContactData();
    expect(data).toHaveProperty('name');
    expect(data).toHaveProperty('email');
    expect(data).toHaveProperty('phone');
    expect(data).toHaveProperty('message');
  });

  it('should return a valid email in the data', () => {
    const data = getTestContactData();
    expect(isValidEmail(data.email)).toBe(true);
  });

  it('should return a valid phone in the data', () => {
    const data = getTestContactData();
    expect(data.phone.startsWith('+1')).toBe(true);
  });

  it('should return unique data on each call', () => {
    const a = getTestContactData();
    const b = getTestContactData();
    expect(a.name).not.toBe(b.name);
    expect(a.email).not.toBe(b.email);
  });
});