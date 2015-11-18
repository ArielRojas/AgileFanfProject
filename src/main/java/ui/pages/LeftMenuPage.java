package ui.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 16/11/2015.
 */
public class LeftMenuPage extends BasePageObject {

    @FindBy(id = "createNewMenuLink")
    @CacheLookup
    WebElement createNewBtn;

    @FindBy(id = "createNewProduct")
    @CacheLookup
    WebElement createNewProduct;

    @FindBy(id = "createNewProject")
    @CacheLookup
    WebElement createNewProject;

    @FindBy(id = "createNewIteration")
    @CacheLookup
    WebElement createNewIteration;

    @FindBy(id = "createNewStory")
    @CacheLookup
    WebElement createNewStory;

    @FindBy(xpath = "//a[contains(@class, 'node-type-project')]")
    WebElement projectItemName;

    @FindBy(xpath = "//a[contains(@class, 'node-type-iteration')]")
    WebElement iterationItemName;

    By displayProject = By.xpath("//a[contains(@class, 'node-type-project')]");

    By displayIteration = By.xpath("//a[contains(@class, 'node-type-iteration')]");

    public LeftMenuPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(createNewBtn));
    }

    public LeftMenuPage clickCreateNew() {
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

    public StoryPage clickCreateNewStory(){
        createNewStory.click();
        return new StoryPage();
    }

    /*public void clickLinkIteration(){
        linkIteration.click();
        wait.until(ExpectedConditions.visibilityOf(titleIteration));
    }*/

}
