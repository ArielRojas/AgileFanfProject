package ui.pages;

import framework.UIMethods;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
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

    @FindBy(xpath = "//option[@value='0']")
    WebElement usernameOption;

    @FindBy(xpath = "//p[@class='login-form--error-title']")
    WebElement errorLbl;

    By error = By.xpath("//p[@class='login-form--error-title']");

    public LoginPage() {
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(loginBtn));
    }

    /**
     *
     * @param userName
     * @return
     */
    private LoginPage setUserNameInput(String userName) {
        userNameInput.clear();
        userNameInput.sendKeys(userName);
        return this;
    }

    /**
     *
     * @param password
     * @return
     */
    private LoginPage setPasswordInput(String password) {
        passwordInput.clear();
        passwordInput.sendKeys(password);
        return this;
    }

    /**
     *
     * @return
     */
    private MainPage clickLoginBtnSuccessful() {
        loginBtn.click();
        wait.until(ExpectedConditions.visibilityOf(usernameOption));
        return new MainPage();
    }

    /**
     *
     * @return
     */
    public LoginPage clickLoginBtnFailed() {
        loginBtn.click();
        return this;
    }

    /**
     *
     * @param userName
     * @param password
     */
    private void login(String userName, String password) {
        setUserNameInput(userName);
        setPasswordInput(password);
    }

    /**
     *
     * @param userName
     * @param password
     * @return
     */
    public MainPage loginSuccessful(String userName, String password) {
        login(userName, password);
        return clickLoginBtnSuccessful();
    }

    /**
     *
     * @param userName
     * @param password
     * @return
     */
    public LoginPage loginFailed(String userName, String password) {
        login(userName, password);
        return clickLoginBtnFailed();
    }

    /**
     *
     * @return
     */
    public String getError(){
        return errorLbl.getText();
    }

    /**
     *
     * @return
     */
    public Boolean isErrorDisplayed(){
        return UIMethods.isElementDisplayed(error);
    }
}
