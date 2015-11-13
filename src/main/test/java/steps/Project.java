package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ui.pages.MainPage;
import ui.pages.ProjectPage;

/**
 * Created by ArielWagner on 12/11/2015.
 */
public class Project {

    MainPage mainPage;
    ProjectPage projectPage;

    @When("^I create a project \"([^\"]*)\" inside of the product$")
    public void iCreateAProjectInsideOfTheProduct(String project){
        //mainPage.loadDisplayProduct();
        mainPage = new MainPage().clickCreateNew();
        projectPage = mainPage.clickCreateNewProject().setProjectName(project);
    }

    /*@And("^I select the product$")
    public void iSelectTheProduct(){
        projectPage = projectPage);
        mainPage = projectPage.clickOk();
    }*/
    @And("^I select the product \"([^\"]*)\"$")
    public void iSelectTheProduct(String product){
        projectPage = projectPage.setProductName(product);
        mainPage = projectPage.clickOk();
    }

    @Then("^verify that the project has the name entered$")
    public void verifyThatTheProjectHasTheNameEntered(){
    }


    @And("^Verify that is located in the Backlog option$")
    public void verifyThatIsLocatedInTheBacklogOption(){
    }
}
