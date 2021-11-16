// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import { operationName } from "@apollo/client"

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.Commands.add('interceptGQL', opName=> {
//     cy.intercept('POST', 'http://localhost:5000/graphql', (req) => {
//         // Queries
//         // aliasQuery(req, 'listArtworks')
//         const {listArtworks} = JSON.parse(req.body)
//         if (operationName === opName){
//             console.log(operationName);
//             req.alias = opName;
//         }
// })})

Cypress.Commands.add('testArtworkContainer', () => {

  // Should have indicators and dropdown as child
  cy.get('.tab-nav').children().should('have.length', 2)  

  cy.get('.container').children.should('have.length', 2)
})

Cypress.Commands.add('testImageNameHandle', () => {
    //Picture is there
    cy.get('.image-name-handle__picture').children().should('have.length', 1);

    //Approved creators also have content-status in their name-status
    cy.get('.image-name-handle__content').children().should('have.length', 2);

    //name status has user's name as text
    cy.get('.image-name-handle__content--name-status>a').should('have.text', 'user 1');

    //Svg is present for approved creator
    cy.get('.image-name-handle__content-status').find('svg');

    //Handle has @
    cy.get('.image-name-handle__content--username').contains('@');
})

Cypress.Commands.add('testImageNameHandle', () => {
    //On profile page, there are 3 children because there is also the edit button
    cy.get('.hero__auction-details--countdown-card countdown').children().should('have.length', 2);
    cy.get('.countdown__title').contains('Auction ending in');
    cy.get('.hero__auction-details--countdown-data countdown__data').children.should('have.length', 3)
    cy.get('.countdown__data--item').children().should('have.length',2 );
    cy.get('.countdown__data--item').find('h3')
    cy.get('.countdown__data--item').find('span')
})

Cypress.Commands.add('testCountdown', (style) => {
    //On profile page, there are 3 children because there is also the edit button
    cy.get('.' +style).children().should('have.length', 2);
    
    // title has correct name
    cy.get(style+ '__title').contains('Auction ending in');

    //3 children for hours, minutes and seconds
    cy.get(style + '__data').children.should('have.length', 3);

    // For number and time unit (i.e. minute, second, hour) * 3 because theres 3 data items
    cy.get('.'+ style+ '__data--item').children().should('have.length',6 );

    //For the number
    cy.get('.'+ style+ '__data--item').find('h3');

    //For the time unit
    cy.get('.'+ style+ '__data--item').find('span');
})

Cypress.Commands.add('testListArtwork', (style) => {
    //ListArtwork consists of image and content
    cy.get('.artwork').eq(0).children().should('have.length',2 );
    //Image exists
    cy.get('img[alt="list cover image"]');
    //ListArtwork consists of image and content
    cy.get('.artwork__content').eq(0).children().should('have.length',2 );
    //ListArtwork consists of image and content
    cy.get('.artwork__content--title-name').eq(0).children().should('have.length',2 );
    // Should habve title like amazingSong TItle 2
    cy.get('.artwork__content--title-name').find('h3');
    // Should have creator name 
    cy.get('.artwork__content--title-name').find('p');
    // Should have price
    cy.get('.artwork__content').find('.sales-type-badge').find('h3');
})





