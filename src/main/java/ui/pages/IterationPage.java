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
    WebElement boardTab;

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

    @FindBy(xpath = "//input[@placeholder='Task name']")
    WebElement searchTaskByName;

    @FindBy(xpath = "//div[contains(text(), 'Create task')]")
    WebElement createTaskBtn;

    @FindBy(xpath = "//textarea[@id='addTaskName']")
    WebElement taskNameInput;

    @FindBy(xpath = "//input[contains(@ng-model, 'effortLeft')]")
    WebElement effortLeftInput;

    @FindBy(xpath = "//div[contains(text(), 'Save')]")
    WebElement saveTaskBtn;

    By displayStory = By.xpath("//div[contains(@class, 'storyState')]");

    String taskNameLocator = null;

    /**
     * This method is the constructor
     */
    public IterationPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(iterationNameLbl));
    }

    /**
     * This method lets create a story
     * @param story
     */
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

    /**
     * This method allows get the story name
     * @return the story name
     */
    public String getStoryName(){
        return storyNameLbl.getText();
    }

    /**
     * This method allows get the in progress state
     * @return the in progress state
     */
    public String getInProgressState(){
        return inProgressOption.getText();
    }

    /**
     * This method allows get the pending state
     * @return the pending state
     */
    public String getPendingState(){
        return pendingOption.getText();
    }

    /**
     * This method allows get the bloqued state
     * @return the bloqued state
     */
    public String getBloquedState(){
        return bloquedOption.getText();
    }

    /**
     * This method allows get the ready state
     * @return the ready state
     */
    public String getReadyState(){
        return readyOption.getText();
    }

    /**
     * This method allows get the done state
     * @return the done state
     */
    public String getDoneState(){
        return doneOption.getText();
    }

    /**
     * This method allows get the deferred state
     * @return the deferred state
     */
    public String getDeferredState(){
        return deferredOption.getText();
    }

    /**
     * This method allows press the story state
     */
    public void clickStoreState(){
        storeStateToolTip.click();
    }

    /**
     * This method allows press the in progress state for a story
     */
    public void clickInProgressState(){
        inProgressStateOption.click();
    }

    /**
     * This method allows press the pending state for a story
     */
    public void clickPendingState(){
        pendingStateOption.click();
    }

    /**
     * This method allows press the bloqued state for a story
     */
    public void clickBloquedState(){
        bloquedStateOption.click();
    }

    /**
     * This method lets press the ready state for a story
     */
    public void clickReadyState(){
        readyStateOption.click();
    }

    /**
     * This method allows press the done state for a story
     */
    public void clickDoneState(){
        doneStateOption.click();
    }

    /**
     * This method allows press the deferred state for a story
     */
    public void clickDeferredState(){
        deferredStateOption.click();
    }

    /**
     * This method allows press the board tab
     */
    public BoardPage clickLinkBoard(){
        boardTab.click();
        return new BoardPage();
    }

    /**
     * This method allows filter by task name
     * @param task
     */
    public void filterByTaskName(String task){
        searchTaskByName.sendKeys(task);
        taskNameLocator = "//span[contains(text(), '"+ task +"')]";
    }

    /**
     * This method allows create a task
     * @param task
     */
    public void createTask(String task){
        createTaskBtn.click();
        taskNameInput.sendKeys(task);
        effortLeftInput.sendKeys("1");
        saveTaskBtn.click();
        wait.until(ExpectedConditions.visibilityOf(taskNameInput));
    }

    /**
     * This method allows get the task name
     * @return
     */
    public String getTaskName(){
        By TaskNameLbl = By.xpath(taskNameLocator);
        return driver.findElement(TaskNameLbl).getText();
    }

    /**
     * This method allows verify if the story name is displayed
     * @return false or true
     */
    public Boolean isStoryNameDisplayed(){
        return UIMethods.isElementDisplayed(displayStory);
    }
}
