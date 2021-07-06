package pages;

import static org.junit.Assert.assertTrue;
import static utils.Utils.driver;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import io.qameta.allure.Allure;

public class PageObjects {

	public PageObjects() {
		PageFactory.initElements(driver, this);
	}

	// ELEMENTOS

	@FindBy(id = "username")
	public WebElement username;

	@FindBy(id = "password")
	public WebElement password;

	@FindBy(xpath = "/html/body/div[2]/div/div/form/button/i")
	public WebElement login;

	@FindBy(xpath = "/html/body/div[2]/div/div/a")
	public WebElement logout;

	@FindBy(xpath = "//*/text()[normalize-space(.)='__param__']/parent::*")
	public WebElement parametro;

	// MÉTODOS

	public void print(String evidencia) throws Exception {
		File imagem = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			Allure.addAttachment(evidencia, Files.newInputStream(Paths.get(imagem.getPath())));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void wait(int tempo) throws Exception {
		for (int i = 0; i < tempo; i++) {
			Thread.sleep(1000);
		}
	}

	public void validarLogin() throws Exception {
		wait(5);
		System.out.println(driver.getPageSource().contains("Login Page"));
		wait(3);
		assertTrue(driver.getPageSource().contains("Login Page"));
	}

	public void login(String nome, String senha) throws Exception {
		username.sendKeys(nome);
		wait(2);
		password.sendKeys(senha);
		wait(2);
		login.click();
	}

	public void logout() throws Exception {
		wait(3);
		logout.click();
	}

	public void loginLogout() throws Exception {
		login("tomsmith", "SuperSecretPassword!");
		wait(2);
		logout.click();
	}

	public void validarMensagem(String mensagem) throws Exception {
		System.out.println(driver.getPageSource().contains(mensagem));
		wait(1);
		assertTrue(driver.getPageSource().contains(mensagem));
	}
}
