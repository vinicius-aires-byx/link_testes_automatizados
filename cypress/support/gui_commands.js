Cypress.Commands.add('login', () => {
      cy.visit('/admin/login/')
  
      cy.get("#id_username").type(Cypress.env('user_name'))
      cy.get("#id_password").type(Cypress.env('user_password'), { log: false })
      cy.get('.submit-row > input').click()
  })

Cypress.Commands.add('logout', () => {
    cy.get('button').click()
})

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