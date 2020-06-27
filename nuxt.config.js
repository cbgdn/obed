module.exports = {
	mode: 'spa',
	telemetry: false,
	// Headers of the page
	head: {
		title: 'Obed',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
		]
	},
	loading: false, // Disable default loading bar
	build: {
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				// Run ESLint on save
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
			// Extend only webpack config for client-bundle
			if (isClient) { config.target = 'electron-renderer' }
		}
	},
	dev: process.env.NODE_ENV === 'DEV',
	css: [
		'@/assets/css/global.css'
	]
}
