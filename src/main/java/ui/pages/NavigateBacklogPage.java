package ui.pages;

import org.openqa.selenium.support.PageFactory;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 16/11/2015.
 */
public class NavigateBacklogPage extends BasePageObject{

    @Override
    public void waitUntilPageObjectIsLoaded() {
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }
}
