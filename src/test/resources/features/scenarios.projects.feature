@Project
Feature: Projects
  Background:
    Given I open to Login page
    And I login as "arielwagnerrojas@gmail.com" with password "nemo100"
    And I create a product "product1"

  @createProject
  Scenario Outline: Create a project
    When I create a project "<project>" inside of the product
    And I select the product
    Then verify that the project has the name entered

    Examples:
      | project  |
      | projectA |