 
  describe('Inserir Anexo Foto da Prova de Vida', () => {
    it('successfully', () => {
      cy.inserir_anexo_foto_prova_de_vida()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Inclusão de anexo realizada com sucesso.")
        })
    })
  })
  
  