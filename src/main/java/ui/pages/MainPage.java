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

    @FindBy(xpath = "//span[contains(@title, 'edit product')]")
    WebElement productNameLabel;

    @FindBy(xpath = "//a[contains(text(), 'projectA')]")
    WebElement linkProject;

    @FindBy(xpath = "//a[contains(text(), 'iteration1')]")
    WebElement linkIteration;

    @FindBy(xpath = "//span[@title=''Click to edit value'']")
    WebElement editValue;

    @FindBy(xpath = "//a[@data-tab='board']")
    WebElement linkBoard;

    @FindBy(xpath = "//a[@data-tab='list']")
    WebElement linkList;

    @FindBy(xpath = "//option[@value='0']")
    WebElement usernameDisplay;

    @FindBy(xpath = "//a[contains(@class, 'node-type-project')]")
    WebElement projectItemName;

    @FindBy(xpath = "//a[contains(@class, 'node-type-iteration')]")
    WebElement iterationItemName;

    @FindBy(xpath = "//span[@title='Name']")
    WebElement storyName;

    By displayProduct = By.xpath("//span[contains(@title, 'edit product')]");

    By displayProject = By.xpath("//a[contains(@class, 'node-type-project')]");

    By displayIteration = By.xpath("//a[contains(@class, 'node-type-iteration')]");

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
        linkList.click();
    }

    public void clickLinkBoard(){
        linkBoard.click();
    }

    public void setEditValue(){
        editValue.click();
        editValue.sendKeys("3");
    }

    public String getUsername(){
        return usernameDisplay.getText();
    }

    public String getProductName(){
        return productNameLabel.getText();
    }

    public String getProjectItemName(){
        return projectItemName.getText();
    }

    public String getIterationItemName(){
        return iterationItemName.getText();
    }

    public String getStoryName(){
        return storyName.getText();
    }

    public Boolean isProductNameDisplayed(){
        return UIMethods.isElementDisplayed(displayProduct);
    }

    public Boolean isProjectNameDisplayed(){
        return UIMethods.isElementDisplayed(displayProject);
    }

    public Boolean isIterationNameDisplayed(){
        return UIMethods.isElementDisplayed(displayIteration);
    }

    public Boolean isStoryNameDisplayed(){
        return UIMethods.isElementDisplayed(displayStory);
    }
}
