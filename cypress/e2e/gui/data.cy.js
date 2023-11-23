describe('Inserir Banco Permitido', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {

    cy.inserirBancoPermitido()
    cy.get('.messagelist > .success').should('be.visible')
    cy.deletar()
    cy.get('.messagelist > .success').should('be.visible')
  })
})

describe('Inserir Código Upag', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    
    cy.inserirCodigoUpag()
    cy.get('.messagelist > .success').should('be.visible')
    cy.deletar()
    cy.get('.messagelist > .success').should('be.visible')
  })
})

describe('Inserir Código Órgão', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    
    cy.inserirCodigoOrgao()
    cy.get('.messagelist > .success').should('be.visible')
    cy.deletar()
    cy.get('.messagelist > .success').should('be.visible')
  })
})


describe('Inserir Restrição CPF', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    
    cy.inserirRestricaoCPF()
    cy.get('.messagelist > .success').should('be.visible')
    cy.deletar()
    cy.get('.messagelist > .success').should('be.visible')
  })
})

describe('Inserir Restrição Cidade', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    
    cy.inserirRestricaoCEP()
    cy.get('.messagelist > .success').should('be.visible')
    cy.deletar()
    cy.get('.messagelist > .success').should('be.visible')
  })
})

describe('Inserir Benefício Aceito', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    
    cy.inserirBeneficioAceito()
    cy.get('.messagelist > .success').should('be.visible')
    cy.deletar()
    cy.get('.messagelist > .success').should('be.visible')
  })
})

describe('Inserir Feriado Nacional', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    
    cy.inserirFeriadoNacional()
    cy.get('.messagelist > .success').should('be.visible')
    cy.deletar()
    cy.get('.messagelist > .success').should('be.visible')
  })
})

describe('Inserir Restrição Contrato', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    
    cy.inserirRestricaoContrato()
    cy.get('.messagelist > .success').should('be.visible')
    cy.deletar()
    cy.get('.messagelist > .success').should('be.visible')
  })
})

describe('Inserir Contrato Aceito', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    
    cy.inserirContratoAceito()
    cy.get('.messagelist > .success').should('be.visible')
    cy.deletar()
    cy.get('.messagelist > .success').should('be.visible')
  })
})

describe('Inserir Correspondente', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    
    cy.inserirCorrespondente()
    cy.get('.messagelist > .success').should('be.visible')
    cy.deletar()
    cy.get('.messagelist > .success').should('be.visible')
  })
})

describe('Inserir Patente Aceita', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    
    cy.inserirPatenteAceita()
    cy.get('.messagelist > .success').should('be.visible')
    cy.deletar()
    cy.get('.messagelist > .success').should('be.visible')
  })
})


