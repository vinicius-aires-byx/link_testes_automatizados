import { faker } from '@faker-js/faker'

describe('Analise com sucesso', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description0: "Limite Mínimo Idade: 4 Anos;",
      description1: "Limite Máximo Idade: 84 anos;",
      description2: "Valor Mínimo CCB: R$ 300,00;",
      description3: "Valor Máximo CCB: R$ 20.000,00;",
      description4: "Taxa Máxima: 3,06;",
      description5: "Número Total de Parcelas;",      
      description6: "Contrato Liquidado;",
      description7: "Inadimplência Parcela/Contrato;",
      description8: "Parcelas Subsequentes Mensal;",
      description9: "Benefício não Elegível;",
      description10: "Limite Mínimo Idade RL: 18 Anos;",
      description11: "Limite Máximo Idade RL: 60 Anos;",
      description12: "CCB emitida a menos de 8 dias;",
      description13: "Tempo mínimo de benefício: 12 Meses;",
      description14: "Valor Mínimo de Parcela: R$ 30,00;",
      description15: "Dia de vencimento fora do range definido;",
      description16: "CNPJ Correspondente não cadastrado;",
      description17: "Contrato duplicado;",
      description18: "Contrato em lista restritiva;",
      description19: "Validação Bureau - Nome, Nascimento, Obito, PEP; - NASCIMENTO",
      description20: "Validação Bureau - Nome, Nascimento, Obito, PEP; - NOME:1",
      description21: "Validação Bureau - Nome, Nascimento, Obito, PEP; - OBITO",
      description22: "Validação Bureau - Nome, Nascimento, Obito, PEP; - PEP",
      description23: "Situação CPF Receita: Diferente de Regular;",
      description24: "Validação RL - Nome, Nascimento, Obito, PEP; - NASCIMENTO",
      description25: "Validação RL - Nome, Nascimento, Obito, PEP; - NOME:5",
      description26: "Validação RL - Nome, Nascimento, Obito, PEP; - OBITO",
      description27: "Validação RL - Nome, Nascimento, Obito, PEP; - PEP",
      description28: "Situação CPF Receita Rep.Le: Diferente de Regular;"
    }

    cy.analise_com_sucesso_pine_cartao_beneficio_representante_legal()
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

describe('Limite Mínimo Idade: 4 Anos; REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description0: "Limite Mínimo Idade: 4 Anos;"
    }

    cy.idade_minima_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[0].descricao).to.equal(project.description0)
        expect(response.body.regras[0].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Limite Máximo Idade: 84 Anos; REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description1: "Limite Máximo Idade: 84 anos;"
    }

    cy.idade_maxima_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[1].descricao).to.equal(project.description1)
        expect(response.body.regras[1].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Valor Mínimo CCB: R$ 300,00; REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description2: "Valor Mínimo CCB: R$ 300,00;"
    }

    cy.valor_minimo_ccb_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[2].descricao).to.equal(project.description2)
        expect(response.body.regras[2].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Valor Máximo CCB: R$ 20.000,00; REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description3: "Valor Máximo CCB: R$ 20.000,00;"
    }

    cy.valor_maximo_ccb_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[3].descricao).to.equal(project.description3)
        expect(response.body.regras[3].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Taxa Máxima: 3,06; REPROVADO', () => {
  it('successfully', () => {
    const project = {
      description4: "Taxa Máxima: 3,06;"
    }

    cy.taxa_maxima_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[4].descricao).to.equal(project.description4)
        expect(response.body.regras[4].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Número Total de Parcelas; REPROVADO', () => {
  //beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = {
      description5: "Número Total de Parcelas;"
    }

    cy.numero_total_parcelas_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[5].descricao).to.equal(project.description5)
        expect(response.body.regras[5].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Contrato Liquidado; REPROVADO', () => {
  it('successfully', () => {
    const project = {
      description6: "Contrato Liquidado;"
    }

    cy.contrato_liquidado_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[6].descricao).to.equal(project.description6)
        expect(response.body.regras[6].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Inadimplência Parcela/Contrato; REPROVADO', () => {
  it('successfully', () => {
    const project = {
      description7: "Inadimplência Parcela/Contrato;"
    }

    cy.inadimplencia_parcela_contrato_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[7].descricao).to.equal(project.description7)
        expect(response.body.regras[7].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Parcelas Subsequentes Mensal; REPROVADO', () => {
  it('successfully', () => {
    const project = {
      description8: "Parcelas Subsequentes Mensal;"
    }

    cy.parcelas_subsequentes_mensal_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[8].descricao).to.equal(project.description8)
        expect(response.body.regras[8].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Benefício Não Elegível REPROVADA', () => {
  it('successfully', () => {
    const project = {
      description9: "Benefício não Elegível;"
    }

    cy.beneficio_elegivel_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[9].descricao).to.equal(project.description9)
        expect(response.body.regras[9].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Limite Mínimo Idade RL: 18 Anos; REPROVADA', () => {
  it('successfully', () => {
    const project = {
      description10: "Limite Mínimo Idade RL: 18 Anos;"
    }

    cy.limite_minimo_idade_representante_legal_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[10].descricao).to.equal(project.description10)
        expect(response.body.regras[10].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Limite Máximo Idade RL: 60 Anos; REPROVADA', () => {
  it('successfully', () => {
    const project = {
      description11: "Limite Máximo Idade RL: 60 Anos;"
    }

    cy.limite_maximo_idade_representante_legal_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[11].descricao).to.equal(project.description11)
        expect(response.body.regras[11].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('CCB emitida a menos de 8 dias; REPROVADO', () => {
  it('successfully', () => {
    const project = {
      description12: "CCB emitida a menos de 8 dias;"
    }

    cy.ccb_imitida_a_menos_de_8_dias_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[12].descricao).to.equal(project.description12)
        expect(response.body.regras[12].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Tempo mínimo de benefício: 12 Meses; REPROVADA', () => {
  it('successfully', () => {
    const project = {
      description13: "Tempo mínimo de benefício: 12 Meses;"
    }

    cy.tempo_minimo_beneficio_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[13].descricao).to.equal(project.description13)
        expect(response.body.regras[13].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Valor Mínimo de Parcela: R$ 30,00; REPROVADO', () => {
  it('successfully', () => {
    const project = {
      description14: "Valor Mínimo de Parcela: R$ 30,00;"
    }

    cy.valor_minimo_parcela_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[14].descricao).to.equal(project.description14)
        expect(response.body.regras[14].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Dia de vencimento fora do range definido; REPROVADO', () => {
  it('successfully', () => {
    const project = {
      description15: "Dia de vencimento fora do range definido;"
    }

    cy.vencimento_fora_do_range_definido_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[15].descricao).to.equal(project.description15)
        expect(response.body.regras[15].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('CNPJ Correspondente não cadastrado; REPROVADO', () => {
  it('successfully', () => {
    const project = {
      description16: "CNPJ Correspondente não cadastrado;"
    }

    cy.cnpj_nao_cadastrado_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[16].descricao).to.equal(project.description16)
        expect(response.body.regras[16].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Contrato duplicado; REPROVADO', () => {
  it('successfully', () => {
    const project = {
      description17: "Contrato duplicado;"
    }

    cy.contrato_duplicado_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[17].descricao).to.equal(project.description17)
        expect(response.body.regras[17].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Contrato em lista restritiva;', () => {
  it('successfully', () => {
    const project = {
      description18: "Contrato em lista restritiva;"
    }

    cy.contrato_lista_retritiva_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[18].descricao).to.equal(project.description18)
        expect(response.body.regras[18].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Validação Bureau - Nome, Nascimento, Obito, PEP; REPROVADO', () => {
  it('successfully', () => {
    const project = {
      description19: "Validação Bureau - Nome, Nascimento, Obito, PEP; - NASCIMENTO",
      description20: "Validação Bureau - Nome, Nascimento, Obito, PEP; - NOME:1",
      description21: "Validação Bureau - Nome, Nascimento, Obito, PEP; - OBITO",
      description22: "Validação Bureau - Nome, Nascimento, Obito, PEP; - PEP"
    }

    cy.validacao_bureau_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[19].descricao).to.equal(project.description19)
        expect(response.body.regras[19].regra_aprovada).to.equal(false)
        expect(response.body.regras[20].descricao).to.equal(project.description20)
        expect(response.body.regras[20].regra_aprovada).to.equal(false)
        expect(response.body.regras[21].descricao).to.equal(project.description21)
        expect(response.body.regras[21].regra_aprovada).to.equal(false)
        expect(response.body.regras[22].descricao).to.equal(project.description22)
        expect(response.body.regras[22].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Situação CPF Receita: Diferente de Regular; REPROVADO', () => {
  it('successfully', () => {
    const project = {
      description23: "Situação CPF Receita: Diferente de Regular;"
    }

    cy.situacao_cpf_receita_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[23].descricao).to.equal(project.description23)
        expect(response.body.regras[23].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Validação RL - Nome, Nascimento, Obito, PEP;', () => {
  it('successfully', () => {
    const project = {
      description24: "Validação RL - Nome, Nascimento, Obito, PEP; - NASCIMENTO",
      description25: "Validação RL - Nome, Nascimento, Obito, PEP; - NOME:5",
      description26: "Validação RL - Nome, Nascimento, Obito, PEP; - OBITO",
      description27: "Validação RL - Nome, Nascimento, Obito, PEP; - PEP"
    }

    cy.validacao_bureau_representante_legal_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[24].descricao).to.equal(project.description24)
        expect(response.body.regras[24].regra_aprovada).to.equal(false)
        expect(response.body.regras[25].descricao).to.equal(project.description25)
        expect(response.body.regras[25].regra_aprovada).to.equal(false)
        expect(response.body.regras[26].descricao).to.equal(project.description26)
        expect(response.body.regras[26].regra_aprovada).to.equal(false)
        expect(response.body.regras[27].descricao).to.equal(project.description27)
        expect(response.body.regras[27].regra_aprovada).to.equal(false)
      })
  
  })
})

describe('Situação CPF Receita Rep.Le: Diferente de Regular; REPROVADO', () => {
  it('successfully', () => {
    const project = {
      description28: "Situação CPF Receita Rep.Le: Diferente de Regular;"
    }

    cy.situacao_cpf_receita_representante_legal_reprovado_pine_cartao_beneficio_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.regras[28].descricao).to.equal(project.description28)
        expect(response.body.regras[28].regra_aprovada).to.equal(false)
      })
  
  })
})

