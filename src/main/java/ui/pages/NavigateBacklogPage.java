package ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 16/11/2015.
 */
public class NavigateBacklogPage extends BasePageObject{

    @FindBy(xpath = "//i[@class='dropdown icon']")
    WebElement logOutdropDown;

    @FindBy(xpath = "//div[contains(@class, 'menu transition')]//a[contains(@href, 'Logout')]")
    WebElement logOutBtn;

    @FindBy(xpath = "//span[contains(@ng-if, 'loggedInUser')]")
    WebElement adminLbl;

    public NavigateBacklogPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(adminLbl));
    }

    public void logOut(){
        logOutdropDown.click();
        wait.until(ExpectedConditions.visibilityOf(logOutBtn));
        logOutBtn.click();
    }
}
