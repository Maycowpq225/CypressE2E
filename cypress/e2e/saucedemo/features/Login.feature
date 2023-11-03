Feature: Login

    Scenario Outline: Successfull login to the website saucedemo

        Given User is on the website "https://www.saucedemo.com"
        When User enter with the username 'standard_user' and password 'secret_sauce'
        Then User validate that he is on the homescreen
