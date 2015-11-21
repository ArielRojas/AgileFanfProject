package steps;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ui.pages.CreateIterationPage;
import ui.pages.MainPage;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

/**
 * Created by ArielWagner on 13/11/2015.
 */
public class Iteration {

    MainPage mainPage;
    CreateIterationPage createIterationPage;
    String iterationName;

    @When("^I create an iteration \"([^\"]*)\" inside of the project$")
    public void createIteration(String iteration){
        iterationName = iteration;
        mainPage = new MainPage();
        mainPage.clickCreateNew();
        createIterationPage = mainPage.clickCreateNewIteration().setIterationName(iteration);
    }

    @And("^I select the project$")
    public void selectProject(){
        createIterationPage = createIterationPage.selectProject();
        mainPage = createIterationPage.clickOk();
    }


    @Then("^verify that the iteration has the name entered$")
    public void verifyIterationHasTheNameEntered(){
        assertTrue(mainPage.isIterationNameDisplayed(), iterationName);
        assertEquals(mainPage.getIterationItemName(), iterationName);
    }

    @After(value = "@createIteration", order = 999)
    public void deleteIterationProjectAndProduct(){
        mainPage.deleteProduct();
        mainPage.logOut();
        mainPage.closeWindow();
    }
}
