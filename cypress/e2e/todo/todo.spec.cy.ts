describe('Todo', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should create a new todo',  () => {
    
    cy.get('[data-cy="input"]').type('new todo{enter}').clear()

    const list = cy.get('[data-cy="list"]')

    list.contains('new todo')
    list.should('have.length', 1)
  })

  it.skip('should not created todo empty', () => {
    cy.get('[data-cy="input"]').clear().type('{enter}')
    
      const listAll = cy.get('[data-cy="list"]').find('li')
    
    listAll.should('have.length', 1)
  })

  it('should input have attribute required', () => {
    const input = cy.get('[data-cy="input"]')
  
    input.should('have.attr', 'required')
  })

  it('should create multi todos', () => {
    cy.get('[data-cy="input"]')
    .type('task one{enter}')
    .clear()
    .type('task two{enter}')
    .clear()
    .type('task tree{enter}')
    .clear()

    const listAll = cy.get('[data-cy="list"]').find('li')
    
    listAll.should('have.length', 4)
  })

  it('should counter todo created', () => {
    cy.get('[data-cy="input"]').type('task one{enter}').clear()
    
    const counterTodos = cy.get('[data-cy="display"]')

    counterTodos.should('have.text', '1 item left')

    cy.get('[data-cy="input"]').type('task two{enter}').clear()


    cy.get('[data-cy="display"]').should('have.text', '2 items left')
  })

  it('should create completed todo', () => {
    cy.get('[data-cy="toggle-completed-todo"]').click()
    cy.get('[data-cy="input"]').type('todo completed{enter}').clear()

    const counterTodos = cy.get('[data-cy="display"]')

    counterTodos.should('have.text', '0 item left')

    const todoCompleted = cy.contains('todo completed')
    
    todoCompleted.should('have.class', 'line-through')
  })

  it('should delete todo created', () => {
    cy.get('[data-cy="input"]').type('new todo{enter}').clear()

    const todo = cy.get('[data-cy="list"]').find('li').first()

    cy.get('[data-cy="display"]').should('have.text', '1 item left')

    todo.get('[data-cy="delete-button"]').click()

    cy.get('[data-cy="display"]').should('have.text', '0 item left')
  })

  it('should filter actives todos ', () => {
    cy.dataCy('input').type('todo{enter}').clear()
    cy.contains('active').click()

    const activesTodo = cy.dataCy('list').find('li').first()
    
    activesTodo.should('have.text', 'todo')

    activesTodo.get('label > input').should('have.class', 'hidden')

    const counterTodos = cy.get('[data-cy="display"]')

    counterTodos.should('have.text', '1 item left')
  })

  it('should delete all todos completed ', () => {
    cy.dataCy('toggle-completed-todo').click()
    cy.dataCy('input')
      .type('todo one{enter}')
      .clear()
      .type('todo two{enter}')
    
    cy.dataCy('list').find('li').should('have.length', 3)

    cy.contains('Clear Completed').click()

    cy.dataCy('list').find('li').should('have.length', 1)
  })
})