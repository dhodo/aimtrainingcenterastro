import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static',
});


// import { defineConfig } from 'astro/config';
// import react from '@astrojs/react';
// import vercel from '@astrojs/vercel/serverless';

// export default defineConfig({
//   integrations: [react()],
//   output: 'server',
//   adapter: vercel(),
// });
