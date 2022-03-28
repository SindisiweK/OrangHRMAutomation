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
    loginPage.loginCredentials(credentials.username,credentials.password)
    loginPage.submit()
    leavePage.leaveTab()
    leavePage.configureSubTab()
  })

  /*it('Validates if you can add leave type', () => {
    leavePage.leaveTypesOption()
    leavePage.addLeaveTypeButton()
    leavePage.leaveTypeName(credentials.leaveTypeName)
    leavePage.saveLeaveTypebutton()
  })

  it('Validates if you can delete leave type', () => {
    leavePage.leaveTypesOption()
    leavePage.deleteLeaveType()
  })*/

  it('Validates if you can assign leave to an employee', () => {
    leavePage.leaveTypesOption()
    leavePage.assignLeave(credentials.employeename,credentials.comment)
  })
})