const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ysiihu',
  e2e: {
    specPattern: '..\cypress\integration\exemplo.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
