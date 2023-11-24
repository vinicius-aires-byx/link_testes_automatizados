describe('Analise com sucesso', () => {
    it('successfully', () => {
      cy.analise_com_sucesso_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regras = response.body.regras.find(m => m.descricao === "Limite Mínimo Idade: 4 Anos;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Limite Máximo Idade: 84 Anos;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Valor Mínimo CCB: R$ 300,00;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Valor Máximo CCB: R$ 20.000,00;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Taxa Máxima: 3,06;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Número Total de Parcelas;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Contrato Liquidado;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Inadimplência Parcela/Contrato;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Parcelas Subsequentes Mensal;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Benefício não Elegível;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Limite Mínimo Idade RL: 18 Anos;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Limite Máximo Idade RL: 60 Anos;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "CCB emitida a menos de 8 dias;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Tempo mínimo de benefício: 12 Meses;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Valor Mínimo de Parcela: R$ 30,00;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Dia de vencimento fora do range definido;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "CNPJ Correspondente não cadastrado;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Contrato duplicado;")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Contrato em lista restritiva;")
          expect(regras.regra_aprovada).to.be.true
          /*
          regras = response.body.regras.find(m => m.descricao === "Validação Bureau - Nome, Nascimento, Obito, PEP; - NASCIMENTO")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Validação Bureau - Nome, Nascimento, Obito, PEP; - NOME:1")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Validação Bureau - Nome, Nascimento, Obito, PEP; - OBITO")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Validação Bureau - Nome, Nascimento, Obito, PEP; - PEP")
          expect(regras.regra_aprovada).to.be.true
          */
          regras = response.body.regras.find(m => m.descricao === "Situação CPF Receita: Diferente de Regular;")
          expect(regras.regra_aprovada).to.be.true
          /*
          regras = response.body.regras.find(m => m.descricao === "Validação RL - Nome, Nascimento, Obito, PEP; - NASCIMENTO")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Validação RL - Nome, Nascimento, Obito, PEP; - NOME:5")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Validação RL - Nome, Nascimento, Obito, PEP; - OBITO")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Validação RL - Nome, Nascimento, Obito, PEP; - PEP")
          expect(regras.regra_aprovada).to.be.true       
          */
          regras = response.body.regras.find(m => m.descricao === "Situação CPF Receita Rep.Le: Diferente de Regular;")
          expect(regras.regra_aprovada).to.be.true
          
        })
    })
  })
  
  describe('Limite Mínimo Idade: 4 Anos; REPROVADO', () => {
    it('successfully', () => {
      cy.limite_minimo_idade_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === "Limite Mínimo Idade: 4 Anos;");
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })
  
  describe('Limite Máximo Idade: 84 Anos; REPROVADO', () => {
    it('successfully', () => {
      cy.limite_maximo_idade_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Limite Máximo Idade: 84 Anos;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })
  
  describe('Valor Mínimo CCB: R$ 300,00; REPROVADO', () => {
    it('successfully', () => {
      cy.valor_minimo_ccb_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Valor Mínimo CCB: R$ 300,00;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })

  describe('Valor Máximo CCB: R$ 20.000,00; REPROVADO', () => {
    it('successfully', () => {
      cy.valor_maximo_ccb_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Valor Máximo CCB: R$ 20.000,00;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })

  describe('Taxa Máxima: 3,06; REPROVADO', () => {
    it('successfully', () => {
      cy.taxa_maxima_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Taxa Máxima: 3,06;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })

  describe('Número Total de Parcelas; REPROVADO', () => {
    it('successfully', () => {
      cy.numero_total_parcelas_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Número Total de Parcelas;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })
  
  describe('Contrato Liquidado; REPROVADO', () => {
    it('successfully', () => {
      cy.contrato_liquidado_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Contrato Liquidado;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })

  describe('Inadimplência Parcela/Contrato; REPROVADO', () => {
    it('successfully', () => {
      cy.inadimplencia_parcela_contrato_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Inadimplência Parcela/Contrato;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })

  describe('Parcelas Subsequentes Mensal; REPROVADO', () => {
    it('successfully', () => {
      cy.parcelas_subsequentes_mensal_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Parcelas Subsequentes Mensal;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })

  describe('Benefício não Elegível; REPROVADO', () => {
    it('successfully', () => {
      cy.beneficio_elegivel_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Benefício não Elegível;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })

  describe('Limite Mínimo Idade RL: 18 Anos; REPROVADO', () => {
    it('successfully', () => {
      cy.limite_minimo_idade_representante_legal_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Limite Mínimo Idade RL: 18 Anos;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })

  describe('Limite Máximo Idade RL: 60 Anos; REPROVADO', () => {
    it('successfully', () => {
      cy.limite_maximo_idade_representante_legal_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Limite Máximo Idade RL: 60 Anos;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })

  describe('CCB emitida a menos de 8 dias; REPROVADO', () => {
    it('successfully', () => {
      cy.ccb_imitida_a_menos_de_8_dias_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'CCB emitida a menos de 8 dias;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })

  describe('Tempo mínimo de benefício: 12 Meses; REPROVADO', () => {
    it('successfully', () => {
      cy.tempo_minimo_beneficio_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Tempo mínimo de benefício: 12 Meses;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })
  
  describe('Valor Mínimo de Parcela: R$ 30,00; REPROVADO', () => {
    it('successfully', () => {
      cy.valor_minimo_parcela_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Valor Mínimo de Parcela: R$ 30,00;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })

  describe('Dia de vencimento fora do range definido; REPROVADO', () => {
    it('successfully', () => {
      cy.vencimento_fora_do_range_definido_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Dia de vencimento fora do range definido;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })

  describe('CNPJ Correspondente não cadastrado; REPROVADO', () => {
    it('successfully', () => {
      cy.cnpj_nao_cadastrado_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'CNPJ Correspondente não cadastrado;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })

  describe('Contrato duplicado; REPROVADO', () => {
    it('successfully', () => {
      cy.contrato_duplicado_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Contrato duplicado;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })
  
  describe('Contrato em lista restritiva; REPROVADO', () => {
    it('successfully', () => {
      cy.contrato_lista_restritiva_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regraEncontrada = response.body.regras.find(m => m.descricao === 'Contrato em lista restritiva;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })

  describe('Validação Bureau - Nome, Nascimento, Obito, PEP; REPROVADO', () => {
    it('successfully', () => {
      cy.validacao_bureau_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
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
      cy.situacao_cpf_receita_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          const regraEncontrada = response.body.regras.find(m => m.descricao === 'Situação CPF Receita: Diferente de Regular;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })
  
  describe('Validação RL - Nome, Nascimento, Obito, PEP; REPROVADO', () => {
    it('successfully', () => {
      cy.validacao_bureau_representante_legal_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          let regras = response.body.regras.find(m => m.descricao === "Validação RL - Nome, Nascimento, Obito, PEP; - NASCIMENTO")
          expect(regras.regra_aprovada).to.be.false
          regras = response.body.regras.find(m => m.descricao === "Validação RL - Nome, Nascimento, Obito, PEP; - NOME:5")
          expect(regras.regra_aprovada).to.be.false
          regras = response.body.regras.find(m => m.descricao === "Validação RL - Nome, Nascimento, Obito, PEP; - OBITO")
          expect(regras.regra_aprovada).to.be.true
          regras = response.body.regras.find(m => m.descricao === "Validação RL - Nome, Nascimento, Obito, PEP; - PEP")
          expect(regras.regra_aprovada).to.be.true
        })
    })
  })
  
  describe('Situação CPF Receita Rep.Le: Diferente de Regular; REPROVADO', () => {
    it('successfully', () => {
      cy.situacao_cpf_receita_representante_legal_reprovado_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(201)
          const regraEncontrada = response.body.regras.find(m => m.descricao === 'Situação CPF Receita Rep.Le: Diferente de Regular;');
          expect(regraEncontrada.regra_aprovada).to.be.false;
        })
    })
  })