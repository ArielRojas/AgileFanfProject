@task
Feature: Tasks
  Scenario Outline: Create tasks inside of a story
    Given I create a product "<product>"
      And I create a project "<project>" for the product
      And I create an iteration "<iteration>" inside of the project
      And I create a story "<story>" inside of the iteration
    When  I create a task "<task>" inside of a story
    Then the task is displayed inside of the story
      And the task is displayed with the state "Not Started"

    Examples:
      | product   | project   | iteration | story   | task  |
      | product1  | projectA  | sprint1   | story1  | task1 |
      | product2  | projectB  | sprint2   | story2  | task2 |

  Scenario Outline: Change the state of a task a "In progress"
    Given I create product "<product>"
      And I create a project "<project>" for the product
      And I create an iteration "<iteration>" inside of the project
      And I create a story "<story>" inside of the iteration
      And I create a task "<task>" inside of a story
    When I change task state to "In Progress"
    Then the state of the story should be "In Progress"

  Examples:
  | product   | project   | iteration | story   | task  |
  | product1  | projectA  | sprint1   | story1  | task1 |
  | product2  | projectB  | sprint2   | story2  | task2 |

  Scenario Outline: Change the state of a task a "Pending"
    Given I create product "<product>"
      And I create a project "<project>" for the product
      And I create an iteration "<iteration>" inside of the project
      And I create a story "<story>" inside of the iteration
      And I create a task "<task>" inside of a story
    When I change task state to "Pending"
    Then the state of the story should be "Pending"

  Examples:
  | product   | project   | iteration | story   | task  |
  | product1  | projectA  | sprint1   | story1  | task1 |
  | product2  | projectB  | sprint2   | story2  | task2 |

  Scenario Outline: Change the state of a task a Bloqued
    Given I create product "<product>"
      And I create a project "<project>" for the product
      And I create an iteration "<iteration>" inside of the project
      And I create a story "<story>" inside of the iteration
      And I create a task "<task>" inside of a story
    When I change task state to "Bloqued"
    Then the state of the story should be "Bloqued"

  Examples:
  | product   | project   | iteration | story   | task  |
  | product1  | projectA  | sprint1   | story1  | task1 |
  | product2  | projectB  | sprint2   | story2  | task2 |

  Scenario Outline: Change the state of a task a Ready
    Given I create product "<product>"
      And I create a project "<project>" for the product
      And I create an iteration "<iteration>" inside of the project
      And I create a story "<story>" inside of the iteration
      And I create a task "<task>" inside of a story
    When I change task state to "Ready"
    Then the state of the story should be "Ready"

  Examples:
  | product   | project   | iteration | story   | task  |
  | product1  | projectA  | sprint1   | story1  | task1 |
  | product2  | projectB  | sprint2   | story2  | task2 |

  Scenario Outline: Change the state of a task a Done
    Given I create product "<product>"
      And I create a project "<project>" for the product
      And I create an iteration "<iteration>" inside of the project
      And I create a story "<story>" inside of the iteration
      And I create a task "<task>" inside of a story
    When I change task state to "Done"
    Then the state of the story should be "Done"

  Examples:
  | product   | project   | iteration | story   | task  |
  | product1  | projectA  | sprint1   | story1  | task1 |
  | product2  | projectB  | sprint2   | story2  | task2 |


  Scenario Outline: Change the state of a task a Deferred
    Given I create product "<product>"
      And I create a project "<project>" for the product
      And I create an iteration "<iteration>" inside of the project
      And I create a story "<story>" inside of the iteration
      And I create a task "<task>" inside of a story
    When I change task state to "Deferred"
    Then the state of the story should be "Deferred"

  Examples:
  | product   | project   | iteration | story   | task  |
  | product1  | projectA  | sprint1   | story1  | task1 |
  | product2  | projectB  | sprint2   | story2  | task2 |