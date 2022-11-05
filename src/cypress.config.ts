// More Info @ https://docs.cypress.io/
//             https://nextjs.org/docs/testing
import { defineConfig } from 'cypress';

export default defineConfig({
   e2e: {
      setupNodeEvents(on, config) {
         // implement node event listeners here
      },
      baseUrl: 'http://localhost:3000',
   },
});
