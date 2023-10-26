 
  describe('Inserir Anexo Selfie Cliente', () => {
    it('successfully', () => {
      cy.inserir_anexo_selfie_cliente()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Inclusão de anexo realizada com sucesso.")
        })
    })
  })
  
  