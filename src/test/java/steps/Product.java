package steps;

import cucumber.api.java.After;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ui.pages.MainPage;
import ui.pages.CreateProductPage;
import ui.pages.ProductPage;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

/**
 * Created by ArielWagner on 12/11/2015.
 */
public class Product {

    MainPage mainPage;
    CreateProductPage createProductPage;
    ProductPage productPage;
    String productName;

    @When("^I create a product \"([^\"]*)\"$")
    public void createProduct(String product){
        productName = product;
        mainPage = new MainPage();
        mainPage.clickCreateNew();
        createProductPage = mainPage
                .clickCreateNewProduct();
        productPage = createProductPage
                .setProductName(product)
                .clickOk();
    }

    @Then("^verify that the product has the name entered$")
    public void verifyProductHasTheNameEntered(){
        assertTrue(productPage.isProductNameDisplayed(), productName);
        assertEquals(productPage.getProductName(), productName);
    }

    @After(value = "@createProduct", order = 999)
    public void deleteProject(){
        mainPage = productPage.deleteProduct();
        mainPage.logOut();
    }
}
