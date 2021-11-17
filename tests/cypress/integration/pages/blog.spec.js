
describe("Blog page locators", () => {

    beforeEach(() => {
    })
    it('locating Blog page elements', () => {
        cy.visit("/blog")
        // Should have indicators and dropdown as child
        cy.get('h1').should('have.text', 'Blog')
    })

})