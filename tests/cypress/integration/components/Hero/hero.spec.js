/// <reference types = "cypress" />


describe("Locators for Hero", () => {

    beforeEach(() => {
    })
    it('locating Hero elements specific to Home Page', () => {
        cy.visit("")
        // Should have indicators and dropdown as child
        cy.get('.hero').children().should('have.length', 1);
        
        // Has Artwork picture and then the main part of the artwork
        cy.get('.hero__container').children().should('have.length', 2);

        // Artwork only has image as child
        cy.get('.hero__artwork').children().should('have.length', 1);

        // CreatorImageHandle, --header, --description, __auction-details, music-action-button
        cy.get('.hero__details').children().should('have.length', 5);

        // In home page the header is only the artwork title
        cy.get('.hero__details--header').children().should('have.length', 1);
    
        // Title should be'amazingsongTitle2'
        cy.get('.hero__details--title').should('have.text', 'amazingsongTitle2');

        // Song description should be 'song description2'
        cy.get('.hero__details--description').should('have.text', 'song description2');

        // hero_card_title, price_card-data and ertical_divider are the three children
        cy.get('.hero__auction-details').children().should('have.length', 3);

         // Crypto value, divider, and fiat (aka dollar amount)
        cy.get('.hero__auction-details').children().should('have.length', 3);

        // Pricetext-0, or the pretext for price should be Buy For
        cy.get('.hero_card_title').should('have.text', 'Buy For ');

        // Crypto amount should be equal to 100BNB
        cy.get('.price_card-data--crypto').should('have.text', '100 BNB');

        // Crypto value, divider, and fiat (aka dollar amount)
        cy.get('.price_card-data').children().should('have.length', 3);

        // Should have indicators and dropdown as child
        cy.get('.price_card-data--fiat').contains('1200 $');

        // 1 vertical divider on the page
        cy.get('.vertical_divider').should('have.length',1 );
        
        //Place a bid button
        cy.get('.hero_music_action_button').find('h2').contains('Place a bid');
    })

    it('locating Hero elements specific to Single Artwork Page', () => {
        cy.visit("/user1/ckvmhh53s01120kv562lw2oqc");

        // Should have indicators and dropdown as child
        cy.get('.hero-artwork').children().should('have.length', 1);
        
        // Has Artwork picture and then the main part of the artwork
        cy.get('.hero-artwork__container').children().should('have.length', 2);
        // Artwork only has image as child
        cy.get('.hero-artwork__artwork').children().should('have.length', 1);
        // CreatorImageHandle, --header, --description, __auction-details, music-action-button
        cy.get('.hero-artwork__details').children().should('have.length', 4);


        // In home page the header is only the artwork title
        cy.get('.hero-artwork__details--header').children().should('have.length', 4);
    
        // Title should be'amazingsongTitle2'
        cy.get('.dot_divider').should('have.length', '1');

        // In home page the header is only the artwork title
        cy.get('.hero-artwork__details--creator-name').should('have.text', 'user 1');
    
        // Title should be'amazingsongTitle2'
        cy.get('.hero-artwork__details--downloads').children().should('have.length', 2);
        

        // Song description should be 'song description2'
        cy.get('.hero-artwork__details--description').should('have.text', 'song description2');


        // Should have indicators and dropdown as child
        cy.get('.hero-artwork__details--footer').children().should('have.length', 2);

        // Should have indicators and dropdown as child
        cy.get('.hero-artwork__details--play-button').children().should('have.length', 1);

        // Should have indicators and dropdown as child
        cy.get('.hero-artwork__details--wave').children().should('have.length', 1);

        // Should have indicators and dropdown as child
        cy.get('.hero-artwork__details--times').children().should('have.length', 2);
    })
})