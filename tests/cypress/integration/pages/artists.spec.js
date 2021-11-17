
describe("Artists page locators", () => {

    beforeEach(() => {
    })
    it('locating Blog page elements', () => {
        cy.visit("/artists")
        // Should have indicators and dropdown as child
        cy.get('.creators-page').find('nav');

        cy.get('.creators-page').find('.list-creators');
    })

})