/// <reference types="cypress"/>

describe("Landing page's newsletter form", () => {
  it("should allow users to register to Newsletter", () => {
    cy.visit("/")
      .get(".text-input")
      .click()
      .type("example@example.com")
      .get(".btn")
      .click()
      .get("form > .mt-big")
      .should("have.text", "Thank you! 🎉 Stay tuned for our upcoming Updates")
  });
});
