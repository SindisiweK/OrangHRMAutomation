export default new class PimPage {

pimtab(){
    cy.get('#menu_pim_viewPimModule > b').click()
}

addBtn() {
    cy.get('#btnAdd').click()
}

fullNameText(firstname,middlename,lastname) {
    cy.get('#firstName').type(firstname)
    cy.get('#middleName').type(middlename)
    cy.get('#lastName').type(lastname)
}

employeeIdText(employeeId) {
    cy.get('#employeeId').type(employeeId)
}

loginChkBox() {
    cy.get('#chkLogin').check()
}

usernameLoginText(addempusername){
    cy.get('#user_name').type(addempusername)
}

passwordLoginText(addemppassword){
    cy.get('#user_password').type(addemppassword)
}

confirmPasswordText(confirmpassword){
    cy.get('#re_password').type(confirmpassword)
}

statusSelection(){
    cy.get('#status').select('Enabled')
}
saveEmployeeDetails(){
    cy.get('#btnSave').click()
}
}