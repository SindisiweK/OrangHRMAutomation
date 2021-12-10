describe('Finds an element', function(){
    it('Search an existing user', function(){

      //Admin Tab navigation
      cy.get('#menu_admin_viewAdminModule > b').click()

      cy.get('#menu_admin_UserManagement')


      cy.get('#searchSystemUser_userName').type('Admin')

      cy.get('#searchSystemUser_userType').select('Admin')

      cy.get('#searchSystemUser_employeeName_empName').type('Jessica Belen Collings')

      cy.get('#searchSystemUser_status').select('Enabled')

      cy.get('#searchBtn').click()

      
    })
    it('Add new user', function(){

      //Add new user
      cy.get('#btnAdd').click()

      cy.get('#systemUser_userType').select('Admin')

      cy.get('#systemUser_employeeName_empName').type('Sindi Kubheka')

      cy.get('#systemUser_userName').type('sindik')

      cy.get('#systemUser_status').select('Enabled')

      cy.get('#systemUser_password').type('Sindi@456')

      cy.get('#systemUser_confirmPassword').type('Sindi@456')

      cy.get('#btnSave').click()
      
    })
}) 
