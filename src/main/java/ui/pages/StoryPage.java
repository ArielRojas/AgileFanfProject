package ui.pages;

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

    public StoryPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
    }

    public void clickTasksTab(){
        tasksTab.click();
    }

    public void createTask(String task){
        createTaskBtn.click();
        taskNameInput.sendKeys(task);
        effortLeftInput.sendKeys("1");
        saveBtn.click();
        wait.until(ExpectedConditions.visibilityOf(taskNameLbl));
    }

    public void clickTaskState(){
        taskStateBtn.click();
    }

    public void changeToReadyState(){
        readySateOption.click();
    }

    public IterationPage clickCloseBtn(){
        closeBtn.click();
        return new IterationPage();
    }

    public StoryPage clickYesBtn(){
        yesBtn.click();
        wait.until(ExpectedConditions.visibilityOf(inProgressStoryStateOption));
        return this;
    }

    public String getTaskName(){
        return taskNameLbl.getText();
    }

    public String getTaskState(){
        return taskStateBtn.getText();
    }

    public String getReadyStateTask(){
        return taskStateReadyBtn.getText();
    }

    public String getInProgressStoryState(){
        return inProgressStoryStateOption.getText();
    }
}
