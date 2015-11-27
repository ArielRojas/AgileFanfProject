@Board
Feature: Board
  Background:
    Given I open to Login page
      And I login as "arielwagnerrojas@gmail.com" with password "nemo100"

  @createBoard
  Scenario Outline: Create a new board
    When I create a board "<board>"
      And I create the "Product Backlog" column inside of the board
      And I create the "Scrum Backlog" column inside of the board
      And I create the "Current" column inside of the board
      And I create the "Done" column inside of the board
    Then the board should have the name placed
      And the board should have the columns created

    Examples:
      | board       |
      | scrum board |