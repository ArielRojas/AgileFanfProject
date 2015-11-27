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

  @TaskFilter
  Scenario Outline: Create tasks for an iteration
    When  I create the task "<task1>" for an iteration
    And I create the task "<task2>" for the same iteration
    And I create the task "<task3>" for the same iteration
    And I filter the name of a task "<task1>" in the tasks filter
    Then the task displayed should be the entered in the tasks filter

    Examples:
      | task1 | task2 | task3 |
      | task1 | task2 | task3 |


