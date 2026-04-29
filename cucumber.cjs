// cucumber.cjs — for allure-cucumberjs v3+
module.exports = {
  default: {
    require: [
      'src/tests/support/world.ts',
      'src/tests/step-definitions/**/*.ts',
    ],
    requireModule: ['ts-node/register'],
    format: [
      'progress-bar',
      // ✅ v3+ uses this path instead of /reporter
      'node_modules/allure-cucumberjs/dist/index.js',
      'html:reports/html/cucumber-report.html',
      'json:reports/cucumber-report.json',
    ],
    formatOptions: {
      resultsDir: 'allure-results',
    },
    paths: ['src/tests/features/**/*.feature'],
  },
};