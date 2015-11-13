package ui.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import framework.DriverManager;

/**
 * Created by ArielWagner on 11/11/2015.
 */
public class LoginPage1 {

    WebDriver driver;
    WebDriverWait wait;

    By usernameFieldLocator = By.xpath("//input[@id='username']");
    By passwordFieldLocator = By.xpath("//input[@id='password']");
    By loginButtonLocator = By.xpath("//button[@id='submitbutton']");

    public LoginPage1(){
        driver = DriverManager.getManager().getDriver();
        wait = DriverManager.getManager().getWait();
        driver.get("https://cloud.agilefant.com/global/static/login/index.html");
    }

    public MainPage login(String username,String password){
        setUsername(username);
        setPassword(password);
        return clickSignInButton();
    }
    public void setUsername(String username){
        wait.until(ExpectedConditions.visibilityOfElementLocated(usernameFieldLocator));
        driver.findElement(usernameFieldLocator).clear();
        driver.findElement(usernameFieldLocator).sendKeys(username);
    }
    public void setPassword(String password){
        wait.until(ExpectedConditions.visibilityOfElementLocated(usernameFieldLocator));
        driver.findElement(passwordFieldLocator).clear();
        driver.findElement(passwordFieldLocator).sendKeys(password);
    }
    public MainPage clickSignInButton(){
        driver.findElement(loginButtonLocator).click();
        return new MainPage();
    }
}
