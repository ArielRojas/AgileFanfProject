package ui.pages;

import framework.UIMethods;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 16/11/2015.
 */
public class LeftMenuPage extends BasePageObject {

    @FindBy(xpath = "//a[@id='createNewMenuLink']")
    WebElement createNewBtn;

    @FindBy(xpath = "//li[@id='createNewProduct']")
    WebElement createNewProductBtn;

    @FindBy(xpath = "//li[contains(@id, 'createNewProject')]")
    WebElement createNewProjectBtn;

    @FindBy(xpath = "//li[contains(@id, 'createNewIteration')]")
    WebElement createNewIterationBtn;

    @FindBy(xpath = "//a[contains(@class, 'node-type-product')]")
    WebElement productItemLnk;

    @FindBy(xpath = "//a[contains(@class, 'node-type-project')]")
    WebElement projectItemLnk;

    @FindBy(xpath = "//a[contains(@class, 'node-type-iteration')]")
    WebElement iterationItemLnk;

    @FindBy(xpath = "//span[contains(@title, 'iteration name')]")
    WebElement iterationNameLbl;

    @FindBy(xpath = "//li[@id='createNewUser']")
    WebElement userBtn;

    By displayProject = By.xpath("//a[contains(@class, 'node-type-project')]");

    By displayIteration = By.xpath("//a[contains(@class, 'node-type-iteration')]");

    By displayCreateProductBtn = By.xpath("//li[@id='createNewProduct']");

    public LeftMenuPage(){
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
        wait.until(ExpectedConditions.presenceOfElementLocated(displayCreateProductBtn));
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
