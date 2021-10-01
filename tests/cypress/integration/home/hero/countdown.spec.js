/// <reference types = "cypress" />

describe("Locators for Countdown", () => {

    beforeEach(() => {
        cy.visit("")
    })
    it('locating elements with get', () => {

        //Find Auction ending in header
        cy.get("[data-cy = 'cont-main-countdown']").find('h1').contains("Auction ending in")

        //Check 3 Children in countdown container
        cy.get("[data-cy = 'cont-countdown']").children().should("have.length", 3)

        //Check countdown-hours get
        cy.get("[data-cy = 'countdown-hours']").find('span').contains("hours")

        //Check countdown-minutes get
        cy.get("[data-cy = 'countdown-minutes']").find('span').contains("minutes")

        //Check countdown-seconds get
        cy.get("[data-cy = 'countdown-seconds']").find('span').contains("seconds")
    })
})