@Iteration
Feature: Iterations
  Background:
    Given I open to Login page
    And I login as "arielwagnerrojas@gmail.com" with password "nemo100"
    And I create a product "product1"
    And I create a project "projectA" inside of the product
    And I select the product

    @createIteration
  Scenario Outline: Create an iteration
    When I create an iteration "<iteration>" inside of the project
    And I select the project
    Then verify that the iteration has the name entered

    Examples:
      | iteration  |
      | iteration1 |