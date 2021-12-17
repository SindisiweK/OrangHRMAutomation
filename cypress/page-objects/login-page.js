export default new class LoginPage {
    
navigate() {
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

get getProfile(){
    return cy.get('#welcome')
}

get getLogoutBtn(){
    return cy.get('#welcome-menu > :nth-child(1) > :nth-child(3) > a')
}

}
