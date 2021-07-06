package utils;

import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.Scenario;

public class Utils {
	public static FirefoxDriver driver;

	public static void acessarSistema() {
		System.setProperty("webdriver.gecko.driver", "src/test/resources/driver/geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.get("http://the-internet.herokuapp.com/login");
	}

	public static <T> T Na(Class<T> classe) {
		return PageFactory.initElements(driver, classe);
	}

	public static File printFinal(Scenario scenario) {
		final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "image/png");
		File imagem = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(imagem, (new File("./allure-reports",
					scenario.getName() + " - " + scenario.getStatus().toUpperCase() + ".png")));
		} catch (IOException e) {
			e.printStackTrace();
		}
		return imagem;
	}

	public static void limparCache() {
		try {
			Robot r = new Robot();
			r.keyPress(KeyEvent.VK_CONTROL);
			r.keyPress(KeyEvent.VK_SHIFT);
			r.keyPress(KeyEvent.VK_DELETE);
			r.keyRelease(KeyEvent.VK_CONTROL);
			r.keyRelease(KeyEvent.VK_SHIFT);
			r.keyRelease(KeyEvent.VK_DELETE);
			Thread.sleep(1000);
			r.keyPress(KeyEvent.VK_ENTER);
			r.keyRelease(KeyEvent.VK_ENTER);
		} catch (Exception e) {
		}
	}

	public static void fecharPagina() {
		try {
			Robot r = new Robot();
			r.keyPress(KeyEvent.VK_ALT);
			r.keyPress(KeyEvent.VK_F4);
			Thread.sleep(2000);
			r.keyRelease(KeyEvent.VK_F4);
			r.keyRelease(KeyEvent.VK_ALT);
		} catch (Exception e) {

		}
	}

	public static void addEnvironmentAllure() {
		try {
			File env = new File("./allure-reports/environment.properties");
			BufferedWriter as = new BufferedWriter(new FileWriter(env));
			as.write("S.O = " + System.getProperty("os.name").toUpperCase());
			as.newLine();
			as.write("APLICACAO = THE INTERNET");
			as.newLine();
			as.write("NAVEGADOR = FIREFOX");
			as.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static String gerarNomeAleatorio(String nome) {
		String[] a = { "Siqueira", "Silva", "Soares", "Dantas", "Martinez", "Barbosa", "Moura" };
		List<String> listaNomes = new ArrayList<String>();
		Random r = new Random();
		int i = r.nextInt(a.length);
		for (int j = 0; j < 50; j++) {
			listaNomes.add(Integer.toString(i));
		}

		int j = r.nextInt(listaNomes.size());
		return nome + j + "." + a[i];
	}
}