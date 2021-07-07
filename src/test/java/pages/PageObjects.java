package pages;

import static utils.Utils.driver;
import static utils.Utils.esperar;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

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

	// M�TODOS

	public void login(String nome, String senha) throws Exception {
		username.sendKeys(nome);
		esperar(2);
		password.sendKeys(senha);
		esperar(2);
		login.click();
	}

	public void logout() throws Exception {
		esperar(3);
		logout.click();
	}

	public void loginLogout() throws Exception {
		login("tomsmith", "SuperSecretPassword!");
		esperar(2);
		logout.click();
	}
}
