//-------------------------------------------------LOGIN-------------------------------------------------
Cypress.Commands.add('login', () => {
      cy.visit('/admin/login/')
  
      cy.get("#id_username").type(Cypress.env('user_name'))
      cy.get("#id_password").type(Cypress.env('user_password'), {log: false })
      cy.get('.submit-row > input').click()
  })

Cypress.Commands.add('logout', () => {
    cy.get('button').click()
})

//-------------------------------------------------DELETE GERAL-------------------------------------------------
Cypress.Commands.add('deletar', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  cy.get(':first-child > .action-checkbox > .action-select').click()
  cy.get('select').select(1)
  cy.get('.button').click()
  cy.get('div > [type="submit"]').click()
})

//-------------------------------------------------CORE-------------------------------------------------
Cypress.Commands.add('inserirRegra', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
    cy.get('.model-regra > :nth-child(2) > .addlink').click()
    cy.get('#id_nome_regra').type(Cypress.env('nome_regra'))
    cy.get('#id_cliente').select(Cypress.env('cliente'))
    cy.get('#id_tipo_produto').select(Cypress.env('tipo_produto'))
    cy.get('#id_cd_contrato_tipo').select(Cypress.env('tipo_contrato'))
    cy.get('#id_condicional').select(Cypress.env('regra'))
    cy.get('#id_campo_comparativo').type(Cypress.env('valor_comparativo'))
    cy.get('.default').click()
})

Cypress.Commands.add('deletarRegra', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  cy.get('.end').click()
  cy.get(':last-child > .action-checkbox > .action-select').click()
  cy.get('select').select(1)
  cy.get('.button').click()
  cy.get('div > [type="submit"]').click()
})

Cypress.Commands.add('inserirCliente', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
    cy.get('.model-cliente > :nth-child(2) > .addlink').click()
    cy.get('#id_nome').type(Cypress.env('nome_cliente'))
    cy.get('.default').click()
})

Cypress.Commands.add('inserirParametrosSistema', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
    cy.get('.model-parametrosdesistema > :nth-child(2) > .addlink').click()
    cy.get('#id_titulo').type(Cypress.env('nome_cliente'))
    cy.get('#id_chave_acesso_aws').type(Cypress.env('chave_acesso'))
    cy.get('#id_chave_secreta_aws').type(Cypress.env('chave_secreta'))
    cy.get('#id_nome_balde').type(Cypress.env('nome_bucket'))
    cy.get('#id_ativo').click()
    cy.get('.default').click()
})

//-------------------------------------------------DATA-------------------------------------------------
Cypress.Commands.add('inserirBancoPermitido', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
    cy.get('.model-banco > :nth-child(2) > .addlink').click()
    cy.get('#id_cliente').select(Cypress.env('cliente'))
    cy.get('#id_tipo_produto').select(Cypress.env('tipo_produto'))
    cy.get('#id_nome').type(Cypress.env('nome_banco'))
    cy.get('#id_numero').type(Cypress.env('numero_banco'))
    cy.get('.default').click()
})

Cypress.Commands.add('inserirCodigoUpag', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
    cy.get('.model-codigoupag > :nth-child(2) > .addlink').click()
    cy.get('#id_cliente').select(Cypress.env('cliente'))
    cy.get('#id_tipo_produto').select(Cypress.env('tipo_produto'))
    cy.get('#id_codigo_upag').type(Cypress.env('codigo_upag'))
    cy.get('.default').click()
})

Cypress.Commands.add('inserirCodigoOrgao', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
    cy.get('.model-codigoorgao > :nth-child(2) > .addlink').click()
    cy.get('#id_cliente').select(Cypress.env('cliente'))
    cy.get('#id_tipo_produto').select(Cypress.env('tipo_produto'))
    cy.get('#id_codigo_orgao').type(Cypress.env('codigo_orgao'))
    cy.get('.default').click()
})

Cypress.Commands.add('inserirRestricaoCPF', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
    cy.get('.model-restricaocpf > :nth-child(2) > .addlink').click()
    cy.get('#id_cliente').select(Cypress.env('cliente'))
    cy.get('#id_tipo_produto').select(Cypress.env('tipo_produto'))
    cy.get('#id_nuCpf').type(Cypress.env('cpf'))
    cy.get('.default').click()
})

Cypress.Commands.add('inserirRestricaoCEP', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
    cy.get('.model-restricaocidade > :nth-child(2) > .addlink').click()
    cy.get('#id_cliente').select(Cypress.env('cliente'))
    cy.get('#id_tipo_produto').select(Cypress.env('tipo_produto'))
    cy.get('#id_nome').type(Cypress.env('nome_cidade'))
    cy.get('#id_estado').type(Cypress.env('nome_estado'))
    cy.get('#id_codIbge').type(Cypress.env('codigo_ibge'))
    cy.get('#id_faixaCep').type(Cypress.env('cep'))
    cy.get('.default').click()
})

Cypress.Commands.add('inserirBeneficioAceito', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
    cy.get('.model-beneficio > :nth-child(2) > .addlink').click()
    cy.get('#id_cliente').select(Cypress.env('cliente'))
    cy.get('#id_tipo_produto').select(Cypress.env('tipo_produto'))
    cy.get('#id_codBeneficio').type(Cypress.env('codigo_beneficio'))
    cy.get('#id_dsBeneficio').type(Cypress.env('descricao_beneficio'))
    cy.get('.default').click()
})

Cypress.Commands.add('inserirFeriadoNacional', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
    cy.get('.model-feriadonacional > :nth-child(2) > .addlink').click()
    cy.get('.datetimeshortcuts > :nth-child(1)').click()
    cy.get('.default').click()
})

Cypress.Commands.add('inserirRestricaoContrato', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
    cy.get('.model-contratorestricao > :nth-child(2) > .addlink').click()
    cy.get('#id_cliente').select(Cypress.env('cliente'))
    cy.get('#id_tpContrato').select(Cypress.env('tp_contrato'))
    cy.get('#id_tipo_produto').select(Cypress.env('tipo_produto'))
    cy.get('#id_nuContrato').type(Cypress.env('numero_contrato'))
    cy.get('.default').click()
})

Cypress.Commands.add('inserirContratoAceito', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
    cy.get('.model-contratobeneficio > :nth-child(2) > .addlink').click()
    cy.get('#id_cliente').select(Cypress.env('cliente'))
    cy.get('#id_tpContrato').select(Cypress.env('tp_contrato'))
    cy.get('#id_tipo_produto').select(Cypress.env('tipo_produto'))
    cy.get('#id_nuContrato').type(Cypress.env('numero_contrato'))
    cy.get('.default').click()
})

Cypress.Commands.add('inserirCorrespondente', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
    cy.get('.model-correspondente > :nth-child(2) > .addlink').click()
    cy.get('#id_nmCorrespondente').type(Cypress.env('razao_social'))
    cy.get('#id_cliente').select(Cypress.env('cliente'))
    cy.get('#id_nuCnpj').type(Cypress.env('cnpj_correspondente'))
    cy.get('#id_nuEnderecoResidencialCep').type(Cypress.env('cep'))
    cy.get('#id_nmEnderecoResidencialLogradouro').type(Cypress.env('logradouro_correspondente'))
    cy.get('#id_nmEnderecoResidencialNumero').type(Cypress.env('codigo_beneficio'))
    cy.get('#id_nmEnderecoResidencialBairro').type(Cypress.env('bairro_correspondente'))
    cy.get('#id_nmEnderecoResidencialCidade').type(Cypress.env('nome_cidade'))
    cy.get('#id_nmEnderecoResidencialUf').type(Cypress.env('nome_estado'))
    cy.get('.default').click()
})

Cypress.Commands.add('inserirPatenteAceita', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
    cy.get('.model-patentes > :nth-child(2) > .addlink').click()
    cy.get('#id_cliente').select(Cypress.env('cliente'))
    cy.get('#id_tipo_produto').select(Cypress.env('tipo_produto'))
    cy.get('#id_patente').type(Cypress.env('nome_patente'))
    cy.get('.default').click()
})