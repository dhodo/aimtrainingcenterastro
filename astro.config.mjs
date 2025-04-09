import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aimtrainingcenter.com',
  integrations: [react(), sitemap()],
  output: 'static',
});
