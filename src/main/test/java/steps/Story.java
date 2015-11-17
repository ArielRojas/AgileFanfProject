package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import ui.pages.MainPage;
import ui.pages.StoryPage;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

/**
 * Created by ArielWagner on 13/11/2015.
 */
public class Story {

    MainPage mainPage;
    StoryPage storyPage;
    String storyName;

    @And("^I create a story \"([^\"]*)\" inside of the iteration$")
    public void iCreateAStoryInsideOfTheIteration(String story){
        storyName = story;
        mainPage = new MainPage().clickCreateNew();
        storyPage = mainPage
                .clickCreateNewStory()
                .setStoryName(story)
                .selectIteration();
                //.selectDueDate();
        mainPage = storyPage.clickOk();
    }

    @Then("^the story has the name entered$")
    public void theStoryHasTheNameEntered(){
        assertTrue(mainPage.isStoryNameDisplayed(), storyName);
        assertEquals(mainPage.getStoryName(), storyName);
        mainPage.clickLinkIteration();
        mainPage.clickLinkIteration();
        //mainPage.setEditValue();
        mainPage.clickLinkBoard();
    }

    @And("^I change story state to In progress$")
    public void iChangeStoryStateToInProgress(){
    }

    @Then("^the state of the story is In Progress$")
    public void theStateOfTheStoryIsInProgress(){
    }

    @And("^The story should be located in the In Progress section$")
    public void theStoryShouldBeLocatedInTheInProgressSection(){
    }
}
