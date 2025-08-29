// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), alpinejs()],
  redirects: {
	'/small-projects': '/projects',
	'/blog': '/',
  },
 site: "https://jeksn.me",
 markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },
});