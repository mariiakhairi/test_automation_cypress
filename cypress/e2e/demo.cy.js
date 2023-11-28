/// <reference types="Cypress"/>

describe('Demo tests', () => {
	beforeEach(() => {
		cy.visit('https://example.com/')
	})

	it('Assert URL', () => {
		cy.url().should('contain', 'example.com')
	})

	it('Assert Title', () => {
		cy.title().should('contain', 'Example Domain')
	})

	it('Assert Element', () => {
		cy.get('h1').should('be.visible')
	})

	it('Reload and logs', () => {
		cy.log('Before reload')
		cy.reload()
		cy.log('After reload')
	})
})
