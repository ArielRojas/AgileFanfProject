package framework;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created by ArielWagner on 10/11/2015.
 */
public class SeleniumDriverManager {
    private static WebDriver driver = null;

    public static WebDriver getDriver(){
        if (driver == null ) {
            driver = new FirefoxDriver();
        }
        return driver;
    }
}
