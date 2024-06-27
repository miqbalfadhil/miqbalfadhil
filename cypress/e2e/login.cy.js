describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('mhub.mantis.co.id')
  })

  it('valid login', () => {
   
  
    cy.get(':nth-child(1) > .form-control').type('digitaladmin1@mantisworks.id');
    cy.get('#password').type('AnaK@K4mpun9Ker3n1012');
    cy.get('.btn-block').click();
  
    cy.intercept('/some/api/endpoint').as('loginSuccess'); 
   

  
})
})

      

