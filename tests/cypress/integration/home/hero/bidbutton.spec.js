/// <reference types = "cypress" />

describe("Locators for BidButton", () => {

    beforeEach(() => {
        cy.visit("")
    })
    it('locating BidButton elements', () => {

        // Find Bid Button in hero
        cy.get("[data-cy='bid-button']").find("h2").contains("Place a bid")
    })

})