Feature: Login to Web Application

    Scenario: I am able to Successfully Login
        Given I open the website
        When I enter the credentials and press the submit button
        Then I should see the Login Dashboard