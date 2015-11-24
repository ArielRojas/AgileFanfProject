package ui.pages;

import framework.UIMethods;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import ui.BasePageObject;
import org.openqa.selenium.By;

/**
 * Created by ArielWagner on 11/11/2015.
 */
public class MainPage extends BasePageObject{

    @FindBy(xpath = "//a[@id='createNewMenuLink']")
    WebElement createNewBtn;

    @FindBy(xpath = "//li[@id='createNewProduct']")
    WebElement createNewProductBtn;

    @FindBy(xpath = "//li[contains(@id, 'createNewProject')]")
    WebElement createNewProjectBtn;

    @FindBy(xpath = "//li[contains(@id, 'createNewIteration')]")
    WebElement createNewIterationBtn;

    @FindBy(xpath = "//option[@value='0']")
    WebElement usernameDisplay;

    @FindBy(xpath = "//a[contains(@class, 'node-type-product')]")
    WebElement productItemLnk;

    @FindBy(xpath = "//a[contains(@class, 'node-type-project')]")
    WebElement projectItemLnk;

    @FindBy(xpath = "//a[contains(@class, 'node-type-iteration')]")
    WebElement iterationItemLnk;

    @FindBy(xpath = "//span[contains(@title, 'iteration name')]")
    WebElement iterationNameLbl;

    @FindBy(xpath = "//i[@class='dropdown icon']")
    WebElement logOutdropDown;

    @FindBy(xpath = "//div[contains(@class, 'menu transition')]//a[contains(@href, 'Logout')]")
    WebElement logOutBtn;

    @FindBy(xpath = "//li[@id='createNewUser']")
    WebElement userBtn;

    @FindBy(id = "submitbutton")
    WebElement loginBtn;

    By displayProject = By.xpath("//a[contains(@class, 'node-type-project')]");

    By displayIteration = By.xpath("//a[contains(@class, 'node-type-iteration')]");

    public MainPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(createNewBtn));
    }

    public void clickCreateNew() {
        createNewBtn.click();
        wait.until(ExpectedConditions.visibilityOf(userBtn));
    }

    public CreateProductPage clickCreateNewProduct(){
        createNewProductBtn.click();
        return new CreateProductPage();
    }

    public CreateProjectPage clickCreateNewProject(){
        createNewProjectBtn.click();
        return new CreateProjectPage();
    }

    public CreateIterationPage clickCreateNewIteration(){
        createNewIterationBtn.click();
        return new CreateIterationPage();
    }

    public ProductPage clickLinkProduct(){
        productItemLnk.click();
        return new ProductPage();
    }

    public IterationPage clickLinkIteration(){
        iterationItemLnk.click();
        wait.until(ExpectedConditions.visibilityOf(iterationNameLbl));
        return new IterationPage();
    }

    public void logOut(){
        logOutdropDown.click();
        wait.until(ExpectedConditions.visibilityOf(logOutBtn));
        logOutBtn.click();
        wait.until(ExpectedConditions.visibilityOf(loginBtn));
    }

    public String getUsername(){
        return usernameDisplay.getText();
    }

    public String getProjectItemName(){
        return projectItemLnk.getText();
    }

    public String getIterationItemName(){
        return iterationItemLnk.getText();
    }

    public Boolean isProjectNameDisplayed(){
        return UIMethods.isElementDisplayed(displayProject);
    }

    public Boolean isIterationNameDisplayed(){
        return UIMethods.isElementDisplayed(displayIteration);
    }
}
