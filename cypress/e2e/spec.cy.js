describe('Countries App', () => {
    it('makes an API call and displays initial content', () => {
      cy.intercept('GET', 'https://restcountries.com/v3.1/all').as('getCountries');
      cy.visit('/');
      cy.wait('@getCountries');
      // You can add assertions here, e.g., check if a country name is visible
    });
  
    it('displays country flags with alt text', () => {
      cy.visit('/');
      // Add assertions like: cy.get('img[alt]').should('exist')
    });
  
    it('displays country names', () => {
      cy.visit('/');
      // Add: cy.contains('India').should('exist') or similar checks
    });
  
    it('logs an error to the console on API failure', () => {
      cy.intercept('GET', 'https://restcountries.com/v3.1/all', {
        statusCode: 500,
        body: {},
      }).as('getFailedCountries');
      cy.visit('/');
      cy.wait('@getFailedCountries');
      // You can spy on console.error if needed
    });
  });
  