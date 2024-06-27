describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('mhub.mantis.co.id')
          
      cy.get(':nth-child(1) > .form-control').type('bbm.mantis@yopmail.com');
      cy.get('#password').type('P3ju4ngM4nt1s24');
      cy.get('.btn-block').click();
    
      cy.intercept('/some/api/endpoint').as('loginSuccess'); 
    })

it('approval tb', () => {
    cy.xpath("(//span[@class='hamburger-box'])[2]").click()
    cy.xpath("(//span[normalize-space()='Activity Dashboard'])[1]").click()
    cy.xpath("(//span[normalize-space()='Manajemen AR'])[1]").click()
    cy.xpath("(//a[normalize-space()='Monitoring Pengajuan Tarik Barang'])[1]").scrollIntoView
    cy.xpath("(//span[normalize-space()='Manajemen Tarik Barang'])[1]").click()
    cy.xpath("(//a[normalize-space()='Daftar Barang Titipan'])[1]").click()
    cy.get('.app-sidebar-overlay').click()
    cy.wait(3000)
    cy.xpath("(//*[name()='path'][@fill='currentColor'])[5]").click()
    cy.xpath("(//input[@placeholder='No Booking'])[1]").type('550323060001')
    cy.xpath("(//button[normalize-space()='Terapkan'])[1]").click()
    cy.wait(3000)
    cy.xpath("(//button[@class='mx-1 shadow-none d-40 border-0 p-1 d-inline-flex align-items-center justify-content-center btn btn-neutral-info'])[1]").click()
    cy.xpath("(//div[@class='text-header font-weight-bold'])[1]").scrollIntoView()
    cy.xpath("(//div[@class=' css-1hwfws3'])[2]").type('Tarik Barang{enter}')
    cy.xpath("(//textarea[@placeholder='Keterangan'])[1]").type('Tarik barang putus isi dong caranya Tarik barang putus isi dong caranya')
    cy.xpath("(//span[@class='text-sm px-2'])[1]").click()
    cy.xpath("(//span[normalize-space()='Ya'])[1]").click()
    cy.wait(8000)
})
})
