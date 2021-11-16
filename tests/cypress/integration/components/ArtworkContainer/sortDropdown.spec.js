/// <reference types = "cypress" />


describe("Locators for SortDropdown", () => {

    beforeEach(() => {

    })
    it('locating SortDropdown elements specific to Home Page', () => {
        cy.visit("")
        // Should have indicators and dropdown as child
        cy.get('select.select').children().should('have.length', 2)  
    
        // Should have 3 tabs
        cy.get('select>option').eq(0).contains("Latest");

        // Should have 3 tabs
        cy.get('select>option').eq(1).contains("Earliest");

    })

    it('locating ArtworkContainer elements specific to Profile Page', () => {
        cy.visit("/user1")

        // Should have indicators and dropdown as child
        cy.get('select.select').children().should('have.length', 2)  
    
        // Should have 3 tabs
        cy.get('select>option').eq(0).contains("Latest");

        // Should have 3 tabs
        cy.get('select>option').eq(1).contains("Earliest");

    })
})