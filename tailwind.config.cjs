const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const colors = require('tailwindcss/colors')

/**
 * Tailwind CSS default colors.
 *
 * @see https://tailwindcss.com/docs/customizing-colors#using-the-default-colors
 */
const defaultColors = {
	transparent: 'transparent',
	current: 'currentColor',
	black: colors.black,
	white: colors.white,
	gray: colors.gray,
	emerald: colors.emerald,
	indigo: colors.indigo,
	yellow: colors.yellow,
};

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		container: {
			center: true,
		},
		colors: {
			...defaultColors,
			'primary': '#402A1D',
			'primary-lighter': '#5A3B29',
		},
	},

	plugins: [forms, typography]
};

module.exports = config;
