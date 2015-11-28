package steps;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ui.pages.CreateIterationPage;
import ui.pages.MainPage;
import ui.pages.ProductPage;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

/**
 * Created by ArielWagner on 13/11/2015.
 */
public class Iteration {

    MainPage mainPage;
    CreateIterationPage createIterationPage;
    ProductPage productPage;
    String iterationName;

    @When("^I create an iteration \"([^\"]*)\" inside of the project$")
    public void createIteration(String iteration){
        iterationName = iteration;
        mainPage = new MainPage();
        mainPage.getLeftMenuPage().clickCreateNew();
        createIterationPage = mainPage.getLeftMenuPage().clickCreateNewIteration().setIterationName(iteration);
    }

    @And("^I select the project$")
    public void selectProject(){
        createIterationPage = createIterationPage.selectProject();
        productPage = createIterationPage.clickOk();
    }


    @Then("^verify that the iteration has the name entered$")
    public void verifyIterationHasTheNameEntered(){
        assertTrue(mainPage.getLeftMenuPage().isIterationNameDisplayed(), iterationName);
        assertEquals(mainPage.getLeftMenuPage().getIterationItemName(), iterationName);
    }

    @After("@createIteration")
    public void deleteIterationProjectAndProduct(){
        mainPage = productPage.deleteProduct();
    }
}
