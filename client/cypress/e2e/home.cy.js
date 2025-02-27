describe('Homepage E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the logo correctly', () => {
    cy.get('img.cus-logo')
      .should('be.visible')
      .and('have.attr', 'src', 'lrnr-logo.png');
  });

  it('displays the correct tagline', () => {
    cy.get('h2.cus-home-tagline')
      .should('be.visible')
      .and('contain.text', 'Your guided path to programming enlightenment');
  });

  it('has a functioning "Begin Journey" button', () => {
    cy.get('button.cus-home-btn')
      .should('be.visible')
      .and('contain.text', 'Begin Journey')
      .click();
  });

  it('renders 3 Card components with correct headings', () => {
    cy.contains('Personalized Quizzes').should('be.visible');
    cy.contains('Rewarding').should('be.visible');
    cy.contains('Personal SME').should('be.visible');
  });
});
