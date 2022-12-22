/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				violet: {
					800: '#121721',
					700: '#19202D',
					400: '#5964E0',
					300: '#939BF4'
				},
				grey: {
					400: '#6E8098',
					300: '#9DAEC2',
					200: '#F4F6F8',
					100: '#FFFFFF'
				}
			}
		}
	},
	plugins: []
}
