import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import Person from "../utils/Person"
import BarrigaOnboardingServices from '../services/BarrigaOnboardingServices'
import RequestManager from '../utils/RequestManager'

const barrigaOnboardingServices = new BarrigaOnboardingServices();
const person = new Person();

describe ('Rest Api Suite', () => {

    let reqResponse: Cypress.Response<any>;
    let requestManager;

    Given ('that is created a new person data', () => {
        console.log('nome:' + person.name);
        console.log('email:' + person.email);
        console.log('password:' + person.password);
    })

    When ('the new person is registered into barrigareact', () => {
        barrigaOnboardingServices.registerNewAccount(person)
                                    .then((response) => RequestManager.shared().setResponse(response));
    })

    //Then ('the response code states should be {int}', (code: number) => {
    //    expect(reqResponse.status).to.eq(code, "Response body contains correct status code")
    //})

    //Then ('the response body should contains the following json {string}', (jsonPath: string) => {
    //    console.log(jsonPath);
    //})

})




