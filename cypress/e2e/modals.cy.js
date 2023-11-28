/// <reference types="Cypress"/>

describe('Cypress Modals', () => {
	it('Open and assert Modal', () => {
		// Variables with data
		var title = 'Simple Modal'
		var text = 'Hi, I’m a simple modal.'

		//Load the modal
		cy.visit('https://practice-automation.com/modals/')

		//Click on "Simple modal"
		cy.get('#simpleModal').click()

		//Assert the text in the pop-up
		cy.get('.pum-title').contains(title).should('be.visible')
		cy.get('p').contains(text).should('be.visible')

		//Close the modal
		cy.get('[aria-label="Close"]').eq(1).click()
		cy.get('.pum-title').should('not.be.visible')
	})
})
