package ui.pages;

import framework.UIMethods;
import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import ui.BasePageObject;

/**
 * Created by silvia valencia on 3/24/2015.
 */
public class LoginPage extends BasePageObject {

    @FindBy(id = "username")
    @CacheLookup
    WebElement userNameInput;

    @FindBy(id = "password")
    @CacheLookup
    WebElement passwordInput;

    @FindBy(id = "submitbutton")
    WebElement loginBtn;

    @FindBy(xpath = "//a[contains(text(),'Logout')]")
    WebElement logoutBtn;

    By error = By.xpath("//p[contains(text(), 'Invalid username or password,')]");

    public LoginPage() {
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(loginBtn));
    }

    private LoginPage setUserNameInput(String userName) {
        userNameInput.clear();
        userNameInput.sendKeys(userName);
        return this;
    }

    private LoginPage setPasswordInput(String password) {
        passwordInput.clear();
        passwordInput.sendKeys(password);
        return this;
    }

    private MainPage clickLoginBtnSuccessful() {
        loginBtn.click();
        return new MainPage();
    }

    public LoginPage clickLoginBtnFailed() {
        loginBtn.click();
        return this;
    }

    private void login(String userName, String password) {
        setUserNameInput(userName);
        setPasswordInput(password);
    }

    public MainPage loginSuccessful(String userName, String password) {
        login(userName, password);
        return clickLoginBtnSuccessful();
    }

    public LoginPage loginFailed(String userName, String password) {
        login(userName, password);
        return clickLoginBtnFailed();
    }

    public LoginPage logout(){
        logoutBtn.click();
        return this;
    }

    public void CloseWindow() {
        driver.quit();
    }

    public Boolean getErrorIsDisplayed(){
        return UIMethods.isElementDisplayed(error);
    }

    //public String getErrorMessage() {
       //return loginErrorMessage.getText();
    //}
}
