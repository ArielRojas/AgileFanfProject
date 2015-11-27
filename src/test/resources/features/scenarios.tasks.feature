@Tasks
Feature: Tasks

  Background:
    Given I open to Login page
      And I login as "arielwagnerrojas@gmail.com" with password "nemo100"
      And I create a product "product1"
      And I create a project "projectA" inside of the product
      And I select the product
      And I create an iteration "iteration1" inside of the project
      And I select the project
      And I create a story "story1" inside of the iteration

  @Task
  Scenario Outline: Create tasks inside of a story
    When  I create a task "<task>" inside of a story
    Then the task has the name entered
      And the task is displayed with the state Not Started

    Examples:
      | task  |
      | task1 |

  @Task
  Scenario Outline: Create tasks inside of a story
    When  I create a task "<task>" inside of a story
      And I change task state to Ready
    Then the state of the task is Ready
      And the story state should be In Progress

    Examples:
      | task  |
      | task1 |