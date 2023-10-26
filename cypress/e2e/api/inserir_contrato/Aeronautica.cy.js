 
  describe('Inserir Contrato Aeronautica', () => {
    it('successfully', () => {
      cy.inserir_contrato_aeronautica()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Contrato inserido com sucesso.")
        })
    })
  })
  
  