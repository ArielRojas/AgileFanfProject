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
  "name": "",
  "description": "",
  "id": "stories;",
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
  "id": "stories;;",
  "rows": [
    {
      "cells": [
        "story"
      ],
      "line": 19,
      "id": "stories;;;1"
    },
    {
      "cells": [
        "story1"
      ],
      "line": 20,
      "id": "stories;;;2"
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
  "duration": 272444700,
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
  "duration": 16068139200,
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
  "duration": 18721999200,
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
  "duration": 2188778600,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1109369000,
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
  "duration": 2243500800,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 5472865900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "",
  "description": "",
  "id": "stories;;;2",
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
  "duration": 29576250800,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStoryHasTheNameEntered()"
});
formatter.result({
  "duration": 219598100,
  "status": "passed"
});
formatter.after({
  "duration": 23379917700,
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
  "duration": 93646000,
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
  "duration": 10631192600,
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
  "duration": 17069101300,
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
  "duration": 2282691500,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 3118213700,
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
  "duration": 1821879200,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 5876579200,
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
  "duration": 28807214900,
  "status": "passed"
});
formatter.match({
  "location": "Story.changeStoryStateToInProgress()"
});
formatter.result({
  "duration": 1168723900,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStateOfTheStoryIsInProgress()"
});
formatter.result({
  "duration": 143525800,
  "status": "passed"
});
formatter.after({
  "duration": 21537827300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Change the state of one story to Pending",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-pending",
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
  "name": "I change story state to Pending",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the state of the story is Pending",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-pending;",
  "rows": [
    {
      "cells": [
        "story"
      ],
      "line": 39,
      "id": "stories;change-the-state-of-one-story-to-pending;;1"
    },
    {
      "cells": [
        "story1"
      ],
      "line": 40,
      "id": "stories;change-the-state-of-one-story-to-pending;;2"
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
  "duration": 111392500,
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
  "duration": 10870228600,
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
  "duration": 16200084800,
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
  "duration": 2282301800,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1007033600,
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
  "duration": 2639138100,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 5837216700,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Change the state of one story to Pending",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-pending;;2",
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
  "name": "I change story state to Pending",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the state of the story is Pending",
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
  "duration": 26471340700,
  "status": "passed"
});
formatter.match({
  "location": "Story.changeStoryStateToPending()"
});
formatter.result({
  "duration": 1430858300,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStateOfTheStoryIsPending()"
});
formatter.result({
  "duration": 207645600,
  "status": "passed"
});
formatter.after({
  "duration": 20018529700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Change the state of one story to Bloqued",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-bloqued",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I create a story \"\u003cstory\u003e\" inside of the iteration",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I change story state to Bloqued",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the state of the story is Bloqued",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-bloqued;",
  "rows": [
    {
      "cells": [
        "story"
      ],
      "line": 49,
      "id": "stories;change-the-state-of-one-story-to-bloqued;;1"
    },
    {
      "cells": [
        "story1"
      ],
      "line": 50,
      "id": "stories;change-the-state-of-one-story-to-bloqued;;2"
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
  "duration": 121921200,
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
  "duration": 8711309100,
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
  "duration": 14499589400,
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
  "duration": 2453971400,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 985791100,
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
  "duration": 2309694500,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 6965710800,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Change the state of one story to Bloqued",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-bloqued;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@story"
    },
    {
      "line": 42,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "I create a story \"story1\" inside of the iteration",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I change story state to Bloqued",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the state of the story is Bloqued",
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
  "duration": 29557174100,
  "status": "passed"
});
formatter.match({
  "location": "Story.changeStoryStateToBloqued()"
});
formatter.result({
  "duration": 1400486100,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStateOfTheStoryIsBloqued()"
});
formatter.result({
  "duration": 157835700,
  "status": "passed"
});
formatter.after({
  "duration": 23956968600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "Change the state of one story to Bloqued",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-bloqued",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 52,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "I create a story \"\u003cstory\u003e\" inside of the iteration",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I change story state to Ready",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the state of the story is Ready",
  "keyword": "Then "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-bloqued;",
  "rows": [
    {
      "cells": [
        "story"
      ],
      "line": 59,
      "id": "stories;change-the-state-of-one-story-to-bloqued;;1"
    },
    {
      "cells": [
        "story1"
      ],
      "line": 60,
      "id": "stories;change-the-state-of-one-story-to-bloqued;;2"
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
  "duration": 111838900,
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
  "duration": 11937723200,
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
  "duration": 15898807300,
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
  "duration": 2166711100,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1375821700,
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
  "duration": 3506824700,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 5577183300,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Change the state of one story to Bloqued",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-bloqued;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@story"
    },
    {
      "line": 52,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "I create a story \"story1\" inside of the iteration",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I change story state to Ready",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the state of the story is Ready",
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
  "duration": 28102421900,
  "status": "passed"
});
formatter.match({
  "location": "Story.changeStoryStateToReady()"
});
formatter.result({
  "duration": 1276790600,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStateOfTheStoryIsReady()"
});
formatter.result({
  "duration": 135387000,
  "status": "passed"
});
formatter.after({
  "duration": 22723264600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "Change the state of one story to Done",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-done",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I create a story \"\u003cstory\u003e\" inside of the iteration",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "I change story state to Done",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the state of the story is Done",
  "keyword": "Then "
});
formatter.examples({
  "line": 67,
  "name": "",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-done;",
  "rows": [
    {
      "cells": [
        "story"
      ],
      "line": 68,
      "id": "stories;change-the-state-of-one-story-to-done;;1"
    },
    {
      "cells": [
        "story1"
      ],
      "line": 69,
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
  "duration": 74383400,
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
  "duration": 9997272100,
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
  "duration": 18673414600,
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
  "duration": 2543020800,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1142448100,
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
  "duration": 2441153100,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 5353934200,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
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
      "line": 62,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I create a story \"story1\" inside of the iteration",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "I change story state to Done",
  "keyword": "And "
});
formatter.step({
  "line": 66,
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
  "duration": 29879660600,
  "status": "passed"
});
formatter.match({
  "location": "Story.changeStoryStateToDone()"
});
formatter.result({
  "duration": 1204271700,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStateOfTheStoryIsDone()"
});
formatter.result({
  "duration": 160737700,
  "status": "passed"
});
formatter.after({
  "duration": 28774654200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 72,
  "name": "Change the state of one story to Deferred",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-deferred",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "I create a story \"\u003cstory\u003e\" inside of the iteration",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I change story state to Deferred",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the state of the story is Deferred",
  "keyword": "Then "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-deferred;",
  "rows": [
    {
      "cells": [
        "story"
      ],
      "line": 78,
      "id": "stories;change-the-state-of-one-story-to-deferred;;1"
    },
    {
      "cells": [
        "story1"
      ],
      "line": 79,
      "id": "stories;change-the-state-of-one-story-to-deferred;;2"
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
  "duration": 146653100,
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
  "duration": 12461779500,
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
  "duration": 15982882900,
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
  "duration": 2276043500,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1300191300,
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
  "duration": 2732944300,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 5640884500,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Change the state of one story to Deferred",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-deferred;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@story"
    },
    {
      "line": 71,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "I create a story \"story1\" inside of the iteration",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I change story state to Deferred",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the state of the story is Deferred",
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
  "duration": 28356384500,
  "status": "passed"
});
formatter.match({
  "location": "Story.changeStoryStateToDeferred()"
});
formatter.result({
  "duration": 1264484300,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStateOfTheStoryIsDeferred()"
});
formatter.result({
  "duration": 155194900,
  "status": "passed"
});
formatter.after({
  "duration": 21861167600,
  "status": "passed"
});
});