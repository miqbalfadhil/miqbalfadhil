describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('mhub.mantis.co.id')
          
      cy.get(':nth-child(1) > .form-control').type('digitaladmin1@mantisworks.id');
      cy.get('#password').type('AnaK@K4mpun9Ker3n1012');
      cy.get('.btn-block').click();
    
      cy.intercept('/some/api/endpoint').as('loginSuccess'); 
    })
  
    it('approval tb', () => {
        cy.xpath("(//span[@class='hamburger-box'])[2]").click()
        cy.xpath("(//span[normalize-space()='Activity Dashboard'])[1]").click()   
        cy.xpath("(//span[@class='sidebar-item-label'][normalize-space()='Manajemen AR'])[2]").click()
        cy.xpath("(//span[@class='sidebar-item-label'][normalize-space()='Manajemen AR'])[2]").scrollIntoView()
        cy.xpath("(//span[normalize-space()='Manajemen Tarik Barang'])[1]").click()
        cy.xpath("(//a[normalize-space()='Approval Tarik Barang'])[1]").click()
        cy.xpath("(//div[@class='app-sidebar-overlay is-active'])[1]").click()
        cy.wait(10000)
        cy.xpath("(//*[name()='path'][@fill='currentColor'])[4]").click()
        cy.xpath("(//input[@placeholder='No Booking'])[1]").type('550323120038')
        cy.xpath("(//button[normalize-space()='Terapkan'])[1]").click()
        cy.wait(10000)
        cy.xpath("(//span[@class='btn-wrapper--label'][normalize-space()='Proses'])[1]").click()
        cy.xpath("(//span[contains(text(),'Setujui')])[1]").scrollIntoView()
        cy.xpath("(//span[contains(text(),'Setujui')])[1]").click()
        cy.wait(2000)
        cy.xpath("(//span[@class='btn-wrapper--label'][normalize-space()='Setujui'])[2]").click()
        cy.wait(10000)
        cy.xpath("(//span[normalize-space()='Daftar Pengajuan'])[1]").click()
        cy.wait(5000)
        cy.xpath("(//*[name()='path'][@fill='currentColor'])[4]").click()
        cy.xpath("(//input[@placeholder='No Booking'])[1]").type('550323120038')
        cy.xpath("(//button[normalize-space()='Terapkan'])[1]").click()
        cy.wait(10000)
        cy.xpath("(//span[@class='btn-wrapper--label'][normalize-space()='Proses'])[1]").click()
        cy.xpath("(//span[contains(text(),'Setujui')])[1]").scrollIntoView()
        cy.xpath("(//span[contains(text(),'Setujui')])[1]").click()
        cy.wait(2000)
        cy.xpath("(//span[@class='btn-wrapper--label'][normalize-space()='Setujui'])[2]").click()
        cy.wait(10000)
       


    })
})
