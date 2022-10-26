describe('Todo', () => {
  it('should create a new todo', () => {
    cy.visit('http://127.0.0.1:5173/')

    cy.get('[data-cy=input]').type('new todo{enter}').clear()

    cy.get('[data-cy=list]').find('li').first().should('have.text', 'new todo')
  })
  it('not should create empty todo', () => {
    cy.visit('http://127.0.0.1:5173/')

    cy.get('[data-cy=input]').type('{enter}').clear()
    
    cy.get('[data-cy=list]').find('li').should('have.length', '1')
  })
  it.skip('not should create empty todo', () => {
    cy.get('[data-cy=input]').type('{enter}').clear()

    cy.get('[data-cy=list').find('li').should('have.length', '1')
  })
  it('should input have attribute required', () =>{
    cy.get('[data-cy=input]').should('have.attribute', 'required')
  })
  it('should create a multiple todo', () => {
    cy.get('[~data-cy=input]')
      .type('one todo')
  })
})