describe('Report page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.navbar-nav:nth-child(1)')
      .find('.nav-item:nth-child(3)').click()
  })

  it('allows a valid imitation to be submitted', () => {
    // Fill out web form
    cy.get('#brand').select('Gucci')
    cy.get('input[data-test=price]').type(321)
    cy.get('label').contains('Message').next().type('Bad quality!')
    cy.contains('Thanks for your Report').should('not.exist')
    cy.get('.error').should('not.exist')
    cy.get('button[type=submit]').click()
    cy.contains('Thanks for your Report').should('exist')
  })

  it('shows error messages for incomplete form fields', () => {
    cy.get('button[type=submit]').click()
    cy.get('.error').contains('Price')
    cy.get('.error').contains('Message')
    cy.get('input[data-test=price]').type(321)
    cy.get('.error').contains('Price').should('not.exist')
    cy.get('label').contains('Message').next().type('Bad quality!')
    cy.get('.error').should('not.exist')
  })
})
