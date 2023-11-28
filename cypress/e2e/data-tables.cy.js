/// <reference types="Cypress"/>

describe('Data tables', () => {
	it('Validate values inside data tables', () => {
		cy.visit('https://practice-automation.com/tables/')
		cy.get('.wp-block-table').within(() => {
			cy.get('td').eq(0).should('contain', 'Item')
			cy.get('td').eq(1).should('contain', 'Price')
		})
	})
})
