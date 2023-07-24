describe('Inserir Regra', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    
    cy.inserirRegra()
    cy.get('.messagelist > .success').should('be.visible')
    cy.deletarRegra()
    cy.get('.messagelist > .success').should('be.visible')
  })
})

