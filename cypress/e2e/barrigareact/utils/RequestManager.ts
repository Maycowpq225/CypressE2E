class RequestManager {

    private response: Cypress.Response<any>;
    private static sharedInstance: RequestManager;

    static shared() {
        if (this.sharedInstance == null) {
          this.sharedInstance = new RequestManager();
        }
        return this.sharedInstance;
      }

    public setResponse(response) {
      this.response = response;
    }

    public getResponse() {
      return this.response
    }
}
export default RequestManager