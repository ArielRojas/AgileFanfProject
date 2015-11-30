package framework;

import org.openqa.selenium.*;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

/**
 * Created by ArielWagner on 13/11/2015.
 */
public class UIMethods {

    /**
     * This method allows verify if an element is displayed
     * @param locator
     * @return false or true
     */
    public static boolean isElementDisplayed(By locator) {
        try {
            DriverManager.getManager().getDriver().manage().timeouts()
                    .implicitlyWait(Integer.parseInt(getProperty("implicitWait")), TimeUnit.SECONDS);
            DriverManager.getManager().getDriver().findElement(locator);
            return true;
        } catch (NoSuchElementException e) {
            e.printStackTrace();
            return false;
        } finally {
            DriverManager.getManager().getDriver().manage().timeouts()
                    .implicitlyWait(Integer.parseInt(getProperty("implicitWait")), TimeUnit.SECONDS);
        }
    }

    /**
     * This method allows get the properties of the config file
     * @param property
     * @return a property
     */
    public static String getProperty(String property){
        Properties config = new Properties();
        FileInputStream file;
        try {
            file = new FileInputStream("src/main/resources/config.properties");
            config.load(file);
            String configProperty = config.getProperty(property);
            return configProperty;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            return null;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

}
