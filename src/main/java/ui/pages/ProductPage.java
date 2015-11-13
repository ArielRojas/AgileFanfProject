package ui.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import steps.Product;
import ui.BasePageObject;
import ui.pages.MainPage;

/**
 * Created by ArielWagner on 12/11/2015.
 */
public class ProductPage extends BasePageObject {

    @FindBy(id = "productnameinput")
    @CacheLookup
    WebElement productNameInput;

    @FindBy (xpath = "//span[contains(text(),'Create a new product')]")
    WebElement titleName;

    @FindBy(xpath = "//span[contains(text(),'Ok')]")
    WebElement OkBtn;

    @FindBy(xpath = "//span[contains(text(), 'product1')]")
    WebElement displayProduct;

    public ProductPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(titleName));
    }

    public ProductPage setProductName(String product){
        productNameInput.clear();
        productNameInput.sendKeys(product);
        return this;
    }

    public MainPage clickOk(){
        OkBtn.click();
        wait.until(ExpectedConditions.visibilityOf(displayProduct));
        return new MainPage();
    }
}
