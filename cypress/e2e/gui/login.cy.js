describe('Login', () => {
  it('successfully', () => {
    cy.login()

    cy.get('#user-tools').should('be.visible')
  })
})
