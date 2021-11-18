


describe("Profile page locators", () => {

    beforeEach(() => {
    })
    it('locating Profile page elements', () => {
        cy.visit("/user1/ckvmhh53s01120kv562lw2oqc")

        //Hero is present
        cy.get('.hero-artwork'); 

        //Music Details title exists
        cy.get('.title-underlined').should('have.text', 'Music Details');

        //Creator title exists
        cy.get('.title').eq(0).should('have.text', 'Creator'); 



        //ImageNameHandle is present
        cy.get('.title').contains('Creator').next().find('.artwork-image-name-handle');

        //Bio is present
        cy.get('.title').contains('Creator').next().children().should('have.length', 3);

        // 4 LinkIcons
        cy.get('.title').contains('Creator').next().children().eq(2).children().should('have.length',4);


        //NFT Details is there
        cy.get('.title').eq(1).should('have.text', 'NFT Details');

        //Pricing info and button are in NFT Details info section
        cy.get('.title').contains('NFT Details').next().children().should('have.length', 2);

        //Price and Countdown section is there
        cy.get('.title').contains('NFT Details').next().children().first().children().should('have.length', 2);

        //Price and Countdown section is there
        cy.get('.title').contains('NFT Details').next().children().first().children().first().children().should('have.length', 3);

        //Make an offer Button
        cy.get('.title').contains('NFT Details').next().children().last().children().should('have.length', 1);

        //3 Artwork History Items
        cy.get('.title').contains('Album History').next().children().should('have.length', 3);
    })

})
