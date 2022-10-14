/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    dataCy(value: string): Chainable<JQuery<HTMLElement>>
  }
}

function dataCy(value: string): Cypress.Chainable<JQuery<HTMLElement>> {
  return cy.get(`[data-cy=${value}]`)
}

Cypress.Commands.add('dataCy', dataCy)

