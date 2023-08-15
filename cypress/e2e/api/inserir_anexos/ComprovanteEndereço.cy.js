 
  describe('Inserir Anexo Comprovante De Endereço', () => {
    it('successfully', () => {
      cy.inserir_anexo_comprovante_endereco()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Inclusão de anexo realizada com sucesso.")
        })
    })
  })
  
  