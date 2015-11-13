package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by ArielWagner on 13/11/2015.
 */
public class Iteration {

    @When("^I create an iteration \"([^\"]*)\" inside of the project$")
    public void iCreateAnIterationInsideOfTheProject(String iteration){
    }

    @And("^I select the project$")
    public void iSelectTheProject(){
    }


    @Then("^verify that the iteration has the name entered$")
    public void verifyThatTheIterationHasTheNameEntered(){
    }
}
