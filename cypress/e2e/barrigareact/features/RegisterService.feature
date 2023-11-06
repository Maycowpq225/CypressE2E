Feature: Register

    Scenario Outline: Creating a new account with success
        Given that is created a new person data
        When the new person is registered into barrigareact
        #Then the response code states should be 201
        #And the response body should contains the following json "registerResult.json"