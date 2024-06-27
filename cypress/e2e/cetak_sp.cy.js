describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('mhub.mantis.co.id')
          
      cy.get(':nth-child(1) > .form-control').type('digitaladmin1@mantisworks.id');
      cy.get('#password').type('AnaK@K4mpun9Ker3n1012');
      cy.get('.btn-block').click();
    
      cy.intercept('/some/api/endpoint').as('loginSuccess'); 
    })
  
    it('Cetak SP', () => {
        cy.xpath("(//span[@class='hamburger-box'])[2]").click()

        cy.xpath("(//span[normalize-space()='Activity Dashboard'])[1]").click()   
        cy.xpath("(//span[@class='sidebar-item-label'][normalize-space()='Manajemen AR'])[2]").click()
        cy.xpath("(//span[@class='sidebar-item-label'][normalize-space()='Manajemen AR'])[2]").scrollIntoView()   
        cy.xpath("(//span[normalize-space()='Surat Pendamping Penagihan'])[1]").click()
        cy.xpath("(//span[normalize-space()='Surat Pendamping Penagihan'])[1]").scrollIntoView()
        cy.xpath("(//a[normalize-space()='Surat Peringatan'])[1]").click()
        cy.wait(7000)
        cy.get('.app-sidebar-overlay').click()
        cy.xpath("(//button[@class='d-flex align-items-center justify-content-center d-40 p-0 rounded-pill btn btn-outline-primary'])[1]").click()
        cy.xpath("(//input[@placeholder='Nama Konsumen'])[1]").type('TES KPM SYARIAH C')
        cy.xpath("(//*[name()='svg'][@class='css-19bqh2r'])[2]").type('mantis{enter}')
        cy.wait(500)
        cy.xpath("(//button[normalize-space()='Terapkan'])[1]").click()
        cy.wait(1500)
        cy.xpath("(//input[@type='checkbox'])[1]").click()
        cy.xpath("(//span[normalize-space()='Cetak Surat ( 3 )'])[1]").click()
        cy.xpath("(//button[@class='mx-1 px-5 btn btn-primary'])[1]").click()
        cy.wait(5000)

                })
              })