package ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;
import framework.UIMethods;

/**
 * Created by ArielWagner on 12/11/2015.
 */
public class ProjectPage extends BasePageObject {

    //@FindBy(id = "projectnameinput")
    //WebElement projectNameInput;

    @FindBy(xpath = "//input[@id = 'projectnameinput']")
    WebElement projectNameInput;

    @FindBy(xpath = "//span[contains(text(),'Ok')]")
    WebElement OkBtn;

    @FindBy(xpath = "//input[@id='productinput']")
    WebElement productInput;

    @FindBy(xpath = "//li[@tabindex='-1']")
    WebElement productSelect;

    @FindBy (xpath = "//span[contains(text(),'Create a new project')]")
    WebElement titleName;

    public ProjectPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        //wait.until(ExpectedConditions.visibilityOf(titleName));
    }

    public ProjectPage setProjectName(String project){
        //projectNameInput.clear();
        projectNameInput.sendKeys(project);
        return this;
    }

    public ProjectPage setProductName(String product){
        //productInput.click();
        //UIMethods.doubleClick(productInput);
        //UIMethods.doubleClick(productSelect);
        //productSelect.click();
        productInput.sendKeys(product);
        return this;
    }

    public MainPage clickOk(){
        OkBtn.click();
        return new MainPage();
    }
}
