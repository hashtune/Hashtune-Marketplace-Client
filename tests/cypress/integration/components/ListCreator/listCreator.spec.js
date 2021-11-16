/// <reference types = "cypress" />


describe("Locators for ListCreator elements", () => {

    it('locating ListCreator elements in Artists page', () => {
        cy.visit("/artists");

        cy.get('.list-creators').children().eq(0).should('have.text', 'All Artists');

        cy.get('.list-creators').find('ul').find('li');
        
        cy.get('.list-creators').find('.select');
    })


})