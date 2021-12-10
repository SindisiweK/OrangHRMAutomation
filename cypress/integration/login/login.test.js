import loginPage from '../../page-objects/login-page'

let credentials = null

describe('Login Tests', () => {

  before(() => {
  cy.fixture('testdata').then((data) => {
    credentials = data  
  })
})

  beforeEach(function () {
    loginPage.open()
  })
    it('Validates the user login when login credential are incorrect', () => {

        loginPage.getusernameText.type(credentials.dummyUsername)
        loginPage.getpasswordText.type(credentials.dummyPassword)
        loginPage.getLoginBtn.click()
      cy.get('#spanMessage').should('contain','Invalid credentials')
    })

    it('Validates login when username and password is not entered', () => {
   
      loginPage.getLoginBtn.click()
      cy.get('#spanMessage').should('contain','Username cannot be empty')
})

    it('Validates login when the password field is empty', () => {
      
      loginPage.getusernameText.type(credentials.dummyUsername)
      loginPage.getLoginBtn.click()
      cy.get('#spanMessage').should('contain','Password cannot be empty')
})

    it('Validate login when correct credentials are entered', () => {
      
      loginPage.getusernameText.type(credentials.username)
      loginPage.getpasswordText.type(credentials.password)
      loginPage.getLoginBtn.click()
    })
  })

