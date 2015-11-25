package ui.pages;

import framework.UIMethods;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 18/11/2015.
 */
public class IterationPage extends BasePageObject {

    @FindBy(xpath = "//div[contains(text(), 'Create story')]")
    WebElement createStoryBtn;

    @FindBy(xpath = "//textArea[contains(@id, 'addStoryName')]")
    WebElement nameStoryTextArea;

    @FindBy(xpath = "//input[@ng-model = 'value']")
    WebElement valueInput;

    @FindBy(xpath = "//input[@ng-model = 'points']")
    WebElement pointsInput;

    @FindBy(xpath = "//input[contains(@class, 'hasDatepicker')]")
    WebElement calendarInput;

    @FindBy(xpath = "//a[contains(text(),'29')]")
    WebElement selectDateOption;

    @FindBy(xpath = "//button[contains(text(), 'Save')]")
    WebElement saveBtn;

    @FindBy(xpath = "//span[contains(@title, 'story name')]")
    WebElement storyNameLbl;

    @FindBy(xpath = "//span[contains(@class, 'iterationName')]")
    WebElement iterationNameLbl;

    @FindBy(xpath = "//div[contains(@class, 'menu menubar')]//a[@data-tab='board']")
    WebElement boardLnk;

    @FindBy(xpath = "//a[@data-tab='list']")
    WebElement listLnk;

    @FindBy(xpath = "//div[contains(@class, 'storyStateNOT_STARTED')]")
    WebElement storeStateToolTip;

    @FindBy(xpath = "//div[contains(@id, 'select2-drop')]//span[contains(@class, 'storyStateSTARTED')]")
    WebElement inProgressStateOption;

    @FindBy(xpath = "//div[contains(@class, 'storyStateSTARTED')]")
    WebElement inProgressOption;

    @FindBy(xpath = "//div[contains(@id, 'select2-drop')]//span[contains(@class, 'storyStatePENDING')]")
    WebElement pendingStateOption;

    @FindBy(xpath = "//div[contains(@class, 'storyStatePENDING')]")
    WebElement pendingOption;

    @FindBy(xpath = "//div[contains(@id, 'select2-drop')]//span[contains(@class, 'storyStateBLOCKED')]")
    WebElement bloquedStateOption;

    @FindBy(xpath = "//div[contains(@class, 'storyStateBLOCKED')]")
    WebElement bloquedOption;

    @FindBy(xpath = "//div[contains(@id, 'select2-drop')]//span[contains(@class, 'storyStateIMPLEMENTED')]")
    WebElement readyStateOption;

    @FindBy(xpath = "//div[contains(@class, 'storyStateIMPLEMENTED')]")
    WebElement readyOption;

    @FindBy(xpath = "//div[contains(@id, 'select2-drop')]//span[contains(@class, 'storyStateDONE')]")
    WebElement doneStateOption;

    @FindBy(xpath = "//div[contains(@class, 'storyStateDONE')]")
    WebElement doneOption;

    @FindBy(xpath = "//div[contains(@id, 'select2-drop')]//span[contains(@class, 'storyStateDEFERRED')]")
    WebElement deferredStateOption;

    @FindBy(xpath = "//div[contains(@class, 'storyStateDEFERRED')]")
    WebElement deferredOption;

    By displayStory = By.xpath("//div[contains(@class, 'storyState')]");

    public IterationPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(iterationNameLbl));
    }

    public void createStory(String story) {
        createStoryBtn.click();
        nameStoryTextArea.clear();
        nameStoryTextArea.sendKeys(story);
        valueInput.sendKeys("3");
        pointsInput.sendKeys("3");
        calendarInput.click();
        selectDateOption.click();
        saveBtn.click();
    }

    public String getStoryName(){
        return storyNameLbl.getText();
    }

    public String getInProgressState(){
        return inProgressOption.getText();
    }

    public String getPendingState(){
        return pendingOption.getText();
    }

    public String getBloquedState(){
        return bloquedOption.getText();
    }

    public String getReadyState(){
        return readyOption.getText();
    }

    public String getDoneState(){
        return doneOption.getText();
    }

    public String getDeferredState(){
        return deferredOption.getText();
    }

    public void clickStoreState(){
        storeStateToolTip.click();
    }

    public void clickInProgressState(){
        inProgressStateOption.click();
    }

    public void clickPendingState(){
        pendingStateOption.click();
    }

    public void clickBloquedState(){
        bloquedStateOption.click();
    }

    public void clickReadyState(){
        readyStateOption.click();
    }

    public void clickDoneState(){
        doneStateOption.click();
    }

    public void clickDeferredState(){
        deferredStateOption.click();
    }

    public BoardPage clickLinkBoard(){
        boardLnk.click();
        return new BoardPage();
    }

    public Boolean isStoryNameDisplayed(){
        return UIMethods.isElementDisplayed(displayStory);
    }
}
