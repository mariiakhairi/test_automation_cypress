/// <reference types="Cypress"/>

describe('Demo tests', () => {
	it('Assert URL', () => {
		cy.visit('https://example.com/')
		cy.url().should('contain', 'example.com')
	})

	it('Assert Title', () => {
		cy.visit('https://example.com/')
		cy.title().should('contain', 'Example Domain')
	})
})
