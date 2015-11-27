$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("scenarios.iterations.feature");
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
  "duration": 1047939700,
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
  "duration": 457406700,
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
  "duration": 23386132600,
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
  "duration": 2240517200,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1140910600,
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
  "duration": 2322001200,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 13379108600,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.verifyIterationHasTheNameEntered()"
});
formatter.result({
  "duration": 237216900,
  "status": "passed"
});
formatter.after({
  "duration": 343700,
  "status": "passed"
});
formatter.after({
  "duration": 10254217400,
  "status": "passed"
});
formatter.uri("scenarios.login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Enter to AgileFant with a valid account",
  "description": "",
  "id": "login;enter-to-agilefant-with-a-valid-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open to Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login as \"\u003cusername\u003e\" with password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login;enter-to-agilefant-with-a-valid-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "login;enter-to-agilefant-with-a-valid-account;;1"
    },
    {
      "cells": [
        "arielwagnerrojas@gmail.com",
        "nemo100"
      ],
      "line": 11,
      "id": "login;enter-to-agilefant-with-a-valid-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Enter to AgileFant with a valid account",
  "description": "",
  "id": "login;enter-to-agilefant-with-a-valid-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open to Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login as \"arielwagnerrojas@gmail.com\" with password \"nemo100\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.goToLoginPage()"
});
formatter.result({
  "duration": 511000,
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
  "duration": 1451144500,
  "status": "passed"
});
formatter.match({
  "location": "Login.loginSuccessfully()"
});
formatter.result({
  "duration": 125879600,
  "status": "passed"
});
formatter.after({
  "duration": 182100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Enter to AgileFant with a invalid account",
  "description": "",
  "id": "login;enter-to-agilefant-with-a-invalid-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@LoginError"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I open to Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I login as \"\u003cusername\u003e\" with password \"\u003cpassword\u003e\", with one incorrect",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "should display an error",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login;enter-to-agilefant-with-a-invalid-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 20,
      "id": "login;enter-to-agilefant-with-a-invalid-account;;1"
    },
    {
      "cells": [
        "arielwagnerrojas@gmail.com",
        "Client123"
      ],
      "line": 21,
      "id": "login;enter-to-agilefant-with-a-invalid-account;;2"
    },
    {
      "cells": [
        "test@gmail.com",
        "nemo100"
      ],
      "line": 22,
      "id": "login;enter-to-agilefant-with-a-invalid-account;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1456958600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Enter to AgileFant with a invalid account",
  "description": "",
  "id": "login;enter-to-agilefant-with-a-invalid-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 13,
      "name": "@LoginError"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I open to Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I login as \"arielwagnerrojas@gmail.com\" with password \"Client123\", with one incorrect",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "should display an error",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.goToLoginPage()"
});
formatter.result({
  "duration": 601900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arielwagnerrojas@gmail.com",
      "offset": 12
    },
    {
      "val": "Client123",
      "offset": 55
    }
  ],
  "location": "Login.loginFailed(String,String)"
});
formatter.result({
  "duration": 2901023300,
  "status": "passed"
});
formatter.match({
  "location": "Login.anErrorIsDisplayed()"
});
formatter.result({
  "duration": 346021600,
  "status": "passed"
});
formatter.after({
  "duration": 181200,
  "status": "passed"
});
formatter.before({
  "duration": 95800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Enter to AgileFant with a invalid account",
  "description": "",
  "id": "login;enter-to-agilefant-with-a-invalid-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 13,
      "name": "@LoginError"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I open to Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I login as \"test@gmail.com\" with password \"nemo100\", with one incorrect",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "should display an error",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.goToLoginPage()"
});
formatter.result({
  "duration": 989300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 12
    },
    {
      "val": "nemo100",
      "offset": 43
    }
  ],
  "location": "Login.loginFailed(String,String)"
});
formatter.result({
  "duration": 1844705800,
  "status": "passed"
});
formatter.match({
  "location": "Login.anErrorIsDisplayed()"
});
formatter.result({
  "duration": 178451800,
  "status": "passed"
});
formatter.after({
  "duration": 103300,
  "status": "passed"
});
formatter.uri("scenarios.products.feature");
formatter.feature({
  "line": 2,
  "name": "Products",
  "description": "",
  "id": "products",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Product"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Create a product",
  "description": "",
  "id": "products;create-a-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@createProduct"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I create a product \"\u003cproduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify that the product has the name entered",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "products;create-a-product;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 13,
      "id": "products;create-a-product;;1"
    },
    {
      "cells": [
        "product1"
      ],
      "line": 14,
      "id": "products;create-a-product;;2"
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
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I login as \"arielwagnerrojas@gmail.com\" with password \"nemo100\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.goToLoginPage()"
});
formatter.result({
  "duration": 323100,
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
  "duration": 231299100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Create a product",
  "description": "",
  "id": "products;create-a-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@createProduct"
    },
    {
      "line": 1,
      "name": "@Product"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I create a product \"product1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify that the product has the name entered",
  "keyword": "Then "
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
  "duration": 23398128900,
  "status": "passed"
});
formatter.match({
  "location": "Product.verifyProductHasTheNameEntered()"
});
formatter.result({
  "duration": 314491900,
  "status": "passed"
});
formatter.after({
  "duration": 163400,
  "status": "passed"
});
formatter.after({
  "duration": 9961590900,
  "status": "passed"
});
formatter.uri("scenarios.projects.feature");
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
  "duration": 602400,
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
  "duration": 1182721000,
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
  "duration": 23546798900,
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
  "duration": 2286196200,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1375844900,
  "status": "passed"
});
formatter.match({
  "location": "Project.verifyProjectHasTheNameEntered()"
});
formatter.result({
  "duration": 699452000,
  "status": "passed"
});
formatter.after({
  "duration": 147300,
  "status": "passed"
});
formatter.after({
  "duration": 9890590700,
  "status": "passed"
});
formatter.uri("scenarios.stories.feature");
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
  "duration": 263500,
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
  "duration": 264078500,
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
  "duration": 24466227100,
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
  "duration": 2259569600,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1343702700,
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
  "duration": 2280971000,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 14061188400,
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
  "duration": 29163680800,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStoryHasTheNameEntered()"
});
formatter.result({
  "duration": 297775500,
  "status": "passed"
});
formatter.after({
  "duration": 131200,
  "status": "passed"
});
formatter.after({
  "duration": 16392159900,
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
  "duration": 269800,
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
  "duration": 401375500,
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
  "duration": 23572794500,
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
  "duration": 2414134200,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1293386700,
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
  "duration": 2237425200,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 13752372400,
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
  "duration": 30008859800,
  "status": "passed"
});
formatter.match({
  "location": "Story.changeStoryStateToInProgress()"
});
formatter.result({
  "duration": 1488161300,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStateOfTheStoryIsInProgress()"
});
formatter.result({
  "duration": 106488300,
  "status": "passed"
});
formatter.after({
  "duration": 140300,
  "status": "passed"
});
formatter.after({
  "duration": 21405190100,
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
  "duration": 238700,
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
  "duration": 186168800,
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
  "duration": 22531068700,
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
  "duration": 2333368000,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1034327800,
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
  "duration": 2142117900,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 13539226200,
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
  "duration": 29696514100,
  "status": "passed"
});
formatter.match({
  "location": "Story.changeStoryStateToDone()"
});
formatter.result({
  "duration": 1296183000,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStateOfTheStoryIsDone()"
});
formatter.result({
  "duration": 199901700,
  "status": "passed"
});
formatter.after({
  "duration": 136600,
  "status": "passed"
});
formatter.after({
  "duration": 19456278800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Change the state of one story to Bloqued",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-bloqued",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I create a story \"\u003cstory\u003e\" inside of the iteration",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I change story state to Ready",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the state of the story is Ready",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "stories;change-the-state-of-one-story-to-bloqued;",
  "rows": [
    {
      "cells": [
        "story"
      ],
      "line": 48,
      "id": "stories;change-the-state-of-one-story-to-bloqued;;1"
    },
    {
      "cells": [
        "story1"
      ],
      "line": 49,
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
  "duration": 541200,
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
  "duration": 461456900,
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
  "duration": 22970840000,
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
  "duration": 2402744100,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1114187300,
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
  "duration": 2007016200,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 13471196600,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
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
      "line": 41,
      "name": "@createStory"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I create a story \"story1\" inside of the iteration",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I change story state to Ready",
  "keyword": "And "
});
formatter.step({
  "line": 45,
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
  "duration": 29641976300,
  "status": "passed"
});
formatter.match({
  "location": "Story.changeStoryStateToReady()"
});
formatter.result({
  "duration": 1017807200,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStateOfTheStoryIsReady()"
});
formatter.result({
  "duration": 123799700,
  "status": "passed"
});
formatter.after({
  "duration": 116200,
  "status": "passed"
});
formatter.after({
  "duration": 19052643800,
  "status": "passed"
});
formatter.uri("scenarios.tasks.feature");
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
  "line": 15,
  "name": "Create tasks inside of a story",
  "description": "",
  "id": "tasks;create-tasks-inside-of-a-story",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Task"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I create a task \"\u003ctask\u003e\" inside of a story",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the task has the name entered",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the task is displayed with the state Not Started",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "tasks;create-tasks-inside-of-a-story;",
  "rows": [
    {
      "cells": [
        "task"
      ],
      "line": 21,
      "id": "tasks;create-tasks-inside-of-a-story;;1"
    },
    {
      "cells": [
        "task1"
      ],
      "line": 22,
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
  "duration": 332500,
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
  "duration": 1392953600,
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
  "duration": 23460117800,
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
  "duration": 2600844400,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1486681400,
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
  "duration": 2177537200,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 13589432800,
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
  "duration": 31028902000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Create tasks inside of a story",
  "description": "",
  "id": "tasks;create-tasks-inside-of-a-story;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Task"
    },
    {
      "line": 1,
      "name": "@Tasks"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I create a task \"task1\" inside of a story",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the task has the name entered",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
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
  "duration": 7550092800,
  "status": "passed"
});
formatter.match({
  "location": "Task.verifyTaskHasTheNameEntered()"
});
formatter.result({
  "duration": 114581700,
  "status": "passed"
});
formatter.match({
  "location": "Task.verifyTaskIsDisplayedWithTheStateNotStarted()"
});
formatter.result({
  "duration": 105018800,
  "status": "passed"
});
formatter.after({
  "duration": 152300,
  "status": "passed"
});
formatter.after({
  "duration": 19659672900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Create tasks inside of a story",
  "description": "",
  "id": "tasks;create-tasks-inside-of-a-story",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Task"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I create a task \"\u003ctask\u003e\" inside of a story",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I change task state to Ready",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the state of the task is Ready",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "the story state should be In Progress",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "tasks;create-tasks-inside-of-a-story;",
  "rows": [
    {
      "cells": [
        "task"
      ],
      "line": 32,
      "id": "tasks;create-tasks-inside-of-a-story;;1"
    },
    {
      "cells": [
        "task1"
      ],
      "line": 33,
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
  "duration": 297700,
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
  "duration": 308827500,
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
  "duration": 22991028000,
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
  "duration": 3022503400,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1248388800,
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
  "duration": 2792729000,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 12737092500,
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
  "duration": 29561545600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Create tasks inside of a story",
  "description": "",
  "id": "tasks;create-tasks-inside-of-a-story;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Task"
    },
    {
      "line": 1,
      "name": "@Tasks"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I create a task \"task1\" inside of a story",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I change task state to Ready",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the state of the task is Ready",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
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
  "duration": 5708829700,
  "status": "passed"
});
formatter.match({
  "location": "Task.changeTaskStateToReady()"
});
formatter.result({
  "duration": 5564536700,
  "status": "passed"
});
formatter.match({
  "location": "Task.verifyStateOfTheTaskIsReady()"
});
formatter.result({
  "duration": 132406200,
  "status": "passed"
});
formatter.match({
  "location": "Task.verifyStoryStateShouldBeInProgress()"
});
formatter.result({
  "duration": 108670600,
  "status": "passed"
});
formatter.after({
  "duration": 144800,
  "status": "passed"
});
formatter.after({
  "duration": 20769263200,
  "status": "passed"
});
});