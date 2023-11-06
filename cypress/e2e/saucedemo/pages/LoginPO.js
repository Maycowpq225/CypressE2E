const elements = {
    fieldUser: () => cy.get('#user-name'),
    fieldPassword: () => cy.get('#password'),
    btnLogin: () => cy.get('#login-button')
}

class LoginPO {

    fillFieldUser(username) {
        elements.fieldUser().click()
        elements.fieldUser().type(username)
    }

    fillFieldPassword(password) {
        elements.fieldPassword().click()
        elements.fieldPassword().type(password)
    }

    clickOnLogin() {
        elements.btnLogin().click()
    }

}
export default LoginPO