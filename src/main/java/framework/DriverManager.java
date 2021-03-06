package framework;

import Common.UIMethods;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created with IntelliJ IDEA.
 * User: ArielWagner
 * Date: 9/11/15
 * Time: 16:51
 * To change this template use File | Settings | File Templates.
 */
public class DriverManager {
    private static DriverManager manager = null;
    private WebDriver driver;
    private WebDriverWait wait;

    protected DriverManager() {
        initializeDriver();
    }

    private void initializeDriver() {
        driver = new FirefoxDriver();
        driver.manage().window().maximize();
        wait = new WebDriverWait(driver,
                Integer.parseInt(UIMethods.getProperty("explicitWait")),
                Integer.parseInt(UIMethods.getProperty("webDriverWeb_sleep")));
    }

    public static DriverManager getManager() {
        if (manager == null ) {
            manager = new DriverManager();
        }
        return manager;
    }

    public WebDriver getDriver() {
        return driver;
    }

    public WebDriverWait getWait() {
        return wait;
    }

    public void quitDriver()
    {
        try {
            driver.quit();
        }
        catch (Exception e) {

        }
        driver = null;
    }
}
