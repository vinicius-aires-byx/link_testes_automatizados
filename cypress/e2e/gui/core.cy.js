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

describe('Inserir Cliente', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    
    cy.inserirCliente()
    cy.get('.messagelist > .success').should('be.visible')
    cy.deletar()
    cy.get('.messagelist > .success').should('be.visible')
  })
})

describe('Inserir Parametros do Sistema', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    
    cy.inserirParametrosSistema()
    cy.get('.messagelist > .success').should('be.visible')
    cy.deletar()
    cy.get('.messagelist > .success').should('be.visible')
  })
})


