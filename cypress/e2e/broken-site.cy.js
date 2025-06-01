describe('Broken Site Audit', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/broken-site/index.html?#');
  });

  it('should display the header', () => {
    cy.get('h1').should('contain.text', 'Welcome to Our Site');
  });

  it('should have a broken image', () => {
    cy.get('img').should('have.attr', 'src', 'missing-image.jpg');
  });

  it('should contain a broken navigation link', () => {
    cy.get('nav a').contains('Broken Link').should('have.attr', 'href', '404page.html');
  });

  it('should show form fields without labels', () => {
    cy.get('input[placeholder="Name"]').should('exist');
    cy.get('input[placeholder="Email"]').should('exist');
  });

  it('should submit form with no validation', () => {
    cy.get('button[type="submit"]').click(); // Still submits
  });

  it('should do nothing when clicking the button', () => {
    cy.get('#does-nothing').click();
    // This test just confirms no crash or handler
  });
});
