package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ui.pages.IterationPage;
import ui.pages.MainPage;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

/**
 * Created by ArielWagner on 13/11/2015.
 */
public class Iteration {

    MainPage mainPage;
    IterationPage iterationPage;
    String iterationName;

    @When("^I create an iteration \"([^\"]*)\" inside of the project$")
    public void createIteration(String iteration){
        iterationName = iteration;
        mainPage = new MainPage().clickCreateNew();
        iterationPage = mainPage.clickCreateNewIteration().setIterationName(iteration);
    }

    @And("^I select the project$")
    public void selectProject(){
        iterationPage = iterationPage.selectProject();
        mainPage = iterationPage.clickOk();
    }


    @Then("^verify that the iteration has the name entered$")
    public void verifyIterationHasTheNameEntered(){
        assertTrue(mainPage.isIterationNameDisplayed(), iterationName);
        assertEquals(mainPage.getIterationItemName(), iterationName);
    }
}
