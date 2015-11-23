@Product
Feature: Products
  Background:
    And I open to Login page
    And I login as "arielwagnerrojas@gmail.com" with password "nemo100"

    @createProduct
  Scenario Outline: Create a product
    When I create a product "<product>"
    Then verify that the product has the name entered

    Examples:
      | product   |
      | product1  |