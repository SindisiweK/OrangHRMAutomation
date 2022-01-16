/// <reference types="cypress" />
import LoginPage from "../../page-objects/login-page"

let credentials = null
describe('Login Tests', () => {

  before(() => {
  cy.fixture('testdata').then((data) => {
    credentials = data  
  })
})

  beforeEach(() => {
    LoginPage.navigate(credentials.orangeHRMUrl)
  })

    it('Validates the user login when login credential are incorrect', () => {
        LoginPage.login(credentials.dummyUsername,credentials.dummyPassword)
        LoginPage.submit()
      cy.get('#spanMessage').should('contain','Invalid credentials')
    })

    it('Validates login when username and password is not entered', () => {
      LoginPage.submit()
      cy.get('#spanMessage').should('contain','Username cannot be empty')
    })

    it('Validates login when the password field is empty', () => {
      LoginPage.login(credentials.dummyUsername,'')
      LoginPage.submit()
      cy.get('#spanMessage').should('contain','Password cannot be empty')
    })

    it('Validate login when correct credentials are entered', () => {
      LoginPage.login(credentials.username,credentials.password)
      LoginPage.submit()
    })

    it('Validate if the user can logout successfully', () => {
      LoginPage.login(credentials.username,credentials.password)
      LoginPage.submit()
      LoginPage.logOut()
    })
  })

