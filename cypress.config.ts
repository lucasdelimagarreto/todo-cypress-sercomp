import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    baseUrl: 'http://localhost:5173/',
    watchForFileChanges: true
  },
  
});
