/// <reference types="Cypress"/>

describe('TC_002_Login', () => {
	it('Should login and logout from application', () => {
		cy.visit('https://demoblaze.com/index.html')
		cy.get('#login2').click()

		cy.get('#logInModal').should('be.visible')

		cy.get('#loginusername').type('test', { force: true })
		cy.get('#loginpassword').type('test', { force: true })

		cy.get('button.btn-primary').contains('Log in').click()
		cy.get('#nameofuser').should('contain', 'Welcome test')
	})
})
