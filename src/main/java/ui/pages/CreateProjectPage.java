package ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 12/11/2015.
 */
public class CreateProjectPage extends BasePageObject {

    @FindBy(xpath = "//input[@id = 'projectnameinput']")
    @CacheLookup
    WebElement projectNameInput;

    @FindBy(xpath = "//input[@id='productinput']")
    @CacheLookup
    WebElement productNameInput;

    @FindBy(xpath = "//li[@tabindex='-1']")
    WebElement productSelectOption;

    @FindBy (xpath = "//span[contains(text(),'Create a new project')]")
    WebElement createProjectWindowTitleLbl;

    @FindBy(xpath = "//span[contains(text(),'Ok')]")
    WebElement OkBtn;

    @FindBy(xpath = "//span[contains(@title, 'edit product')]")
    WebElement productNameLbl;

    /**
     * This method is the constructor
     */
    public CreateProjectPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(createProjectWindowTitleLbl));
    }

    /**
     * This method allows set the project name
     * @param project
     * @return the CreateProject page
     */
    public CreateProjectPage setProjectName(String project){
        projectNameInput.clear();
        projectNameInput.sendKeys(project);
        return this;
    }

    /**
     * This method allows select the product to relate with the project
     * @return the CreateProject page
     */
    public CreateProjectPage selectProduct(){
        productNameInput.click();
        productSelectOption.click();
        return this;
    }

    /**
     * This method allows click on Ok button for create a project
     * @return Product page
     */
    public ProductPage clickOk(){
        OkBtn.click();
        wait.until(ExpectedConditions.visibilityOf(productNameLbl));
        return new ProductPage();
    }
}
