import loginPage from "../../page-objects/login-page"

let credentials = null
describe('loginCredentials Tests', () => {

  before(() => {
  cy.fixture('testdata').then((data) => {
    credentials = data  
  })
})

  beforeEach(() => {
    loginPage.navigate(credentials.orangeHRMUrl)
  })

    it('Validates the user loginCredentials when loginCredentials credential are incorrect', () => {
        loginPage.loginCredentials(credentials.dummyUsername,credentials.dummyPassword)
        loginPage.submit()
      cy.get('#spanMessage').should('contain','Invalid credentials')
    })

    it('Validates loginCredentials when username and password is not entered', () => {
      loginPage.submit()
      cy.get('#spanMessage').should('contain','Username cannot be empty')
    })

    it('Validates loginCredentials when the password field is empty', () => {
      loginPage.loginCredentials(credentials.dummyUsername,'')
      loginPage.submit()
      cy.get('#spanMessage').should('contain','Password cannot be empty')
    })

    it('Validate loginCredentials when correct credentials are entered', () => {
      loginPage.loginCredentials(credentials.username,credentials.password)
      loginPage.submit()
    })

    it('Validate if the user can logout successfully', () => {
      loginPage.loginCredentials(credentials.username,credentials.password)
      loginPage.submit()
      loginPage.logOut()
    })
  })

