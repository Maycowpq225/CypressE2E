import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import RequestManager from '../utils/RequestManager'

describe ('Base steps', () => {


    Then ('the response code states should be {int}', (code: number) => {
        expect(RequestManager.shared().getResponse().status).to.eq(code, "Response body contains correct status code")
        console.log(RequestManager.shared().getResponse().body);
    })

})