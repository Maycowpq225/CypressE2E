import Person from "./Person"

class SharedInstance {

    private person: Person ;
    private response: Cypress.Response<any>;
    private static sharedInstance: SharedInstance;

    static share() {
        if (this.sharedInstance == null) {
          this.sharedInstance = new SharedInstance();
        }
        return this.sharedInstance;
      }

    public setResponse(response) {
      this.response = response;
    }

    public getResponse() {
      return this.response
    }

    public createNewPerson() {
      this.person = new Person();
    }

    public getPerson() {
      if (this.person == null) {
        this.person = new Person();
      }
      return this.person;
    }
}
export default SharedInstance
