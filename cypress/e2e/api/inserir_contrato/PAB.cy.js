 
  describe('Inserir Contrato PAB', () => {
    it('successfully', () => {
      cy.inserir_contrato_pab()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Contrato inserido com sucesso.")
        })
    })
  })
  
  