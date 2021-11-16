/// <reference types = "cypress" />


describe("Locators for ArtworkHistoryItem", () => {

    beforeEach(() => {

    })
    it('locating ArtworkHistoryItem elements from SingleArtwork Page', () => {
        cy.visit("/user1/ckvmhh53s01120kv562lw2oqc")

        // Second element (IN SEED DATA) is listed and therefore should have 2 children
        cy.get('.nft__history--item').eq(1).children().should('have.length', 2)

        cy.get('.nft__history--action').eq(1).contains("Listed by @sophiekahn"); 
    
        // First and third element (IN SEED DATA) is minted and therefore should have 1 child
        cy.get('.nft__history--item').eq(0).children().should('have.length', 1);
        cy.get('.nft__history--item').eq(2).children().should('have.length', 1);

        cy.get('.nft__history--action').eq(0).contains("Minted by @sophiekahn"); 
        cy.get('.nft__history--action').eq(2).contains("Minted by @sophiekahn"); 

        // Date for now is all the same
        cy.get('.nft__history--date').contains("Sep 22, 2021 at 3:39am");
    })
})