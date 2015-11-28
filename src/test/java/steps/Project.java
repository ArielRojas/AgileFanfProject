package steps;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ui.pages.MainPage;
import ui.pages.CreateProjectPage;
import ui.pages.ProductPage;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

/**
 * Created by ArielWagner on 12/11/2015.
 */
public class Project {

    MainPage mainPage;
    CreateProjectPage createProjectPage;
    ProductPage productPage;
    String projectName;

    @When("^I create a project \"([^\"]*)\" inside of the product$")
    public void createProject(String project){
        projectName = project;
        mainPage = new MainPage();
        mainPage.getLeftMenuPage().clickCreateNew();
        createProjectPage = mainPage.getLeftMenuPage().clickCreateNewProject().setProjectName(project);
    }

    @And("^I select the product$")
    public void selectProduct(){
        createProjectPage = createProjectPage.selectProduct();
        productPage = createProjectPage.clickOk();
    }

    @Then("^verify that the project has the name entered$")
    public void verifyProjectHasTheNameEntered(){
        assertTrue(mainPage.getLeftMenuPage().isProjectNameDisplayed(), projectName);
        assertEquals(mainPage.getLeftMenuPage().getProjectItemName(), projectName);
    }

    @After("@createProject")
    public void deleteProjectAndProduct(){
        mainPage = productPage.deleteProduct();
    }
}
