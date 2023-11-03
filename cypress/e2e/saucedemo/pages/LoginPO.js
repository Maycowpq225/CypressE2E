class LoginPO {

    fieldUser() {
        return cy.get('#user-name')
    }

    fieldPassword() {
        return cy.get('#password')
    }

    btnLogin() {
        return cy.get('#login-button')
    }



    fillFieldUser(username) {
        this.fieldPassword().click()
        this.fieldUser().type(username)
    }

    fillFieldPassword(password) {
        this.fieldPassword().click()
        this.fieldPassword().type(password)
    }

    clickOnLogin() {
        this.btnLogin().click()
    }

}
export default LoginPO