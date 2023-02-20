Feature: Visit the Website and Book an Appointment

    Scenario: Open Website, Fill Form and Book an Appointment
        Given I open the Website
        When I login and Fill out the Appointment Form
        Then I verify my Booking Confirmation and LogOut