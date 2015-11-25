package steps.hooks;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import framework.DriverManager;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

/**
 * Created by ArielWagner on 23/11/2015.
 */
public class GlobalHooks {
    @After
    public void embedScreenshot(Scenario scenario) {
        if(scenario.isFailed()) {
            try {
                byte[] screenshot = ((TakesScreenshot) DriverManager.getManager().getDriver())
                        .getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
