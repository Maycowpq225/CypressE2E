import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import LoginPO from '../pages/LoginPO'
const loginPO = new LoginPO();

Given('User is on the website {string}', (website) => {
    cy.visit(website)
})

When('User enter with the username {string} and password {string}', (username, password) => {
    loginPO.fillFieldUser(username)
    loginPO.fillFieldPassword(password)
    loginPO.clickOnLogin()
})  