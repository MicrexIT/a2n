const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('daisyui')],

	daisyui: {
		themes: [
			{
				mytheme11: {
					primary: '#027b91',

					secondary: '#b69ee2',

					accent: '#0da0aa',

					neutral: '#29222A',

					'base-100': '#F6F4F6',

					info: '#5EC0DE',

					success: '#155647',

					warning: '#B3920F',

					error: '#E04242'
				},
				mytheme00: {
					primary: '#a6f280',

					secondary: '#ddc32c',

					accent: '#22878e',

					neutral: '#1A1B29',

					'base-100': '#FCFDFD',

					info: '#546FD4',

					success: '#115A4B',

					warning: '#F0A85C',

					error: '#F84983'
				},
				mytheme0: {
					primary: '#037500',

					secondary: '#fc4ee8',

					accent: '#c010d3',

					neutral: '#16141F',

					'base-100': '#ECE8F2',

					info: '#8FA1DB',

					success: '#69ECE2',

					warning: '#FAD329',

					error: '#EC6F8E'
				},
				mytheme: {
					primary: '#b9cbf7',

					secondary: '#a7f7a3',

					accent: '#57d2e0',

					neutral: '#2C303A',

					'base-100': '#F2F3F8',

					info: '#4A9EE3',

					success: '#2EC275',

					warning: '#B66311',

					error: '#F35369'
				}
			}
		]
	}
}

module.exports = config
