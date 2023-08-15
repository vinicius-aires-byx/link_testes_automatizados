 
  describe('Inserir Anexo CCB', () => {
    it('successfully', () => {
      cy.inserir_anexo_ccb()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Inclusão de anexo realizada com sucesso.")
        })
    })
  })
  
  