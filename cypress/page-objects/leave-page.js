export default new class LeavePage{

    leaveTab(){
        cy.get('#menu_leave_viewLeaveModule').click()
    }

    configureSubTab(){
        cy.get('#menu_leave_Configure').invoke('show')
        cy.contains('Configure').click({force:true})
    }

    leaveTypesOption(){
        cy.get('#menu_leave_leaveTypeList').click({force:true})
    }

    addLeaveTypeButton(){
        cy.get("#btnAdd").click()
    }

    leaveTypeName(leavetypename){
        cy.get('#leaveType_txtLeaveTypeName').type(leavetypename)
    }

    situationalCondition(){
        cy.get('#leaveType_excludeIfNoEntitlement').check()
    }

    saveLeaveTypebutton(){
        cy.get('#saveButton').click()
    }

    deleteLeaveType(){
        cy.get('[type="checkbox"]').check()
        cy.get('#btnDelete').click()
        cy.get('#deleteConfModal').should('be.visible')
        cy.get('#dialogDeleteBtn').click()
    }

    assignLeave(employeeName,comment){
       cy.get('#menu_leave_assignLeave').click({force:true}).invoke('show')
       cy.get('#assignleave_txtEmployee_empName').type(employeeName)
       cy.wait(4000)
       cy.get('#assignleave_txtLeaveType').select('Sick')
       cy.get(':nth-child(4) > .ui-datepicker-trigger').click().should('be.visible')
       /*cy.get('#calFromDate').click({force:true})*/
       cy.get('.ui-datepicker-month').select(['2']).invoke('val')
       cy.get('.ui-datepicker-year').select(['2022']).invoke('val')
       cy.get(':nth-child(5) > :nth-child(1) > .ui-state-default').click()
       /*cy.get('#assignleave_txtToDate').click().type(Cypress.moment(value).format('YYYY-MM-DD'))*/
       cy.get('#assignleave_duration_duration').select('Full Day')
       cy.get('#assignleave_txtComment').type(comment)
       cy.get('#assignBtn').click()
    }
}