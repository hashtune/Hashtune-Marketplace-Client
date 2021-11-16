/// <reference types = "cypress" />


describe("Locators for ImageNameHandle", () => {

    beforeEach(() => {
    })
    it('locating ImageNameHandle elements in Profile page', () => {
        //ONLY TESTED FOR HOME PAGE
        cy.visit("/user1");

        //On profile page, there are 3 children because there is also the edit button
        cy.get('.image-name-handle').children().should('have.length', 3);

        cy.testImageNameHandle();

        //Svg is present for approved creator
        cy.get('.image-name-handle--editbutton').contains('Edit Profile');
    })



    it('locating ImageNameHandle elements in Single Artwork page', () => {
        //ONLY TESTED FOR HOME PAGE
        cy.visit("/user1/ckvmhh53s01120kv562lw2oqc");

        //On artwork page, there are 3 children because there is also the edit button
        cy.get('.image-name-handle-artwork').children().should('have.length', 2);

        cy.testImageNameHandle();
    })
})