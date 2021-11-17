/// <reference types = "cypress" />


describe("Explore page locators", () => {

    beforeEach(() => {
    })
    it('locating Explore page elements', () => {
        cy.visit("/explore")
        // Should have indicators and dropdown as child
        cy.get('h1').should('have.text', 'Explore')
    })

})