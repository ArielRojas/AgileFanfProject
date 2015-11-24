package ui;

import framework.DriverManager;
import org.openqa.selenium.WebDriver;
import ui.pages.LoginPage;

/**
 * Created by silvia valencia on 4/14/2015.
 */
public class PageTransporter {
    private WebDriver driver = DriverManager.getManager().getDriver();
    private String baseLoginURL = "https://cloud.agilefant.com/global/static/login/index.html";
    private static PageTransporter instance;

    protected PageTransporter() {
        initialize();
    }

    public static PageTransporter getInstance() {
        if(instance == null) {
            instance = new PageTransporter();
        }
        return instance;
    }

    private void initialize() {
           //log.info("Initialize the page transporter");
    }

    private void goToURL(String url) {
        driver.navigate().to(url);
    }

    public String getCurrentURL() {
        return driver.getCurrentUrl();
    }

    public LoginPage navigateToLoginPage() {
        goToURL(baseLoginURL);
        return new LoginPage();
    }
}
