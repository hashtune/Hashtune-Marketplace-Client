/// <reference types = "cypress" />

describe("Locators for Navbar", () => {

    beforeEach(() => {
        cy.visit("")
    })
    it('locating elements with get', () => {
        //Container main navbar
        cy.get("[data-cy='cont-main-navbar']")

        // Main navbar should have 5 children
        cy.get("[data-cy='main-navbar']")
            .children().should('have.length', 5)

        //Songs tab contains songs text
        cy.get("[href= '/?songsTab=true']").contains("Songs")

        //Artists Tab contains artists text
        cy.get("[href='/?artistsTab=true']").contains("Artists")

        //Search div has a form and text Search
        cy.get("div form").contains("Search")

        // Meta property og:image
        cy.get('[href="/connect-wallet"]').contains("Connect Wallet")
        
    })
})