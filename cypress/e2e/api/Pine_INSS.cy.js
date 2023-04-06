import { faker } from '@faker-js/faker'

describe('Analise com sucesso', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description0: "Limite Mínimo Idade: 21 Anos;",
      description1: "Limite Máximo Idade: 80 Anos;",
      description2: "Valor Mínimo CCB: R$ 250,00;",
      description3: "Número Total de Parcelas: 12;",
      description4: "Janela Primeira Parcelas: 60 dias;",
      description5: "Valor Máximo CCB: R$ 20.000,00;",
      description6: "Valor Mínimo de Parcela: R$ 30,00;",
      description7: "Blacklist CPFs;",
      description8: "Data de emissão do documento x Data de nascimento;",
      description9: "Contrato Liquidado;",
      description10: "Parcelas Subsequentes Mensal;",
      description11: "Inadimplência Parcela/Contrato;",
      description12: "Taxa Mínima: 1,80;",
      description13: "Taxa Máxima: 2,14;",
      description14: "Número Máximo de Parcelas: 12;",
      description15: "CCB emitida a menos de 8 dias;",
      description16: "Número Mínimo de Parcelas: 10;",
      description17: "Tempo mínimo de benefício: 12 Meses;",
      description18: "Dia de vencimento fora do range definido;",
      description19: "CNPJ Correspondente não cadastrado;",
      description20: "Contrato duplicado;",
      description21: "Contrato em lista restritiva;",
      description22: "Validação Bureau - Nome, Nascimento, Obito, PEP; - NASCIMENTO",
      description23: "Validação Bureau - Nome, Nascimento, Obito, PEP; - NOME:1",
      description24: "Validação Bureau - Nome, Nascimento, Obito, PEP; - OBITO",
      description25: "Validação Bureau - Nome, Nascimento, Obito, PEP; - PEP",
      description26: "Situação CPF Receita: Diferente de Regular;",
      description27: "Benefícios elegíveis"
    }

    cy.analise_com_sucesso_pine_inss()
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
        expect(response.body.regras[11].regra_aprovada).to.equal(true)
        expect(response.body.regras[12].descricao).to.equal(project.description12)
        expect(response.body.regras[12].regra_aprovada).to.equal(true)
        expect(response.body.regras[13].descricao).to.equal(project.description13)
        expect(response.body.regras[13].regra_aprovada).to.equal(true)
        expect(response.body.regras[14].descricao).to.equal(project.description14)
        expect(response.body.regras[14].regra_aprovada).to.equal(true)
        expect(response.body.regras[15].descricao).to.equal(project.description15)
        expect(response.body.regras[15].regra_aprovada).to.equal(true)
        expect(response.body.regras[16].descricao).to.equal(project.description16)
        expect(response.body.regras[16].regra_aprovada).to.equal(true)
        expect(response.body.regras[17].descricao).to.equal(project.description17)
        expect(response.body.regras[17].regra_aprovada).to.equal(true)
        expect(response.body.regras[18].descricao).to.equal(project.description18)
        expect(response.body.regras[18].regra_aprovada).to.equal(true)
        expect(response.body.regras[19].descricao).to.equal(project.description19)
        expect(response.body.regras[19].regra_aprovada).to.equal(true)
        expect(response.body.regras[20].descricao).to.equal(project.description20)
        expect(response.body.regras[20].regra_aprovada).to.equal(true)
        expect(response.body.regras[21].descricao).to.equal(project.description21)
        expect(response.body.regras[21].regra_aprovada).to.equal(true)
        expect(response.body.regras[22].descricao).to.equal(project.description22)
        expect(response.body.regras[22].regra_aprovada).to.equal(true)
        expect(response.body.regras[23].descricao).to.equal(project.description23)
        expect(response.body.regras[23].regra_aprovada).to.equal(true)
        expect(response.body.regras[24].descricao).to.equal(project.description24)
        expect(response.body.regras[24].regra_aprovada).to.equal(true)
        expect(response.body.regras[25].descricao).to.equal(project.description25)
        expect(response.body.regras[25].regra_aprovada).to.equal(true)
        expect(response.body.regras[26].descricao).to.equal(project.description26)
        expect(response.body.regras[26].regra_aprovada).to.equal(true)
        expect(response.body.regras[27].descricao).to.equal(project.description27)
        expect(response.body.regras[27].regra_aprovada).to.equal(true)

      })
  })
})

describe('Limite Mínimo Idade: 21 Anos; REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description0: "Limite Mínimo Idade: 21 Anos;"
    }

    cy.idade_minima_reprovado_pine_inss()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[0].descricao).to.equal(project.description0)
        expect(response.body.regras[0].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Limite Máximo Idade: 80 Anos; REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description1: "Limite Máximo Idade: 80 Anos;"
    }

    cy.idade_maxima_reprovado_pine_inss()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[1].descricao).to.equal(project.description1)
        expect(response.body.regras[1].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Valor Mínimo CCB: R$ 250,00; REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description2: "Valor Mínimo CCB: R$ 250,00;"
    }

    cy.valor_minimo_ccb_reprovado_pine_inss()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[2].descricao).to.equal(project.description2)
        expect(response.body.regras[2].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Número Total de Parcelas: 12; REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description3: "Número Total de Parcelas: 12;"
    }

    cy.numero_total_parcelas_reprovado_pine_inss()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[3].descricao).to.equal(project.description3)
        expect(response.body.regras[3].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Janela Primeira Parcelas: 60 dias; REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description4: "Janela Primeira Parcelas: 60 dias;"
    }

    cy.janela_parcelas_reprovado_pine_inss()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[4].descricao).to.equal(project.description4)
        expect(response.body.regras[4].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Valor Máximo CCB: R$ 20.000,00; REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description5: "Valor Máximo CCB: R$ 20.000,00;"
    }

    cy.valor_maximo_ccb_reprovado_pine_inss()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[5].descricao).to.equal(project.description5)
        expect(response.body.regras[5].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Valor Mínimo de Parcela: R$ 30,00; REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it.only('successfully', () => {
    const project = {
      description6: "Valor Mínimo de Parcela: R$ 30,00;"
    }

    cy.valor_minimo_parcela_reprovado_pine_inss()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[6].descricao).to.equal(project.description6)
        expect(response.body.regras[6].regra_aprovada).to.equal(false)
      })
  
  })
})