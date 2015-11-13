package ui.pages;

import framework.UIMethods;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import ui.BasePageObject;
import org.openqa.selenium.By;

import java.util.concurrent.TimeUnit;


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

    @FindBy(xpath = "//span[contains(text(), 'product1')]")
    WebElement productTitle;

    By displayAdmin = By.xpath("//span[contains(text(), '(Admin)')]");

    By displayProduct = By.xpath("//span[contains(text(), 'product1')]");

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

    public Boolean getNameIsDisplayed(){
        return UIMethods.isElementDisplayed(displayAdmin);
    }

    public Boolean getProductName(){
        waitUntilPageObjectIsLoaded();
        return UIMethods.isElementDisplayed(displayProduct);
    }

    public void loadDisplayProduct(){
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(displayProduct)));
    }
}
