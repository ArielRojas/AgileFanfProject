package steps;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ui.pages.MainPage;
import ui.pages.CreateProjectPage;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

/**
 * Created by ArielWagner on 12/11/2015.
 */
public class Project {

    MainPage mainPage;
    CreateProjectPage createProjectPage;
    String projectName;

    @When("^I create a project \"([^\"]*)\" inside of the product$")
    public void createProject(String project){
        projectName = project;
        mainPage = new MainPage();
        mainPage.clickCreateNew();
        createProjectPage = mainPage.clickCreateNewProject().setProjectName(project);
    }

    @And("^I select the product$")
    public void selectProduct(){
        createProjectPage = createProjectPage.selectProduct();
        mainPage = createProjectPage.clickOk();
    }

    @Then("^verify that the project has the name entered$")
    public void verifyProjectHasTheNameEntered(){
        assertTrue(mainPage.isProjectNameDisplayed(), projectName);
        assertEquals(mainPage.getProjectItemName(), projectName);
    }

    @After(value = "@createProject", order = 999)
    public void deleteProjectAndProduct(){
        mainPage.deleteProduct();
        mainPage.logOut();
        mainPage.closeWindow();
    }
}
