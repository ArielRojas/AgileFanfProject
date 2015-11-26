package runner;

import common.CommonMethods;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import framework.DriverManager;
import org.apache.log4j.Logger;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import ui.PageTransporter;

@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json"},
        glue={"steps"},
        features = {"src/test/resources/features"},
        monochrome = true)

public class RunCukesTest extends AbstractTestNGCucumberTests {

    private static Logger logger = Logger.getLogger("RunCukesTest");

    @BeforeTest
    public void beforeExecution(){
        try{
            PageTransporter.getInstance().navigateToLoginPage();
        } catch(Exception e){
            logger.error("Unable to open the LoginPage", e);
        }
    }

    @BeforeMethod
    public void beforeFeatureExecution(){
        try{
            CommonMethods.logIn("arielwagnerrojas@gmail.com", "nemo100");
        } catch(Exception e){
            logger.error("Unable to log in", e);
        }
    }

    @AfterTest
    public void afterExecution() {
        try {
            DriverManager.getManager().quitDriver();
        } catch (Exception e) {
            logger.error("Unable to quit the driver", e);
        }
    }

    @AfterMethod
    public void afterFeatureExecution(){
        try {
            CommonMethods.logOut();
        } catch (Exception e) {
            logger.error("Unable to log out", e);
        }
    }
}
