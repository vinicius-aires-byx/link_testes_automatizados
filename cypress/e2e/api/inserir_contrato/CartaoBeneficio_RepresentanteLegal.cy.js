 
  describe('Inserir Contrato Cartão Benefício Representante Legal', () => {
    it('successfully', () => {
      cy.inserir_contrato_cartao_beneficio_representante_legal()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Contrato inserido com sucesso.")
        })
    })
  })
  
  