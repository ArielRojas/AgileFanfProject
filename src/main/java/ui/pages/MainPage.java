package ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 11/11/2015.
 */
public class MainPage extends BasePageObject{

    LeftMenuPage leftMenuPage;
    NavigateBacklogPage navigateBacklogPage;

    @FindBy(xpath = "//a[@id='createNewMenuLink']")
    WebElement createNewBtn;

    @FindBy(xpath = "//option[@value='0']")
    WebElement usernameOption;

    /**
     * This method is the constructor
     */
    public MainPage(){
        leftMenuPage = new LeftMenuPage();
        navigateBacklogPage = new NavigateBacklogPage();
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(createNewBtn));
    }

    /**
     * This method allows get the username
     * @return the username
     */
    public String getUsername(){
        return usernameOption.getText();
    }

    /**
     * This method allows get the LeftMenu page
     * @return the LeftMenu page
     */
    public LeftMenuPage getLeftMenuPage(){
        return leftMenuPage;
    }

    /**
     * This method allows get the NavigateBacklog page
     * @return the NavigateBacklog page
     */
    public NavigateBacklogPage getNavigateBacklogPage(){
        return navigateBacklogPage;
    }
}
