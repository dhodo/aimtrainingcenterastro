// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless'


export default defineConfig({
  integrations: [react()],
  adapter: vercel(),
  output: 'server',
  base: '/',
});