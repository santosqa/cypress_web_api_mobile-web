
class HomePage {
  visit() {
    cy.visit('/')
  }
  botaoComecar() {
    cy.get('header nav a[href="pre-cadastro"]')
    .click()  
  }
}

export const homePage = new HomePage();