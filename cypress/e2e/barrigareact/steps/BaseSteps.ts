import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import SharedInstance from '../utils/SharedInstance'


Then ('the response code states should be {int}', (code: number) => {
    expect(SharedInstance.share().getResponse().status).to.eq(code, "Response body contains correct status code")
})

