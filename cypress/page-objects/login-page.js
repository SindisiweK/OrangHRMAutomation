class LoginPage {
    
open () {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
}

get getusernameText() {
        return cy.get('#divUsername > .form-hint')
    }

get getpasswordText() {
        return cy.get('#txtPassword')
    }

get getLoginBtn() {
        return cy.get('#btnLogin')
    }

}
export default new LoginPage()