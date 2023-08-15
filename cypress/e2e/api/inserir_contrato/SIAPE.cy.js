 
  describe('Inserir Contrato SIAPE', () => {
    it('successfully', () => {
      cy.inserir_contrato_siape()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Contrato inserido com sucesso.")
        })
    })
  })
  
  