class BaseService {

    doPostRequestWithBody(bodyRequest, resource) {
        return cy.request({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
              },
            body: bodyRequest,
            url: resource
        })
    }
    
}
export default BaseService