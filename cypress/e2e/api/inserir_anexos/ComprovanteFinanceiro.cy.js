 
  describe('Inserir Anexo Comprovante Financeiro', () => {
    it('successfully', () => {
      cy.inserir_anexo_comprovante_financeiro()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Inclusão de anexo realizada com sucesso.")
        })
    })
  })
  
  