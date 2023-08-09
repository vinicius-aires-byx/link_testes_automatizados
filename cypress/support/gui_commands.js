
Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {
      cy.visit('')
  
      cy.get('#id_username').type(user)
      cy.get('#id_password').type(password, { log: false })
      cy.get('.submit-row > input').click()
    }

    login()
  })

Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()
})

Cypress.Commands.add('gui_insertRule', project => {
    cy.get('.model-regra > :nth-child(2) > .addlink').click()
    cy.get('#id_nome_regra').type(project.name)
    cy.get('#id_cliente').select(project.client)
    cy.get('#id_tipo_produto').select(project.product)
    cy.get('#id_condicional').select(project.rule)
    cy.get('#id_campo_comparativo').type(project.value)
    cy.get('.default').click()
  })