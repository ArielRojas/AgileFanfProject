package steps;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import ui.pages.BoardPage;
import ui.pages.MainPage;
import ui.pages.IterationEditPage;
import ui.pages.StoryPage;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

/**
 * Created by ArielWagner on 13/11/2015.
 */
public class Story {

    MainPage mainPage;
    StoryPage storyPage;
    BoardPage boardPage;
    IterationEditPage iterationEditPage;
    String storyName;

    @And("^I create a story \"([^\"]*)\" inside of the iteration$")
    public void createStory(String story){
        storyName = story;
        mainPage = new MainPage().clickCreateNew();
        storyPage = mainPage
                .clickCreateNewStory()
                .setStoryName(story)
                .selectIteration()
                .selectDueDate();
        mainPage = storyPage.clickOk();
    }

    @Then("^the story has the name entered$")
    public void verifyStoryHasTheNameEntered(){
        assertTrue(mainPage.isStoryNameDisplayed(), storyName);
        assertEquals(mainPage.getStoryName(), storyName);
    }

    @And("^I change story state to In progress$")
    public void changeStoryStateToInProgress(){
        iterationEditPage = mainPage.clickLinkIteration();
        iterationEditPage.clickStoreState();
        iterationEditPage.clickInProgressState();
    }

    @Then("^the state of the story is In Progress$")
    public void verifyStateOfTheStoryIsInProgress(){
        boardPage = iterationEditPage.clickLinkBoard();
        assertEquals(boardPage.getStateInProgress(), "In Progress");
    }

    @And("^The story should be located in the In Progress section$")
    public void verifyStoryLocatedInTheInProgressSection(){
    }

    @And("^I change story state to Pending$")
    public void changeStoryStateToPending(){
        iterationEditPage = mainPage.clickLinkIteration();
        iterationEditPage.clickStoreState();
        iterationEditPage.clickPendingState();
    }

    @Then("^the state of the story is Pending$")
    public void verifyStateOfTheStoryIsPending(){
        boardPage = iterationEditPage.clickLinkBoard();
        assertEquals(boardPage.getStatePending(), "Pending");
    }

    @And("^The story should be located in the Pending section$")
    public void verifyStoryLocatedInThePendingSection(){
    }
}
