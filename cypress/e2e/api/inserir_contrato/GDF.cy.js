 
  describe('Inserir Contrato GDF', () => {
    it('successfully', () => {
      cy.inserir_contrato_gdf()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Contrato inserido com sucesso.")
        })
    })
  })
  
  