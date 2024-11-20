import { defineConfig } from 'cypress';

export default defineConfig({
  // 指定新的测试文件目录
  e2e: {
    specPattern: 'tests/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
