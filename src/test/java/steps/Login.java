package steps;

import common.Error;
import cucumber.api.java.After;
import ui.pages.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ui.pages.MainPage;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

/**
 * Created by ArielWagner on 10/11/2015.
 */
public class Login {

    LoginPage loginPage;
    MainPage mainPage;
    String user;

    @Given("^I open to Login page$")
    public void goToLoginPage(){
        loginPage = new LoginPage();
    }

    @When("^I login as \"([^\"]*)\" with password \"([^\"]*)\"$")
    public void loginSuccessful(String username, String password){
        user = username;
        mainPage = loginPage.loginSuccessful(username, password);
    }

    @When("^I login as \"([^\"]*)\" with password \"([^\"]*)\", with one incorrect$")
    public void loginFailed(String username, String password){
        loginPage = loginPage.loginFailed(username, password);
    }

    @Then("^I should login successfully$")
    public void loginSuccessfully(){
        assertEquals(mainPage.getUsername(), user);
    }

    @Then("^should display an error$")
    public void anErrorIsDisplayed(){
        assertTrue(loginPage.isErrorDisplayed(), Error.loginError);
        assertEquals(loginPage.getError(), Error.loginError);
    }

    @After(value = "@Logout", order = 999)
    public void logout(){
        mainPage.logOut();
    }
}
