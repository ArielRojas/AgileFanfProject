package ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 12/11/2015.
 */
public class CreateProductPage extends BasePageObject {

    @FindBy(id = "productnameinput")
    WebElement productNameInput;

    @FindBy (xpath = "//span[contains(text(),'Create a new product')]")
    WebElement createProductWindowTitleLbl;

    @FindBy(xpath = "//span[contains(text(),'Ok')]")
    WebElement OkBtn;

    @FindBy(xpath = "//a[contains(@class, 'node-type-product')]")
    WebElement productItemLnk;

    public CreateProductPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(createProductWindowTitleLbl));
    }

    public CreateProductPage setProductName(String product){
        productNameInput.clear();
        productNameInput.sendKeys(product);
        return this;
    }

    public ProductPage clickOk(){
        OkBtn.click();
        wait.until(ExpectedConditions.visibilityOf(productItemLnk));
        return new ProductPage();
    }
}
