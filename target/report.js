$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/cucum.feature");
formatter.feature({
  "name": "AddCustomer flow",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User should be in the telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerDetails.user_should_be_in_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerDetails.user_click_on_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters all the field with valid data.",
  "rows": [
    {
      "cells": [
        "ajith",
        "rajan",
        "rajan@gmail.com",
        "madurai",
        "56789865443"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerDetails.user_enters_all_the_field_with_valid_data(DataTable)"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 2, Size: 1\r\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:657)\r\n\tat java.util.ArrayList.get(ArrayList.java:433)\r\n\tat java.util.Collections$UnmodifiableList.get(Collections.java:1311)\r\n\tat com.runner.AddCustomerDetails.user_enters_all_the_field_with_valid_data(AddCustomerDetails.java:52)\r\n\tat ✽.user enters all the field with valid data.(src/test/resources/feature/cucum.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerDetails.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerDetails.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/feature/cucumber.feature");
formatter.feature({
  "name": "AddCustomer flow",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should be in the telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerDetails.user_should_be_in_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerDetails.user_click_on_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enters all the fields with valid data.",
  "rows": [
    {
      "cells": [
        "rental1",
        "local_minutes",
        "inter_minutes",
        "sms_pack",
        "minutes_charges",
        "inter_charges",
        "sms_charges"
      ]
    },
    {
      "cells": [
        "200",
        "100",
        "200",
        "100",
        "2",
        "4",
        "5"
      ]
    },
    {
      "cells": [
        "250",
        "100",
        "200",
        "200",
        "1",
        "6",
        "5"
      ]
    },
    {
      "cells": [
        "100",
        "150",
        "200",
        "100",
        "2",
        "4",
        "7"
      ]
    },
    {
      "cells": [
        "200",
        "110",
        "320",
        "100",
        "1",
        "4",
        "5"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerDetails.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerDetails.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters all the field with valid data.\"\u003crental1\u003e\",\"\u003clocal_minutes\u003e\",\"\u003cinter_minutes\u003e\",\"\u003csms_pack\u003e\",\"\u003cminutes_charges\u003e\",\"\u003cinter_charges\u003e\",\"\u003csms_charges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "user should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rental1",
        "local_minutes",
        "inter_minutes",
        "sms_pack",
        "minutes_charges",
        "inter_charges",
        "sms_charges"
      ]
    },
    {
      "cells": [
        "200",
        "100",
        "200",
        "100",
        "2",
        "4",
        "5"
      ]
    },
    {
      "cells": [
        "250",
        "100",
        "200",
        "200",
        "1",
        "6",
        "5"
      ]
    },
    {
      "cells": [
        "100",
        "150",
        "200",
        "100",
        "2",
        "4",
        "7"
      ]
    },
    {
      "cells": [
        "200",
        "110",
        "320",
        "100",
        "1",
        "4",
        "5"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should be in the telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerDetails.user_should_be_in_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerDetails.user_click_on_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters all the field with valid data.\"200\",\"100\",\"200\",\"100\",\"2\",\"4\",\"5\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerDetails.user_enters_all_the_field_with_valid_data(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerDetails.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerDetails.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should be in the telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerDetails.user_should_be_in_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerDetails.user_click_on_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters all the field with valid data.\"250\",\"100\",\"200\",\"200\",\"1\",\"6\",\"5\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerDetails.user_enters_all_the_field_with_valid_data(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerDetails.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerDetails.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should be in the telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerDetails.user_should_be_in_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerDetails.user_click_on_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters all the field with valid data.\"100\",\"150\",\"200\",\"100\",\"2\",\"4\",\"7\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerDetails.user_enters_all_the_field_with_valid_data(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerDetails.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerDetails.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should be in the telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerDetails.user_should_be_in_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on add customer button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerDetails.user_click_on_add_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters all the field with valid data.\"200\",\"110\",\"320\",\"100\",\"1\",\"4\",\"5\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerDetails.user_enters_all_the_field_with_valid_data(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerDetails.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerDetails.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
});