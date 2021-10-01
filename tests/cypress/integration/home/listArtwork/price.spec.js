/// <reference types = "cypress" />

describe("Locators for Price", () => {

    beforeEach(() => {
        cy.visit("")
    })
    it('locating elements with get', () => {

        //Converted Price container - NEED TO ADD FIXTURE
        // cy.get("[data-cy = 'not-listed-price']").children().should('have.length', 0)

        // Hero Price Header - ADD FIXTURE
        // cy.get("[data-cy = 'buy-for-price']").find('h3').contains("Buy for ").and("BNB")

        // Hero Price - ADD FIXTURE
        // cy.get("[data-cy = 'make-offer-price']").find('h3').contains("Make an offer")

        //Hero Price Separator
        cy.get("[data-cy = 'reserve-price']").find('h3').contains("Bid ").and("BNB")

        //Hero Price in Dollars
        cy.get("[data-cy = 'current-high-price']").find('h3').contains("Bid ").and("BNB")
    })
})