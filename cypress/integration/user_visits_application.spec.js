describe('user visits the application', () => {
  before(() => {
    cy.intercept('GET','*/users**', {fixture: 'users.json'})
    cy.visit('/')
  })
  it('is expected to display title', () => {
    cy.get('[data-testid=header]').should('contain.text', 'Employee Management')
  })
  
  describe('Employee List Section', () => {
    it('is expected to display 4 employees', () => {
      cy.get('[data-testid=employee-list').children().should('have.length', 4)
      })
      it('is expected to return Thomas as first employee in list', () => {
        cy.get('[data-testid=employee-list]')
        .children()
        .first()
        .should('contain.text', 'Thomas Bluth')
        .next()
        .should("contain.text", "Janet")
      })

      it('is expected list items to display an image', () => {
        cy.get('#employee-list').within(() => {
          cy.get('.employee-item')
          .first()
          .find('.avatar')
          .should('be.visible')
        })
      })
    })
  })