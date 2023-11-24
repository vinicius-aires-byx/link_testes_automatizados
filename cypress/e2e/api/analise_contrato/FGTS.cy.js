describe('Analise com sucesso', () => {
  it('successfully', () => {
    cy.analise_com_sucesso_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Limite Mínimo Idade: 4 Anos;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Limite Máximo Idade: 84 Anos;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Valor Mínimo CCB: R$ 750,00;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Valor Máximo CCB: R$ 30.000,00;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Valor Mínimo de Parcela: R$ 10,00;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Validar Grid de Parcelas;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Janela Primeira Parcelas: 60 dias;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Blacklist CPFs;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Blacklist CEPs;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Data de emissão do documento x Data de nascimento;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Inadimplência Parcela/Contrato;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Contrato Liquidado;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Parcelas Subsequentes Anual;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Taxa Mínima: 1,69;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Taxa Máxima: 2,04;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "CCB emitida a menos de 8 dias;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Prazo Primeiro Vencimento Maior 12 meses;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Limite Máximo de Parcelas - 12;")
      expect(regras.regra_aprovada).to.be.true
      //regras = response.body.regras.find(m => m.descricao === "Garantia CEF;")
      //expect(regras.regra_aprovada).to.be.true
      //regras = response.body.regras.find(m => m.descricao === "Validação Bureau - Nome, Nascimento, Obito, PEP; - NASCIMENTO")
      //expect(regras.regra_aprovada).to.be.true
      //regras = response.body.regras.find(m => m.descricao === "Validação Bureau - Nome, Nascimento, Obito, PEP; - NOME:1")
      //expect(regras.regra_aprovada).to.be.true
      //regras = response.body.regras.find(m => m.descricao === "Validação Bureau - Nome, Nascimento, Obito, PEP; - OBITO")
      //expect(regras.regra_aprovada).to.be.true
      //regras = response.body.regras.find(m => m.descricao === "Validação Bureau - Nome, Nascimento, Obito, PEP; - PEP")
      //expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Situação CPF Receita: Diferente de Regular;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Contrato duplicado;")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Parcela Media;")
      expect(regras.regra_aprovada).to.be.true
    })
  })
})

describe('Limite Mínimo Idade: 4 Anos REPROVADO', () => {
  it('successfully', () => {
    cy.limite_minimo_idade_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Limite Mínimo Idade: 4 Anos;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Limite Máximo Idade: 84 Anos; REPROVADO', () => {
  it('successfully', () => {
    cy.limite_maximo_idade_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Limite Máximo Idade: 84 Anos;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Valor Mínimo CCB: R$ 750,00; REPROVADO', () => {
  it('successfully', () => {
    cy.valor_minimo_ccb_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Valor Mínimo CCB: R$ 750,00;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Valor Máximo CCB: R$ 30.000,00; REPROVADO', () => {
  it('successfully', () => {
    cy.valor_maximo_ccb_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Valor Máximo CCB: R$ 30.000,00;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Valor Mínimo de Parcela: R$ 10,00; REPROVADO', () => {
  it('successfully', () => {
    cy.valor_minimo_parcela_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Valor Mínimo de Parcela: R$ 10,00;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Validar Grid de Parcelas; REPROVADO', () => {
  it('successfully', () => {
    cy.validar_grid_parcelas_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Validar Grid de Parcelas;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Janela Primeira Parcelas: 60 dias; REPROVADO', () => {
  it('successfully', () => {
    cy.janela_parcelas_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Janela Primeira Parcelas: 60 dias;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Blacklist CPFs; REPROVADO', () => {
  it('successfully', () => {
    cy.blacklist_cpf_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Blacklist CPFs;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Blacklist CEPs; REPROVADO', () => {
  it('successfully', () => {
    cy.blacklist_cep_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Blacklist CEPs;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Data de emissão do documento x Data de nascimento; REPROVADO', () => {
  it('successfully', () => {
    cy.data_emissao_documento_x_data_nascimento_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Data de emissão do documento x Data de nascimento;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Inadimplência Parcela/Contrato; REPROVADO', () => {
  it('successfully', () => {
    cy.inadimplencia_parcela_contrato_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Inadimplência Parcela/Contrato;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Contrato Liquidado; REPROVADO', () => {
  it('successfully', () => {
    cy.contrato_liquidado_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Contrato Liquidado;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Parcelas Subsequentes Anual; REPROVADO', () => {
  it('successfully', () => {
    cy.parcela_subsequente_anual_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Parcelas Subsequentes Anual;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Taxa Mínima: 1,69; REPROVADO', () => {
  it('successfully', () => {
    cy.taxa_minima_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Taxa Mínima: 1,69;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Taxa Máxima: 2,04; REPROVADO', () => {
  it('successfully', () => {
    cy.taxa_maxima_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Taxa Máxima: 2,04;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('CCB emitida a menos de 8 dias; REPROVADO', () => {
  it('successfully', () => {
    cy.ccb_emitida_menos_de_8_dias_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "CCB emitida a menos de 8 dias;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Prazo Primeiro Vencimento Maior 12 meses; REPROVADO', () => {
  it('successfully', () => {
    cy.prazo_primeiro_vencimento_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Prazo Primeiro Vencimento Maior 12 meses;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Limite Máximo de Parcelas - 12; REPROVADO', () => {
  it('successfully', () => {
    cy.limite_maximo_parcelas_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Limite Máximo de Parcelas - 12;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

/*
describe('Garantia CEF; REPROVADO', () => {
  it('successfully', () => {
    cy.garantia_cef_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Garantia CEF;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})
*/

describe('Validação Bureau - Nome, Nascimento, Obito, PEP; REPROVADO', () => {
  it('successfully', () => {
    cy.validacao_bureau_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Validação Bureau - Nome, Nascimento, Obito, PEP; - NASCIMENTO")
      expect(regras.regra_aprovada).to.be.false
      regras = response.body.regras.find(m => m.descricao === "Validação Bureau - Nome, Nascimento, Obito, PEP; - NOME:1")
      expect(regras.regra_aprovada).to.be.false
      regras = response.body.regras.find(m => m.descricao === "Validação Bureau - Nome, Nascimento, Obito, PEP; - OBITO")
      expect(regras.regra_aprovada).to.be.true
      regras = response.body.regras.find(m => m.descricao === "Validação Bureau - Nome, Nascimento, Obito, PEP; - PEP")
      expect(regras.regra_aprovada).to.be.true
    })
  })
})

describe('Situação CPF Receita: Diferente de Regular; REPROVADO', () => {
  it('successfully', () => {
    cy.situacao_cpf_receita_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Situação CPF Receita: Diferente de Regular;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Contrato duplicado; REPROVADO', () => {
  it('successfully', () => {
    cy.contrato_duplicado_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Contrato duplicado;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

describe('Parcela Media; REPROVADO', () => {
  it('successfully', () => {
    cy.parcela_media_reprovado_fgts()
    .then((response) => {
      expect(response.status).to.equal(201);
      let regras = response.body.regras.find(m => m.descricao === "Parcela Media;")
      expect(regras.regra_aprovada).to.be.false
    })
  })
})

