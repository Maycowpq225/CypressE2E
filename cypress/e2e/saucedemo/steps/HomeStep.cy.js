import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import HomePo from '../pages/HomePO'
const homePO = new HomePo();

Then('User validate that he is on the homescreen', () => {
    homePO.validateTitleProducts()
})