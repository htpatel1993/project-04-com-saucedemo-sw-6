$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into saucedemo website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4383852900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "verify That Six Products Are Displayed On Page",
  "description": "",
  "id": "login-test;verify-that-six-products-are-displayed-on-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see six products on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LonginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 99396600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 15
    }
  ],
  "location": "LonginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 152118700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LonginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 100297100,
  "status": "passed"
});
formatter.match({
  "location": "LonginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 137575400,
  "status": "passed"
});
formatter.match({
  "location": "LonginSteps.iShouldSeeSixProductsOnHomepage()"
});
formatter.result({
  "duration": 37578500,
  "status": "passed"
});
formatter.after({
  "duration": 695436200,
  "status": "passed"
});
});