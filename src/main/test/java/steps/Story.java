package steps;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
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
    IterationEditPage iterationEditPage;
    BoardPage boardPage;
    String storyName;

    @And("^I create a story \"([^\"]*)\" inside of the iteration$")
    public void createStory(String story){
        storyName = story;
        mainPage = new MainPage();
        iterationEditPage =  mainPage.clickLinkIteration();
        iterationEditPage.createStory(story);
        mainPage.clickLinkIteration();
    }

    @Then("^the story has the name entered$")
    public void verifyStoryHasTheNameEntered(){
        assertTrue(iterationEditPage.isStoryNameDisplayed(), storyName);
        assertEquals(iterationEditPage.getStoryName(), storyName);
    }

    @And("^I change story state to In progress$")
    public void changeStoryStateToInProgress(){
        iterationEditPage.clickStoreState();
        iterationEditPage.clickInProgressState();
    }

    @Then("^the state of the story is In Progress$")
    public void verifyStateOfTheStoryIsInProgress(){
        assertEquals(iterationEditPage.getInProgressState(), "In Progress");
    }

    @And("^I change story state to Pending$")
    public void changeStoryStateToPending(){
        iterationEditPage.clickStoreState();
        iterationEditPage.clickPendingState();
    }

    @Then("^the state of the story is Pending$")
    public void verifyStateOfTheStoryIsPending(){
        assertEquals(iterationEditPage.getPendingState(), "Pending");
    }

    @And("^I change story state to Bloqued$")
    public void changeStoryStateToBloqued(){
        iterationEditPage.clickStoreState();
        iterationEditPage.clickBloquedState();
    }

    @Then("^the state of the story is Bloqued$")
    public void verifyStateOfTheStoryIsBloqued(){
        assertEquals(iterationEditPage.getBloquedState(), "Blocked");
    }

    @And("^I change story state to Ready$")
    public void changeStoryStateToReady(){
        iterationEditPage.clickStoreState();
        iterationEditPage.clickReadyState();
    }

    @Then("^the state of the story is Ready$")
    public void verifyStateOfTheStoryIsReady(){
        assertEquals(iterationEditPage.getReadyState(), "Ready");
    }

    @And("^I change story state to Done$")
    public void changeStoryStateToDone(){
        iterationEditPage.clickStoreState();
        iterationEditPage.clickDoneState();
    }

    @Then("^the state of the story is Done$")
    public void verifyStateOfTheStoryIsDone(){
        assertEquals(iterationEditPage.getDoneState(), "Done");
    }

    @And("^I change story state to Deferred$")
    public void changeStoryStateToDeferred(){
        iterationEditPage.clickStoreState();
        iterationEditPage.clickDeferredState();
    }

    @Then("^the state of the story is Deferred$")
    public void verifyStateOfTheStoryIsDeferred(){
        assertEquals(iterationEditPage.getDeferredState(), "Deferred");
    }

    @After(value = "@createStory", order = 999)
    public void deleteStory(){
        mainPage.clickLinkProduct();
        mainPage.deleteProduct();
        mainPage.logOut();
    }
}
