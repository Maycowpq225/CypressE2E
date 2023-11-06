class BaseService {

    constructor(baseURL) {
        Cypress.config('baseURL', baseURL)
    }

    doPostRequestWithBody(bodyRequest, resource) {
        return cy.request({
            method: 'POST',
            body: bodyRequest,
            url: resource
        })
    }
    
}
export default BaseService