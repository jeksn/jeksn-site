// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), sitemap()],
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
  fonts: [
    {
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
    },
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Space Grotesk",
      cssVariable: "--font-space-grotesk",
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
    },
  ]
});