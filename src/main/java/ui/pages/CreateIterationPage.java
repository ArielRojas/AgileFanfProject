package ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 13/11/2015.
 */
public class CreateIterationPage extends BasePageObject{

    @FindBy(xpath = "//input[@id = 'iterationnameinput']")
    WebElement iterationNameInput;

    @FindBy(xpath = "//input[@id = 'projectinput']")
    WebElement projectNameInput;

    @FindBy(xpath = "//li//a[contains(text(), 'project')]//span[contains(text(), 'in')]")
    WebElement projectSelectOption;

    @FindBy (xpath = "//span[contains(text(),'Create a new iteration')]")
    WebElement createIterationWindowTitleLbl;

    @FindBy(xpath = "//span[contains(text(),'Ok')]")
    WebElement OkBtn;

    @FindBy(xpath = "//a[contains(@class, 'node-type-iteration')]")
    WebElement iterationItemNameLnk;

    /**
     * This method is the constructor
     */
    public CreateIterationPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(createIterationWindowTitleLbl));
    }

    /**
     * This method set the iteration name
     * @param iteration
     * @return the CreateIteration Page
     */
    public CreateIterationPage setIterationName(String iteration){
        iterationNameInput.clear();
        iterationNameInput.sendKeys(iteration);
        return this;
    }

    /**
     * This method selects the project
     * @return the CreateIteration Page
     */
    public CreateIterationPage selectProject(){
        projectNameInput.click();
        projectSelectOption.click();
        return this;
    }

    /**
     * This method allows click the Ok button for create an iteration
     * @return the Product Page
     */
    public ProductPage clickOk(){
        OkBtn.click();
        wait.until(ExpectedConditions.visibilityOf(iterationItemNameLnk));
        return new ProductPage();
    }
}
