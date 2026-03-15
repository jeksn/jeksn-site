// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), alpinejs()],
  redirects: {
	'/small-projects': '/projects',
	// '/blog': '/',
  },
 site: "https://jeksn.me",
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