package ui.pages;

import framework.UIMethods;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 23/11/2015.
 */
public class ProductPage extends BasePageObject{

    @FindBy(xpath = "//span[contains(@title, 'edit product')]")
    WebElement productNameLbl;

    @FindBy(xpath = "//div[contains(text(), 'Actions')]")
    WebElement actions;

    @FindBy(xpath = "//a[contains(text(), 'Delete')]")
    WebElement delete;

    @FindBy(xpath = "//input[@type='checkbox']")
    WebElement confirmDelete;

    @FindBy(xpath = "//span[contains(text(), 'Ok')]")
    WebElement okBtn;

    @FindBy(xpath = "//h2[contains(text(), 'Nothing selected')]")
    WebElement nothingSelectedLbl;

    @FindBy(xpath = "//a[contains(@class, 'node-type-product')]")
    WebElement productItem;

    By displayProduct = By.xpath("//span[contains(@title, 'edit product')]");

    public ProductPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(productItem));
    }

    public MainPage deleteProduct(){
        actions.click();
        delete.click();
        confirmDelete.click();
        okBtn.click();
        wait.until(ExpectedConditions.visibilityOf(nothingSelectedLbl));
        return new MainPage();
    }

    public String getProductName(){
        return productNameLbl.getText();
    }

    public Boolean isProductNameDisplayed(){
        return UIMethods.isElementDisplayed(displayProduct);
    }
}
