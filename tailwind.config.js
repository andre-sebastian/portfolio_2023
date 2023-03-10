/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-poppins)'],
				serif: ['var(--font-roboto-slab)'],
				mono: [],
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		styled: true,
		themes: [
			{
				forest: {
					...require('daisyui/src/colors/themes')['[data-theme=forest]'],
					primary: '#22533e',
					'primary-content': '#fff',
					secondary: '#27272a',
					'secondary-content': '#fff',
					accent: '#fff',
					'accent-content': '#000',
					neutral: '#212425', //	neutral: '#27272a',
					'neutral-content': '#99A6A6',
					'base-100': '#18181b',
					'base-200': '#27272a',
					'base-300': '#3f3f46',
					'--rounded-box': '0.75rem',
					'--rounded-btn': '0.5rem',
					'--rounded-badge': '1.9rem',
					'--animation-btn': '0.25s',
					'--animation-input': '0.2s',
					'--btn-text-case': 'uppercase',
					'--btn-focus-scale': '0.95',
					'--border-btn': '1px',
					'--tab-border': '1px',
					'--tab-radius': '0.5rem',
				},
			},
		],
		base: true,
		utils: true,
		logs: false,
		rtl: false,
		prefix: '',
		darkTheme: 'dark',
	},
};
