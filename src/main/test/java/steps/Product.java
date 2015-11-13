package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ui.pages.MainPage;
import ui.pages.ProductPage;
import static org.testng.Assert.assertTrue;

/**
 * Created by ArielWagner on 12/11/2015.
 */
public class Product {

    MainPage mainPage;
    ProductPage productPage;

    @When("^I create a product \"([^\"]*)\"$")
    public void iCreateAProduct(String product){
        mainPage = new MainPage();
        productPage = mainPage.clickCreateNew().clickCreateNewProduct();
        mainPage = productPage.setProductName(product).clickOk();
    }

    @Then("^verify that the product has the name entered$")
    public void verifyThatTheProductHasTheNameEntered(){
        assertTrue(mainPage.getProductName(), "product1");
    }
}
