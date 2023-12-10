const { defineConfig } = require('cypress')

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	chromeWebSecurity: false,
	viewportHeight: 600,
	viewportWidth: 1000,
	waitForAnimations: true,
	animationDistanceThreshold: 20,
	defaultCommandTimeout: 6000,
	execTimeout: 60000,
	pageLoadTimeout: 60000,
	requestTimeout: 15000,
	responseTimeout: 15000,
	e2e: {
		setupNodeEvents(on, config) {
			require('cypress-mochawesome-reporter/plugin')(on)
		},
		baseUrl: 'https://example.com/',
	},
})
