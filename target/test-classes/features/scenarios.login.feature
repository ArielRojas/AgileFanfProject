@Login
Feature: Login

  Scenario Outline: Enter to AgileFant with a valid account
    Given I open to Login page
    When I login as "<username>" with password "<password>"
    Then  I should login successfully

    Examples:
      | username                   | password |
      | arielwagnerrojas@gmail.com | nemo100  |
