describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('mhub.mantis.co.id')
          
      cy.get(':nth-child(1) > .form-control').type('digitaladmin1@mantisworks.id');
      cy.get('#password').type('AnaK@K4mpun9Ker3n1012');
      cy.get('.btn-block').click();
    
      cy.intercept('/some/api/endpoint').as('loginSuccess'); 
    })
  
    it('Tarik Barang Internal', () => {

      cy.xpath("(//span[@class='hamburger-box'])[2]").click()
      cy.xpath("(//span[normalize-space()='Activity Dashboard'])[1]").click()   
      cy.xpath("(//span[@class='sidebar-item-label'][normalize-space()='Manajemen AR'])[2]").click()
      cy.xpath("(//span[@class='sidebar-item-label'][normalize-space()='Manajemen AR'])[2]").scrollIntoView()    
      cy.xpath("//a[normalize-space()='Monitoring Tugas']").click()
      cy.xpath("(//button[@class='navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn is-active'])[1]").click()
      cy.xpath("(//div[@class='w-100 text-left d-flex mr-2 buttonlistbranch_text-btn-branch__3aaJ1'])[1]").type('mantis{enter}')
      cy.xpath("(//*[name()='path'][@fill='currentColor'])[5]").scrollIntoView()
      cy.xpath("//button[contains(@class,'btn btn-outline-primary btn-sm')]//*[name()='svg']").click()
      cy.xpath("//input[@placeholder='Masukkan Nama...']").type('550323120038')
      cy.get('.filterform_wrapper-button__1peBf > .ml-2').click()
      cy.wait(2000)
      cy.get('[style="width: 5%;"] > .d-flex').click()
      cy.wait(2000)
      cy.get(':nth-child(2) > .btn > .btn-wrapper--label').click()
      cy.xpath("//div[contains(@class,'css-1hwfws3')]").type('Tarik Barang Internal{enter}')
      cy.xpath("(//span[normalize-space()='Berikutnya'])[1]").click()
      cy.wait(2000)
      cy.xpath("(//div[@class=' css-1hwfws3'])[1]").scrollIntoView()
      cy.wait(500)
      cy.xpath("(//div[@class=' css-1hwfws3'])[1]").type('Mantis{enter}')
      cy.xpath("(//div[@class=' css-1hwfws3'])[3]").type('Mangembang{enter}')
      cy.xpath("(//input[@placeholder='Alasan...'])[1]").type('kasdakdasdkalsdkaldkaslkdalsdkalskdaslkdaslkdalkdaslkdlakdlakdlakdlaskdlas')
      cy.xpath("(//input[@placeholder='0'])[1]").type('10000000')
      cy.xpath("(//input[@placeholder='0'])[2]").type('10000000')
      cy.xpath("(//div[contains(@class,'css-1hwfws3')])[4]").scrollIntoView
      cy.xpath("(//div[contains(@class,'css-1hwfws3')])[4]").type('biaya transport{enter}')
      cy.xpath("(//input[@value='0'])[1]").type('100000')
      cy.xpath("(//span[normalize-space()='Ajukan Rekomendasi'])[1]").click()
      cy.xpath("(//span[normalize-space()='Ajukan'])[1]").click()
      cy.wait(5000)


    })
})
