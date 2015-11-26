package ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 18/11/2015.
 */
public class BoardPage extends BasePageObject{

    @FindBy(xpath = "//p[contains(@ng-if, 'board.cardDescription')]")
    WebElement storyCardContainer;

    @FindBy(xpath = "//div[contains(@class, 'menu menubar')]//a[@data-tab='board']")
    WebElement boardTab;

    @FindBy(xpath = "//div[contains(@class, 'list-card')]//div[contains(@class, 'storyStateSTARTED')]")
    WebElement stateInProgress;

    @FindBy(xpath = "//div[contains(@class, 'list-card')]//div[contains(@class, 'storyStatePENDING')]")
    WebElement statePending;

    public BoardPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(boardTab));
    }

    public StoryPage clickStoryCard(){
        storyCardContainer.click();
        return new StoryPage();
    }

    /**
     *This method return the In Progress state
     * @return
     */
    public String getStateInProgress(){
        return stateInProgress.getText();
    }

    /**
     *This method return the pending state
     * @return
     */
    public String getStatePending(){
        return statePending.getText();
    }
}
