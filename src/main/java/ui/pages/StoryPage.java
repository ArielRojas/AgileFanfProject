package ui.pages;

import Common.Constants;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 25/11/2015.
 */
public class StoryPage extends BasePageObject{

    @FindBy(xpath = "//div[contains(@class, 'storyinfodialog')]//span[contains(@title, 'edit story')]")
    WebElement storyNameLbl;

    @FindBy(xpath = "//a[contains(@data-tab, 'tasks')]")
    WebElement tasksTab;

    @FindBy(xpath = "//div[@id='infobubble']//div[contains(text(), 'Create task')]")
    WebElement createTaskBtn;

    @FindBy(xpath = "//textarea[@id='addTaskName']")
    WebElement taskNameInput;

    @FindBy(xpath = "//input[contains(@ng-model, 'effortLeft')]")
    WebElement effortLeftInput;

    @FindBy(xpath = "//div[contains(text(), 'Save')]")
    WebElement saveBtn;

    @FindBy(xpath = "//span[contains(@class, 'task-name')]")
    WebElement taskNameLbl;

    @FindBy(xpath = "//div[contains(@class, 'taskStateNOT_STARTED')]")
    WebElement taskStateBtn;

    @FindBy(xpath = "//div[contains(@class, 'ui-dialog-buttonset')]//span[contains(text(), 'Close')]")
    WebElement closeBtn;

    @FindBy(xpath = "//div[contains(@class, 'select2-drop')]//span[contains(@class, 'storyStateIMPLEMENTED')]")
    WebElement readySateOption;

    @FindBy(xpath = "//div[@id='infobubble']//div[contains(@class, 'storyStateSTARTED')]")
    WebElement inProgressStoryStateOption;

    @FindBy(xpath = "//div[contains(@class, 'taskStateIMPLEMENTED')]")
    WebElement taskStateReadyBtn;

    @FindBy(xpath = "//span[contains(text(), 'Yes')]")
    WebElement yesBtn;

    /**
     * This method is the constructor
     */
    public StoryPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
    }

    /**
     * This method allows press the Tasks tab
     */
    public void clickTasksTab(){
        tasksTab.click();
    }

    /**
     * This method allows create a task
     * @param task
     */
    public void createTask(String task){
        createTaskBtn.click();
        taskNameInput.sendKeys(task);
        effortLeftInput.sendKeys(Constants.TASK_EFFORT);
        saveBtn.click();
        wait.until(ExpectedConditions.visibilityOf(taskNameLbl));
    }

    /**
     * This method allows press the task state
     */
    public void clickTaskState(){
        taskStateBtn.click();
    }

    /**
     * This method allows select and press the ready state for a task
     */
    public void changeToReadyState(){
        readySateOption.click();
    }

    /**
     * This method allows press the close button
     * @return Iteration page
     */
    public IterationPage clickCloseBtn(){
        closeBtn.click();
        return new IterationPage();
    }

    /**
     * This method allows press the Yes button
     * @return Story page
     */
    public StoryPage clickYesBtn(){
        yesBtn.click();
        wait.until(ExpectedConditions.visibilityOf(inProgressStoryStateOption));
        return this;
    }

    /**
     * This method allows get the task name
     * @return the task name
     */
    public String getTaskName(){
        return taskNameLbl.getText();
    }

    /**
     * This method allows get the task state: NOT_STARTED
     * @return the not started state
     */
    public String getTaskState(){
        return taskStateBtn.getText();
    }

    /**
     * This method allows get the task state: Ready
     * @return the ready state
     */
    public String getReadyStateTask(){
        return taskStateReadyBtn.getText();
    }

    /**
     * This method allows get the task state: In Progress
     * @return the in progress state
     */
    public String getInProgressStoryState(){
        return inProgressStoryStateOption.getText();
    }
}
