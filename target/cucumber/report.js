$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/scenarios.tasks.feature");
formatter.feature({
  "line": 2,
  "name": "Tasks",
  "description": "",
  "id": "tasks",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Tasks"
    }
  ]
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Create tasks inside of a story",
  "description": "",
  "id": "tasks;create-tasks-inside-of-a-story",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I create a task \"\u003ctask\u003e\" inside of a story",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the task has the name entered",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "the task is displayed with the state Not Started",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "tasks;create-tasks-inside-of-a-story;",
  "rows": [
    {
      "cells": [
        "task"
      ],
      "line": 20,
      "id": "tasks;create-tasks-inside-of-a-story;;1"
    },
    {
      "cells": [
        "task1"
      ],
      "line": 21,
      "id": "tasks;create-tasks-inside-of-a-story;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open to Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login as \"arielwagnerrojas@gmail.com\" with password \"nemo100\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I create a product \"product1\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I create a project \"projectA\" inside of the product",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I create an iteration \"iteration1\" inside of the project",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select the project",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I create a story \"story1\" inside of the iteration",
  "keyword": "And "
});
formatter.match({
  "location": "Login.goToLoginPage()"
});
formatter.result({
  "duration": 391998600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arielwagnerrojas@gmail.com",
      "offset": 12
    },
    {
      "val": "nemo100",
      "offset": 55
    }
  ],
  "location": "Login.loginSuccessful(String,String)"
});
formatter.result({
  "duration": 294724300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product1",
      "offset": 20
    }
  ],
  "location": "Product.createProduct(String)"
});
formatter.result({
  "duration": 23997371000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "projectA",
      "offset": 20
    }
  ],
  "location": "Project.createProject(String)"
});
formatter.result({
  "duration": 1977226700,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1152474400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iteration1",
      "offset": 23
    }
  ],
  "location": "Iteration.createIteration(String)"
});
formatter.result({
  "duration": 2393782500,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 12810915800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "story1",
      "offset": 18
    }
  ],
  "location": "Story.createStory(String)"
});
formatter.result({
  "duration": 31293064100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Create tasks inside of a story",
  "description": "",
  "id": "tasks;create-tasks-inside-of-a-story;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Tasks"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I create a task \"task1\" inside of a story",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the task has the name entered",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "the task is displayed with the state Not Started",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "task1",
      "offset": 17
    }
  ],
  "location": "Task.createTask(String)"
});
formatter.result({
  "duration": 7710711200,
  "status": "passed"
});
formatter.match({
  "location": "Task.verifyTaskHasTheNameEntered()"
});
formatter.result({
  "duration": 134741200,
  "status": "passed"
});
formatter.match({
  "location": "Task.verifyTaskIsDisplayedWithTheStateNotStarted()"
});
formatter.result({
  "duration": 131299600,
  "status": "passed"
});
formatter.after({
  "duration": 468500,
  "status": "passed"
});
formatter.after({
  "duration": 23876167300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Create tasks inside of a story",
  "description": "",
  "id": "tasks;create-tasks-inside-of-a-story",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I create a task \"\u003ctask\u003e\" inside of a story",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I change task state to Ready",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the state of the task is Ready",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "the story state should be In Progress",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "tasks;create-tasks-inside-of-a-story;",
  "rows": [
    {
      "cells": [
        "task"
      ],
      "line": 30,
      "id": "tasks;create-tasks-inside-of-a-story;;1"
    },
    {
      "cells": [
        "task1"
      ],
      "line": 31,
      "id": "tasks;create-tasks-inside-of-a-story;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open to Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login as \"arielwagnerrojas@gmail.com\" with password \"nemo100\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I create a product \"product1\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I create a project \"projectA\" inside of the product",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select the product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I create an iteration \"iteration1\" inside of the project",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select the project",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I create a story \"story1\" inside of the iteration",
  "keyword": "And "
});
formatter.match({
  "location": "Login.goToLoginPage()"
});
formatter.result({
  "duration": 428000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arielwagnerrojas@gmail.com",
      "offset": 12
    },
    {
      "val": "nemo100",
      "offset": 55
    }
  ],
  "location": "Login.loginSuccessful(String,String)"
});
formatter.result({
  "duration": 339941000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product1",
      "offset": 20
    }
  ],
  "location": "Product.createProduct(String)"
});
formatter.result({
  "duration": 23774203700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "projectA",
      "offset": 20
    }
  ],
  "location": "Project.createProject(String)"
});
formatter.result({
  "duration": 2318599000,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 2340496300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iteration1",
      "offset": 23
    }
  ],
  "location": "Iteration.createIteration(String)"
});
formatter.result({
  "duration": 2142559000,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 13335581700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "story1",
      "offset": 18
    }
  ],
  "location": "Story.createStory(String)"
});
formatter.result({
  "duration": 31360117000,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Create tasks inside of a story",
  "description": "",
  "id": "tasks;create-tasks-inside-of-a-story;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Tasks"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I create a task \"task1\" inside of a story",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I change task state to Ready",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the state of the task is Ready",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "the story state should be In Progress",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "task1",
      "offset": 17
    }
  ],
  "location": "Task.createTask(String)"
});
formatter.result({
  "duration": 6515864300,
  "status": "passed"
});
formatter.match({
  "location": "Task.changeTaskStateToReady()"
});
formatter.result({
  "duration": 5890271600,
  "status": "passed"
});
formatter.match({
  "location": "Task.verifyStateOfTheTaskIsReady()"
});
formatter.result({
  "duration": 192529600,
  "status": "passed"
});
formatter.match({
  "location": "Task.verifyStoryStateShouldBeInProgress()"
});
formatter.result({
  "duration": 107339800,
  "status": "passed"
});
formatter.after({
  "duration": 189500,
  "status": "passed"
});
formatter.after({
  "duration": 23808429900,
  "status": "passed"
});
});