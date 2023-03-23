import { faker } from '@faker-js/faker'

describe('Analise com sucesso', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description0: "Portal da transparência",
      description1: "Banco permitido",
      description2: "Valor mínimo da parcela",
      description3: "Número total de parcelas",
      description4: "Data de emissão do RG",
      description5: "Idade máxima",
      description6: "Idade minima",
      description7: "Valor mínimo contrato",
      description8: "Janela de parcelas",
      description9: "Validação de inadimplência",
      description10: "Parcelas subsequentes",
      description11: "CPF em lista",
    }

    cy.analise_com_sucesso()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[0].descricao).to.equal(project.description0)
        expect(response.body.regras[0].regra_aprovada).to.equal(true)
        expect(response.body.regras[1].descricao).to.equal(project.description1)
        expect(response.body.regras[1].regra_aprovada).to.equal(true)
        expect(response.body.regras[2].descricao).to.equal(project.description2)
        expect(response.body.regras[2].regra_aprovada).to.equal(true)
        expect(response.body.regras[3].descricao).to.equal(project.description3)
        expect(response.body.regras[3].regra_aprovada).to.equal(true)
        expect(response.body.regras[4].descricao).to.equal(project.description4)
        expect(response.body.regras[4].regra_aprovada).to.equal(true)
        expect(response.body.regras[5].descricao).to.equal(project.description5)
        expect(response.body.regras[5].regra_aprovada).to.equal(true)
        expect(response.body.regras[6].descricao).to.equal(project.description6)
        expect(response.body.regras[6].regra_aprovada).to.equal(true)
        expect(response.body.regras[7].descricao).to.equal(project.description7)
        expect(response.body.regras[7].regra_aprovada).to.equal(true)
        expect(response.body.regras[8].descricao).to.equal(project.description8)
        expect(response.body.regras[8].regra_aprovada).to.equal(true)
        expect(response.body.regras[9].descricao).to.equal(project.description9)
        expect(response.body.regras[9].regra_aprovada).to.equal(true)
        expect(response.body.regras[10].descricao).to.equal(project.description10)
        expect(response.body.regras[10].regra_aprovada).to.equal(true)
        expect(response.body.regras[11].descricao).to.equal(project.description11)
        expect(response.body.regras[11].regra_aprovada).to.equal(false)

      })
  })
})

describe('Portal da transparência com sucesso', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description0: "Portal da transparência",
      description1: "Banco permitido",
      description2: "Valor mínimo da parcela",
      description3: "Número total de parcelas",
      description4: "Data de emissão do RG",
      description5: "Idade máxima",
      description6: "Idade minima"
    }

    cy.portal_transparencia_com_sucesso()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[0].descricao).to.equal(project.description0)
        expect(response.body.regras[0].regra_aprovada).to.equal(true)
        expect(response.body.regras[1].descricao).to.equal(project.description1)
        expect(response.body.regras[1].regra_aprovada).to.equal(true)
        expect(response.body.regras[2].descricao).to.equal(project.description2)
        expect(response.body.regras[2].regra_aprovada).to.equal(true)
        expect(response.body.regras[3].descricao).to.equal(project.description3)
        expect(response.body.regras[3].regra_aprovada).to.equal(true)
        expect(response.body.regras[4].descricao).to.equal(project.description4)
        expect(response.body.regras[4].regra_aprovada).to.equal(true)
        expect(response.body.regras[5].descricao).to.equal(project.description5)
        expect(response.body.regras[5].regra_aprovada).to.equal(true)
        expect(response.body.regras[6].descricao).to.equal(project.description6)
        expect(response.body.regras[6].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('banco permitido REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description0: "Portal da transparência",
      description1: "Banco permitido",
    }

    cy.banco_permitido_reprovado()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[0].descricao).to.equal(project.description0)
        expect(response.body.regras[0].regra_aprovada).to.equal(true)
        expect(response.body.regras[1].descricao).to.equal(project.description1)
        expect(response.body.regras[1].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('valor mínimo da parcela REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description0: "Portal da transparência",
      description1: "Banco permitido",
      description2: "Valor mínimo da parcela"
    }

    cy.valor_minimo_parcela_reprovado()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[0].descricao).to.equal(project.description0)
        expect(response.body.regras[0].regra_aprovada).to.equal(true)
        expect(response.body.regras[1].descricao).to.equal(project.description1)
        expect(response.body.regras[1].regra_aprovada).to.equal(true)
        expect(response.body.regras[2].descricao).to.equal(project.description2)
        expect(response.body.regras[2].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('numero total de parcelas REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description0: "Portal da transparência",
      description1: "Banco permitido",
      description2: "Valor mínimo da parcela",
      description3: "Número total de parcelas"
    }

    cy.numero_total_parcelas_reprovado()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[0].descricao).to.equal(project.description0)
        expect(response.body.regras[0].regra_aprovada).to.equal(true)
        expect(response.body.regras[1].descricao).to.equal(project.description1)
        expect(response.body.regras[1].regra_aprovada).to.equal(true)
        expect(response.body.regras[2].descricao).to.equal(project.description2)
        expect(response.body.regras[2].regra_aprovada).to.equal(true)
        expect(response.body.regras[3].descricao).to.equal(project.description3)
        expect(response.body.regras[3].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Data de emissão do RG REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description0: "Portal da transparência",
      description1: "Banco permitido",
      description2: "Valor mínimo da parcela",
      description3: "Número total de parcelas",
      description4: "Data de emissão do RG"
    }

    cy.data_emissao_rg_reprovado()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[0].descricao).to.equal(project.description0)
        expect(response.body.regras[0].regra_aprovada).to.equal(true)
        expect(response.body.regras[1].descricao).to.equal(project.description1)
        expect(response.body.regras[1].regra_aprovada).to.equal(true)
        expect(response.body.regras[2].descricao).to.equal(project.description2)
        expect(response.body.regras[2].regra_aprovada).to.equal(true)
        expect(response.body.regras[3].descricao).to.equal(project.description3)
        expect(response.body.regras[3].regra_aprovada).to.equal(true)
        expect(response.body.regras[4].descricao).to.equal(project.description4)
        expect(response.body.regras[4].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('idade maxima REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description0: "Portal da transparência",
      description1: "Banco permitido",
      description2: "Valor mínimo da parcela",
      description3: "Número total de parcelas",
      description4: "Data de emissão do RG",
      description5: "Idade máxima"
    }

    cy.idade_maxima_reprovado()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[0].descricao).to.equal(project.description0)
        expect(response.body.regras[0].regra_aprovada).to.equal(true)
        expect(response.body.regras[1].descricao).to.equal(project.description1)
        expect(response.body.regras[1].regra_aprovada).to.equal(true)
        expect(response.body.regras[2].descricao).to.equal(project.description2)
        expect(response.body.regras[2].regra_aprovada).to.equal(true)
        expect(response.body.regras[3].descricao).to.equal(project.description3)
        expect(response.body.regras[3].regra_aprovada).to.equal(true)
        expect(response.body.regras[4].descricao).to.equal(project.description4)
        expect(response.body.regras[4].regra_aprovada).to.equal(true)
        expect(response.body.regras[5].descricao).to.equal(project.description5)
        expect(response.body.regras[5].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('idade minima REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description0: "Portal da transparência",
      description1: "Banco permitido",
      description2: "Valor mínimo da parcela",
      description3: "Número total de parcelas",
      description4: "Data de emissão do RG",
      description5: "Idade máxima",
      description6: "Idade minima"
    }

    cy.idade_minima_reprovado()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[0].descricao).to.equal(project.description0)
        expect(response.body.regras[0].regra_aprovada).to.equal(true)
        expect(response.body.regras[1].descricao).to.equal(project.description1)
        expect(response.body.regras[1].regra_aprovada).to.equal(true)
        expect(response.body.regras[2].descricao).to.equal(project.description2)
        expect(response.body.regras[2].regra_aprovada).to.equal(true)
        expect(response.body.regras[3].descricao).to.equal(project.description3)
        expect(response.body.regras[3].regra_aprovada).to.equal(true)
        expect(response.body.regras[4].descricao).to.equal(project.description4)
        expect(response.body.regras[4].regra_aprovada).to.equal(true)
        expect(response.body.regras[5].descricao).to.equal(project.description5)
        expect(response.body.regras[5].regra_aprovada).to.equal(true)
        expect(response.body.regras[6].descricao).to.equal(project.description6)
        expect(response.body.regras[6].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Valor mínimo contrato REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description0: "Portal da transparência",
      description1: "Banco permitido",
      description2: "Valor mínimo da parcela",
      description3: "Número total de parcelas",
      description4: "Data de emissão do RG",
      description5: "Idade máxima",
      description6: "Idade minima",
      description7: "Valor mínimo contrato"
    }

    cy.valor_minimo_contrato_reprovado()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[0].descricao).to.equal(project.description0)
        expect(response.body.regras[0].regra_aprovada).to.equal(true)
        expect(response.body.regras[1].descricao).to.equal(project.description1)
        expect(response.body.regras[1].regra_aprovada).to.equal(true)
        expect(response.body.regras[2].descricao).to.equal(project.description2)
        expect(response.body.regras[2].regra_aprovada).to.equal(true)
        expect(response.body.regras[3].descricao).to.equal(project.description3)
        expect(response.body.regras[3].regra_aprovada).to.equal(true)
        expect(response.body.regras[4].descricao).to.equal(project.description4)
        expect(response.body.regras[4].regra_aprovada).to.equal(true)
        expect(response.body.regras[5].descricao).to.equal(project.description5)
        expect(response.body.regras[5].regra_aprovada).to.equal(true)
        expect(response.body.regras[6].descricao).to.equal(project.description6)
        expect(response.body.regras[6].regra_aprovada).to.equal(true)
        expect(response.body.regras[7].descricao).to.equal(project.description7)
        expect(response.body.regras[7].regra_aprovada).to.equal(false)
      })
  
  })
})