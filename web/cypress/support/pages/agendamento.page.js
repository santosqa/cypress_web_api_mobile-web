class Agendamento {

  // Labels / textos -------------------------------------------------------------
  usuarioLogado(primeiroNome, emailUser) {
    cy.get(".user-name")
      .should("be.visible")
      .and("have.text", "Olá, " + primeiroNome);

    cy.get(".user-email")
      .should("be.visible")
      .and("have.text", emailUser);
    
  }


}

export const agendamento = new Agendamento();
