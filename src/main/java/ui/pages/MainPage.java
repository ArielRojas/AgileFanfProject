package ui.pages;

import framework.UIMethods;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import ui.BasePageObject;
import org.openqa.selenium.By;

/**
 * Created by ArielWagner on 11/11/2015.
 */
public class MainPage extends BasePageObject{

    @FindBy(id = "createNewMenuLink")
    @CacheLookup
    WebElement createNewBtn;

    @FindBy(id = "createNewProduct")
    @CacheLookup
    WebElement createNewProduct;

    @FindBy(id = "createNewProject")
    @CacheLookup
    WebElement createNewProject;

    @FindBy(id = "'createNewIteration")
    @CacheLookup
    WebElement createNewIteration;

    @FindBy(xpath = "//span[contains(text(), 'product1')]")
    WebElement productTitle;

    @FindBy(xpath = "//a[contains(text(), 'projectA')]")
    WebElement linkProject;

    By displayAdmin = By.xpath("//span[contains(text(), '(Admin)')]");

    By displayProduct = By.xpath("//span[contains(text(), 'product1')]");

    By displayProject = By.xpath("//a[contains(text(), 'projectA')]");

    public MainPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(createNewBtn));
    }

    public MainPage clickCreateNew() {
        createNewBtn.click();
        return this;
    }

    public ProductPage clickCreateNewProduct(){
        createNewProduct.click();
        return new ProductPage();
    }

    public ProjectPage clickCreateNewProject(){
        createNewProject.click();
        return new ProjectPage();
    }

    public IterationPage clickCreateNewIteration(){
        createNewIteration.click();
        return new IterationPage();
    }

    public Boolean getNameIsDisplayed(){
        return UIMethods.isElementDisplayed(displayAdmin);
    }

    public Boolean getProductName(){
        return UIMethods.isElementDisplayed(displayProduct);
    }

    public Boolean getProjectName(){
        return UIMethods.isElementDisplayed(displayProject);
    }
}
