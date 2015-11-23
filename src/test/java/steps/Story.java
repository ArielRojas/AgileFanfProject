package steps;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import ui.pages.BoardPage;
import ui.pages.MainPage;
import ui.pages.IterationPage;
import ui.pages.ProductPage;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

/**
 * Created by ArielWagner on 13/11/2015.
 */
public class Story {

    MainPage mainPage;
    IterationPage iterationPage;
    BoardPage boardPage;
    ProductPage productPage;
    String storyName;

    @And("^I create a story \"([^\"]*)\" inside of the iteration$")
    public void createStory(String story){
        storyName = story;
        mainPage = new MainPage();
        iterationPage =  mainPage.clickLinkIteration();
        iterationPage.createStory(story);
        mainPage.clickLinkIteration();
    }

    @Then("^the story has the name entered$")
    public void verifyStoryHasTheNameEntered(){
        assertTrue(iterationPage.isStoryNameDisplayed(), storyName);
        assertEquals(iterationPage.getStoryName(), storyName);
    }

    @And("^I change story state to In progress$")
    public void changeStoryStateToInProgress(){
        iterationPage.clickStoreState();
        iterationPage.clickInProgressState();
    }

    @Then("^the state of the story is In Progress$")
    public void verifyStateOfTheStoryIsInProgress(){
        assertEquals(iterationPage.getInProgressState(), "In Progress");
    }

    @And("^I change story state to Pending$")
    public void changeStoryStateToPending(){
        iterationPage.clickStoreState();
        iterationPage.clickPendingState();
    }

    @Then("^the state of the story is Pending$")
    public void verifyStateOfTheStoryIsPending(){
        assertEquals(iterationPage.getPendingState(), "Pending");
    }

    @And("^I change story state to Bloqued$")
    public void changeStoryStateToBloqued(){
        iterationPage.clickStoreState();
        iterationPage.clickBloquedState();
    }

    @Then("^the state of the story is Bloqued$")
    public void verifyStateOfTheStoryIsBloqued(){
        assertEquals(iterationPage.getBloquedState(), "Blocked");
    }

    @And("^I change story state to Ready$")
    public void changeStoryStateToReady(){
        iterationPage.clickStoreState();
        iterationPage.clickReadyState();
    }

    @Then("^the state of the story is Ready$")
    public void verifyStateOfTheStoryIsReady(){
        assertEquals(iterationPage.getReadyState(), "Ready");
    }

    @And("^I change story state to Done$")
    public void changeStoryStateToDone(){
        iterationPage.clickStoreState();
        iterationPage.clickDoneState();
    }

    @Then("^the state of the story is Done$")
    public void verifyStateOfTheStoryIsDone(){
        assertEquals(iterationPage.getDoneState(), "Done");
    }

    @And("^I change story state to Deferred$")
    public void changeStoryStateToDeferred(){
        iterationPage.clickStoreState();
        iterationPage.clickDeferredState();
    }

    @Then("^the state of the story is Deferred$")
    public void verifyStateOfTheStoryIsDeferred(){
        assertEquals(iterationPage.getDeferredState(), "Deferred");
    }

    @After(value = "@createStory", order = 999)
    public void deleteStory(){
        productPage = mainPage.clickLinkProduct();
        mainPage = productPage.deleteProduct();
        mainPage.logOut();
    }
}
