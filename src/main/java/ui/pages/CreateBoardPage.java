package ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import ui.BasePageObject;

/**
 * Created by ArielWagner on 27/11/2015.
 */
public class CreateBoardPage extends BasePageObject {

    @FindBy(xpath = "//span[contains(text(), 'new board')]")
    WebElement createBoardWindowTitle;

    @FindBy(xpath = "//input[@name='name']")
    WebElement boardNameInput;

    @FindBy(xpath = "//span[contains(text(), 'Ok')]")
    WebElement okBtn;

    public CreateBoardPage(){
        PageFactory.initElements(driver, this);
        waitUntilPageObjectIsLoaded();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(createBoardWindowTitle));
    }

    public MainPage createBoard(String board){
        boardNameInput.sendKeys(board);
        okBtn.click();
        return new MainPage();
    }
}
