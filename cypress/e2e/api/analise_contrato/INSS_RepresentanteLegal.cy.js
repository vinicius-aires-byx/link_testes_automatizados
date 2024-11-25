describe('Analise com sucesso', () => {
  it('successfully', () => {
    cy.analise_com_sucesso_inss_representante_legal()
      .then(response => {
        expect(response.status).to.equal(201)
        let regras = response.body.regras.find(m => m.descricao === "Limite Mínimo Idade: 4 Anos;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Limite Máximo Idade: 80 Anos;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Data de emissão do documento x Data de nascimento;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Valor Mínimo CCB: R$ 250,00;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Valor Máximo CCB: R$ 20.000,00;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar Banco em Lista")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Blacklist CPFs;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validação cidade em lista")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Número Total de Parcelas;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Janela Primeira Parcelas: 60 dias;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Valor Mínimo de Parcela: R$ 30,00;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Contrato Liquidado;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Inadimplência Parcela/Contrato;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Parcelas Subsequentes Mensal;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Número Mínimo de Parcelas: 10;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Número Máximo de Parcelas: 12;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar carencia primeiro vencimento: 60 dias")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Benefício Elegível")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Taxa Mínima: 1,80;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Taxa Máxima: 2,14;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Limite Mínimo Idade RL: 25 Anos;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Limite Máximo Idade RL: 65 Anos;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Tempo mínimo de benefício: 12 Meses;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Tempo máximo de beneficio: 36 meses")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "CCB emitida a menos de 8 dias;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Representante Legal Nato;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Dia de vencimento fora do range definido;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "CNPJ Correspondente não cadastrado;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Contrato em lista restritiva;")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar contrato - Elegíveis")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar média das parcelas")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar código UPAG")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar código Orgão")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar beneficio x idade")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar Valor Financiado")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Valor financiado x Valor das parcelas")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validação limite de idade ao termino do contrato")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validação limite de idade ao termino Representante")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar Data Digitação superior a Data Contrato")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar Data Averbação superior a Data Contrato")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Data Primeiro Vencimento superior Data contrato")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Data Primeiro Vencimento superior x dias")
        expect(regras.regra_aprovada).to.be.true
        // regras = response.body.regras.find(m => m.descricao === "Contrato duplicado;")
        // expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar Valor Mínimo TIR")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar Valor Máximo TIR")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar Valor Delta TIR")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar mínimo de parcelas pagas")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar máximo de parcelas pagas")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar soma de parcelas cedidas x limite acordado")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar soma do valor dos contratos por CPF")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar prazo e valor do contrato baseado na idade")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar idade limite fim do contrato x beneficio")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar tipo do benefício x idade do cliente")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validação de validade benefício (BPC)")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validar DEC")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validação de restrição de UF do benefício.")
        expect(regras.regra_aprovada).to.be.true
        regras = response.body.regras.find(m => m.descricao === "Validação de restrição de UF do endereço.")
        expect(regras.regra_aprovada).to.be.true
      })
  })
})

describe('Regas Aceite Atualizadas', () => {
  let body
  let regraEncontrada
  beforeEach(() => {
    cy.fixture('inss_representante_bodyBase.json').then((data) => { body = data })
  })
  it('Limite Mínimo Idade: 4 Anos; REPROVADO', () => {
    body.cliente.dtNascimento = "2023-05-07"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Limite Mínimo Idade: 4 Anos;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Limite Máximo Idade: 80 Anos; REPROVADO", () => {
    body.cliente.dtNascimento = "1919-05-07"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Limite Máximo Idade: 80 Anos;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Data de emissão do documento x Data de nascimento; REPROVADO", () => {
    body.cliente.dtNascimento = "1999-05-15"
    body.cliente.dtEmissaoRg = "1998-10-21"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Data de emissão do documento x Data de nascimento;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Valor Mínimo CCB: R$ 250,00; REPROVADO", () => {
    body.contrato.vrContrato = "105.00"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Valor Mínimo CCB: R$ 250,00;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Valor Máximo CCB: R$ 20.000,00; REPROVADO", () => {
    body.contrato.vrContrato = "20001.00"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Valor Máximo CCB: R$ 20.000,00;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Banco em lista; REPROVADO", () => {
    body.dadosBancariosSacado.nuBanco = "100"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar Banco em Lista");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Blacklist CPFs; REPROVADO", () => {
    body.representante.nuCpf = "93718462"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Blacklist CPFs;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Cidade em lista; REPROVADO", () => {
    body.cliente.nmEnderecoResidencialCidade = "Governador Valadares"
    body.cliente.nmEnderecoResidencialUf = "MG"
    body.cliente.nuEnderecoResidencialCep = "35010070"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validação cidade em lista");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Número Total de Parcelas; REPROVADO", () => {
    body.contrato.qtParcelasTotal = "18"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Número Total de Parcelas;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Janela Primeira Parcelas: 25 dias; REPROVADO", () => {
    let dataAtual = new Date();
    let cincoDiasAntes =  new Date(dataAtual)
    cincoDiasAntes.setDate(dataAtual.getDate() + 23)
    let dataFormatada =  cincoDiasAntes.toISOString().split('T')[0]
    body.parcela[8].dtVencimento = dataFormatada
    cy.log(body)
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Janela primeira parcela: 25 dias");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Valor Mínimo de Parcela: R$ 30,00; REPROVADO", () => {
    body.parcela[8].vrParcela = "10.00"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Valor Mínimo de Parcela: R$ 30,00;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Inadimplência Parcela/Contrato; REPROVADO", () => {
    body.parcela[8].dtVencimento = "2024-11-11"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Inadimplência Parcela/Contrato;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Contrato Liquidado; REPROVADO", () => {
    cy.fixture("inss_representante_liquidado").then((bodyLiquidado) => {
      cy.request({
        method: "POST",
        url: `/analise-contrato/`,

        body: bodyLiquidado,
        headers: {
          Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
        }
      }).then((response) => {
        expect(response.status).to.equal(201)
        regraEncontrada = response.body.regras.find(m => m.descricao === "Contrato Liquidado;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
    })
  })
  it("Parcelas Subsequentes Mensal; REPROVADO", () => {
    body.parcela[6].dtVencimento = "2024-11-11"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Parcelas Subsequentes Mensal;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Número Mínimo de Parcelas: 10; REPROVADO", () => {
    cy.fixture("inss_representante_quantMinParc").then((bodyQuantMinParc) => {
      cy.request({
        method: "POST",
        url: `/analise-contrato/`,

        body: bodyQuantMinParc,
        headers: {
          Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
        }
      }).then((response) => {
        expect(response.status).to.equal(201)
        regraEncontrada = response.body.regras.find(m => m.descricao === "Número Mínimo de Parcelas: 10;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
    })
  })
  it("Número Máximo de Parcelas: 12; REPROVADO", () => {
    cy.fixture("inss_representante_quantMaxParc").then((bodyQuantMaxParc) => {
      cy.request({
        method: "POST",
        url: `/analise-contrato/`,

        body: bodyQuantMaxParc,
        headers: {
          Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
        }
      }).then((response) => {
        expect(response.status).to.equal(201)
        regraEncontrada = response.body.regras.find(m => m.descricao === "Número Máximo de Parcelas: 12;");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
    })
  })
  it("Validar carencia primeiro vencimento: 60 dias; REPROVADO", () => {
    body.parcela[0].dtVencimento = "2024-06-31"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar carencia primeiro vencimento: 60 dias");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Benefícios elegíveis; REPROVADO", () => {
    body.beneficio.tipoBeneficio = "009"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Benefício Elegível");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Taxa Mínima: 1,80; REPROVADO", () => {
    body.contrato.txEfetivaMes = "0.0017"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Taxa Mínima: 1,80;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Taxa Máxima: 2,14; REPROVADO", () => {
    body.contrato.txEfetivaMes = "3"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Taxa Máxima: 2,14;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Limite Mínimo Idade RL: 25 Anos; REPROVADO", () => {
    body.representante.dtNascimento = "2010-01-01"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Limite Mínimo Idade RL: 25 Anos;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Limite Máximo Idade RL: 65 Anos; REPROVADO", () => {
    body.representante.dtNascimento = "1901-01-01"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Limite Máximo Idade RL: 65 Anos;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Tempo mínimo de benefício: 12 Meses; REPROVADO", () => {
    body.beneficio.dtConcessaoBeneficio = "2023-11-13"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Tempo mínimo de benefício: 12 Meses;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Tempo máximo de beneficio: 36 meses; REPROVADO", () => {
    body.beneficio.dtConcessaoBeneficio = "2020-11-10"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Tempo máximo de beneficio: 36 meses");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Representante Legal Nato; REPROVADO", () => {
    body.representante.nmCliente = "Valmira Antonia de assunção"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Representante Legal Nato;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("CCB emitida a menos de 8 dias; REPROVADO", () => {
    let dataAtual = new Date();
    let cincoDiasAntes =  new Date(dataAtual)
    cincoDiasAntes.setDate(dataAtual.getDate() - 5)
    let dataFormatada =  cincoDiasAntes.toISOString().split('T')[0]
    body.contrato.dtContrato = dataFormatada
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "CCB emitida a menos de 8 dias;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Dia de vencimento fora do range definido; REPROVADO", () => {
    body.parcela[0].dtVencimento = "2024-06-30"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Dia de vencimento fora do range definido;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("CNPJ Correspondente não cadastrado; REPROVADO", () => {
    body.contrato.nuCnpjCorrespondente = "0000000000001"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "CNPJ Correspondente não cadastrado;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar contrato - Restrição; REPROVADO", () => {
    body.contrato.nuContratoFacta = "15975324860"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Contrato em lista restritiva;");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar contrato - Elegíveis; REPROVADO", () => {
    body.contrato.nuContratoFacta = "15975324860"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar contrato - Elegíveis");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar media das parcelas REPROVADO", () => {
    body.parcela[7].vrParcela = "10.00"
    body.parcela[8].vrParcela = "10.00"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar média das parcelas");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar código UPAG; REPROVADO", () => {
    body.cliente.empresa.codUPag = "551199"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar código UPAG");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar código Orgão; REPROVADO", () => {
    body.cliente.empresa.codOrgao = "115599"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar código Orgão");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar beneficio X idade; REPROVADO", () => {
    body.cliente.dtNasicmento = "2001-10-21"
    body.parcela[11].dtVencimento = "2060-10-12"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar beneficio x idade");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar valor financiado; REPROVADO", () => {
    body.contrato.vrLiberadoCliente = "1500.00"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar Valor Financiado");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar valor financiado x valor das parcelas; REPROVADO", () => {
    body.contrato.vrLiberadoCliente = "10000.00"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Valor financiado x Valor das parcelas");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar limite de idade ao termino do contrato (Cliente); REPROVADO", () => {
    body.cliente.dtNascimento = "1919-01-01"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validação limite de idade ao termino do contrato");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar limite de idade ao termino do contrato (Representante); REPROVADO", () => {
    body.representante.dtNascimento = "1919-01-01"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validação limite de idade ao termino Representante");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar data de digitação superiror a data contrato; REPROVADO", () => {
    body.contrato.dtDigitacao = "2024-06-01"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar Data Digitação superior a Data Contrato");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar data de averbação superiror a data contrato; REPROVADO", () => {
    body.contrato.dtRetornoAverbacao = "2024-06-01"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar Data Averbação superior a Data Contrato");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar Data Primeiro Vencimento superior Data contrato; REPROVADO", () => {
    body.contrato.dtPrimeiroVencimento = "2020-01-01"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Data Primeiro Vencimento superior Data contrato");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar Data Primeiro Vencimento superior Data contrato por x dias; REPROVADO", () => {
    body.contrato.dtPrimeiroVencimento = "2024-09-31"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Data Primeiro Vencimento superior x dias");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar Valor mínimo TIR; REPROVADO", () => {
    body.contrato.txTIR = "0.001"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar Valor Mínimo TIR");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar Valor máximo TIR; REPROVADO", () => {
    body.contrato.txTIR = "100"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar Valor Máximo TIR");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar Valor delta TIR; REPROVADO", () => {
    body.contrato.txTIR = "1"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar Valor Delta TIR");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Mínimo de Parcelas Pagas; REPROVADO", () => {
    cy.fixture("inss_representante_minParcPagas").then((bodyMinParc) => {
      cy.request({
        method: "POST",
        url: `/analise-contrato/`,

        body: bodyMinParc,
        headers: {
          Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
        }
      }).then((response) => {
        expect(response.status).to.equal(201)
        regraEncontrada = response.body.regras.find(m => m.descricao === "Validar mínimo de parcelas pagas");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
    })

  })
  it("Máximo de parcelas pagas; REPROVADO", () => {
    cy.fixture("inss_representante_maxParcPagas").then((bodyMaxParc) => {
      cy.request({
        method: "POST",
        url: `/analise-contrato/`,

        body: bodyMaxParc,
        headers: {
          Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
        }
      }).then((response) => {
        expect(response.status).to.equal(201)
        regraEncontrada = response.body.regras.find(m => m.descricao === "Validar máximo de parcelas pagas");
        expect(regraEncontrada.regra_aprovada).to.be.false;
      })
    })
  })
  it("Validar soma de parcelas cedidas x limite acordado; REPROVADO", () => {
    body.parcela[9].vrParcela = "9000.00"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar soma de parcelas cedidas x limite acordado");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar soma do valor dos contratos de determinado CPF; REPROVADO", () => {
    body.contrato.somaVrContratoCliente = "10001.00"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar soma do valor dos contratos por CPF");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar prazo e valor do contrato de acordo com idade do cliente.; REPROVADO", () => {
    body.cliente.dtNascimento = "1919-11-07"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar prazo e valor do contrato baseado na idade");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar idade limite ao fim do contrato de acordo com o benefício; REPROVADO", () => {
    body.cliente.dtNascimento = "1919-11-07"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar idade limite fim do contrato x beneficio");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar tipo do benefício x idade do cliente. (Mínima e Máxima); REPROVADO", () => {
    body.cliente.dtNascimento = "1919-11-07"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar tipo do benefício x idade do cliente");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validação de validade benefício (BPC); REPROVADO", () => {
    body.cliente.nuCpf = "95178668145"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validação de validade benefício (BPC)");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validar DEC (Data de Encerramento de Cota); REPROVADO", () => {
    body.parcela[11].dtVencimento = "2025-08-22"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validar DEC");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validação de restrição de UF do benefício.; REPROVADO", () => {
    body.beneficio.ufBeneficio = "RJ"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validação de restrição de UF do benefício.");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
  it("Validação de restrição de UF do endereço.; REPROVADO", () => {
    body.cliente.nmEnderecoResidencialUf = "AC"
    cy.request({
      method: "POST",
      url: `/analise-contrato/`,
      body: body,
      headers: {
        Authorization: "Token 55270e280b2204e20135a8dc1f7a3228d8e936ed"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      regraEncontrada = response.body.regras.find(m => m.descricao === "Validação de restrição de UF do endereço.");
      expect(regraEncontrada.regra_aprovada).to.be.false;
    })
  })
})
