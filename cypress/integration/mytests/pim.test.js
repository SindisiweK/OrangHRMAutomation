import loginPage from '../../page-objects/login-page'
import pimPage from '../../page-objects/pim-page'

describe('Add employees the list', () => {
  it('Validates if the non-existing emeployee can be added', () => {

    loginPage.open()
    loginPage.getusernameText.type('Admin')
    loginPage.getpasswordText.type('admin123')
    loginPage.getLoginBtn.click()
    pimPage.pimtab.click()
    pimPage.employeeListTab.click()
  
  })

it('Validates the fields to add user datails', () => {

  pimPage.addBtn.click()
  pimPage.firstNameText.type('Andrews')
  pimPage.middleNameText.type('Christina')
  pimPage.lastNameText.type('Smith')
  pimPage.employeeIdText.type('0299')
  
})

it('Validates if the user can add details on the additional fields', () => {

pimPage.loginChkBox.check()
pimPage.usernameLoginText.type('Zuri')
pimPage.passwordText.type('Dora')
pimPage.confirmPasswordText.type('Tsonga')
pimPage.statusSelection.select('Enabled')

})

})

