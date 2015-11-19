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
    WebElement createNewBtn;

    @FindBy(id = "createNewProduct")
    WebElement createNewProduct;

    @FindBy(id = "createNewProject")
    WebElement createNewProject;

    @FindBy(id = "createNewIteration")
    WebElement createNewIteration;

    @FindBy(id = "createNewStory")
    WebElement createNewStory;

    @FindBy(xpath = "//span[contains(@title, 'edit product')]")
    WebElement productNameLabel;

    @FindBy(xpath = "//span[@title=''Click to edit value'']")
    WebElement editValue;

    @FindBy(xpath = "//option[@value='0']")
    WebElement usernameDisplay;

    @FindBy(xpath = "//a[contains(@class, 'node-type-product')]")
    WebElement productItem;

    @FindBy(xpath = "//a[contains(@class, 'node-type-project')]")
    WebElement projectItemName;

    @FindBy(xpath = "//a[contains(@class, 'node-type-iteration')]")
    WebElement iterationItemName;

    @FindBy(xpath = "//span[contains(@title, 'iteration name')]")
    WebElement iterationName;

    @FindBy(xpath = "//span[@title='Name']")
    WebElement storyName;

    @FindBy(xpath = "//div[contains(text(), 'Actions')]")
    WebElement actions;

    @FindBy(xpath = "//a[contains(text(), 'Delete')]")
    WebElement delete;

    @FindBy(xpath = "//input[@type='checkbox']")
    WebElement confirmDelete;

    @FindBy(xpath = "//span[contains(text(), 'Ok')]")
    WebElement okBtn;

    @FindBy(xpath = "//i[@class='dropdown icon']")
    WebElement logOutdropdown;

    @FindBy(xpath = "//a[contains(@href, 'Logout')]")
    WebElement logOutBtn;

    @FindBy(xpath = "//h2[contains(text(), 'Nothing selected')]")
    WebElement nothingSelectedLbl;

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

    public  void clickLinkProduct(){
        productItem.click();
        wait.until(ExpectedConditions.visibilityOf(productNameLabel));
    }

    public IterationEditPage clickLinkIteration(){
        iterationItemName.click();
        wait.until(ExpectedConditions.visibilityOf(iterationName));
        return new IterationEditPage();
    }

    public void setEditValue(){
        editValue.click();
        editValue.sendKeys("3");
    }

    public void deleteProduct(){
        actions.click();
        delete.click();
        confirmDelete.click();
        okBtn.click();
        wait.until(ExpectedConditions.visibilityOf(nothingSelectedLbl));
    }

    public void logOut(){
        logOutdropdown.click();
        logOutBtn.click();
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

    public void closeWindow() {
        driver.quit();
    }
}
