package steps;

import cucumber.api.java.After;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ui.pages.MainPage;
import ui.pages.ProductPage;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

/**
 * Created by ArielWagner on 12/11/2015.
 */
public class Product {

    MainPage mainPage;
    ProductPage productPage;
    String productName;

    @When("^I create a product \"([^\"]*)\"$")
    public void createProduct(String product){
        productName = product;
        mainPage = new MainPage();
        productPage = mainPage
                .clickCreateNew()
                .clickCreateNewProduct();
        mainPage = productPage
                .setProductName(product)
                .clickOk();
    }

    @Then("^verify that the product has the name entered$")
    public void verifyProductHasTheNameEntered(){
        assertTrue(mainPage.isProductNameDisplayed(), productName);
        assertEquals(mainPage.getProductName(), productName);
    }

    @After
    public void deleteProject(){

    }
}
