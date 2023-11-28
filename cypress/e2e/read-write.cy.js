/// <reference types="Cypress"/>

describe('Cypress files', () => {
	it('Read/write into JSON file', () => {
		cy.writeFile('test-data/data.json', {
			name: 'Peter',
			email: 'peter@email.com',
		})

		cy.readFile('test-data/data.json').then((user) => {
			expect(user.name).to.equal('Peter')
			expect(user.email).to.equal('peter@email.com')
		})
	})

	it('Read/write into simple txt file', () => {
		cy.writeFile('test-data/plain.txt', 'Hello world', 'ascii')
	})
})
