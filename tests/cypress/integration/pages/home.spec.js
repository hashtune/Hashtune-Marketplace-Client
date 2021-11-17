/// <reference types = "cypress" />


describe("Locators for Home page", () => {

    beforeEach(() => {
    })
    it('locating Home Page elements', () => {
        cy.visit("")
        // Should have indicators and dropdown as child
        cy.get('div.app').children().should('have.length', 2) 
        
        // Should have indicators and dropdown as child
        cy.get('div.app').find('nav');
        
        cy.get('div.app').find('main');

        cy.get('main').find('.hero');

        cy.get('main').find('.container');
    })

})