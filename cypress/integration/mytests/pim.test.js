import loginPage from '../../page-objects/login-page'
import pimPage from '../../page-objects/pim-page'

let credentials = null
describe('Login Tests', () => {

  before(() => {
  cy.fixture('testdata').then((data) => {
    credentials = data  
  })
})

  beforeEach(() => {
    loginPage.navigate(credentials.orangeHRMUrl)
  })

it('Validates if you can save data on the add employee fields', () => {
  loginPage.login(credentials.username,credentials.password)
  loginPage.submit()
  pimPage.pimtab()
  pimPage.addBtn()
  pimPage.fullNameText(credentials.firstname,credentials.middlename,credentials.lastname)
  pimPage.employeeIdText(credentials.employeeId)
  pimPage.loginChkBox()
  pimPage.usernameLoginText(credentials.addempusername)
  pimPage.passwordLoginText(credentials.addemppassword)
  pimPage.confirmPasswordText(credentials.confirmpassword)
  pimPage.statusSelection()
  pimPage.saveEmployeeDetails() 
})

it('Validates if data can be saved without creating login details', () => {
  loginPage.login(credentials.username,credentials.password)
  loginPage.submit()
  pimPage.pimtab()
  pimPage.addBtn()
  pimPage.fullNameText(credentials.firstname,credentials.middlename,credentials.lastname)
  pimPage.employeeIdText(credentials.employeeId)
  pimPage.saveEmployeeDetails()
})

it('Validates if can add an employee by only inserting required fields', () => {
  loginPage.login(credentials.username,credentials.password)
  loginPage.submit()
  pimPage.pimtab()
  pimPage.addBtn()
  pimPage.fullNameText(credentials.firstname,"",credentials.lastname)
  pimPage.saveEmployeeDetails()
})

it('Validates if existing employee details can be saved', () => {
  loginPage.login(credentials.username,credentials.password)
  loginPage.submit()
  pimPage.pimtab()
  pimPage.addBtn()
  pimPage.fullNameText(credentials.firstname,credentials.middlename,credentials.lastname)
  pimPage.saveEmployeeDetails().should('contain', 'Failed To Save: Employee Id Exists')
})
})

