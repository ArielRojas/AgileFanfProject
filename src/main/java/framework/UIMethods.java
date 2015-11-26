package framework;

import org.openqa.selenium.*;
import java.util.concurrent.TimeUnit;

/**
 * Created by ArielWagner on 13/11/2015.
 */
public class UIMethods {

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

    public static void refresh() {
        DriverManager.getManager().getDriver().navigate().refresh();
    }
}
