$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/scenarios.iterations.feature");
formatter.feature({
  "line": 2,
  "name": "Iterations",
  "description": "",
  "id": "iterations",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Iteration"
    }
  ]
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Create an iteration",
  "description": "",
  "id": "iterations;create-an-iteration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@createIteration"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I create an iteration \"\u003citeration\u003e\" inside of the project",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select the project",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify that the iteration has the name entered",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "iterations;create-an-iteration;",
  "rows": [
    {
      "cells": [
        "iteration"
      ],
      "line": 17,
      "id": "iterations;create-an-iteration;;1"
    },
    {
      "cells": [
        "iteration1"
      ],
      "line": 18,
      "id": "iterations;create-an-iteration;;2"
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
formatter.match({
  "location": "Login.goToLoginPage()"
});
formatter.result({
  "duration": 427265100,
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
  "duration": 11810910900,
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
  "duration": 23069455900,
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
  "duration": 2426473200,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1287111100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Create an iteration",
  "description": "",
  "id": "iterations;create-an-iteration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@createIteration"
    },
    {
      "line": 1,
      "name": "@Iteration"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I create an iteration \"iteration1\" inside of the project",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select the project",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify that the iteration has the name entered",
  "keyword": "Then "
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
  "duration": 2185440100,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 5503444700,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.verifyIterationHasTheNameEntered()"
});
formatter.result({
  "duration": 209546300,
  "status": "passed"
});
formatter.after({
  "duration": 12895575500,
  "status": "passed"
});
});