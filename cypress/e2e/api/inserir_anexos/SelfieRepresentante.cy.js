 
  describe('Inserir Anexo Selfie Representante', () => {
    it('successfully', () => {
      cy.inserir_anexo_selfie_representante()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Inclusão de anexo realizada com sucesso.")
        })
    })
  })
  
  