describe('homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: 'reservation_data.json',
    }).as('getFakeResData');
    cy.visit('http://localhost:3000/');
    cy.wait('@getFakeResData');
  });

  it('should contain title, form and existing reservations', () => {
    cy.contains('Turing Cafe Reservations');
    cy.get('form').get("input[name='name']").should('exist');
    cy.get('form').get("input[name='date']").should('exist');
    cy.get('form').get("input[name='time']").should('exist');
    cy.get('form').get("input[name='number']").should('exist');
    cy.get('.reservation-container').children().should('have.length', 3);
    cy.get('.single-reservation-card').first().contains('Christie');
    cy.get('.single-reservation-card').last().contains('Pam');
  });

  it('should allow a user to add a reservation, and make sure the form input value is reflected as the form value', () => {
    cy.get("input[name='name']").type('Dusty').should('have.value', 'Dusty');
    cy.get("input[name='date']").type('09/14').should('have.value', '09/14');
    cy.get("input[name='time']").type('7:30').should('have.value', '7:30');
    cy.get("input[name='number']").type('4').should('have.value', '4');

    cy.get('.submit-button').click();
    cy.get('.reservation-container').children().should('have.length', 4);
    cy.get('.single-reservation-card').first().contains('Christie');
    cy.get('.single-reservation-card').last().contains('Dusty');
  });
});
