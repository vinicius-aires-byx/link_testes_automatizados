 
  describe('Inserir Anexo Documento Cliente Verso', () => {
    it('successfully', () => {
      cy.inserir_anexo_documento_cliente_verso()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Inclusão de anexo realizada com sucesso.")
        })
    })
  })
  
  