import BaseService from './BaseService'

const baseService = new BaseService();
const registerAccount = 'https://barrigarest.wcaquino.me/usuarios';

class BarrigaOnboardingServices {

    registerNewAccount (person) {
        const personJson = {
            nome: person.name,
            email: person.email,
            senha: person.password,
            redirecionar: false,
          };

          return baseService.doPostRequestWithBody(JSON.stringify(personJson), registerAccount);        
    }

}
export default BarrigaOnboardingServices