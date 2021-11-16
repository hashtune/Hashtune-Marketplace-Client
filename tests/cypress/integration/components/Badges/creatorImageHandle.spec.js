/// <reference types = "cypress" />


describe("Locators for CreatorImageHandle", () => {

    beforeEach(() => {
    })
    it('locating CreatorImageHandle elements', () => {
        //ONLY TESTED FOR HOME PAGE
        cy.visit("");

        //Should only occur once on page
        cy.get('.hero__details--user-details').should('have.length', 1);
        cy.get('.hero__details--user-details>a').contains('@');
    })
})