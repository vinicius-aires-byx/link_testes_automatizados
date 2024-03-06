describe('Analise com sucesso', () => {
  it('successfully', () => {
    cy.analise_com_sucesso_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regras = response.body.regras.find(m => m.descricao === "Idade Minima: 21 anos;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Idade Maxima: 73 anos;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Parcela Minima;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Taxa Minima: 1.20;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Taxa Maxima: 1.70;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Valor Minimo Contrato: R$ 250.00;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Valor Maximo Contrato: R$ 20000.00")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Data de emissao do documento x Data de nascimento;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Contrato Liquidado;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Inadimplencia Parcela/Contrato;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Numero Total de Parcelas;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Numero Maximo Parcelas: 12;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Numero Minimo Parcelas: 10;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Range data vencimento;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Categoria;")
        expect(regras.regra_aprovada).to.be.true
      })
  })
})

describe('Idade Minima: 21 anos; REPROVADO', () => {
  it('successfully', () => {
    cy.idade_minima_reprovado_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regraEncontrada = response.body.regras.find(m => m.descricao === "Idade Minima: 21 anos;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
  })
})

describe('Idade Maxima: 73 anos; REPROVADO', () => {
  it('successfully', () => {
    cy.idade_maxima_reprovado_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regraEncontrada = response.body.regras.find(m => m.descricao === "Idade Maxima: 73 anos;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
  })
})

describe('Parcela Minima; REPROVADO', () => {
  it('successfully', () => {
    cy.parcela_minima_reprovado_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regraEncontrada = response.body.regras.find(m => m.descricao === "Parcela Minima;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
  })
})

describe('Taxa Minima: 1.20; REPROVADO', () => {
  it('successfully', () => {
    cy.taxa_minima_reprovado_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regraEncontrada = response.body.regras.find(m => m.descricao === "Taxa Minima: 1.20;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
  })
})

describe('Taxa Maxima: 1.70; REPROVADO', () => {
  it('successfully', () => {
    cy.taxa_maxima_reprovado_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regraEncontrada = response.body.regras.find(m => m.descricao === "Taxa Maxima: 1.70;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
  })
})

describe('Valor Minimo Contrato: R$ 250.00; REPROVADO', () => {
  it('successfully', () => {
    cy.valor_minimo_contrato_reprovado_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regraEncontrada = response.body.regras.find(m => m.descricao === "Valor Minimo Contrato: R$ 250.00;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
  })
})

describe('Valor Maximo Contrato: R$ 20000.00 REPROVADO', () => {
  it('successfully', () => {
    cy.valor_maximo_contrato_reprovado_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regraEncontrada = response.body.regras.find(m => m.descricao === "Valor Maximo Contrato: R$ 20000.00");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
  })
})

describe('Data de emissao do documento x Data de nascimento; REPROVADO', () => {
  it('successfully', () => {
    cy.data_emissao_documento_x_data_nascimento_reprovado_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regraEncontrada = response.body.regras.find(m => m.descricao === "Data de emissao do documento x Data de nascimento;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
  })
})

describe('Contrato Liquidado; REPROVADO', () => {
  it('successfully', () => {
    cy.contrato_liquidado_reprovado_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regraEncontrada = response.body.regras.find(m => m.descricao === "Contrato Liquidado;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
  })
})

describe('Inadimplência Parcela/Contrato; REPROVADO', () => {
  it('successfully', () => {
    cy.inadimplencia_parcela_contrato_reprovado_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regraEncontrada = response.body.regras.find(m => m.descricao === "Inadimplencia Parcela/Contrato;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
  })
})

describe('Numero Total de Parcelas; REPROVADO', () => {
  it('successfully', () => {
    cy.numero_total_parcelas_reprovado_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regraEncontrada = response.body.regras.find(m => m.descricao === "Numero Total de Parcelas;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
  })
})

describe('Numero Maximo Parcelas: 12; REPROVADO', () => {
  it('successfully', () => {
    cy.numero_maximo_parcelas_reprovado_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regraEncontrada = response.body.regras.find(m => m.descricao === "Numero Maximo Parcelas: 12;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
  })
})

describe('Numero Minimo Parcelas: 10; REPROVADO', () => {
  it('successfully', () => {
    cy.numero_minimo_parcelas_reprovado_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regraEncontrada = response.body.regras.find(m => m.descricao === "Numero Minimo Parcelas: 10;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
  })
})

describe('Range data vencimento; REPROVADO', () => {
  it('successfully', () => {
    cy.range_data_vencimento_reprovado_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regraEncontrada = response.body.regras.find(m => m.descricao === "Range data vencimento;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
  })
})

describe('Categoria; REPROVADO', () => {
  it('successfully', () => {
    cy.categoria_reprovado_exercito()
      .then(response => {
        expect(response.status).to.equal(201)
        let regraEncontrada = response.body.regras.find(m => m.descricao === "Categoria;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
  })
})

