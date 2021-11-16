/// <reference types = "cypress" />


describe("Locators for Countdown elements", () => {

    it('locating Countdown elements in Home page', () => {
        cy.visit("");

        cy.testCountdown('countdown');
    })

    it('locating Countdown elements in Artwork page', () => {

        cy.visit("/user1/ckvmhh53s01120kv562lw2oqc");

        cy.testCountdown('countdown-artwork');
    })


})