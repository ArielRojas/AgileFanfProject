package ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 18/11/2015.
 */
public class IterationEditPage extends BasePageObject {

    @FindBy(xpath = "//a[@data-tab='board']")
    WebElement linkBoard;

    @FindBy(xpath = "//a[@data-tab='list']")
    WebElement linkList;

    @FindBy(xpath = "//div[contains(@class, 'storyState')]")
    WebElement storeState;

    @FindBy(xpath = "//div[contains(@id, 'select2-drop')]//span[contains(@class, 'storyStateSTARTED')]")
    WebElement inProgressState;

    @FindBy(xpath = "//div[contains(@id, 'select2-drop')]//span[contains(@class, 'storyStatePENDING')]")
    WebElement pendingState;

    @Override
    public void waitUntilPageObjectIsLoaded() {
    }

    /**
     *
     */
    public void clickStoreState(){
        storeState.click();
    }

    /**
     *
     */
    public void clickInProgressState(){
        inProgressState.click();
    }

    /**
     *
     */
    public void clickPendingState(){
        pendingState.click();
    }

    /**
     *
     * @return
     */
    public BoardPage clickLinkBoard(){
        linkBoard.click();
        return new BoardPage();
    }
}
