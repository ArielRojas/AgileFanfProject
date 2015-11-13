@Login
Feature: Login

  Scenario Outline: Enter to AgileFant with a valid account
    Given I open to Login page
    When I login as "<username>" with password "<password>"
    Then  I should login successfully

    Examples:
      | username                   | password |
      | arielwagnerrojas@gmail.com | nemo100  |

    Scenario Outline: Enter to AgileFant with a invalid account
      Given I open to Login page
      When I login as "<username>" with password "<password>", with one incorrect
      Then should display an error

      Examples:
        | username                    | password  |
        | arielwagnerrojas@gmail.com  | Client123 |
        | test@gmail.com              | nemo100   |