package framework;

import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import java.util.concurrent.TimeUnit;

/**
 * Created by ArielWagner on 13/11/2015.
 */
public class UIMethods {

    public static void doubleClick(WebElement webElement) {
        Actions action = new Actions(DriverManager.getManager().getDriver());
        action.doubleClick(webElement);
        action.perform();
    }

    public static boolean isElementDisplayed(By locator) {
        try {
            DriverManager.getManager().getDriver().manage().timeouts()
                    .implicitlyWait(10, TimeUnit.SECONDS);
            DriverManager.getManager().getDriver().findElement(locator);
            return true;
        } catch (NoSuchElementException e) {
            e.printStackTrace();
            return false;
        } finally {
            DriverManager.getManager().getDriver().manage().timeouts()
                    .implicitlyWait(10, TimeUnit.SECONDS);
        }
    }
}
