package steps;

import static org.testng.Assert.assertEquals;
import cucumber.api.java.After;
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
    EditBoardPage editBoardPage;
    String columnName1, columnName2, columnName3, columnName4;
    int column = 1;

    @When("^I create a board \"([^\"]*)\"$")
    public void createBoard(String board){
        this.board = board;
        mainPage = new MainPage();
        mainPage.getLeftMenuPage().clickCreateNew();
        createBoardPage = mainPage.getLeftMenuPage().clickCreateNewBoard();
        mainPage = createBoardPage.createBoard(board);
        mainPage.getLeftMenuPage().clickBoardsMenu();
        editBoardPage = mainPage.getLeftMenuPage().clickBoardLink();
    }

    @And("^I create the \"([^\"]*)\" column inside of the board$")
    public void createColumnInsideOfTheBoard(String columnName){
        switch (column){
            case 1:
                columnName1 = columnName;
                break;
            case  2:
                columnName2 = columnName;
                break;
            case 3:
                columnName3 = columnName;
                break;
            default:
                columnName4 = columnName;
                break;
        }
        column++;
        editBoardPage.createColumn(columnName);
    }

    @Then("^the board should have the name placed$")
    public void verifyBoardShouldHaveTheNamePlaced(){
        assertEquals(editBoardPage.getBoardName(), board);
    }

    @And("^the board should have the columns created$")
    public void verifyBoardShouldHaveTheColumnsCreated(){
        assertEquals(editBoardPage.getColumnNameOne(), columnName1);
        assertEquals(editBoardPage.getColumnNameTwo(), columnName2);
        assertEquals(editBoardPage.getColumnNameThree(), columnName3);
        assertEquals(editBoardPage.getColumnNameFour(), columnName4);
    }

    @After("@createBoard")
    public void deleteBoard(){
        mainPage = editBoardPage.deleteBoard();
        mainPage.getLeftMenuPage().clickBacklogsMenu();
    }
}
