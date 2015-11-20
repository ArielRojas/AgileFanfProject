package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import framework.DriverManager;
//import org.apache.log4j.Logger;
import org.testng.annotations.AfterTest;


@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json"},
        glue={"steps"},
        features = {"src/main/test/resources/features"},
        //features = {"src/main/test/resources/features/scenarios.login.feature"},
        monochrome = true)

public class RunCukesTest extends AbstractTestNGCucumberTests {

    //private static Logger log = Logger.getLogger("RunCukesTest");

    @AfterTest
    public void afterExecution() {
        try {
        } catch (Exception e) {
        } finally {
            DriverManager.getManager().quitDriver();
        }
    }
}
