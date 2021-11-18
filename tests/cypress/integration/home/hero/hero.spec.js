
/// <reference types = "cypress" />
import {aliasQuery, hasOperationName} from '../../../utils/graphql-test-utils'
describe("Locators for Hero", () => {

    beforeEach(() => {
        cy.visit("")
        // cy.intercept('POST', 'http://localhost:5000/graphql', (req) => {
        //     if (req.body.operationName === 'listArtworks') {
        //         req.reply({ fixture: 'mockData.json'});
        //         req.alias = 'listArtworks';
        //     }
        cy.intercept('POST', 'http://localhost:5000/graphql', (req) => {
        // aliasQuery(req, 'Logi')
        const { body } = req
        if (hasOperationName(req, 'listArtworks')) {
          // Declare the alias from the initial intercept in the beforeEach
          req.alias = 'gqlListArworksQuery'

          // Set req.fixture or use req.reply to modify portions of the response
          req.reply((res) => {
            // Modify the response body directly
            res.body.data.id = 5
            res.body.data.title= "Good Song"
          })
    }
    })})

    it('testing API', ()=> {
        cy.wait('@gqlListArtworksQuery')
        
        //     .its('response.body.data.listArtworks')
        //     .should('have.property', 'id')
        //     .and('have.property', 'title')
    })

    it('locating elements with get', () => {
        //Find hero inside cont-hero
        cy.get("[data-cy = 'cont-hero']")
        
        // Get play button div
        cy.get("[data-cy = 'play-button']")

        // Get cover image
        cy.get("[alt='cover image']")

        // Get song-header section
        cy.get("section[data-cy = 'song-header']")

        //Get song info and kids
        cy.get("div[data-cy = 'song-info']").children().should("have.length",3)

        // Get handle and image div
        cy.get("div[data-cy = 'cont-image-handle']")

        // Get title and handle div
        cy.get("div[data-cy = 'title-handle']")

        // Get song description div
        cy.get("[data-cy='song-description']").find('p')

        //Get auction info section
        cy.get("[data-cy='hero-price-cd']").children().should("have.length", 2)

    })
})