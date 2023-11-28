/// <reference types="Cypress"/>

import ExamplePage from '../pages/ExamplePage'

describe('Demo tests', () => {
	const example = new ExamplePage()

	beforeEach(() => {
		example.openExamplePage()
	})

	afterEach(() => {
		cy.log('Running after each of my tests')
	})

	it('Assert URL', () => {
		example.assertUrl()
	})

	it('Assert Title', () => {
		example.assertTitle()
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
