Feature: WebdriverUniversity - Contact Us Page

    Scenario: Valid Contact Us Form Submission

        Given User navigates to webdriveruniversity homepage
        When user clicks on contact us button
        # AND keyword is only allowed in feature file not in steps/ cypress code.
        And user types a first name
        And user types a last name
        And user types an email address
        And user types a comment
        And user clicks on submit button
        Then user should be presented with successful submission message

    Scenario: InValid Contact Us Form Submission - Negative scenario

        Given User navigates to webdriveruniversity homepage
        When user clicks on contact us button
        And user types a first name
        And user types a last name
        # And user types an email address
        And user types a comment
        And user clicks on submit button
        Then user should be presented with unsuccessful submission message

Scenario: InValid Contact Us Form Submission - Negative scenario

        Given User navigates to webdriveruniversity homepage
        When user clicks on contact us button
        And user types a first name
        And user types a last name
        # And user types an email address
        And user types a comment
        And user clicks on submit button
        Then user should be presented with unsuccessful submission message

    Scenario: Valid Contact Us Form Submission Using specifid data
    

        Given User navigates to webdriveruniversity homepage
        When user clicks on contact us button
        And user types a specific first name "Selva"
        And user types a specific last name "kuppusamy"
        And user types a specific email address "test@test.com"
        And user types a specific comment "hello123" with number 123 
        And user clicks on submit button
        Then user should be presented with successful submission message
        

