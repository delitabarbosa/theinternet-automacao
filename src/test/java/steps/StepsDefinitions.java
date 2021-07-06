package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pages.PageObjects;

public class StepsDefinitions {

	PageObjects pg = new PageObjects();

	@Dado("^que o usuario acessa a area de login do sistema$")
	public void queOUsuarioAcessaAAreaDeLoginDoSistema() throws Exception {
		pg.validarLogin();
		pg.print("VALIDAR ÁREA DE LOGIN");
	}

	@Quando("^preencher login \"([^\"]*)\" e senha \"([^\"]*)\"$")
	public void preencherLoginESenha(String login, String senha) throws Exception {
		pg.login(login, senha);
		pg.print("PREENCHER LOGIN " + login.toUpperCase() + " E SENHA " + senha.toUpperCase());
	}

	@Quando("^deslogar do sistema$")
	public void deslogarDoSistema() throws Throwable {
		pg.logout();
		pg.print("DESLOGAR DO SISTEMA");
	}

	@Quando("^logar e deslogar do sistema (\\d+) vezes$")
	public void logarEDeslogarDoSistemaVezes(int arg1) throws Exception {
		for (int i = 1; i <= arg1; i++) {
			pg.loginLogout();
			pg.print("LOGIN E LOGOUT " + Integer.toString(i));
		}
	}

	@Entao("^o sistema exibe na tela a mensagem \"([^\"]*)\"$")
	public void oSistemaExibeNaTelaAMensagem(String mensagem) throws Exception {
		pg.validarMensagem(mensagem);
		pg.print("VALIDAR MENSAGEM " + mensagem.toUpperCase());
	}

}
