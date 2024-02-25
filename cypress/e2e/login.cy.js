describe('Logging inning', () => {
    beforeEach(()=> {
        cy.visit('https://ultimateqa.com/complicated-page')
    })
    it('login as standard user', () => {
        
        cy.get('#user_login_65db8e6fd4744').type('user_login')
        cy.get('#user_login_65db8e6fd4744').type('password')
        cy.get('.et_pb_login_0 > .et_pb_newsletter_form > form > :nth-child(4) > .et_pb_newsletter_button').click()
    })
})