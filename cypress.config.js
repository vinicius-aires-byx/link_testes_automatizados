const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://hub-staging.byx.capital/',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
  },
  fixturesFolder: false,
  video: false,
})
