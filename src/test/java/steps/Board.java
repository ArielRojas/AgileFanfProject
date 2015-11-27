package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ui.pages.*;

/**
 * Created by ArielWagner on 27/11/2015.
 */
public class Board {

    String board;
    MainPage mainPage;
    CreateBoardPage createBoardPage;

    @When("^I create a board \"([^\"]*)\"$")
    public void createBoard(String board){
        this.board = board;
        mainPage = new MainPage();
        mainPage.getLeftMenuPage().clickCreateNew();
        createBoardPage = mainPage.getLeftMenuPage().clickCreateNewBoard();
         mainPage = createBoardPage.createBoard(board);
    }

    @And("^I create the \"([^\"]*)\" column inside of the board$")
    public void createColumnInsideOfTheBoard(String column){

    }

    @Then("^the board should have the name placed$")
    public void verifyBoardShouldHaveTheNamePlaced(){

    }

    @And("^the board should have the columns created$")
    public void verifyBoardShouldHaveTheColumnsCreated(){

    }
}
