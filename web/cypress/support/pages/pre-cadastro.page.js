class PreCadastroPage {
  
  // Labels / textos -------------------------------------------------------------
  tituloSeusDados() {
    cy.get("form h2")
      .should("be.visible")
      .and("have.text", "Seus dados");
  }


  mensagemDoElemento(nomeElemento, msgElemto) {
    /**
     * Embora o Cypress não tenha suporte nativo para uso de XPath, é possível alcançar o mesmo objetivo de maneira
     * organizada e nativa sem precisar importar plugins como "cypress-xpath".
     *
     * Este exemplo demonstra como validar a mensagem de alerta para o campo obrigatório "Nome Completo".
     *
     * XPath equivalente:
     * "//label[text()='Nome Completo']/.//div[contains(@class, 'alert-msg')]"
     *
     * Implementação nativa com Cypress:
     */
    cy.contains("label", nomeElemento) // Localiza o rótulo com o texto "Nome Completo"
      .parent() // Navega para o elemento pai do rótulo
      .find(".alert-msg") // Busca o elemento com a classe 'alert-msg'
      .should("be.visible") // Garante que o alerta está visível
      .and("have.text", msgElemto); // Valida o texto do alerta. Use .have.text quando o objetivo é verificar o texto exato e completo de um elemento. Use .include.text quando o objetivo é verificar se uma parte do texto está presente no elemento.

  }


  // Botões -------------------------------------------------------------
  botaoContinuar() {
    cy.get('button[type="submit"]')
    .contains('Continuar')
    .should('be.visible') // Verifica se o botão está visível
    .click();
  }

  // Inputs -------------------------------------------------------------
  inputForm(fullName, emailUser) {
    cy.get('input[name="fullname"]').type(fullName);
    cy.get('input[name="email"]').type(emailUser);
  }


}

export const preCadastroPage = new PreCadastroPage();
