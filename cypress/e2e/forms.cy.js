/// <reference types="Cypress"/>

describe('Forms, Buttons & Checkbox', () => {
	it('Submit and assert form', () => {
		// Variables with data
		const name = 'Mariia'
		const drink = 'Water'
		const color = 'Red'
		const email = 'mariia@email.com'
		const message = 'I like Cypress'

		//Load the form
		cy.visit('https://practice-automation.com/form-fields/')
		cy.get('[data-test="contact-form"]')

		//Fill the form
		cy.get('#g1103-name').type(name)
		cy.contains(drink).click()
		cy.contains(color).click()
		cy.get('#email').type(email)
		cy.get('#contact-form-comment-message').type(message)
		cy.contains('Submit').click()

		//Assert form details
		cy.get('.contact-form-submission').should('be.visible')
		cy.get('.field-value').contains(name).should('be.visible')
		cy.get('.field-value').contains(drink).should('be.visible')
		cy.get('.field-value').contains(color).should('be.visible')
		cy.get('.field-value').contains(email).should('be.visible')
		cy.get('.field-value').contains(message).should('be.visible')
	})
})
