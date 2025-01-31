const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev-hub.byx.capital/',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
  },
  fixturesFolder: 'cypress/fixtures',
  video: false,
  defaultCommandTimeout: 10000
})
