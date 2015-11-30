package ui.pages;

import Common.UIMethods;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by Ariel Rojas on 11/11/2015.
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

    /**
     * This method is the constructor
     */
    public LoginPage() {
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
    }

    /**
     * This method sets the username
     * @param userName
     * @return the Login page
     */
    private LoginPage setUserNameInput(String userName) {
        userNameInput.clear();
        userNameInput.sendKeys(userName);
        return this;
    }

    /**
     * This method sets the password
     * @param password
     * @return the Login page
     */
    private LoginPage setPasswordInput(String password) {
        passwordInput.clear();
        passwordInput.sendKeys(password);
        return this;
    }

    /**
     * This method allows press the logIn button having a valid account
     * @return the Main page
     */
    private MainPage clickLoginBtnSuccessful() {
        loginBtn.click();
        wait.until(ExpectedConditions.visibilityOf(usernameOption));
        return new MainPage();
    }

    /**
     * This method allows press the LogIn button, having a invalid account
     * @return
     */
    public LoginPage clickLoginBtnFailed() {
        loginBtn.click();
        return this;
    }

    /**
     * This method allows set the username and password
     * @param userName
     * @param password
     */
    private void login(String userName, String password) {
        setUserNameInput(userName);
        setPasswordInput(password);
    }

    /**
     * This method allows submit the username and password to login method, having a valid account
     * @param userName
     * @param password
     * @return
     */
    public MainPage loginSuccessful(String userName, String password) {
        login(userName, password);
        return clickLoginBtnSuccessful();
    }

    /**
     * This method allows submit the username and password to login method, having a invalid account
     * @param userName
     * @param password
     * @return
     */
    public LoginPage loginFailed(String userName, String password) {
        login(userName, password);
        return clickLoginBtnFailed();
    }

    /**
     * This method allows get the error message
     * @return the error message
     */
    public String getError(){
        return errorLbl.getText();
    }

    /**
     * This method allows verify if the error message is displayed
     * @return false or true
     */
    public Boolean isErrorDisplayed(){
        return UIMethods.isElementDisplayed(error);
    }
}
