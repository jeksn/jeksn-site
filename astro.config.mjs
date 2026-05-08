// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';

import alpinejs from '@astrojs/alpinejs';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), alpinejs(), sitemap()],
  redirects: {
	'/small-projects': '/projects',
	// '/blog': '/',
  },
 site: "https://jek.sn",
 markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },
  fonts: [{
    provider: fontProviders.local(),
    name: "DepartureMono",
    cssVariable: "--font-departure-mono",
    options: {
      variants: [{
        src: ['./src/assets/fonts/DepartureMono-Regular.woff2'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }]
});