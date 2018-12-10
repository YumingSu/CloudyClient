describe('Map page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.navbar-nav:nth-child(1)')
      .find('.nav-item:nth-child(4)').click()
  })

  it("Shows a header", () => {
    cy.get(".vue-title").should('contain','Place the factory!');
  });

})
