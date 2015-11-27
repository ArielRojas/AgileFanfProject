$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/scenarios.tasks.filter.feature");
formatter.feature({
  "line": 2,
  "name": "TasksFilter",
  "description": "",
  "id": "tasksfilter",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TasksFilter"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Create tasks for an iteration",
  "description": "",
  "id": "tasksfilter;create-tasks-for-an-iteration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@TaskFilter"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I create the task \"\u003ctask1\u003e\" for an iteration",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I create the task \"\u003ctask2\u003e\" for the same iteration",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I create the task \"\u003ctask3\u003e\" for the same iteration",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I filter the name of a task \"\u003ctask1\u003e\" in the tasks filter",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the task displayed should be the entered in the tasks filter",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "tasksfilter;create-tasks-for-an-iteration;",
  "rows": [
    {
      "cells": [
        "task1",
        "task2",
        "task3"
      ],
      "line": 21,
      "id": "tasksfilter;create-tasks-for-an-iteration;;1"
    },
    {
      "cells": [
        "task1",
        "task2",
        "task3"
      ],
      "line": 22,
      "id": "tasksfilter;create-tasks-for-an-iteration;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open to Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I login as \"arielwagnerrojas@gmail.com\" with password \"nemo100\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I create a product \"product1\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I create a project \"projectA\" inside of the product",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select the product",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I create an iteration \"iteration1\" inside of the project",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select the project",
  "keyword": "And "
});
formatter.match({
  "location": "Login.goToLoginPage()"
});
formatter.result({
  "duration": 372196900,
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
  "duration": 258602900,
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
  "duration": 26991488500,
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
  "duration": 1840736200,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1161084000,
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
  "duration": 2132832700,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 14543916100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Create tasks for an iteration",
  "description": "",
  "id": "tasksfilter;create-tasks-for-an-iteration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TasksFilter"
    },
    {
      "line": 12,
      "name": "@TaskFilter"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I create the task \"task1\" for an iteration",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I create the task \"task2\" for the same iteration",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I create the task \"task3\" for the same iteration",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I filter the name of a task \"task1\" in the tasks filter",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the task displayed should be the entered in the tasks filter",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "task1",
      "offset": 19
    }
  ],
  "location": "Task.createTheTaskForAnIteration(String)"
});
formatter.result({
  "duration": 16388936800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "task2",
      "offset": 19
    }
  ],
  "location": "Task.createTheTaskForTheSameIteration(String)"
});
formatter.result({
  "duration": 2329601500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "task3",
      "offset": 19
    }
  ],
  "location": "Task.createTheTaskForTheSameIteration(String)"
});
formatter.result({
  "duration": 1705335200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "task1",
      "offset": 29
    }
  ],
  "location": "Task.filterTheNameOfATaskInTheTasksFilter(String)"
});
formatter.result({
  "duration": 14439278700,
  "status": "passed"
});
formatter.match({
  "location": "Task.verifyTaskNameDisplayedShouldBeTheEnteredInTheTasksFilter()"
});
formatter.result({
  "duration": 135297800,
  "status": "passed"
});
formatter.after({
  "duration": 21430045600,
  "status": "passed"
});
formatter.after({
  "duration": 290300,
  "status": "passed"
});
});