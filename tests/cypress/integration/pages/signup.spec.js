/// <reference types = "cypress" />


describe("Locators for Signup", () => {

    beforeEach(() => {
    })
    it('locating ArtworkContainer elements specific to Home Page', () => {
        cy.visit("/signup")
        // Should have indicators and dropdown as child
        cy.get('nav').next().children().first().should('have.length', 2);

        // Register__content's first child should say Create an account 
        cy.get('nav').next().children().first().find('h2').should('have.text', 'Create an account');

        // Register__content's second child should say One more step to go
        cy.get('nav').next().children().should('have.length', 2);

        // Register__content and Formik
        cy.get('nav').next().children().should('have.length', 2);

         // 4 Input groups with 2 children each, a title and a form
        cy.get('.input__group').should('have.length', 4).children().should('have.length', 2);

        // Register__content and Formik
        cy.get('.checkbox_mark').should('have.text', ' Check here to indicate that you agree to Hashtune’s ');

        // Terms of use should be in checkbox mark in an anchor tag
        cy.get('.checkbox_mark').find('a').should('have.text', 'Terms of use');

        // Only 1 input group with a checkbox
        cy.get('.input__group-checkbox').should('have.length', 1);
    
        // Submit button exists
        cy.get('button[type="submit"]').should('have.text', "Register");
    })
});