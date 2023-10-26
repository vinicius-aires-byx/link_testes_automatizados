 
  describe('Inserir Anexo Selfie', () => {
    it('successfully', () => {
      cy.inserir_anexo_selfie()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Inclusão de anexo realizada com sucesso.")
        })
    })
  })
  
  