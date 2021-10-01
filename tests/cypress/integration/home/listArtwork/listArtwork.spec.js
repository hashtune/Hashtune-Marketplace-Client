/// <reference types = "cypress" />

describe("Locators for ListArtwork", () => {

    beforeEach(() => {
        cy.visit("")
    })
    it('locating elements with get', () => {

        //ListArtwork container
        cy.get("[data-cy = 'cont-list-artwork']")

        // List cover image is alt for LIstArtwork Image
        cy.get("[alt = 'list cover image']")


        // ListArtwork has 2 children in inner container
        cy.get("[data-cy = 'list-artwork']").children().should("have.length",2 )

    })
})