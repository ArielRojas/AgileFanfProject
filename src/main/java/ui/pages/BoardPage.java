package ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 18/11/2015.
 */
public class BoardPage extends BasePageObject{

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
    }

    public String getStateInProgress(){
        return stateInProgress.getText();
    }

    public String getStatePending(){
        return statePending.getText();
    }
}
