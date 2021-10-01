/// <reference types = "cypress" />

describe("Locators for ConvertedPrice", () => {

    beforeEach(() => {
        cy.visit("")
    })
    it('locating elements with get', () => {

        //Converted Price container
        cy.get("[data-cy = 'cont-hero-price']").children().should('have.length', 4)

        // Hero Price Header
        cy.get("[data-cy = 'hero-price-header']").contains("Current Bid")

        // Hero Price
        cy.get("[data-cy = 'hero-price']").contains("BNB")

        //Hero Price Separator
        cy.get("[data-cy = 'hero-price-separator']").contains("|")

        //Hero Price in Dollars
        cy.get("[data-cy = 'hero-price-dollars']").contains("$")
    })
})