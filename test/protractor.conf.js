exports.config = {

  /**
   * Run ./node_modules/.bin/webdriver-manager start to launch Selenium
   */
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    './e2e/**/*.spec.js'
  ],

  baseUrl: 'http://localhost:9000'
};