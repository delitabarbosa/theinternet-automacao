package steps;

import static utils.Utils.acessarSistema;
import static utils.Utils.addEnvironmentAllure;
import static utils.Utils.driver;
import static utils.Utils.limparCache;
import static utils.Utils.printFinal;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before
	public void setup() throws Exception {
		acessarSistema();
	}

	@After
	public void fecharNavegador(Scenario scenario) throws Exception {
		printFinal(scenario);
		addEnvironmentAllure();
		limparCache();
		driver.quit();
	}
}
