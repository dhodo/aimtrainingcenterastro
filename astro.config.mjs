// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless'
import image from '@astrojs/image';


export default defineConfig({
  integrations: [react(), image()],
  adapter: vercel(),
  output: 'server',
});