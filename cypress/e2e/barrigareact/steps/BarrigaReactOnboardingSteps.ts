import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import Person from "../utils/Person"
import BarrigaOnboardingServices from '../services/BarrigaOnboardingServices'

const barrigaOnboardingServices = new BarrigaOnboardingServices();

describe ('Rest Api Suite', () => {

    let person;
    let reqResponse: Cypress.Response<any>;

    Given ('that is created a new person data', () => {
        person = new Person();
        console.log('nome:' + person.name);
        console.log('email:' + person.email);
        console.log('password:' + person.password);
    })

    When ('the new person is registered into barrigareact', () => {
        barrigaOnboardingServices.registerNewAccount(person).then((response) => reqResponse = response);
    })

})




