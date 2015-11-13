@story
Feature: Stories

  Background:
    Given I open to Login page
      And I login as "arielwagnerrojas@gmail.com" with password "nemo100"
      And I create a product "product1"
      And I create a project "project1" inside of the product
      And I create an iteration "iteration1" inside of the project
      And  I create a story "story1" inside of the iteration


  Scenario: Change the state of one story to In Progress
    When I change story state to "In progress"
    Then the state of the story is "In Progress"
      And The story should be located in the "In Progress" section


  Scenario: Change the state of one story to Pending
    When I change story state to "Pending"
    Then the state of the story is "Pending"
      And The story should be located in the "Pending" section


  Scenario: Change the state of one story to Bloqued
    When I change story state to "Bloqued"
    Then the state of the story is "Bloqued"
      And The story should be located in the "Bloqued" section


  Scenario: Change the state of one story to Ready
    When I change story state to "Ready"
    Then the state of the story is "Ready"
      And The story should be located in the "Ready" section


  Scenario: Change the state of one story to Done
    When I change story state to "Done"
    Then the state of the story is "Done"
      And The story should be located in the "Done" section

  Scenario: Change the state of one story to Deferred
    When I change story state to "Deferred"
    Then the state of the story is "Deferred"
      And The story should be located in the "Deferred" section