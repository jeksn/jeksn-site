/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
				mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular'],
				space: ['var(--font-space-grotesk)', 'ui-sans-serif', 'Georgia'],
				departure: ['var(--font-departure-mono)', 'ui-monospace', 'SFMono-Regular'],
			},
		},
	},
	plugins: [],
}
