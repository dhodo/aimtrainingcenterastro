// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless'


export default defineConfig({
  integrations: [react()],
//   i18n: {
//     locales: ["es", "en", "cat"],
//     defaultLocale: "es",
//   },
  adapter: vercel(),
  output: 'server',
  base: '/',
});