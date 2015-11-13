package steps;

import cucumber.api.PendingException;
import ui.PageTransporter;
import ui.pages.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ui.pages.MainPage;
import static org.testng.Assert.assertTrue;

/**
 * Created by ArielWagner on 10/11/2015.
 */
public class Login {

    LoginPage loginPage;
    MainPage mainPage;

    @Given("^I open to Login page$")
    public void iOpenToLoginPage(){
        loginPage = PageTransporter.getInstance().navigateToLoginPage();
    }

    @When("^I login as \"([^\"]*)\" with password \"([^\"]*)\"$")
    public void iLoginAsWithPassword(String username, String password){
        mainPage = loginPage.loginSuccessful(username, password);
    }

    @When("^I login as \"([^\"]*)\" with password \"([^\"]*)\", with one incorrect$")
    public void iLoginAsWithPasswordWithOneIncorrect(String username, String password){
        loginPage = loginPage.loginFailed(username, password);
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully(){
        assertTrue(mainPage.getNameIsDisplayed(), "(Admin)");
    }

    @Then("^should display an error$")
    public void shouldDisplayAnError(){
        assertTrue(loginPage.getErrorIsDisplayed(), "Invalid username or password,");
    }
}
