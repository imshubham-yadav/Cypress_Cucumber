const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
const usernameInput = 'input[placeholder="Username"]';
const passwordInput = 'input[placeholder="Password"]';
const submitButton = 'button[type="submit"]';
const verify = '.oxd-topbar-header-breadcrumb > .oxd-text';

export default class loginPage {

  static visit() {
    cy.visit(baseUrl);
  }

  static fillUsername() {
    cy.fixture('example').then((DATA) => {
      cy.get(usernameInput).type(DATA.Username1);
    })
  }

  static fillPassword() {
    cy.fixture('example').then((DATA) => {
      cy.get(passwordInput).type(DATA.Password1);
    })
  }

  static submitForm() {
    cy.get(submitButton).click();
  }

  static verifyUser() {
    cy.get(verify).should('have.text', 'Dashboard')
  }

}