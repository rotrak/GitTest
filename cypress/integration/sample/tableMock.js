/// <reference types="cypress"/>

describe('Test table operation with mock server', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
    cy.intercept(`${Cypress.env('host')}${Cypress.env('login')}`).as('loginCall');
    cy.intercept(`${Cypress.env('host')}${Cypress.env('data')}`).as('peopleCall');
  });

  it('should find the click me button in home page', () => {
    cy.findByPlaceholderText('Enter email').type('user1');
    cy.findByPlaceholderText('Enter password').type('user1');
    cy.findByRole('button', {name: 'Submit'}).click();
    cy.wait('@loginCall');
    cy.findByRole('button').should('exist');
  });

  it('should click button and table appear', () => {
    cy.findByPlaceholderText('Enter email').type('user1');
    cy.findByPlaceholderText('Enter password').type('user1');
    cy.findByText('Submit').click();
    cy.wait('@loginCall');
    cy.findByRole('button').click();
    cy.wait('@peopleCall');
    cy.findByRole('table').should('exist');
    cy.findAllByRole('row').should('have.length', '4');
  });

  it('should delete one row after clicking', () => {
    cy.findByPlaceholderText('Enter email').type('user1');
    cy.findByPlaceholderText('Enter password').type('user1');
    cy.findByText('Submit').click();
    cy.wait('@loginCall');
    cy.findByRole('button').click();
    cy.wait('@peopleCall');
    cy.findAllByRole('row').should('have.length', '4');
    cy.findByText('Delete Last').click();
    cy.findAllByRole('row').should('have.length', '3');
  });

  it('should be delete button disabled after all rows deleted', () => {
    cy.findByPlaceholderText('Enter email').type('user1');
    cy.findByPlaceholderText('Enter password').type('user1');
    cy.findByText('Submit').click();
    cy.wait('@loginCall');
    cy.findByRole('button').click();
    cy.wait('@peopleCall');
    cy.findAllByRole('row').should('have.length', '4');
    cy.findByText('Delete Last').click();
    cy.findByText('Delete Last').click();
    cy.findByText('Delete Last').click();
    cy.findByText('Delete Last').should('be.disabled');
  });

  it('should exist an alert when table is empty', () => {
    cy.findByPlaceholderText('Enter email').type('user1');
    cy.findByPlaceholderText('Enter password').type('user1');
    cy.findByText('Submit').click();
    cy.wait('@loginCall');
    cy.findByRole('button').click();
    cy.wait('@peopleCall');
    cy.findAllByRole('row').should('have.length', '4');
    cy.findByText('Delete Last').click();
    cy.findByText('Delete Last').click();
    cy.findByText('Delete Last').click();
    cy.findByRole('alert').should('exist');
  });

  it('should hide table when "Click here" button is clicked', () => {
    cy.findByPlaceholderText('Enter email').type('user1');
    cy.findByPlaceholderText('Enter password').type('user1');
    cy.findByText('Submit').click();
    cy.wait('@loginCall');
    cy.findByRole('button', {name: 'Click here'}).click();
    cy.wait('@peopleCall');
    cy.findByText('Click here').click();
    cy.findByRole('table').should('not.exist');
  });
})