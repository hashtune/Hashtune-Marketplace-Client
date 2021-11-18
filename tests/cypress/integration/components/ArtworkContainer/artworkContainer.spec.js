/// <reference types = "cypress" />


describe("Locators for ArtworkContainer", () => {

    beforeEach(() => {
    })
    it('locating ArtworkContainer elements specific to Home Page', () => {
        cy.visit("")
        // Should have indicators and dropdown as child
        cy.get('.tab-nav').children().should('have.length', 2)  
    
        // Should have 3 tabs
        cy.get('.tab-nav__indicators').children().should('have.length', 3);

        //First Tab should be All Hashtunes
        cy.get('.tab-nav__indicators>.tab-nav__indicators--element').eq(0).contains("All Hashtunes");

        //Second Tab should be Auctions
        cy.get('.tab-nav__indicators>.tab-nav__indicators--element').eq(1).contains("Auctions");

         //Third Tab should be Buy Now
        cy.get('.tab-nav__indicators>.tab-nav__indicators--element').eq(2).contains("Buy Now");
    })

    it('locating ArtworkContainer elements specific to Profile Page', () => {
        cy.visit("/user1");
        cy.intercept("")

        // DUPLICATE: Should have indicators and dropdown as child
        cy.get('.tab-nav').children().should('have.length', 2);

        // Should have 2 tabs
        cy.get('.tab-nav__indicators').children().should('have.length', 2);

        //First Tab should be All Hashtunes
        cy.get('.tab-nav__indicators>.tab-nav__indicators--element').eq(0).contains("Created");

        //Second Tab should be Auctions
        cy.get('.tab-nav__indicators>.tab-nav__indicators--element').eq(1).contains("Collected");
    })
})