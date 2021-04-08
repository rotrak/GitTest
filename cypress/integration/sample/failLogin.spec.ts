/// <reference types="cypress"/>

describe('fail login test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
    cy.intercept(`${Cypress.env('host')}${Cypress.env('login')}`).as('loginCall');
  });

  it('should visit', () => {
    cy.findByPlaceholderText('Enter email').type('manu');
    cy.findByPlaceholderText('Enter password').type('manu');
    cy.findByText('Submit').click();
    cy.wait('@loginCall');
    cy.findByText('Incorrect username and/or password').should('exist');
  })
})