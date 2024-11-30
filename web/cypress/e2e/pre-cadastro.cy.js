import { homePage } from "../support/pages/home.page";
import { preCadastroPage } from "../support/pages/pre-cadastro.page";
import { agendamento } from "../support/pages/agendamento.page";

describe("Pré-Cadastro", () => {
  beforeEach(() => {
    homePage.visit();
    homePage.botaoComecar();
    preCadastroPage.tituloSeusDados();
  });

  const fullName = "Santos QA";
  const emailUser = "ricardo@santosqa.com";

  it("Deve realizar o pre-cadastro do cliente", () => {
    preCadastroPage.inputForm(fullName, emailUser);
    preCadastroPage.botaoContinuar();
    //Split Extraindo o primeiro nome da variável "fullName" que contém nome e sobrenome
    const primeiroNome = fullName.split(" ")[0];
    agendamento.usuarioLogado(primeiroNome, emailUser);
  });

  it("Deve criticar os campos obrigatórios", () => {
    preCadastroPage.botaoContinuar();
    preCadastroPage.mensagemDoElemento("Nome Completo", "O campo nome é obrigatório.");
    preCadastroPage.mensagemDoElemento("E-mail", "O campo e-mail é obrigatório.");
  });

  it('Deve criticar ausencia do sobrenome não informado', () => {
    const primeiroNome = fullName.split(" ")[0];
    preCadastroPage.inputForm(primeiroNome, emailUser);
    preCadastroPage.botaoContinuar();
    preCadastroPage.mensagemDoElemento("Nome Completo", "Informe seu nome completo.");

  })

  it('Deve criticar E-mail informado incorreto', () => {
    const emailErrado = emailUser.split("@")[1];
    preCadastroPage.inputForm(fullName, emailErrado);
    preCadastroPage.botaoContinuar();
    preCadastroPage.mensagemDoElemento("E-mail", "O e-mail inserido é inválido.");
  })
});
