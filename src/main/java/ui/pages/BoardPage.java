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

    /**
     * This method is the constructor
     */
    public BoardPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(boardTab));
    }

    /**
     * This method opens the story card
     * @return the Story Page
     */
    public StoryPage clickStoryCard(){
        storyCardContainer.click();
        return new StoryPage();
    }
}
