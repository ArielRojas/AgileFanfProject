@story
Feature: Stories

  Background:
    Given I open to Login page
      And I login as "arielwagnerrojas@gmail.com" with password "nemo100"
      And I create a product "product1"
      And I create a project "projectA" inside of the product
      And I select the product
      And I create an iteration "iteration1" inside of the project
      And I select the project

    @createStory
    Scenario Outline:
      When I create a story "<story>" inside of the iteration
      Then the story has the name entered

     Examples:
      |  story   |
      |  story1  |

  @createStory
  Scenario Outline: Change the state of one story to In Progress
    When I create a story "<story>" inside of the iteration
    And  I change story state to In progress
    Then the state of the story is In Progress

    Examples:
      |  story   |
      |  story1  |

  @createStory
  Scenario Outline: Change the state of one story to Pending
    When I create a story "<story>" inside of the iteration
    And I change story state to Pending
    Then the state of the story is Pending

    Examples:
      |  story   |
      |  story1  |

  @createStory
  Scenario Outline: Change the state of one story to Bloqued
    When I create a story "<story>" inside of the iteration
    When I change story state to Bloqued
    Then the state of the story is Bloqued

    Examples:
      |  story   |
      |  story1  |

  @createStory
  Scenario Outline: Change the state of one story to Bloqued
    When I create a story "<story>" inside of the iteration
    When I change story state to Ready
    Then the state of the story is Ready

    Examples:
      |  story   |
      |  story1  |
