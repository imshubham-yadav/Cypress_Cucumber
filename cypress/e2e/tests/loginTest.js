import loginPage from "../pageObjects/loginPage";
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I open the website', () => {
    loginPage.visit()
})

When('I enter the credentials and press the submit button', () => {
    loginPage.fillUsername();
    loginPage.fillPassword();
    loginPage.submitForm();
})

Then('I should see the Login Dashboard', () => {
    loginPage.verifyUser();
})