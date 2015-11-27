package ui;

import framework.DriverManager;
import org.openqa.selenium.WebDriver;
import ui.pages.LoginPage;
import org.apache.log4j.Logger;

/**
 * Created by Ariel Rojas on 11/11/2015.
 */
public class PageTransporter {
    private WebDriver driver = DriverManager.getManager().getDriver();
    private String baseLoginURL = "https://cloud.agilefant.com/global/static/login/index.html";
    private static PageTransporter instance;
    private static Logger log = Logger.getLogger("PageTransporter");

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
           log.info("Initialize the page transporter");
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
