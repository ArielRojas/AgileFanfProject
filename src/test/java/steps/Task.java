package steps;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.testng.Assert.assertEquals;

import ui.pages.*;

/**
 * Created by ArielWagner on 25/11/2015.
 */
public class Task {

    MainPage mainPage;
    ProductPage productPage;
    BoardPage boardPage;
    IterationPage iterationPage;
    StoryPage storyPage;
    String task;

    @When("^I create a task \"([^\"]*)\" inside of a story$")
    public void createTask(String task){
        this.task = task;
        iterationPage = new IterationPage();
        boardPage = iterationPage.clickLinkBoard();
        storyPage = boardPage.clickStoryCard();
        storyPage.clickTasksTab();
        storyPage.createTask(task);
    }

    @Then("^the task has the name entered$")
    public void verifyTaskHasTheNameEntered(){
        assertEquals(storyPage.getTaskName(), task);
    }

    @And("^the task is displayed with the state Not Started$")
    public void verifyTaskIsDisplayedWithTheStateNotStarted(){
        assertEquals(storyPage.getTaskState(), "Not Started");
    }

    @And("^I change task state to Ready$")
    public void changeTaskStateToReady(){
        iterationPage = storyPage.clickCloseBtn();
        storyPage = boardPage.clickStoryCard();
        storyPage.clickTasksTab();
        storyPage.clickTaskState();
        storyPage.changeToReadyState();
        storyPage = storyPage.clickYesBtn();
    }

    @Then("^the state of the task is Ready$")
    public void verifyStateOfTheTaskIsReady(){
        assertEquals(storyPage.getReadyStateTask(), "Ready");
    }

    @And("^the story state should be In Progress$")
    public void verifyStoryStateShouldBeInProgress(){
        assertEquals(storyPage.getInProgressStoryState(), "In Progress");
    }

    @After("@Task")
    public void deleteTaskAndProduct(){
        iterationPage = storyPage.clickCloseBtn();
        mainPage = new MainPage();
        productPage = mainPage.getLeftMenuPage().clickLinkProduct();
        mainPage = productPage.deleteProduct();
    }
}
