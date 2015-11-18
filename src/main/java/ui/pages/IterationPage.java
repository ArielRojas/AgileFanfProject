package ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 13/11/2015.
 */
public class IterationPage extends BasePageObject{

    @FindBy(xpath = "//input[@id = 'iterationnameinput']")
    WebElement iterationNameInput;

    @FindBy(xpath = "//input[@id = 'projectinput']")
    WebElement projectInput;

    @FindBy(xpath = "//a[contains(text(), 'project')]//span[contains(text(), 'in')]")
    WebElement projectSelect;

    @FindBy (xpath = "//span[contains(text(),'Create a new iteration')]")
    WebElement titleName;

    @FindBy(xpath = "//span[contains(text(),'Ok')]")
    WebElement OkBtn;

    public IterationPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(titleName));
    }

    public IterationPage setIterationName(String iteration){
        iterationNameInput.clear();
        iterationNameInput.sendKeys(iteration);
        return this;
    }

    public IterationPage selectProject(){
        projectInput.click();
        projectSelect.click();
        return this;
    }

    public MainPage clickOk(){
        OkBtn.click();
        return new MainPage();
    }
}
