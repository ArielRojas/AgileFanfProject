$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("scenarios.board.feature");
formatter.feature({
  "line": 2,
  "name": "Board",
  "description": "",
  "id": "board",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Board"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Create a new board",
  "description": "",
  "id": "board;create-a-new-board",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@createBoard"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I create a board \"\u003cboard\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I create the \"Product Backlog\" column inside of the board",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I create the \"Scrum Backlog\" column inside of the board",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I create the \"Current\" column inside of the board",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I create the \"Done\" column inside of the board",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the board should have the name placed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the board should have the columns created",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "board;create-a-new-board;",
  "rows": [
    {
      "cells": [
        "board"
      ],
      "line": 18,
      "id": "board;create-a-new-board;;1"
    },
    {
      "cells": [
        "scrum board"
      ],
      "line": 19,
      "id": "board;create-a-new-board;;2"
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
formatter.match({
  "location": "Login.goToLoginPage()"
});
formatter.result({
  "duration": 722828800,
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
  "duration": 211906400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Create a new board",
  "description": "",
  "id": "board;create-a-new-board;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@createBoard"
    },
    {
      "line": 1,
      "name": "@Board"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I create a board \"scrum board\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I create the \"Product Backlog\" column inside of the board",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I create the \"Scrum Backlog\" column inside of the board",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I create the \"Current\" column inside of the board",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I create the \"Done\" column inside of the board",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the board should have the name placed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the board should have the columns created",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "scrum board",
      "offset": 18
    }
  ],
  "location": "Board.createBoard(String)"
});
formatter.result({
  "duration": 2621897300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product Backlog",
      "offset": 14
    }
  ],
  "location": "Board.createColumnInsideOfTheBoard(String)"
});
formatter.result({
  "duration": 99900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Scrum Backlog",
      "offset": 14
    }
  ],
  "location": "Board.createColumnInsideOfTheBoard(String)"
});
formatter.result({
  "duration": 64400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Current",
      "offset": 14
    }
  ],
  "location": "Board.createColumnInsideOfTheBoard(String)"
});
formatter.result({
  "duration": 103500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Done",
      "offset": 14
    }
  ],
  "location": "Board.createColumnInsideOfTheBoard(String)"
});
formatter.result({
  "duration": 95700,
  "status": "passed"
});
formatter.match({
  "location": "Board.verifyBoardShouldHaveTheNamePlaced()"
});
formatter.result({
  "duration": 46900,
  "status": "passed"
});
formatter.match({
  "location": "Board.verifyBoardShouldHaveTheColumnsCreated()"
});
formatter.result({
  "duration": 91100,
  "status": "passed"
});
formatter.after({
  "duration": 437700,
  "status": "passed"
});
formatter.uri("scenarios.iterations.feature");
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
  "duration": 1032400,
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
  "duration": 255198900,
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
  "duration": 27004481900,
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
  "duration": 2607512300,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1277840000,
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
  "duration": 2375311000,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 14646156900,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.verifyIterationHasTheNameEntered()"
});
formatter.result({
  "duration": 262673900,
  "status": "passed"
});
formatter.after({
  "duration": 167500,
  "status": "passed"
});
formatter.after({
  "duration": 12089294500,
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
  "duration": 351700,
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
  "duration": 1212068200,
  "status": "passed"
});
formatter.match({
  "location": "Login.loginSuccessfully()"
});
formatter.result({
  "duration": 89253900,
  "status": "passed"
});
formatter.after({
  "duration": 134300,
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
  "duration": 1411285100,
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
  "duration": 416200,
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
  "duration": 3311909400,
  "status": "passed"
});
formatter.match({
  "location": "Login.anErrorIsDisplayed()"
});
formatter.result({
  "duration": 297830600,
  "status": "passed"
});
formatter.after({
  "duration": 166100,
  "status": "passed"
});
formatter.before({
  "duration": 79000,
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
  "duration": 283300,
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
  "duration": 2187136400,
  "status": "passed"
});
formatter.match({
  "location": "Login.anErrorIsDisplayed()"
});
formatter.result({
  "duration": 308902400,
  "status": "passed"
});
formatter.after({
  "duration": 297100,
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
  "keyword": "Given "
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
  "duration": 435800,
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
  "duration": 293630500,
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
  "duration": 26748743400,
  "status": "passed"
});
formatter.match({
  "location": "Product.verifyProductHasTheNameEntered()"
});
formatter.result({
  "duration": 246251200,
  "status": "passed"
});
formatter.after({
  "duration": 125500,
  "status": "passed"
});
formatter.after({
  "duration": 10639511700,
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
  "duration": 430100,
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
  "duration": 345845500,
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
  "duration": 27186318300,
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
  "duration": 2640335600,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1465030600,
  "status": "passed"
});
formatter.match({
  "location": "Project.verifyProjectHasTheNameEntered()"
});
formatter.result({
  "duration": 811467800,
  "status": "passed"
});
formatter.after({
  "duration": 172700,
  "status": "passed"
});
formatter.after({
  "duration": 11534515500,
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
  "duration": 334700,
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
  "duration": 1600858800,
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
  "duration": 26830774700,
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
  "duration": 2512085800,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1295351300,
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
  "duration": 2619983600,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 15533711200,
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
  "duration": 29516542800,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStoryHasTheNameEntered()"
});
formatter.result({
  "duration": 279812000,
  "status": "passed"
});
formatter.after({
  "duration": 119300,
  "status": "passed"
});
formatter.after({
  "duration": 20926564100,
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
  "duration": 316400,
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
  "duration": 501080600,
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
  "duration": 25761339700,
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
  "duration": 2733008500,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1364741900,
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
  "duration": 2960652100,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 14928439300,
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
  "duration": 30248978900,
  "status": "passed"
});
formatter.match({
  "location": "Story.changeStoryStateToInProgress()"
});
formatter.result({
  "duration": 1543462400,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStateOfTheStoryIsInProgress()"
});
formatter.result({
  "duration": 97095400,
  "status": "passed"
});
formatter.after({
  "duration": 164600,
  "status": "passed"
});
formatter.after({
  "duration": 18321758300,
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
  "duration": 279400,
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
  "duration": 637708600,
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
  "duration": 24968127900,
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
  "duration": 2840519800,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1405091900,
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
  "duration": 2292141200,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 14864008500,
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
  "duration": 29250738700,
  "status": "passed"
});
formatter.match({
  "location": "Story.changeStoryStateToDone()"
});
formatter.result({
  "duration": 1317147700,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStateOfTheStoryIsDone()"
});
formatter.result({
  "duration": 205480400,
  "status": "passed"
});
formatter.after({
  "duration": 151800,
  "status": "passed"
});
formatter.after({
  "duration": 19863002900,
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
  "duration": 531300,
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
  "duration": 544146300,
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
  "duration": 25022405200,
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
  "duration": 2570725400,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1391403000,
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
  "duration": 2451433800,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 15687409300,
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
  "duration": 30963748900,
  "status": "passed"
});
formatter.match({
  "location": "Story.changeStoryStateToReady()"
});
formatter.result({
  "duration": 1203658100,
  "status": "passed"
});
formatter.match({
  "location": "Story.verifyStateOfTheStoryIsReady()"
});
formatter.result({
  "duration": 126037000,
  "status": "passed"
});
formatter.after({
  "duration": 165700,
  "status": "passed"
});
formatter.after({
  "duration": 20594523500,
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
  "duration": 334000,
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
  "duration": 307149400,
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
  "duration": 26164523400,
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
  "duration": 2298860200,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1346712200,
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
  "duration": 2823482400,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 15460543700,
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
  "duration": 29577558100,
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
  "duration": 7478642600,
  "status": "passed"
});
formatter.match({
  "location": "Task.verifyTaskHasTheNameEntered()"
});
formatter.result({
  "duration": 182648100,
  "status": "passed"
});
formatter.match({
  "location": "Task.verifyTaskIsDisplayedWithTheStateNotStarted()"
});
formatter.result({
  "duration": 119749500,
  "status": "passed"
});
formatter.after({
  "duration": 22998235600,
  "status": "passed"
});
formatter.after({
  "duration": 110800,
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
  "duration": 288000,
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
  "duration": 231537500,
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
  "duration": 24055334700,
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
  "duration": 2714362600,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1264509200,
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
  "duration": 2503810900,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 15301015400,
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
  "duration": 27289320900,
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
  "duration": 5235812300,
  "status": "passed"
});
formatter.match({
  "location": "Task.changeTaskStateToReady()"
});
formatter.result({
  "duration": 4633006100,
  "status": "passed"
});
formatter.match({
  "location": "Task.verifyStateOfTheTaskIsReady()"
});
formatter.result({
  "duration": 251597400,
  "status": "passed"
});
formatter.match({
  "location": "Task.verifyStoryStateShouldBeInProgress()"
});
formatter.result({
  "duration": 98214300,
  "status": "passed"
});
formatter.after({
  "duration": 17322594000,
  "status": "passed"
});
formatter.after({
  "duration": 101500,
  "status": "passed"
});
formatter.uri("scenarios.tasks.filter.feature");
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
  "name": "Filter a task",
  "description": "",
  "id": "tasksfilter;filter-a-task",
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
  "id": "tasksfilter;filter-a-task;",
  "rows": [
    {
      "cells": [
        "task1",
        "task2",
        "task3"
      ],
      "line": 21,
      "id": "tasksfilter;filter-a-task;;1"
    },
    {
      "cells": [
        "task1",
        "task2",
        "task3"
      ],
      "line": 22,
      "id": "tasksfilter;filter-a-task;;2"
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
  "duration": 194100,
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
  "duration": 755214000,
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
  "duration": 25114837200,
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
  "duration": 2402172000,
  "status": "passed"
});
formatter.match({
  "location": "Project.selectProduct()"
});
formatter.result({
  "duration": 1422610600,
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
  "duration": 2544123100,
  "status": "passed"
});
formatter.match({
  "location": "Iteration.selectProject()"
});
formatter.result({
  "duration": 16025868700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Filter a task",
  "description": "",
  "id": "tasksfilter;filter-a-task;;2",
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
  "duration": 16165328400,
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
  "duration": 2412674700,
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
  "duration": 1172911100,
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
  "duration": 13128746300,
  "status": "passed"
});
formatter.match({
  "location": "Task.verifyTaskNameDisplayedShouldBeTheEnteredInTheTasksFilter()"
});
formatter.result({
  "duration": 100335300,
  "status": "passed"
});
formatter.after({
  "duration": 20058712200,
  "status": "passed"
});
formatter.after({
  "duration": 193800,
  "status": "passed"
});
});