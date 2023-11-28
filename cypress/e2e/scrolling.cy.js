/// <reference types="Cypress"/>

describe('Scrolling in cypress', () => {
	it('Scroll into view', () => {
		cy.visit('https://practice-automation.com/')
		cy.get('footer').scrollIntoView()
	})
})
