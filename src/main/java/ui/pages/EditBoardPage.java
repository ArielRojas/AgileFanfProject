package ui.pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 27/11/2015.
 */
public class EditBoardPage extends BasePageObject {

    @FindBy(xpath = "//div[contains(@ng-click, 'addColumn')]")
    WebElement addColumnBtn;

    @FindBy(xpath = "//div[@class='board-title']/h2")
    WebElement boardNameLbl;

    @FindBy(xpath = "//div[contains(text(), 'set name')]")
    WebElement columnNameLbl;

    @FindBy(xpath = "//input[@name='column-name']")
    WebElement columnNameInput;

    @FindBy(xpath = "//th//div[@ng-bind='column.name']")
    WebElement columnNameOneLbl;

    @FindBy(xpath = "//th[2]//div[@ng-bind='column.name']")
    WebElement columnNameTwoLbl;

    @FindBy(xpath = "//th[3]//div[@ng-bind='column.name']")
    WebElement columnNameThreeLbl;

    @FindBy(xpath = "//th[4]//div[@ng-bind='column.name']")
    WebElement columnNameFourLbl;

    @FindBy(xpath = "//a[@data-tab='config']")
    WebElement configTab;

    @FindBy(xpath = "//a[contains(text(), 'Delete')]")
    WebElement deleteBtn;

    @FindBy(xpath = "//input[@ng-model='confirmDelete']")
    WebElement confirmDeleteCheckBox;

    @FindBy(xpath = "//span[contains(text(), 'Ok')]")
    WebElement okBtn;

    @FindBy(xpath = "//h2[contains(text(), 'Nothing selected')]")
    WebElement nothingSelectedLbl;

    /**
     * This method is constructor
     */
    public EditBoardPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(boardNameLbl));
    }

    /**
     * This method allows create a column for the board
     * @param columnName
     */
    public void createColumn(String columnName){
        addColumnBtn.click();
        wait.until(ExpectedConditions.visibilityOf(columnNameLbl));
        columnNameLbl.click();
        columnNameInput.sendKeys(columnName);
        columnNameInput.sendKeys(Keys.ENTER);
    }

    /**
     * This method allows delete the board and columns
     * @return Main page
     */
    public MainPage deleteBoard(){
        configTab.click();
        deleteBtn.click();
        confirmDeleteCheckBox.click();
        okBtn.click();
        wait.until(ExpectedConditions.visibilityOf(nothingSelectedLbl));
        return new MainPage();
    }

    /**
     * This method allows get the board name
     * @return the board name
     */
    public String getBoardName(){
        return boardNameLbl.getText();
    }

    /**
     * This method allows get the column name one
     * @return the column name one
     */
    public String getColumnNameOne(){
        return columnNameOneLbl.getText();
    }

    /**
     * This method allows get the column name two
     * @return the column name two
     */
    public String getColumnNameTwo(){
        return columnNameTwoLbl.getText();
    }

    /**
     * This method allows get the column name three
     * @return the column name three
     */
    public String getColumnNameThree(){
        return columnNameThreeLbl.getText();
    }

    /**
     * This method allows get the column name four
     * @return the column name four
     */
    public String getColumnNameFour(){
        return columnNameFourLbl.getText();
    }
}
