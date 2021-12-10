class PimPage {

get employeeListTab() {
        return cy.get('#menu_pim_viewEmployeeList')
        
}

get addBtn() {
    return cy.get('#btnAdd')
}

get firstNameText() {
    return cy.get('#firstName')
}

get middleNameText() {
    return cy.get('#middleName')
}

get lastNameText() {
    return  cy.get('#lastName')
}

get employeeIdText() {
    return cy.get('#employeeId')
}

get loginChkBox() {
    return cy.get('#chkLogin')
}

get pimtab(){
    return cy.get('#menu_pim_viewPimModule > b')
}

get usernameLoginText(){
    return cy.get('#user_name')
}

get passwordLoginText(){
    return cy.get('#user_password')
}

get confirmPasswordText(){
    return cy.get('#re_password')
}

get statusSelection(){
    return cy.get('#status')
}

}
export default new PimPage()