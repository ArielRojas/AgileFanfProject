package ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 16/11/2015.
 */
public class StoryPage extends BasePageObject {

    @FindBy(xpath = "//input[@id='storynameinput']")
    WebElement storyNameInput;

    @FindBy(xpath = "//input[@id='backloginput']")
    WebElement backlogInput;

    @FindBy(xpath = "//li[@data-value='iteration1']//a[contains(text(), 'iteration1')]")
    WebElement selectIteration;

    @FindBy(xpath = "//input[@type='number']")
    WebElement setPoints;

    @FindBy(xpath = "//input[@id='dp1447683353472']")
    WebElement openCalendar;

    @FindBy(xpath = "//a[contains(text(),'19')]")
    WebElement selectDate;

    @FindBy (xpath = "//span[contains(text(),'Create a new story')]")
    WebElement titleName;

    @FindBy(xpath = "//span[contains(text(),'Ok')]")
    WebElement OkBtn;

    public StoryPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(titleName));
    }

    public StoryPage setStoryName(String story){
        storyNameInput.clear();
        storyNameInput.sendKeys(story);
        return this;
    }

    public StoryPage selectIteration(){
        backlogInput.click();
        selectIteration.click();
        setPoints.sendKeys("3");
        return this;
    }

    public StoryPage selectDueDate(){
        openCalendar.click();
        selectDate.click();
        return this;
    }

    public MainPage clickOk(){
        OkBtn.click();
        return new MainPage();
    }
}
