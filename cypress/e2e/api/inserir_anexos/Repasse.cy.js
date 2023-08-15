 
  describe('Inserir Anexo Repasse', () => {
    it('successfully', () => {
      cy.inserir_anexo_repasse()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Inclusão de anexo realizada com sucesso.")
        })
    })
  })
  
  