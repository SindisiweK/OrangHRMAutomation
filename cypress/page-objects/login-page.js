export default new class LoginPage {
    
navigate(url) {
    cy.visit(url)
}

loginCredentials(username,password){
    cy.get('#divUsername > .form-hint').type(username)
    cy.get('#txtPassword').clear().then(e => {if (password !== '') cy.wrap(e).type(password)})
}

submit(){
    cy.get('#btnLogin').click()
}
logOut(){
    cy.get('#welcome').click()
    cy.get('#welcome-menu > :nth-child(1) > :nth-child(3) > a').click()
}
}
