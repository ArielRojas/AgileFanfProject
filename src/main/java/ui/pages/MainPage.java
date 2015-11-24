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

    public String getUsername(){
        return usernameOption.getText();
    }

    public LeftMenuPage getLeftMenuPage(){
        return leftMenuPage;
    }

    public NavigateBacklogPage getNavigateBacklogPage(){
        return navigateBacklogPage;
    }
}
