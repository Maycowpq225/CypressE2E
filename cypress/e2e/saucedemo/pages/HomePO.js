const elements = {
    lblTitleProducts: () => cy.contains('Products')
}

class HomePO {
    validateTitleProducts () {
        elements.lblTitleProducts().should('be.visible')
    }
}
export default HomePO