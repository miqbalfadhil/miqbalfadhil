describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('mhub.mantis.co.id')
          
      cy.get(':nth-child(1) > .form-control').type('digitaladmin1@mantisworks.id');
      cy.get('#password').type('AnaK@K4mpun9Ker3n1012');
      cy.get('.btn-block').click();
    
      cy.intercept('/some/api/endpoint').as('loginSuccess'); 
    })
  
    it('Pengajuan SP', () => {

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
        cy.xpath("//div[contains(@class,'css-1hwfws3')]").type('SP1{enter}')
        cy.xpath("(//textarea[@id='exampleText'])[1]").type('test sp konsumen bvt automation tahun 2024 by iqbal fadhil')
        cy.xpath("(//span[normalize-space()='Berikutnya'])[1]").click()
        cy.wait(18000)
        cy.get(':nth-child(2) > .btn > .btn-wrapper--label').click()
        cy.xpath("//div[contains(@class,'css-1hwfws3')]").type('SP2{enter}')
        cy.xpath("(//textarea[@id='exampleText'])[1]").type('test sp konsumen bvt automation tahun 2024 by iqbal fadhil')
        cy.xpath("(//span[normalize-space()='Berikutnya'])[1]").click()
        cy.wait(18000)
        cy.get(':nth-child(2) > .btn > .btn-wrapper--label').click()
        cy.xpath("//div[contains(@class,'css-1hwfws3')]").type('SP3{enter}')
        cy.xpath("(//textarea[@id='exampleText'])[1]").type('test sp konsumen bvt automation tahun 2024 by iqbal fadhil')
        cy.xpath("(//span[normalize-space()='Berikutnya'])[1]").click()
        cy.wait(18000)
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
        cy.xpath("(//input[@type='checkbox'])[1]").click()
        cy.xpath("(//span[normalize-space()='Cetak Surat ( 3 )'])[1]").click()
        cy.xpath("(//span[normalize-space()='Cetak'])[1]")
        cy.wait(5000)

                })
              })
            
          
  