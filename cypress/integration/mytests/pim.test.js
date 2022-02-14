import loginPage from '../../page-objects/login-page'
import pimPage from '../../page-objects/pim-page'

let credentials = null
describe('Employee management tests', () => {

  before(() => {
  cy.fixture('testdata').then((data) => {
    credentials = data  
  })
})

  beforeEach(() => {
    loginPage.navigate(credentials.orangeHRMUrl)
  })

it('Validates if you can create an employee record', () => {
  loginPage.loginCredentials(credentials.username,credentials.password)
  loginPage.submit()
  pimPage.pimtab()
  pimPage.addBtn()
  pimPage.fullNameText(credentials.firstname,credentials.middlename,credentials.lastname)
  pimPage.employeeIdText(credentials.employeeId)
  pimPage.loginCredentialsChkBox()
  pimPage.usernameloginCredentialsText(credentials.addempusername)
  pimPage.passwordloginCredentialsText(credentials.addemppassword)
  pimPage.confirmPasswordText(credentials.confirmpassword)
  pimPage.statusSelection()
  pimPage.saveEmployeeDetails() 
})

it('Validates if an employee record can be saved without creating loginCredentials details', () => {
  loginPage.loginCredentials(credentials.username,credentials.password)
  loginPage.submit()
  pimPage.pimtab()
  pimPage.addBtn()
  pimPage.fullNameText(credentials.firstname,credentials.middlename,credentials.lastname)
  pimPage.employeeIdText(credentials.employeeId)
  pimPage.saveEmployeeDetails()
})

it('Validates if can add an employee record by only inserting required fields', () => {
  loginPage.loginCredentials(credentials.username,credentials.password)
  loginPage.submit()
  pimPage.pimtab()
  pimPage.addBtn()
  pimPage.fullNameText(credentials.firstname,"",credentials.lastname)
  pimPage.saveEmployeeDetails()
})

it('Validates if existing employee details can be saved multiple times', () => {
  loginPage.loginCredentials(credentials.username,credentials.password)
  loginPage.submit()
  pimPage.pimtab()
  pimPage.addBtn()
  pimPage.fullNameText(credentials.firstname,credentials.middlename,credentials.lastname)
  pimPage.saveEmployeeDetails().should('contain', 'Failed To Save: Employee Id Exists')
})
})

