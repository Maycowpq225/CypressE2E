import BaseService from './BaseService'

const baseService = new BaseService('https://barrigarest.wcaquino.me');
const registerAccount = '/usuarios';

class BarrigaOnboardingServices {

    registerNewAccount (person) {
        const person = {
            nome: person.name,
            email: person.email,
            senha: person.password,
            redirecionar: false,
          };

          return baseService.doPostRequestWithBody(JSON.stringify(person), registerAccount);        
    }

}
export default BarrigaOnboardingServices