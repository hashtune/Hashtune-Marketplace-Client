/// <reference types = "cypress" />


describe("Locators for ImageNameHandle", () => {

    it('locating ImageNameHandle elements in Profile page', () => {
        //ONLY TESTED FOR HOME PAGE
        cy.visit("/signup");

        //On profile page, there are 3 children because there is also the edit button
        cy.get('input')
    })
})