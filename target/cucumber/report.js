$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/scenarios.projects.feature");
formatter.feature({
  "line": 2,
  "name": "Projects",
  "description": "",
  "id": "projects",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Project"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Create a project",
  "description": "",
  "id": "projects;create-a-project",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@createProject"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I create a project \"\u003cproject\u003e\" inside of the product",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I select the product",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify that the project has the name entered",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "projects;create-a-project;",
  "rows": [
    {
      "cells": [
        "project"
      ],
      "line": 15,
      "id": "projects;create-a-project;;1"
    },
    {
      "cells": [
        "projectA"
      ],
      "line": 16,
      "id": "projects;create-a-project;;2"
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
formatter.match({
  "location": "Login.goToLoginPage()"
});
formatter.result({
  "duration": 498302600,
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
  "duration": 17858242100,
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
  "duration": 18719243500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Create a project",
  "description": "",
  "id": "projects;create-a-project;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@createProject"
    },
    {
      "line": 1,
      "name": "@Project"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I create a project \"projectA\" inside of the product",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I select the product",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify that the project has the name entered",
  "keyword": "Then "
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
  "duration": 2341985600,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1314372000,
  "status": "passed"
});
formatter.match({
  "location": "Project.verifyProjectHasTheNameEntered()"
});
formatter.result({
  "duration": 701421400,
  "status": "passed"
});
formatter.after({
  "duration": 13127806800,
  "status": "passed"
});
});