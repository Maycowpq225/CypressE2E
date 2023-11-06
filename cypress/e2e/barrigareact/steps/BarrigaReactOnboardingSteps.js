import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import BarrigaOnboardingServices from '../services/BarrigaOnboardingServices'
import Person from '../utils/Person'
const barrigaOnboardingServices = new BarrigaOnboardingServices();
const person = new Person();

Given ('that is created a new person data', () => {
    console.log(person);
})



