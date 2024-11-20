
describe('Login', () => {

  const nomeUser = 'Santos QA'
  const emailUser = 'falaae@santosqa.com'

  it('Deve logar com sucesso', () => {
    cy.visit('/')
    
    cy.get('header nav a[href="entrar"]')
      .click()

    cy.get('form h2')
      .should('be.visible')
      .and('have.text', 'Seus dados')

    cy.get('input[placeholder="Nome"]')
      .type(nomeUser)

    cy.get('input[placeholder="E-mail"]')
      .type(emailUser)

    cy.get('[placeholder="Whatsapp"]')
      .type('11999999999')

    cy.contains('button[type="submit"]', 'Continuar') 
      .click()

    cy.get('.user-name')
      .should('be.visible')
      .and('have.text', nomeUser)

    cy.get('.user-email')
      .should('be.visible')
      .and('have.text', emailUser)

  })
})