class HomePO {

    lblTitleProducts () {
        return cy.contains('Products')
    }

    validateTitleProducts () {
        this.lblTitleProducts().should('be.visible')
    }

}
export default HomePO