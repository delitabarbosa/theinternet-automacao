package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
	@CucumberOptions(plugin = {"pretty", "html:cucumber-report",
			   "json:cucumber-report/cucumber.json", 
			   "io.qameta.allure.cucumberjvm.AllureCucumberJvm"},
					features = "classpath:features/",				
	                glue = {"steps"},                
					snippets = SnippetType.CAMELCASE, 
					monochrome = false, 
					tags = {"@TesteAuto"}, 
	                dryRun = false)
	public class RunnerTests {
}

