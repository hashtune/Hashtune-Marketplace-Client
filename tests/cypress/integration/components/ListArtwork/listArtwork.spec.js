/// <reference types = "cypress" />


describe("Locators for ListArtwork elements", () => {

    it('locating ListArtwork elements in Home page', () => {
        cy.visit("");

        cy.testListArtwork();
    })

    it('locating ListArtwork elements in Profile page', () => {

        cy.visit("/user1");

        cy.testListArtwork();
    })


})