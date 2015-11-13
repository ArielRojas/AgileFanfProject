package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ui.pages.LoginPage;
import ui.PageTransporter;

/**
 * Created by ArielWagner on 10/11/2015.
 */
public class Test {

    private LoginPage loginPage;

    @Given("^I go to page of agilefant$")
    public void iGoToPageOfAgilefant(){
        //loginPage = new LoginPage1();
        PageTransporter.getInstance().navigateToLoginPage();
    }

    @When("^enter to agilefant page$")
    public void enterToAgilefantPage(){

    }

    @Then("^verify that the page is displayed$")
    public void verifyThatThePageIsDisplayed(){

    }
}
