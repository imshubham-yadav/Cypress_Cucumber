import appointment from "../pageObjects/bookAppointmentPage";
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I open the Website', () => {
    appointment.navigate();
})

When('I login and Fill out the Appointment Form', () => {
    appointment.login();
    appointment.fillForm();
})

Then('I verify my Booking Confirmation and LogOut', () => {
    appointment.bookingConfirmation();
    appointment.logOut();
})