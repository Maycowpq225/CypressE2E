const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
