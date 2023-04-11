
Cypress.Commands.add('login', (username, password) => {
    cy.get('#email').type(username)
    cy.get('#password').type(password)
    cy.contains('Sign in').click()
})