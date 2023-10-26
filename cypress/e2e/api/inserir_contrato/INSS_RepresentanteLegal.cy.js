 
  describe('Inserir Contrato INSS Representante Legal', () => {
    it('successfully', () => {
      cy.inserir_contrato_inss_representante_legal()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Contrato inserido com sucesso.")
        })
    })
  })
  
  