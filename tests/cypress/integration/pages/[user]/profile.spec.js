
describe("Profile page locators", () => {

    beforeEach(() => {
    })
    it('locating Profile page elements', () => {
        cy.visit("/user1")

        // Should have indicators and dropdown as child
        cy.get('.profile').find('nav');

        //Navbar and main
        cy.get(".profile").children().should('have.length', 2);

        // Profile cover and Everything Below
        cy.get(".profile>main").children().should('have.length', 2);

        //ImageNameHAndle and user-profile-content
        cy.get(".container_relative").children().should('have.length', 2);

        // Image Name Handle is present
        cy.get('.image-name-handle').should('have.length', 1);

        
        // Bio section
        cy.get('.title-underlined-profile').eq(0).should('have.text', 'Bio');
        
        // Links section
        cy.get('.title-underlined-profile').eq(1).should('have.text', 'Links');
        
        // 4 linkIcons
        cy.get('.title-underlined-profile').eq(1).next().children().should('have.length', 4);
        
        // Links and Bio
        cy.get('aside').children().should('have.length', 2)
        
        //Locate ArtworkContainer tabs
        cy.get('aside').next().children().find('.tab-nav');
    })

})