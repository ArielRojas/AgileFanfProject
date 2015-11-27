@TasksFilter
Feature: TasksFilter
  Background:
    Given I open to Login page
      And I login as "arielwagnerrojas@gmail.com" with password "nemo100"
      And I create a product "product1"
      And I create a project "projectA" inside of the product
      And I select the product
      And I create an iteration "iteration1" inside of the project
      And I select the project



