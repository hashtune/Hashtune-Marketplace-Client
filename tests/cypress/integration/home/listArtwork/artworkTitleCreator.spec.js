/// <reference types = "cypress" />

describe("Locators for ArtworkTitleCreator", () => {

    beforeEach(() => {
        cy.visit("")
    })
    it('locating elements with get', () => {

        // ArtworkTitleCreator div
        cy.get("[data-cy = 'artwork-title-creator']")

        // ArtworkTitleCreator div
        cy.get("[data-cy = 'artwork-title']")

        // ArtworkTitleCreator div
        cy.get("[data-cy = 'artwork-creator-fullName']")

    })
})