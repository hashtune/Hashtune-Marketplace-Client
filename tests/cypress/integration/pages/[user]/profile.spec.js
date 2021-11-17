
describe("Profile page locators", () => {

    beforeEach(() => {
    })
    it('locating Profile page elements', () => {
        cy.visit("/user1")
        // Should have indicators and dropdown as child
        // cy.get('.profile').find('nav');

        // cy.get(".profile").children().should('have.length', 2);

        // cy.get(".profile>main").children().should('have.length', 2);

        // cy.get(".container_relative").children().should('have.length', 2);

        // cy.get(".container_relative").children().eq(0).should('have.length', 2);
    })

})