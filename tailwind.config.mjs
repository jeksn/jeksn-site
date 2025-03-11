/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter Variable', 'ui-sans-serif', 'system-ui'],
				mono: ['JetBrains Mono Variable', 'ui-monospace', 'SFMono-Regular'],
				space: ['Space Grotesk Variable', 'ui-serif', 'Georgia'],
			},
		},
	},
	plugins: [],
}
