describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('mhub.mantis.co.id')
          
      cy.get(':nth-child(1) > .form-control').type('bbm.mantis@yopmail.com');
      cy.get('#password').type('P3ju4ngM4nt1s24');
      cy.get('.btn-block').click();
    
      cy.intercept('/some/api/endpoint').as('loginSuccess'); 
    })
  
    it('Tarik Barang Eksternal', () => {

        cy.xpath("(//span[@class='hamburger-box'])[2]").click()
        cy.xpath("(//span[normalize-space()='Activity Dashboard'])[1]").click()   
        cy.get('.show > :nth-child(1) > :nth-child(6) > :nth-child(1) > .sidebar-item-label').click()
        cy.get(':nth-child(6) > .show > :nth-child(1) > :nth-child(3) > a').click()
        cy.wait(1000)
        cy.get('.app-sidebar-overlay').click()
        cy.xpath("(//span[normalize-space()='Barang Titipan'])[1]").click()
        cy.wait(2000)
        cy.xpath("(//span[normalize-space()='Titip Barang'])[1]").click()
        cy.wait(1000)
        cy.xpath("(//div[contains(text(),'Pilih Kondisi')])[1]").type('Petugas{enter}')
        cy.xpath("(//div[contains(text(),'Pilih Kategori')])[1]").type('No. Polisi{enter}')
        cy.xpath("(//input[@placeholder='Pilih No. Polisi'])[1]").type('B3872HGY')
        cy.xpath("(//button[normalize-space()='Cari No. Booking'])[1]").click()
        cy.wait(7000)
        cy.xpath("(//input[@placeholder='Titip Sejak Tanggal'])[1]").scrollIntoView
        cy.xpath("(//input[@placeholder='0'])[1]").type('15000000')
        cy.xpath("(//button[normalize-space()='Berikutnya'])[1]").click()
        cy.xpath("(//div[contains(@class,'css-1hwfws3')])[3]").type('PT BVT{enter}')
        cy.get('.text-options').type('Iqbal')
        cy.xpath("(//button[normalize-space()='Berikutnya'])[1]").click()
        cy.xpath("(//button[normalize-space()='Berikutnya'])[1]").click()
        cy.xpath("(//div[contains(text(),'Pilih Speedometer')])[1]").type('ada (Original){enter}')
        cy.xpath("(//div[contains(text(),'Pilih Shock Breaker Depan')])[1]").type('ada (Original){enter}')
        cy.xpath("(//div[contains(@class,'css-5yfhrh-placeholder')][contains(text(),'Pilih Disc Brake + Kaliper Cakram + Master Rem + B')])[1]").type('ada (Original){enter}')
        cy.xpath("(//div[contains(text(),'Pilih Velg Depan (CW/Racing)')])[1]").type('ada (Original){enter}')
        cy.xpath("(//div[contains(text(),'Pilih Velg Belakang (CW/Racing)')])[1]").scrollIntoView()
        cy.xpath("(//div[contains(text(),'Pilih Cover Belakang (L/R) atau Cover Body')])[1]").type('ada (Original){enter}')
        cy.xpath("(//div[contains(text(),'Pilih Lampu Depan / Belakang')])[1]").type('ada (Original){enter}')
        cy.xpath("(//div[contains(text(),'Pilih Shock Breaker Belakang')])[1]").type('ada (Original{enter}')
        cy.get(':nth-child(8) > .font-size-md > .text-options > .css-uoudvr-control > .css-1hwfws3 > .css-5yfhrh-placeholder').type('ada (Original{enter}')
        cy.xpath("(//div[contains(text(),'Pilih Velg Belakang (CW/Racing)')])[1]").type('ada (Original{enter}')
        cy.xpath("(//div[contains(text(),'Pilih CVT / V-Belt / Gir Box')])[1]").type('ada (Original{enter}')
        cy.xpath("(//div[contains(text(),'Pilih Kondisi Mesin')])[1]").scrollIntoView()
        cy.xpath("(//div[contains(text(),'Pilih Electric Starter')])[1]").type('ada (Original{enter}')
        cy.xpath("(//div[contains(text(),'Pilih Kondisi Mesin')])[1]").type('Normal{enter}')
        cy.xpath("(//div[contains(text(),'Pilih Kunci Kontak / Kunci Remote')])[1]").type('ada (Original{enter}')
        cy.xpath("(//div[contains(text(),'Pilih Carburator / Electronic Control Unit')])[1]").type('ada (Original{enter}')
        cy.xpath("(//div[contains(text(),'Pilih Block Mesin')])[1]").type('ada (Original{enter}')
        cy.xpath("(//div[contains(text(),'Pilih Fisik STNK')])[1]") .type('ada{enter}')
        cy.xpath("(//div[contains(text(),'Pilih Plat Nomor Luar Kota')])[1]").type('Ya{enter}')
        cy.xpath("(//input[@placeholder='Pilih Pajak STNK Berlaku s/d'])[1]").type('27-06-2024{enter}')
        cy.xpath("(//button[normalize-space()='Berikutnya'])[1]").click()
        cy.get(':nth-child(1) > .image').scrollIntoView()
        cy.xpath("//div[@class='p-4']//div[1]//span[1]//button[1]//*[name()='svg']").click()
    })
})

