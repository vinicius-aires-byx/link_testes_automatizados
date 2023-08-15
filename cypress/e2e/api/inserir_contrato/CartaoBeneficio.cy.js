 
  describe('Inserir Contrato Cartão Benefício', () => {
    it('successfully', () => {
      cy.inserir_contrato_cartao_beneficio()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Contrato inserido com sucesso.")
        })
    })
  })
  
  