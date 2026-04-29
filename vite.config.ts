import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@pages':       resolve(__dirname, 'src/pages'),
      '@components':  resolve(__dirname, 'src/components'),
      '@fixtures':    resolve(__dirname, 'src/fixtures'),
      '@utils':       resolve(__dirname, 'src/utils'),
      '@config':      resolve(__dirname, 'src/config'),
      '@types-local': resolve(__dirname, 'src/types'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
    include: ['src/tests/unit/**/*.test.ts'],   // ← corrected path
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './reports/coverage',
      include: ['src/**/*.ts'],
      exclude: [
        'src/setup/**',
        'src/types/**',
        'src/tests/**',
        'src/fixtures/**',
      ],
    },
    reporters: ['verbose'],
  },
});