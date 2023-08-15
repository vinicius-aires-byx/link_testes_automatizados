 
  describe('Inserir Anexo Arquivo Retorno Reserva', () => {
    it('successfully', () => {
      cy.inserir_anexo_retorno_reserva()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Inclusão de anexo realizada com sucesso.")
        })
    })
  })
  
  