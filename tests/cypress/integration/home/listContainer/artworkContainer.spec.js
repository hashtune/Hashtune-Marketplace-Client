/// <reference types = "cypress" />

describe("Locators for ArtworkContainer", () => {

    beforeEach(() => {
        cy.visit("")
    })
    it('locating elements with get', () => {

        //All Hashtunes Tab
        cy.get("[href= '/?allHashtunes=true']").should("have.attr", "title", "All Hashtunes")

        // Auctions Tab
        cy.get("[href= '/?auctions=true']").should("have.attr", "title", "Auctions")

        // Buy Now Tab
        cy.get("[href= '/?buyNow=true']").should("have.attr", "title", "Buy Now")

        // Buy Now Tab
        cy.get("[data-cy= 'artwork-container']").should("have.attr", "title", "Buy Now")

        // Buy Now Tab
        cy.get("[data-cy= 'artwork-list']").should("have.attr", "title", "Buy Now")

    })
})