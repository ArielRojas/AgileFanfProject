package common;

import ui.pages.LoginPage;
import ui.pages.MainPage;

/**
 * Created by ArielWagner on 23/11/2015.
 */
public class CommonMethods {

    public static boolean isLogin;
    public static boolean isLogOut;

    /**
     * This method allows log in with an username and password
     * @param username
     * @param password
     */
    public static void logIn(String username, String password){
        LoginPage loginPage = new LoginPage();
        loginPage.loginSuccessful(username, password);
        isLogin = true;
        isLogOut =false;
    }

    /**
     * This method allows log out
     */
    public static void logOut(){
        MainPage mainPage = new MainPage();
        mainPage.getNavigateBacklogPage().logOut();
        isLogin = false;
        isLogOut =true;
    }

    /**
     * This method allows verify if logged
     * @return false or true
     */
    public static boolean isLogIn(){
        return isLogin;
    }
}
