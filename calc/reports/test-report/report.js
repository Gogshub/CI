$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('integration.feature');
formatter.feature({
  "line": 3,
  "name": "calc Functionality Feature",
  "description": "\r\nIn order to ensure calc Functionality works,\r\nI want to run the cucumber test to verify it is working",
  "id": "calc-functionality-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@calcIntegrationTest"
    }
  ]
});
formatter.scenario({
  "line": 16,
  "name": "calc Functionality",
  "description": "",
  "id": "calc-functionality-feature;calc-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calcIntegrationTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "navigate to calchome page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user logs in using numberA as \"9\" and numberB as \"4\" and Operator as \"add\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Result as \"13\" should be displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "calcIntegrationTest.navigate()"
});
formatter.result({
  "duration": 6585189179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 31
    },
    {
      "val": "4",
      "offset": 50
    },
    {
      "val": "add",
      "offset": 70
    }
  ],
  "location": "calcIntegrationTest.login(String,String,String)"
});
formatter.result({
  "duration": 374426217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 11
    }
  ],
  "location": "calcIntegrationTest.verifySuccessful(String)"
});
formatter.result({
  "duration": 2196242020,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "calc Functionality",
  "description": "",
  "id": "calc-functionality-feature;calc-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calcIntegrationTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "navigate to calchome page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user logs in using numberA as \"20\" and numberB as \"2\" and Operator as \"sub\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Result as \"18\" should be displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "calcIntegrationTest.navigate()"
});
formatter.result({
  "duration": 4136090039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 51
    },
    {
      "val": "sub",
      "offset": 71
    }
  ],
  "location": "calcIntegrationTest.login(String,String,String)"
});
formatter.result({
  "duration": 529825671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 11
    }
  ],
  "location": "calcIntegrationTest.verifySuccessful(String)"
});
formatter.result({
  "duration": 302338551,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "calc Functionality",
  "description": "",
  "id": "calc-functionality-feature;calc-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calcIntegrationTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "navigate to calchome page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user logs in using numberA as \"50\" and numberB as \"3\" and Operator as \"mul\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Result as \"150\" should be displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "calcIntegrationTest.navigate()"
});
formatter.result({
  "duration": 4116380524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 31
    },
    {
      "val": "3",
      "offset": 51
    },
    {
      "val": "mul",
      "offset": 71
    }
  ],
  "location": "calcIntegrationTest.login(String,String,String)"
});
formatter.result({
  "duration": 387315574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 11
    }
  ],
  "location": "calcIntegrationTest.verifySuccessful(String)"
});
formatter.result({
  "duration": 18482261026,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "calc Functionality",
  "description": "",
  "id": "calc-functionality-feature;calc-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calcIntegrationTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "navigate to calchome page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user logs in using numberA as \"90\" and numberB as \"10\" and Operator as \"div\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Result as \"9\" should be displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "calcIntegrationTest.navigate()"
});
formatter.result({
  "duration": 4527910528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 51
    },
    {
      "val": "div",
      "offset": 72
    }
  ],
  "location": "calcIntegrationTest.login(String,String,String)"
});
formatter.result({
  "duration": 352226645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 11
    }
  ],
  "location": "calcIntegrationTest.verifySuccessful(String)"
});
formatter.result({
  "duration": 2396226508,
  "status": "passed"
});
});