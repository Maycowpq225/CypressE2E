import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import BarrigaOnboardingServices from '../services/BarrigaOnboardingServices'
import SharedInstance from '../utils/SharedInstance'

const barrigaOnboardingServices = new BarrigaOnboardingServices();

Given ('that is created a new person data', () => {
    SharedInstance.share().createNewPerson();
})

When ('the new person is registered into barrigareact', () => {
    barrigaOnboardingServices.registerNewAccount(SharedInstance.share().getPerson())
                                .then((response) => SharedInstance.share().setResponse(response));
})

Then ('the response body should contains the corrects json attributes', () => {
    expect(SharedInstance.share().getResponse().body).to.have.property('id');
    expect(SharedInstance.share().getResponse().body).to.have.property('nome');
    expect(SharedInstance.share().getResponse().body).to.have.property('id_telegram');
    expect(SharedInstance.share().getResponse().body).to.have.property('email');
    expect(SharedInstance.share().getResponse().body).to.have.property('senha');
    expect(SharedInstance.share().getResponse().body).to.have.property('created_at');
    expect(SharedInstance.share().getResponse().body).to.have.property('updated_at');
})
