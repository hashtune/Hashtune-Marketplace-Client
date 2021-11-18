/// <reference types = "cypress" />

describe("Locators for Layout", () => {

    beforeEach(() => {
        cy.visit("")
    })
    it('locating elements with get', () => {
        //Layout main container
        cy.get("[data-cy='cont-layout']")

        // Layout Head component
        cy.get("[data-cy='hashtune-icon']")
            .should("have.attr", "rel", "icon")
            .and("have.attr", "href", "/favicon.ico" )


        // Meta name = description content= Hashtune
        cy.get('meta[name="description"]')
            .should("have.attr", "content", "Hashtune");

        // Meta property og:image
        cy.get('meta[property="og:image"]')
        
        // Title should contain Hashtune
        cy.get('title').should("contain", "Hashtune")

        // Font Should be included
        cy.get('link[type="text/css"]')
            .should("have.attr", "rel", "stylesheet")
            .should("have.attr", "href", "//db.onlinewebfonts.com/c/ace51fb0e489a977bed8a67511865c11?family=Averta+CY+W01")

        //Layout children container
        cy.get("[data-cy='children-layout']")
    })
})