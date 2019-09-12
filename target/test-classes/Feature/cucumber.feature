Feature: AddCustomer flow

  Background: 
    Given User should be in the telecom home page
    And user click on add customer button

  Scenario: 
    When user enters all the fields with valid data.
      | rental1 | local_minutes | inter_minutes | sms_pack | minutes_charges | inter_charges | sms_charges |
      |     200 |           100 |           200 |      100 |               2 |             4 |           5 |
      |     250 |           100 |           200 |      200 |               1 |             6 |           5 |
      |     100 |           150 |           200 |      100 |               2 |             4 |           7 |
      |     200 |           110 |           320 |      100 |               1 |             4 |           5 |
    And user clicks on submit button
    Then user should be displayed customer id is generated

  Scenario Outline: 
    When user enters all the field with valid data."<rental1>","<local_minutes>","<inter_minutes>","<sms_pack>","<minutes_charges>","<inter_charges>","<sms_charges>"
    And user clicks on submit button
    Then user should be displayed customer id is generated

    Examples: 
      | rental1 | local_minutes | inter_minutes | sms_pack | minutes_charges | inter_charges | sms_charges |
      |     200 |           100 |           200 |      100 |               2 |             4 |           5 |
      |     250 |           100 |           200 |      200 |               1 |             6 |           5 |
      |     100 |           150 |           200 |      100 |               2 |             4 |           7 |
      |     200 |           110 |           320 |      100 |               1 |             4 |           5 |
