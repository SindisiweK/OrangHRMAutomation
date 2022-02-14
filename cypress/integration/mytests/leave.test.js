import loginPage from '../../page-objects/login-page'
import leavePage from '../../page-objects/leave-page'

let credentials = null
describe('Leave Tests', () => {

  before(() => {
  cy.fixture('testdata').then((data) => {
    credentials = data  
  })
})

  beforeEach(() => {
    loginPage.navigate(credentials.orangeHRMUrl)
  })

  it('Validates if you can add leave type', () => {
    loginPage.loginCredentials(credentials.username,credentials.password)
    loginPage.submit()
    leavePage.leaveTab()
    leavePage.configureSubTab()
    leavePage.leaveTypesOption()
    leavePage.addLeaveTypeButton()
    leavePage.leaveTypeName(credentials.leaveTypeName)
    leavePage.saveLeaveTypebutton()
  })

  it('Validates if you can delete leave type', () => {
    loginPage.loginCredentials(credentials.username,credentials.password)
    loginPage.submit()
    leavePage.leaveTab()
    leavePage.configureSubTab()
    leavePage.leaveTypesOption()
    leavePage.deleteLeaveType()
  })
})