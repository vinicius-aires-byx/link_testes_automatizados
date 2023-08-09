describe('Logout', () => {
    beforeEach(() => {
      cy.login()
    })
  
    it('successfully', () => {
      cy.logout()
      cy.get('#content > h1').should('be.visible')
    })
  })
  