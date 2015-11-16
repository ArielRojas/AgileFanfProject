package ui.pages;

import framework.UIMethods;
import org.apache.log4j.chainsaw.Main;
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

    @FindBy(id = "createNewIteration")
    @CacheLookup
    WebElement createNewIteration;

    @FindBy(id = "createNewStory")
    @CacheLookup
    WebElement createNewStory;

    @FindBy(xpath = "//span[contains(text(), 'product1')]")
    WebElement productTitle;

    @FindBy(xpath = "//a[contains(text(), 'projectA')]")
    WebElement linkProject;

    @FindBy(xpath = "//a[contains(text(), 'iteration1')]")
    WebElement linkIteration;

    @FindBy(xpath = "//span[@title='Click to edit value']")
    WebElement editValue;

    @FindBy(xpath = "//a[@data-tab='board']")
    WebElement linkBoard;

    @FindBy(xpath = "//span[@title='Click to edit iteration name']")
    WebElement titleIteration;

    By displayAdmin = By.xpath("//span[contains(text(), '(Admin)')]");

    By displayProduct = By.xpath("//span[contains(text(), 'product1')]");

    By displayProject = By.xpath("//a[contains(text(), 'projectA')]");

    By displayIteration = By.xpath("//a[contains(text(), 'iteration1')]");

    By displayStory = By.xpath("//span[@title='Name']");


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

    public StoryPage clickCreateNewStory(){
        createNewStory.click();
        return new StoryPage();
    }

    public void clickLinkIteration(){
        linkIteration.click();
        wait.until(ExpectedConditions.visibilityOf(titleIteration));
    }

    public void clickLinkBoard(){
        linkBoard.click();
    }

    public void setEditValue(){
        editValue.click();
        editValue.sendKeys("3");
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

    public Boolean getIterationName(){
        return UIMethods.isElementDisplayed(displayIteration);
    }

    public Boolean getStoryName(){
        return UIMethods.isElementDisplayed(displayStory);
    }
}
