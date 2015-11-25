package common;

import ui.pages.LoginPage;
import ui.pages.MainPage;

/**
 * Created by ArielWagner on 23/11/2015.
 */
public class CommonMethods {

    public static boolean isLogin;

    public static void logIn(String username, String password){
        LoginPage loginPage = new LoginPage();
        loginPage.loginSuccessful(username, password);
        isLogin = true;
    }

    public static void logOut(){
        MainPage mainPage = new MainPage();
        mainPage.getNavigateBacklogPage().logOut();
    }

    public static boolean isLogIn(){
        return isLogin;
    }
}
