$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/scenarios.login.feature");
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
  "duration": 340479500,
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
  "duration": 256184600,
  "status": "passed"
});
formatter.match({
  "location": "Login.loginSuccessfully()"
});
formatter.result({
  "duration": 75791700,
  "status": "passed"
});
formatter.after({
  "duration": 260100,
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
  "duration": 1037955900,
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
  "duration": 792500,
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
  "duration": 3145144000,
  "status": "passed"
});
formatter.match({
  "location": "Login.anErrorIsDisplayed()"
});
formatter.result({
  "duration": 194930300,
  "status": "passed"
});
formatter.after({
  "duration": 347500,
  "status": "passed"
});
formatter.before({
  "duration": 94000,
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
  "duration": 3438600,
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
  "duration": 1605771900,
  "status": "passed"
});
formatter.match({
  "location": "Login.anErrorIsDisplayed()"
});
formatter.result({
  "duration": 277904600,
  "status": "passed"
});
formatter.after({
  "duration": 149700,
  "status": "passed"
});
});