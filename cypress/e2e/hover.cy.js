/// <reference types="Cypress"/>

describe('Cypress hover', () => {
	it('Hover workaround', () => {
		// Variables with data
		const text = 'You did it!'

		//Go to the page and trigger mouse over
		cy.visit('https://practice-automation.com/hover/')
		cy.get('#mouse_over').trigger('mouseover')

		//Assert text
		cy.get('#mouse_over').contains(text)
	})
})
