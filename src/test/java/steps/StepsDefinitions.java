package steps;

import static org.junit.Assert.assertTrue;
import static utils.Utils.driver;
import static utils.Utils.esperar;
import static utils.Utils.validarMensagem;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pages.PageObjects;

public class StepsDefinitions {

	PageObjects pg = new PageObjects();

	@Dado("^que o usuario acessa a area de login do sistema$")
	public void queOUsuarioAcessaAAreaDeLoginDoSistema() throws Exception {
		esperar(3);
		System.out.println("Entrou na área de login");
		esperar(3);
		assertTrue(driver.getPageSource().contains("Login Page"));
	}

	@Quando("^preencher login \"([^\"]*)\" e senha \"([^\"]*)\"$")
	public void preencherLoginESenha(String login, String senha) throws Exception {
		pg.login(login, senha);
	}

	@Quando("^deslogar do sistema$")
	public void deslogarDoSistema() throws Throwable {
		pg.logout();
	}

	@Quando("^logar e deslogar do sistema (\\d+) vezes$")
	public void logarEDeslogarDoSistemaVezes(int arg1) throws Exception {
		for (int i = 1; i <= arg1; i++) {
			pg.loginLogout();
			System.out.println("LOGIN E LOGOUT " + Integer.toString(i));
		}
	}

	@Entao("^o sistema exibe na tela a mensagem \"([^\"]*)\"$")
	public void oSistemaExibeNaTelaAMensagem(String mensagem) throws Exception {
		validarMensagem(mensagem);
	}
}
