package ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 12/11/2015.
 */
public class ProjectPage extends BasePageObject {

    @FindBy(xpath = "//input[@id = 'projectnameinput']")
    WebElement projectNameInput;

    @FindBy(xpath = "//input[@id='productinput']")
    WebElement productInput;

    @FindBy(xpath = "//li[@tabindex='-1']")
    WebElement productSelect;

    @FindBy (xpath = "//span[contains(text(),'Create a new project')]")
    WebElement titleName;

    @FindBy(xpath = "//span[contains(text(),'Ok')]")
    WebElement OkBtn;

    @FindBy(xpath = "//span[contains(@title, 'edit product')]")
    WebElement displayProduct;

    public ProjectPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(titleName));
    }

    public ProjectPage setProjectName(String project){
        projectNameInput.clear();
        projectNameInput.sendKeys(project);
        return this;
    }

    public ProjectPage selectProduct(){
        productInput.click();
        productSelect.click();
        return this;
    }

    public MainPage clickOk(){
        OkBtn.click();
        wait.until(ExpectedConditions.visibilityOf(displayProduct));
        return new MainPage();
    }
}
