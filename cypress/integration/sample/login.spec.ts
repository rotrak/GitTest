/// <reference types="cypress"/>

describe('login test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
    cy.intercept(`${Cypress.env('host')}${Cypress.env('login')}`, { fixture: 'loginCall.json' }).as('loginCall');
  });

  it('should visit', () => {
    cy.findByPlaceholderText('Enter email').type('user1');
    cy.findByPlaceholderText('Enter password').type('user1');
    cy.findByText('Submit').click();
    cy.wait('@loginCall');
    cy.url().should('include', '/home');
  })
})