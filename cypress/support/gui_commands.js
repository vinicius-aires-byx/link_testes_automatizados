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

Cypress.Commands.add('gui_createProject', project => {
    cy.visit('/projects/new')
  
    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()
  })