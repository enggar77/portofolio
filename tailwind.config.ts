import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*{js,ts,jsx,tsx,mdx}',
		'node_modules/daisyui/dist/**/*.js',
		'node_modules/react-daisyui/dist/**/*.js',
	],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ['lofi', 'black'],
	},
} satisfies Config;
