const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://byxhub-staging.laratech.com.br',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
  },
  fixturesFolder: false,
  video: false,
})
