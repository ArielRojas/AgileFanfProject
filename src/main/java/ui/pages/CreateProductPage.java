package ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 12/11/2015.
 */
public class CreateProductPage extends BasePageObject {

    @FindBy(id = "productnameinput")
    @CacheLookup
    WebElement productNameInput;

    @FindBy (xpath = "//span[contains(text(),'Create a new product')]")
    WebElement createProductWindowTitleLbl;

    @FindBy(xpath = "//span[contains(text(),'Ok')]")
    WebElement OkBtn;

    /**
     * This method is the constructor
     */
    public CreateProductPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(createProductWindowTitleLbl));
    }

    /**
     * This method allows set the product name
     * @param product
     * @return the CreateProduct Page
     */
    public CreateProductPage setProductName(String product){
        productNameInput.clear();
        productNameInput.sendKeys(product);
        return this;
    }

    /**
     * This method allows click on Ok button for create a product
     * @return the Product Page
     */
    public ProductPage clickOk(){
        OkBtn.click();
        return new ProductPage();
    }
}
