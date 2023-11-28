/// <reference types="Cypress"/>

describe('Cypress screenshots', () => {
	it('Full page screenshot', () => {
		cy.visit('https://example.com/')
		cy.screenshot({ overwrite: true })
	})

	it('Element screenshot', () => {
		cy.visit('https://example.com/')
		cy.get('h1').screenshot({ overwrite: true })
	})
})
