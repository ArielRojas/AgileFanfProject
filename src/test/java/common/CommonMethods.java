package common;

import ui.pages.LoginPage;
import ui.pages.MainPage;

/**
 * Created by ArielWagner on 23/11/2015.
 */
public class CommonMethods {

    public static void logIn(String username, String password){
        LoginPage loginPage = new LoginPage();
         MainPage mainPage = loginPage.loginSuccessful(username, password);
    }
    public static void logOut(){
        MainPage mainPage = new MainPage();
        mainPage.getNavigateBacklogPage().logOut();
    }
}
