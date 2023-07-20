Cypress.Commands.add('login', (
      user = Cypress.env('user_name'),
      password = Cypress.env('user_password'),
  ) => {
      cy.visit('/admin/login/')
  
      cy.get("#id_username").type(user)
      cy.get("#id_password").type(password, { log: false })
      cy.get('.submit-row > input').click()
  })

Cypress.Commands.add('logout', () => {
    cy.get('button').click()
})

Cypress.Commands.add('inserirRegra', (
    
  ) => {
    cy.get('.model-regra > :nth-child(2) > .addlink').click()
    cy.get('#id_nome_regra')
    cy.get('#id_cliente')
    cy.get('#id_tipo_produto')
    cy.get('#id_cd_contrato_tipo')
    cy.get('#id_condicional')
    cy.get('#id_campo_comparativo')
    cy.get('.default').click()

  })