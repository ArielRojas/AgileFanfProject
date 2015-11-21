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
public class IterationEditPage extends BasePageObject {

    @FindBy(xpath = "//div[contains(text(), 'Create story')]")
    WebElement createStoryBtn;

    @FindBy(xpath = "//textArea[contains(@id, 'addStoryName')]")
    WebElement nameStoryTextArea;

    @FindBy(xpath = "//input[@ng-model = 'value']")
    WebElement valueTxt;

    @FindBy(xpath = "//input[@ng-model = 'points']")
    WebElement pointsTxt;

    @FindBy(xpath = "//input[contains(@class, 'hasDatepicker')]")
    WebElement openCalendar;

    @FindBy(xpath = "//a[contains(text(),'29')]")
    WebElement selectDate;

    @FindBy(xpath = "//button[contains(text(), 'Save')]")
    WebElement saveBtn;

    @FindBy(xpath = "//span[contains(@title, 'story name')]")
    WebElement storyNameLbl;

    @FindBy(xpath = "//div[contains(@class, 'menu menubar')]//a[@data-tab='board']")
    WebElement linkBoard;

    @FindBy(xpath = "//a[@data-tab='list']")
    WebElement linkList;

    @FindBy(xpath = "//div[3]//div[contains(@class, 'storyStateNOT_STARTED')]")
    WebElement storeState;

    @FindBy(xpath = "//div[contains(@id, 'select2-drop')]//span[contains(@class, 'storyStateSTARTED')]")
    WebElement inProgressState;

    @FindBy(xpath = "//div[contains(@class, 'storyStateSTARTED')]")
    WebElement inProgressOption;


    @FindBy(xpath = "//div[contains(@id, 'select2-drop')]//span[contains(@class, 'storyStatePENDING')]")
    WebElement pendingState;

    @FindBy(xpath = "//div[contains(@class, 'storyStatePENDING')]")
    WebElement pendingOption;

    @FindBy(xpath = "//div[contains(@id, 'select2-drop')]//span[contains(@class, 'storyStateBLOCKED')]")
    WebElement bloquedState;

    @FindBy(xpath = "//div[contains(@class, 'storyStateBLOCKED')]")
    WebElement bloquedOption;

    @FindBy(xpath = "//div[contains(@id, 'select2-drop')]//span[contains(@class, 'storyStateIMPLEMENTED')]")
    WebElement readyState;

    @FindBy(xpath = "//div[contains(@class, 'storyStateIMPLEMENTED')]")
    WebElement readyOption;

    @FindBy(xpath = "//div[contains(@id, 'select2-drop')]//span[contains(@class, 'storyStateDONE')]")
    WebElement doneState;

    @FindBy(xpath = "//div[contains(@class, 'storyStateDONE')]")
    WebElement doneOption;

    @FindBy(xpath = "//div[contains(@id, 'select2-drop')]//span[contains(@class, 'storyStateDEFERRED')]")
    WebElement deferredState;

    @FindBy(xpath = "//div[contains(@class, 'storyStateDEFERRED')]")
    WebElement deferredOption;

    By displayStory = By.xpath("//div[contains(@class, 'storyState')]");

    public IterationEditPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {

    }

    public void createStory(String story) {
        createStoryBtn.click();
        nameStoryTextArea.clear();
        nameStoryTextArea.sendKeys(story);
        valueTxt.sendKeys("3");
        pointsTxt.sendKeys("3");
        openCalendar.click();
        selectDate.click();
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
        storeState.click();
    }

    public void clickInProgressState(){
        inProgressState.click();
    }

    public void clickPendingState(){
        pendingState.click();
    }

    public void clickBloquedState(){
        bloquedState.click();
    }

    public void clickReadyState(){
        readyState.click();
    }

    public void clickDoneState(){
        doneState.click();
    }

    public void clickDeferredState(){
        deferredState.click();
    }

    public BoardPage clickLinkBoard(){
        linkBoard.click();
        return new BoardPage();
    }

    public Boolean isStoryNameDisplayed(){
        return UIMethods.isElementDisplayed(displayStory);
    }
}
