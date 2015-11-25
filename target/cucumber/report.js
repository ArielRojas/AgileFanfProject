$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/scenarios.stories.feature");
formatter.feature({
  "line": 2,
  "name": "Stories",
  "description": "",
  "id": "stories",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@story"
    }
  ]
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Create a story",
  "description": "",
  "id": "stories;create-a-story",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I create a story \"\u003cstory\u003e\" inside of the iteration",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the story has the name entered",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "stories;create-a-story;",
  "rows": [
    {
      "cells": [
        "story"
      ],
      "line": 19,
      "id": "stories;create-a-story;;1"
    },
    {
      "cells": [
        "story1"
      ],
      "line": 20,
      "id": "stories;create-a-story;;2"
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
formatter.match({
  "location": "Login.goToLoginPage()"
});
formatter.result({
  "duration": 540805000,
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
  "duration": 430057300,
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
  "duration": 22976633300,
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
  "duration": 2659152600,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1165840100,
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
  "duration": 2393341100,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 10281821300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Create a story",
  "description": "",
  "id": "stories;create-a-story;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@story"
    },
    {
      "line": 13,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I create a story \"story1\" inside of the iteration",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the story has the name entered",
  "keyword": "Then "
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
  "duration": 32107827800,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStoryHasTheNameEntered()"
});
formatter.result({
  "duration": 286475000,
  "status": "passed"
});
formatter.after({
  "duration": 380100,
  "status": "passed"
});
formatter.after({
  "duration": 22166840300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Change the state of one story to In Progress",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-in-progress",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I create a story \"\u003cstory\u003e\" inside of the iteration",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I change story state to In progress",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the state of the story is In Progress",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-in-progress;",
  "rows": [
    {
      "cells": [
        "story"
      ],
      "line": 29,
      "id": "stories;change-the-state-of-one-story-to-in-progress;;1"
    },
    {
      "cells": [
        "story1"
      ],
      "line": 30,
      "id": "stories;change-the-state-of-one-story-to-in-progress;;2"
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
formatter.match({
  "location": "Login.goToLoginPage()"
});
formatter.result({
  "duration": 279900,
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
  "duration": 483093300,
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
  "duration": 21655131800,
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
  "duration": 2490812900,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1443853800,
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
  "duration": 2624499000,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 10297924200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Change the state of one story to In Progress",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-in-progress;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@story"
    },
    {
      "line": 22,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I create a story \"story1\" inside of the iteration",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I change story state to In progress",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the state of the story is In Progress",
  "keyword": "Then "
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
  "duration": 32058855500,
  "status": "passed"
});
formatter.match({
  "location": "Story.changeStoryStateToInProgress()"
});
formatter.result({
  "duration": 1374752800,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStateOfTheStoryIsInProgress()"
});
formatter.result({
  "duration": 167933700,
  "status": "passed"
});
formatter.after({
  "duration": 136500,
  "status": "passed"
});
formatter.after({
  "duration": 22699490800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Change the state of one story to Done",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-done",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I create a story \"\u003cstory\u003e\" inside of the iteration",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I change story state to Done",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the state of the story is Done",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-done;",
  "rows": [
    {
      "cells": [
        "story"
      ],
      "line": 38,
      "id": "stories;change-the-state-of-one-story-to-done;;1"
    },
    {
      "cells": [
        "story1"
      ],
      "line": 39,
      "id": "stories;change-the-state-of-one-story-to-done;;2"
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
formatter.match({
  "location": "Login.goToLoginPage()"
});
formatter.result({
  "duration": 342000,
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
  "duration": 898659700,
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
  "duration": 23586958100,
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
  "duration": 2399601400,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1303023700,
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
  "duration": 2516035700,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 10264304400,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Change the state of one story to Done",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-done;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@story"
    },
    {
      "line": 32,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I create a story \"story1\" inside of the iteration",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I change story state to Done",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the state of the story is Done",
  "keyword": "Then "
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
  "duration": 29172740800,
  "status": "passed"
});
formatter.match({
  "location": "Story.changeStoryStateToDone()"
});
formatter.result({
  "duration": 1356363300,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStateOfTheStoryIsDone()"
});
formatter.result({
  "duration": 162044100,
  "status": "passed"
});
formatter.after({
  "duration": 181600,
  "status": "passed"
});
formatter.after({
  "duration": 18939386900,
  "status": "passed"
});
});