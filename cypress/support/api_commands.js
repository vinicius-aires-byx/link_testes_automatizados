//----------------------------------------------Pine FGTS----------------------------------------------


Cypress.Commands.add('analise_com_sucesso_pine_fgts', project => {
  cy.request({
    method: 'POST',
    url: `/analise-contrato/`,
    body: {
            "contrato": {
                "nuLote": "42",
                "nuContratoFacta": "35194050001",
                "cdContratoTipo": "1",
                "nuCnpjCorrespondente": "01360251000140",
                "dtDigitacao": "2022-10-04",
                "dtContrato": "2022-09-15",
                "dtPrimeiroVencimento": "2022-12-07",
                "nuCpfAgenteValidador": "01217961160",
                "qtParcelasAberto": "84",
                "qtParcelasPagas": "0",
                "qtParcelasVencer": "84",
                "qtParcelasAverbadas": "84",
                "qtParcelasTotal": "84",
                "txCETAno": "0.5246999",
                "txCETMes": "0.0312910",
                "txEfetivaAno": "0.4357594",
                "txEfetivaMes": "0.0306000",
                "vrAberto": "3705.24",
                "vrContrato": "1166.51",
                "vrIof": "38.41",
                "vrParcela": "44.11",
                "vrVencer": "3705.24",
                "vrLiberadoCliente": "1166.51",
                "vrTAC": "0.0",
                "vrSeguro": "0.0",
                "nuContratoCCB": "54568972",
                "recusado": "false",
                "docsValidados": "false",
                "tipoProduto": 1
            },
            "cliente": {
                "nmCliente": "joao guilherme silva cardoso",
                "dtNascimento": "1985-08-09",
                "nmMae": "SIMONE DO ROSARIO SILVA",
                "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
                "nmSexo": "M",
                "dsEstadoCivil": "OUTROS",
                "nmEmail": "",
                "nuRG": "0501792520132",
                "nuCpf": "53582969800",
                "dtEmissaoRg": "2016-10-25",
                "nmOrgaoEmissorRg": "SSP",
                "nmUfOrgaoEmissorRg": "AC",
                "dsNaturalidade": "PINHEIRO",
                "nmEnderecoResidencialTipo": "1",
                "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
                "nmEnderecoResidencialNumero": "41",
                "nmEnderecoResidencialComplento": "None",
                "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
                "nmEnderecoResidencialCidade": "ACRELANDIA",
                "nmEnderecoResidencialUf": "AC",
                "nuEnderecoResidencialCep": "65200000",
                "nuDddTelefoneCelular": "098984645210",
                "nuDddTelefoneResidencial": "1",
                "vrRenda": "1212.0",
                "nuCNH": "",
                "tempoResidencia": "0",
                "tipoLogradouro": "None",
                "dsNacionalidade": "BRASILEIRA",
                "vrPatrimonio": "10000.0",
                "escolaridade": "1",
                "empresa": {
                    "empresa": "INSS 29979036000140",
                    "profissao": " PROFISSAO NAO DEFINIDA",
                    "dtAdmissao": "2022-12-02",
                    "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                    "tipoProfissao": "PENSIONISTA",
                    "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                    "tipoProfissaoOr": "PENSIONISTA"
                }
            },
            "representante": {
                "nmCliente": "ANGELICA PINTO MAIA",
                "dtNascimento": "1985-11-22",
                "nmMae": "RAAIMUNDA NONATA SILVA",
                "nmPai": "NAO CONSTA NO DOCUMENTO",
                "nmSexo": "F",
                "dsEstadoCivil": "OUTROS",
                "nmEmail": "",
                "nuCpf": "02806073254",
                "dtEmissaoRg": "2018-09-19",
                "nmOrgaoEmissorRg": "SSP",
                "nmUfOrgaoEmissorRg": "AC",
                "dsNaturalidade": "ACRELANDIA",
                "nmEnderecoResidencialTipo": "1",
                "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
                "nmEnderecoResidencialNumero": "41",
                "nmEnderecoResidencialComplento": "None",
                "nmEnderecoResidencialBairro": "JUREICO",
                "nmEnderecoResidencialCidade": "ACRELANDIA",
                "nmEnderecoResidencialUf": "MA",
                "nuEnderecoResidencialCep": "65200000",
                "nuDddTelefoneCelular": "098984645210",
                "nuDddTelefoneResidencial": "1",
                "vrRenda": "1212.0",
                "tempoResidencia": "0",
                "tipoLogradouro": "",
                "nacionalidade": "BRASILEIRA",
                "vrPatrimonio": "10000.0",
                "escolaridade": "1",
                "nuRG": "0207870320028"
            },
            "beneficio": {
                "matricula": "7042811594",
                "ufBeneficio": "AC",
                "tipoBeneficio": "87",
                "vrBeneficio": "1212.0",
                "dtConcessaoBeneficio": "2019-01-02",
                "dia_util_pagamento": "",
                "dia_util_forma_pagamento": ""
            },
            "parcela": [
                {
                    "nuParcela": "1",
                    "dtVencimento": "2022-12-07",
                    "vrParcela": "44.11",
                    "recebido_facta": true,
                    "paga": true,
                    "vrPago": "44.11",
                    "dtPagamento": "2022-12-07"
                },
                {
                    "nuParcela": "2",
                    "dtVencimento": "2023-01-07",
                    "vrParcela": "44.11",
                    "recebido_facta": true,
                    "paga": true,
                    "vrPago": "44.11",
                    "dtPagamento": "2023-01-07"
                },
                {
                    "nuParcela": "3",
                    "dtVencimento": "2023-02-07",
                    "vrParcela": "44.11",
                    "recebido_facta": true,
                    "paga": true,
                    "vrPago": "44.11",
                    "dtPagamento": "2023-02-07"
                },
                {
                    "nuParcela": "4",
                    "dtVencimento": "2023-03-07",
                    "vrParcela": "44.11",
                    "recebido_facta": true,
                    "paga": true,
                    "vrPago": "44.11",
                    "dtPagamento": "2023-03-07"
                },
                {
                    "nuParcela": "5",
                    "dtVencimento": "2023-04-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "6",
                    "dtVencimento": "2023-05-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "7",
                    "dtVencimento": "2023-06-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "8",
                    "dtVencimento": "2023-07-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "9",
                    "dtVencimento": "2023-08-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "10",
                    "dtVencimento": "2023-09-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "11",
                    "dtVencimento": "2023-10-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "12",
                    "dtVencimento": "2023-11-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "13",
                    "dtVencimento": "2023-12-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "14",
                    "dtVencimento": "2024-01-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "15",
                    "dtVencimento": "2024-02-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "16",
                    "dtVencimento": "2024-03-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "17",
                    "dtVencimento": "2024-04-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "18",
                    "dtVencimento": "2024-05-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "19",
                    "dtVencimento": "2024-06-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "20",
                    "dtVencimento": "2024-07-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "21",
                    "dtVencimento": "2024-08-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "22",
                    "dtVencimento": "2024-09-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "23",
                    "dtVencimento": "2024-10-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "24",
                    "dtVencimento": "2024-11-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "25",
                    "dtVencimento": "2024-12-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "26",
                    "dtVencimento": "2025-01-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "27",
                    "dtVencimento": "2025-02-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "28",
                    "dtVencimento": "2025-03-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "29",
                    "dtVencimento": "2025-04-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "30",
                    "dtVencimento": "2025-05-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "31",
                    "dtVencimento": "2025-06-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "32",
                    "dtVencimento": "2025-07-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "33",
                    "dtVencimento": "2025-08-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "34",
                    "dtVencimento": "2025-09-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "35",
                    "dtVencimento": "2025-10-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "36",
                    "dtVencimento": "2025-11-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "37",
                    "dtVencimento": "2025-12-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "38",
                    "dtVencimento": "2026-01-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "39",
                    "dtVencimento": "2026-02-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "40",
                    "dtVencimento": "2026-03-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "41",
                    "dtVencimento": "2026-04-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "42",
                    "dtVencimento": "2026-05-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "43",
                    "dtVencimento": "2026-06-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "44",
                    "dtVencimento": "2026-07-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "45",
                    "dtVencimento": "2026-08-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "46",
                    "dtVencimento": "2026-09-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "47",
                    "dtVencimento": "2026-10-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "48",
                    "dtVencimento": "2026-11-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "49",
                    "dtVencimento": "2026-12-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "50",
                    "dtVencimento": "2027-01-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "51",
                    "dtVencimento": "2027-02-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "52",
                    "dtVencimento": "2027-03-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "53",
                    "dtVencimento": "2027-04-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "54",
                    "dtVencimento": "2027-05-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "55",
                    "dtVencimento": "2027-06-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "56",
                    "dtVencimento": "2027-07-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "57",
                    "dtVencimento": "2027-08-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "58",
                    "dtVencimento": "2027-09-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "59",
                    "dtVencimento": "2027-10-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "60",
                    "dtVencimento": "2027-11-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "61",
                    "dtVencimento": "2027-12-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "62",
                    "dtVencimento": "2028-01-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "63",
                    "dtVencimento": "2028-02-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "64",
                    "dtVencimento": "2028-03-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "65",
                    "dtVencimento": "2028-04-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "66",
                    "dtVencimento": "2028-05-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "67",
                    "dtVencimento": "2028-06-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "68",
                    "dtVencimento": "2028-07-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "69",
                    "dtVencimento": "2028-08-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "70",
                    "dtVencimento": "2028-09-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "71",
                    "dtVencimento": "2028-10-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "72",
                    "dtVencimento": "2028-11-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "73",
                    "dtVencimento": "2028-12-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "74",
                    "dtVencimento": "2029-01-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "75",
                    "dtVencimento": "2029-02-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "76",
                    "dtVencimento": "2029-03-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "77",
                    "dtVencimento": "2029-04-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "78",
                    "dtVencimento": "2029-05-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "79",
                    "dtVencimento": "2029-06-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "80",
                    "dtVencimento": "2029-07-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "81",
                    "dtVencimento": "2029-08-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "82",
                    "dtVencimento": "2029-09-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "83",
                    "dtVencimento": "2029-10-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                },
                {
                    "nuParcela": "84",
                    "dtVencimento": "2029-11-07",
                    "vrParcela": "44.11",
                    "recebido_facta": false,
                    "paga": false,
                    "vrPago": "",
                    "dtPagamento": ""
                }
            ],
            "contratosOrigem": [
                {
                    "dtContratoOrigem": "0001-01-01",
                    "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                    "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                    "nuContratoOrigem": "0",
                    "nuCnpjCorrespondenteOrigem": "0",
                    "cdInstFinanceiraOrigem": "149",
                    "vrContratoOrigem": "0.0",
                    "vrSaldoContratoOrigem": "0.0",
                    "contrato": ""
                }
            ],
            "dadosBancariosSacado": {
                "cdContaTipo": "1",
                "nuBanco": "001",
                "nuAgencia": "6044",
                "nuConta": "001368184",
                "nuContaDigito": "2",
                "nuCpfTitular": "61615160396",
                "nuCnpjTitular": 1,
                "cdCreditoTipo": "1"
            },
            "anexos": [],
            "operacao": "Pine"
        }
  })
})

Cypress.Commands.add('portal_transparencia_com_sucesso_pine_fgts', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-11-08",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "84",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "84",
            "qtParcelasAverbadas": "84",
            "qtParcelasTotal": "84",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0306000",
            "vrAberto": "3705.24",
            "vrContrato": "1166.51",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 1
        },
        "cliente": {
            "nmCliente": "joao guilherme silva cardoso",
            "dtNascimento": "2010-08-09",
            "nmMae": "SIMONE DO ROSARIO SILVA",
            "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
            "nmSexo": "M",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuRG": "0501792520132",
            "nuCpf": "53582969800",
            "dtEmissaoRg": "2016-10-25",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "AC",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "nuCNH": "",
            "tempoResidencia": "0",
            "tipoLogradouro": "None",
            "dsNacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "empresa": {
                "empresa": "INSS 29979036000140",
                "profissao": " PROFISSAO NAO DEFINIDA",
                "dtAdmissao": "2022-12-02",
                "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissao": "PENSIONISTA",
                "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissaoOr": "PENSIONISTA"
            }
        },
        "representante": {
            "nmCliente": "ANGELICA PINTO MAIA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02806073254",
            "dtEmissaoRg": "2018-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "ACRELANDIA",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "7042811594",
            "ufBeneficio": "AC",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "12",
                "dtVencimento": "2023-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "13",
                "dtVencimento": "2023-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "14",
                "dtVencimento": "2024-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "15",
                "dtVencimento": "2024-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "16",
                "dtVencimento": "2024-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "17",
                "dtVencimento": "2024-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "18",
                "dtVencimento": "2024-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "19",
                "dtVencimento": "2024-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "20",
                "dtVencimento": "2024-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "21",
                "dtVencimento": "2024-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "22",
                "dtVencimento": "2024-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "23",
                "dtVencimento": "2024-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "24",
                "dtVencimento": "2024-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "25",
                "dtVencimento": "2024-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "26",
                "dtVencimento": "2025-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "27",
                "dtVencimento": "2025-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "28",
                "dtVencimento": "2025-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "29",
                "dtVencimento": "2025-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "30",
                "dtVencimento": "2025-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "31",
                "dtVencimento": "2025-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "32",
                "dtVencimento": "2025-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "33",
                "dtVencimento": "2025-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "34",
                "dtVencimento": "2025-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "35",
                "dtVencimento": "2025-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "36",
                "dtVencimento": "2025-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "37",
                "dtVencimento": "2025-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "38",
                "dtVencimento": "2026-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "39",
                "dtVencimento": "2026-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "40",
                "dtVencimento": "2026-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "41",
                "dtVencimento": "2026-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "42",
                "dtVencimento": "2026-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "43",
                "dtVencimento": "2026-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "44",
                "dtVencimento": "2026-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "45",
                "dtVencimento": "2026-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "46",
                "dtVencimento": "2026-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "47",
                "dtVencimento": "2026-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "48",
                "dtVencimento": "2026-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "49",
                "dtVencimento": "2026-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "50",
                "dtVencimento": "2027-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "51",
                "dtVencimento": "2027-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "52",
                "dtVencimento": "2027-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "53",
                "dtVencimento": "2027-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "54",
                "dtVencimento": "2027-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "55",
                "dtVencimento": "2027-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "56",
                "dtVencimento": "2027-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "57",
                "dtVencimento": "2027-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "58",
                "dtVencimento": "2027-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "59",
                "dtVencimento": "2027-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "60",
                "dtVencimento": "2027-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "61",
                "dtVencimento": "2027-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "62",
                "dtVencimento": "2028-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "63",
                "dtVencimento": "2028-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "64",
                "dtVencimento": "2028-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "65",
                "dtVencimento": "2028-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "66",
                "dtVencimento": "2028-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "67",
                "dtVencimento": "2028-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "68",
                "dtVencimento": "2028-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "69",
                "dtVencimento": "2028-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "70",
                "dtVencimento": "2028-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "71",
                "dtVencimento": "2028-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "72",
                "dtVencimento": "2028-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "73",
                "dtVencimento": "2028-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "74",
                "dtVencimento": "2029-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "75",
                "dtVencimento": "2029-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "76",
                "dtVencimento": "2029-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "77",
                "dtVencimento": "2029-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "78",
                "dtVencimento": "2029-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "79",
                "dtVencimento": "2029-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "80",
                "dtVencimento": "2029-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "81",
                "dtVencimento": "2029-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "82",
                "dtVencimento": "2029-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "83",
                "dtVencimento": "2029-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "84",
                "dtVencimento": "2029-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "001",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "pine"
      },
    })
})

Cypress.Commands.add('banco_permitido_reprovado_pine_fgts', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-11-08",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "84",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "84",
            "qtParcelasAverbadas": "84",
            "qtParcelasTotal": "84",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0306000",
            "vrAberto": "3705.24",
            "vrContrato": "1166.51",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 1
        },
        "cliente": {
            "nmCliente": "joao guilherme silva cardoso",
            "dtNascimento": "2010-08-09",
            "nmMae": "SIMONE DO ROSARIO SILVA",
            "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
            "nmSexo": "M",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuRG": "0501792520132",
            "nuCpf": "53582969800",
            "dtEmissaoRg": "2016-10-25",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "AC",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "nuCNH": "",
            "tempoResidencia": "0",
            "tipoLogradouro": "None",
            "dsNacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "empresa": {
                "empresa": "INSS 29979036000140",
                "profissao": " PROFISSAO NAO DEFINIDA",
                "dtAdmissao": "2022-12-02",
                "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissao": "PENSIONISTA",
                "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissaoOr": "PENSIONISTA"
            }
        },
        "representante": {
            "nmCliente": "ANGELICA PINTO MAIA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02806073254",
            "dtEmissaoRg": "2018-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "ACRELANDIA",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "7042811594",
            "ufBeneficio": "AC",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "12",
                "dtVencimento": "2023-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "13",
                "dtVencimento": "2023-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "14",
                "dtVencimento": "2024-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "15",
                "dtVencimento": "2024-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "16",
                "dtVencimento": "2024-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "17",
                "dtVencimento": "2024-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "18",
                "dtVencimento": "2024-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "19",
                "dtVencimento": "2024-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "20",
                "dtVencimento": "2024-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "21",
                "dtVencimento": "2024-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "22",
                "dtVencimento": "2024-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "23",
                "dtVencimento": "2024-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "24",
                "dtVencimento": "2024-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "25",
                "dtVencimento": "2024-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "26",
                "dtVencimento": "2025-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "27",
                "dtVencimento": "2025-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "28",
                "dtVencimento": "2025-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "29",
                "dtVencimento": "2025-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "30",
                "dtVencimento": "2025-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "31",
                "dtVencimento": "2025-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "32",
                "dtVencimento": "2025-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "33",
                "dtVencimento": "2025-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "34",
                "dtVencimento": "2025-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "35",
                "dtVencimento": "2025-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "36",
                "dtVencimento": "2025-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "37",
                "dtVencimento": "2025-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "38",
                "dtVencimento": "2026-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "39",
                "dtVencimento": "2026-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "40",
                "dtVencimento": "2026-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "41",
                "dtVencimento": "2026-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "42",
                "dtVencimento": "2026-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "43",
                "dtVencimento": "2026-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "44",
                "dtVencimento": "2026-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "45",
                "dtVencimento": "2026-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "46",
                "dtVencimento": "2026-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "47",
                "dtVencimento": "2026-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "48",
                "dtVencimento": "2026-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "49",
                "dtVencimento": "2026-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "50",
                "dtVencimento": "2027-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "51",
                "dtVencimento": "2027-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "52",
                "dtVencimento": "2027-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "53",
                "dtVencimento": "2027-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "54",
                "dtVencimento": "2027-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "55",
                "dtVencimento": "2027-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "56",
                "dtVencimento": "2027-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "57",
                "dtVencimento": "2027-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "58",
                "dtVencimento": "2027-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "59",
                "dtVencimento": "2027-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "60",
                "dtVencimento": "2027-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "61",
                "dtVencimento": "2027-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "62",
                "dtVencimento": "2028-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "63",
                "dtVencimento": "2028-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "64",
                "dtVencimento": "2028-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "65",
                "dtVencimento": "2028-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "66",
                "dtVencimento": "2028-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "67",
                "dtVencimento": "2028-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "68",
                "dtVencimento": "2028-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "69",
                "dtVencimento": "2028-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "70",
                "dtVencimento": "2028-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "71",
                "dtVencimento": "2028-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "72",
                "dtVencimento": "2028-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "73",
                "dtVencimento": "2028-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "74",
                "dtVencimento": "2029-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "75",
                "dtVencimento": "2029-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "76",
                "dtVencimento": "2029-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "77",
                "dtVencimento": "2029-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "78",
                "dtVencimento": "2029-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "79",
                "dtVencimento": "2029-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "80",
                "dtVencimento": "2029-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "81",
                "dtVencimento": "2029-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "82",
                "dtVencimento": "2029-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "83",
                "dtVencimento": "2029-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "84",
                "dtVencimento": "2029-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "756",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "Pine"
      },
    })
})

Cypress.Commands.add('valor_minimo_parcela_reprovado_pine_fgts', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-11-08",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "84",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "84",
            "qtParcelasAverbadas": "84",
            "qtParcelasTotal": "84",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0306000",
            "vrAberto": "3705.24",
            "vrContrato": "1166.51",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 1
        },
        "cliente": {
            "nmCliente": "joao guilherme silva cardoso",
            "dtNascimento": "2010-08-09",
            "nmMae": "SIMONE DO ROSARIO SILVA",
            "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
            "nmSexo": "M",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuRG": "0501792520132",
            "nuCpf": "53582969800",
            "dtEmissaoRg": "2016-10-25",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "AC",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "nuCNH": "",
            "tempoResidencia": "0",
            "tipoLogradouro": "None",
            "dsNacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "empresa": {
                "empresa": "INSS 29979036000140",
                "profissao": " PROFISSAO NAO DEFINIDA",
                "dtAdmissao": "2022-12-02",
                "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissao": "PENSIONISTA",
                "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissaoOr": "PENSIONISTA"
            }
        },
        "representante": {
            "nmCliente": "ANGELICA PINTO MAIA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02806073254",
            "dtEmissaoRg": "2018-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "ACRELANDIA",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "7042811594",
            "ufBeneficio": "AC",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "12",
                "dtVencimento": "2023-11-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "13",
                "dtVencimento": "2023-12-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "14",
                "dtVencimento": "2024-01-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "15",
                "dtVencimento": "2024-02-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "16",
                "dtVencimento": "2024-03-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "17",
                "dtVencimento": "2024-04-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "18",
                "dtVencimento": "2024-05-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "19",
                "dtVencimento": "2024-06-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "20",
                "dtVencimento": "2024-07-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "21",
                "dtVencimento": "2024-08-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "22",
                "dtVencimento": "2024-09-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "23",
                "dtVencimento": "2024-10-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "24",
                "dtVencimento": "2024-11-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "25",
                "dtVencimento": "2024-12-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "26",
                "dtVencimento": "2025-01-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "27",
                "dtVencimento": "2025-02-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "28",
                "dtVencimento": "2025-03-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "29",
                "dtVencimento": "2025-04-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "30",
                "dtVencimento": "2025-05-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "31",
                "dtVencimento": "2025-06-07",
                "vrParcela": "43.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "32",
                "dtVencimento": "2025-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "33",
                "dtVencimento": "2025-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "34",
                "dtVencimento": "2025-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "35",
                "dtVencimento": "2025-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "36",
                "dtVencimento": "2025-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "37",
                "dtVencimento": "2025-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "38",
                "dtVencimento": "2026-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "39",
                "dtVencimento": "2026-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "40",
                "dtVencimento": "2026-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "41",
                "dtVencimento": "2026-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "42",
                "dtVencimento": "2026-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "43",
                "dtVencimento": "2026-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "44",
                "dtVencimento": "2026-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "45",
                "dtVencimento": "2026-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "46",
                "dtVencimento": "2026-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "47",
                "dtVencimento": "2026-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "48",
                "dtVencimento": "2026-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "49",
                "dtVencimento": "2026-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "50",
                "dtVencimento": "2027-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "51",
                "dtVencimento": "2027-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "52",
                "dtVencimento": "2027-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "53",
                "dtVencimento": "2027-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "54",
                "dtVencimento": "2027-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "55",
                "dtVencimento": "2027-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "56",
                "dtVencimento": "2027-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "57",
                "dtVencimento": "2027-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "58",
                "dtVencimento": "2027-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "59",
                "dtVencimento": "2027-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "60",
                "dtVencimento": "2027-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "61",
                "dtVencimento": "2027-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "62",
                "dtVencimento": "2028-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "63",
                "dtVencimento": "2028-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "64",
                "dtVencimento": "2028-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "65",
                "dtVencimento": "2028-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "66",
                "dtVencimento": "2028-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "67",
                "dtVencimento": "2028-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "68",
                "dtVencimento": "2028-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "69",
                "dtVencimento": "2028-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "70",
                "dtVencimento": "2028-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "71",
                "dtVencimento": "2028-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "72",
                "dtVencimento": "2028-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "73",
                "dtVencimento": "2028-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "74",
                "dtVencimento": "2029-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "75",
                "dtVencimento": "2029-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "76",
                "dtVencimento": "2029-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "77",
                "dtVencimento": "2029-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "78",
                "dtVencimento": "2029-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "79",
                "dtVencimento": "2029-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "80",
                "dtVencimento": "2029-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "81",
                "dtVencimento": "2029-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "82",
                "dtVencimento": "2029-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "83",
                "dtVencimento": "2029-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "84",
                "dtVencimento": "2029-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "001",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "pine"
      },
    })
})

Cypress.Commands.add('numero_total_parcelas_reprovado_pine_fgts', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-11-08",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "84",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "84",
            "qtParcelasAverbadas": "84",
            "qtParcelasTotal": "84",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0306000",
            "vrAberto": "3705.24",
            "vrContrato": "1166.51",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 1
        },
        "cliente": {
            "nmCliente": "joao guilherme silva cardoso",
            "dtNascimento": "2010-08-09",
            "nmMae": "SIMONE DO ROSARIO SILVA",
            "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
            "nmSexo": "M",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuRG": "0501792520132",
            "nuCpf": "53582969800",
            "dtEmissaoRg": "2016-10-25",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "AC",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "nuCNH": "",
            "tempoResidencia": "0",
            "tipoLogradouro": "None",
            "dsNacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "empresa": {
                "empresa": "INSS 29979036000140",
                "profissao": " PROFISSAO NAO DEFINIDA",
                "dtAdmissao": "2022-12-02",
                "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissao": "PENSIONISTA",
                "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissaoOr": "PENSIONISTA"
            }
        },
        "representante": {
            "nmCliente": "ANGELICA PINTO MAIA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02806073254",
            "dtEmissaoRg": "2018-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "ACRELANDIA",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "7042811594",
            "ufBeneficio": "AC",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "12",
                "dtVencimento": "2023-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "13",
                "dtVencimento": "2023-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "14",
                "dtVencimento": "2024-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "15",
                "dtVencimento": "2024-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "16",
                "dtVencimento": "2024-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "17",
                "dtVencimento": "2024-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "18",
                "dtVencimento": "2024-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "19",
                "dtVencimento": "2024-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "20",
                "dtVencimento": "2024-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "21",
                "dtVencimento": "2024-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "22",
                "dtVencimento": "2024-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "23",
                "dtVencimento": "2024-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "24",
                "dtVencimento": "2024-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "25",
                "dtVencimento": "2024-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "26",
                "dtVencimento": "2025-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "27",
                "dtVencimento": "2025-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "28",
                "dtVencimento": "2025-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "29",
                "dtVencimento": "2025-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "30",
                "dtVencimento": "2025-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "31",
                "dtVencimento": "2025-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "32",
                "dtVencimento": "2025-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "33",
                "dtVencimento": "2025-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "34",
                "dtVencimento": "2025-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "35",
                "dtVencimento": "2025-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "36",
                "dtVencimento": "2025-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "37",
                "dtVencimento": "2025-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "38",
                "dtVencimento": "2026-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "39",
                "dtVencimento": "2026-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "40",
                "dtVencimento": "2026-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "41",
                "dtVencimento": "2026-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "42",
                "dtVencimento": "2026-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "43",
                "dtVencimento": "2026-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "44",
                "dtVencimento": "2026-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "45",
                "dtVencimento": "2026-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "46",
                "dtVencimento": "2026-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "47",
                "dtVencimento": "2026-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "48",
                "dtVencimento": "2026-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "49",
                "dtVencimento": "2026-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "50",
                "dtVencimento": "2027-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "51",
                "dtVencimento": "2027-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "52",
                "dtVencimento": "2027-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "53",
                "dtVencimento": "2027-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "54",
                "dtVencimento": "2027-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "55",
                "dtVencimento": "2027-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "56",
                "dtVencimento": "2027-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "57",
                "dtVencimento": "2027-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "58",
                "dtVencimento": "2027-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "59",
                "dtVencimento": "2027-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "60",
                "dtVencimento": "2027-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "61",
                "dtVencimento": "2027-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "62",
                "dtVencimento": "2028-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "63",
                "dtVencimento": "2028-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "64",
                "dtVencimento": "2028-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "65",
                "dtVencimento": "2028-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "66",
                "dtVencimento": "2028-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "67",
                "dtVencimento": "2028-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "68",
                "dtVencimento": "2028-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "69",
                "dtVencimento": "2028-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "70",
                "dtVencimento": "2028-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "71",
                "dtVencimento": "2028-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "72",
                "dtVencimento": "2028-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "73",
                "dtVencimento": "2028-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "74",
                "dtVencimento": "2029-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "75",
                "dtVencimento": "2029-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "76",
                "dtVencimento": "2029-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "77",
                "dtVencimento": "2029-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "78",
                "dtVencimento": "2029-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "79",
                "dtVencimento": "2029-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "80",
                "dtVencimento": "2029-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "81",
                "dtVencimento": "2029-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "82",
                "dtVencimento": "2029-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "83",
                "dtVencimento": "2029-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "001",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "pine"
      },
    })
})

Cypress.Commands.add('data_emissao_rg_reprovado_pine_fgts', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-11-08",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "84",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "84",
            "qtParcelasAverbadas": "84",
            "qtParcelasTotal": "84",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0306000",
            "vrAberto": "3705.24",
            "vrContrato": "1166.51",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 1
        },
        "cliente": {
            "nmCliente": "joao guilherme silva cardoso",
            "dtNascimento": "2010-08-09",
            "nmMae": "SIMONE DO ROSARIO SILVA",
            "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
            "nmSexo": "M",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuRG": "0501792520132",
            "nuCpf": "53582969800",
            "dtEmissaoRg": "1984-10-25",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "AC",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "nuCNH": "",
            "tempoResidencia": "0",
            "tipoLogradouro": "None",
            "dsNacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "empresa": {
                "empresa": "INSS 29979036000140",
                "profissao": " PROFISSAO NAO DEFINIDA",
                "dtAdmissao": "2022-12-02",
                "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissao": "PENSIONISTA",
                "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissaoOr": "PENSIONISTA"
            }
        },
        "representante": {
            "nmCliente": "ANGELICA PINTO MAIA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02806073254",
            "dtEmissaoRg": "2016-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "ACRELANDIA",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "7042811594",
            "ufBeneficio": "AC",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "12",
                "dtVencimento": "2023-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "13",
                "dtVencimento": "2023-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "14",
                "dtVencimento": "2024-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "15",
                "dtVencimento": "2024-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "16",
                "dtVencimento": "2024-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "17",
                "dtVencimento": "2024-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "18",
                "dtVencimento": "2024-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "19",
                "dtVencimento": "2024-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "20",
                "dtVencimento": "2024-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "21",
                "dtVencimento": "2024-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "22",
                "dtVencimento": "2024-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "23",
                "dtVencimento": "2024-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "24",
                "dtVencimento": "2024-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "25",
                "dtVencimento": "2024-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "26",
                "dtVencimento": "2025-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "27",
                "dtVencimento": "2025-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "28",
                "dtVencimento": "2025-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "29",
                "dtVencimento": "2025-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "30",
                "dtVencimento": "2025-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "31",
                "dtVencimento": "2025-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "32",
                "dtVencimento": "2025-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "33",
                "dtVencimento": "2025-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "34",
                "dtVencimento": "2025-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "35",
                "dtVencimento": "2025-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "36",
                "dtVencimento": "2025-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "37",
                "dtVencimento": "2025-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "38",
                "dtVencimento": "2026-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "39",
                "dtVencimento": "2026-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "40",
                "dtVencimento": "2026-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "41",
                "dtVencimento": "2026-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "42",
                "dtVencimento": "2026-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "43",
                "dtVencimento": "2026-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "44",
                "dtVencimento": "2026-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "45",
                "dtVencimento": "2026-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "46",
                "dtVencimento": "2026-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "47",
                "dtVencimento": "2026-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "48",
                "dtVencimento": "2026-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "49",
                "dtVencimento": "2026-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "50",
                "dtVencimento": "2027-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "51",
                "dtVencimento": "2027-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "52",
                "dtVencimento": "2027-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "53",
                "dtVencimento": "2027-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "54",
                "dtVencimento": "2027-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "55",
                "dtVencimento": "2027-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "56",
                "dtVencimento": "2027-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "57",
                "dtVencimento": "2027-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "58",
                "dtVencimento": "2027-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "59",
                "dtVencimento": "2027-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "60",
                "dtVencimento": "2027-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "61",
                "dtVencimento": "2027-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "62",
                "dtVencimento": "2028-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "63",
                "dtVencimento": "2028-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "64",
                "dtVencimento": "2028-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "65",
                "dtVencimento": "2028-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "66",
                "dtVencimento": "2028-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "67",
                "dtVencimento": "2028-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "68",
                "dtVencimento": "2028-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "69",
                "dtVencimento": "2028-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "70",
                "dtVencimento": "2028-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "71",
                "dtVencimento": "2028-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "72",
                "dtVencimento": "2028-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "73",
                "dtVencimento": "2028-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "74",
                "dtVencimento": "2029-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "75",
                "dtVencimento": "2029-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "76",
                "dtVencimento": "2029-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "77",
                "dtVencimento": "2029-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "78",
                "dtVencimento": "2029-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "79",
                "dtVencimento": "2029-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "80",
                "dtVencimento": "2029-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "81",
                "dtVencimento": "2029-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "82",
                "dtVencimento": "2029-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "83",
                "dtVencimento": "2029-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "84",
                "dtVencimento": "2029-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "001",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "pine"
      },
    })
})

Cypress.Commands.add('idade_maxima_reprovado_pine_fgts', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-11-08",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "84",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "84",
            "qtParcelasAverbadas": "84",
            "qtParcelasTotal": "84",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0306000",
            "vrAberto": "3705.24",
            "vrContrato": "1166.51",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 1
        },
        "cliente": {
            "nmCliente": "joao guilherme silva cardoso",
            "dtNascimento": "1950-08-09",
            "nmMae": "SIMONE DO ROSARIO SILVA",
            "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
            "nmSexo": "M",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuRG": "0501792520132",
            "nuCpf": "53582969800",
            "dtEmissaoRg": "2016-10-25",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "AC",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "nuCNH": "",
            "tempoResidencia": "0",
            "tipoLogradouro": "None",
            "dsNacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "empresa": {
                "empresa": "INSS 29979036000140",
                "profissao": " PROFISSAO NAO DEFINIDA",
                "dtAdmissao": "2022-12-02",
                "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissao": "PENSIONISTA",
                "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissaoOr": "PENSIONISTA"
            }
        },
        "representante": {
            "nmCliente": "ANGELICA PINTO MAIA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02806073254",
            "dtEmissaoRg": "2018-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "ACRELANDIA",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "7042811594",
            "ufBeneficio": "AC",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "12",
                "dtVencimento": "2023-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "13",
                "dtVencimento": "2023-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "14",
                "dtVencimento": "2024-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "15",
                "dtVencimento": "2024-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "16",
                "dtVencimento": "2024-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "17",
                "dtVencimento": "2024-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "18",
                "dtVencimento": "2024-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "19",
                "dtVencimento": "2024-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "20",
                "dtVencimento": "2024-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "21",
                "dtVencimento": "2024-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "22",
                "dtVencimento": "2024-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "23",
                "dtVencimento": "2024-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "24",
                "dtVencimento": "2024-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "25",
                "dtVencimento": "2024-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "26",
                "dtVencimento": "2025-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "27",
                "dtVencimento": "2025-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "28",
                "dtVencimento": "2025-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "29",
                "dtVencimento": "2025-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "30",
                "dtVencimento": "2025-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "31",
                "dtVencimento": "2025-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "32",
                "dtVencimento": "2025-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "33",
                "dtVencimento": "2025-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "34",
                "dtVencimento": "2025-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "35",
                "dtVencimento": "2025-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "36",
                "dtVencimento": "2025-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "37",
                "dtVencimento": "2025-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "38",
                "dtVencimento": "2026-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "39",
                "dtVencimento": "2026-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "40",
                "dtVencimento": "2026-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "41",
                "dtVencimento": "2026-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "42",
                "dtVencimento": "2026-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "43",
                "dtVencimento": "2026-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "44",
                "dtVencimento": "2026-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "45",
                "dtVencimento": "2026-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "46",
                "dtVencimento": "2026-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "47",
                "dtVencimento": "2026-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "48",
                "dtVencimento": "2026-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "49",
                "dtVencimento": "2026-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "50",
                "dtVencimento": "2027-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "51",
                "dtVencimento": "2027-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "52",
                "dtVencimento": "2027-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "53",
                "dtVencimento": "2027-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "54",
                "dtVencimento": "2027-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "55",
                "dtVencimento": "2027-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "56",
                "dtVencimento": "2027-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "57",
                "dtVencimento": "2027-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "58",
                "dtVencimento": "2027-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "59",
                "dtVencimento": "2027-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "60",
                "dtVencimento": "2027-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "61",
                "dtVencimento": "2027-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "62",
                "dtVencimento": "2028-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "63",
                "dtVencimento": "2028-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "64",
                "dtVencimento": "2028-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "65",
                "dtVencimento": "2028-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "66",
                "dtVencimento": "2028-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "67",
                "dtVencimento": "2028-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "68",
                "dtVencimento": "2028-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "69",
                "dtVencimento": "2028-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "70",
                "dtVencimento": "2028-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "71",
                "dtVencimento": "2028-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "72",
                "dtVencimento": "2028-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "73",
                "dtVencimento": "2028-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "74",
                "dtVencimento": "2029-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "75",
                "dtVencimento": "2029-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "76",
                "dtVencimento": "2029-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "77",
                "dtVencimento": "2029-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "78",
                "dtVencimento": "2029-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "79",
                "dtVencimento": "2029-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "80",
                "dtVencimento": "2029-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "81",
                "dtVencimento": "2029-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "82",
                "dtVencimento": "2029-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "83",
                "dtVencimento": "2029-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "84",
                "dtVencimento": "2029-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "001",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "pine"
      },
    })
})

Cypress.Commands.add('idade_minima_reprovado_pine_fgts', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-11-08",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "84",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "84",
            "qtParcelasAverbadas": "84",
            "qtParcelasTotal": "84",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0306000",
            "vrAberto": "3705.24",
            "vrContrato": "1166.51",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 1
        },
        "cliente": {
            "nmCliente": "joao guilherme silva cardoso",
            "dtNascimento": "2010-08-09",
            "nmMae": "SIMONE DO ROSARIO SILVA",
            "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
            "nmSexo": "M",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuRG": "0501792520132",
            "nuCpf": "53582969800",
            "dtEmissaoRg": "2016-10-25",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "AC",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "nuCNH": "",
            "tempoResidencia": "0",
            "tipoLogradouro": "None",
            "dsNacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "empresa": {
                "empresa": "INSS 29979036000140",
                "profissao": " PROFISSAO NAO DEFINIDA",
                "dtAdmissao": "2022-12-02",
                "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissao": "PENSIONISTA",
                "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissaoOr": "PENSIONISTA"
            }
        },
        "representante": {
            "nmCliente": "ANGELICA PINTO MAIA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02806073254",
            "dtEmissaoRg": "2018-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "ACRELANDIA",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "7042811594",
            "ufBeneficio": "AC",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "12",
                "dtVencimento": "2023-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "13",
                "dtVencimento": "2023-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "14",
                "dtVencimento": "2024-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "15",
                "dtVencimento": "2024-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "16",
                "dtVencimento": "2024-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "17",
                "dtVencimento": "2024-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "18",
                "dtVencimento": "2024-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "19",
                "dtVencimento": "2024-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "20",
                "dtVencimento": "2024-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "21",
                "dtVencimento": "2024-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "22",
                "dtVencimento": "2024-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "23",
                "dtVencimento": "2024-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "24",
                "dtVencimento": "2024-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "25",
                "dtVencimento": "2024-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "26",
                "dtVencimento": "2025-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "27",
                "dtVencimento": "2025-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "28",
                "dtVencimento": "2025-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "29",
                "dtVencimento": "2025-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "30",
                "dtVencimento": "2025-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "31",
                "dtVencimento": "2025-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "32",
                "dtVencimento": "2025-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "33",
                "dtVencimento": "2025-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "34",
                "dtVencimento": "2025-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "35",
                "dtVencimento": "2025-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "36",
                "dtVencimento": "2025-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "37",
                "dtVencimento": "2025-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "38",
                "dtVencimento": "2026-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "39",
                "dtVencimento": "2026-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "40",
                "dtVencimento": "2026-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "41",
                "dtVencimento": "2026-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "42",
                "dtVencimento": "2026-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "43",
                "dtVencimento": "2026-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "44",
                "dtVencimento": "2026-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "45",
                "dtVencimento": "2026-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "46",
                "dtVencimento": "2026-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "47",
                "dtVencimento": "2026-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "48",
                "dtVencimento": "2026-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "49",
                "dtVencimento": "2026-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "50",
                "dtVencimento": "2027-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "51",
                "dtVencimento": "2027-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "52",
                "dtVencimento": "2027-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "53",
                "dtVencimento": "2027-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "54",
                "dtVencimento": "2027-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "55",
                "dtVencimento": "2027-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "56",
                "dtVencimento": "2027-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "57",
                "dtVencimento": "2027-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "58",
                "dtVencimento": "2027-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "59",
                "dtVencimento": "2027-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "60",
                "dtVencimento": "2027-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "61",
                "dtVencimento": "2027-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "62",
                "dtVencimento": "2028-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "63",
                "dtVencimento": "2028-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "64",
                "dtVencimento": "2028-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "65",
                "dtVencimento": "2028-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "66",
                "dtVencimento": "2028-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "67",
                "dtVencimento": "2028-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "68",
                "dtVencimento": "2028-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "69",
                "dtVencimento": "2028-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "70",
                "dtVencimento": "2028-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "71",
                "dtVencimento": "2028-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "72",
                "dtVencimento": "2028-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "73",
                "dtVencimento": "2028-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "74",
                "dtVencimento": "2029-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "75",
                "dtVencimento": "2029-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "76",
                "dtVencimento": "2029-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "77",
                "dtVencimento": "2029-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "78",
                "dtVencimento": "2029-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "79",
                "dtVencimento": "2029-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "80",
                "dtVencimento": "2029-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "81",
                "dtVencimento": "2029-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "82",
                "dtVencimento": "2029-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "83",
                "dtVencimento": "2029-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "84",
                "dtVencimento": "2029-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "001",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "pine"
      },
    })
})

Cypress.Commands.add('valor_minimo_contrato_reprovado_pine_fgts', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-11-08",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "84",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "84",
            "qtParcelasAverbadas": "84",
            "qtParcelasTotal": "84",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0306000",
            "vrAberto": "3705.24",
            "vrContrato": "166.51",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 1
        },
        "cliente": {
            "nmCliente": "joao guilherme silva cardoso",
            "dtNascimento": "2000-08-09",
            "nmMae": "SIMONE DO ROSARIO SILVA",
            "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
            "nmSexo": "M",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuRG": "0501792520132",
            "nuCpf": "53582969800",
            "dtEmissaoRg": "2016-10-25",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "AC",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "nuCNH": "",
            "tempoResidencia": "0",
            "tipoLogradouro": "None",
            "dsNacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "empresa": {
                "empresa": "INSS 29979036000140",
                "profissao": " PROFISSAO NAO DEFINIDA",
                "dtAdmissao": "2022-12-02",
                "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissao": "PENSIONISTA",
                "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissaoOr": "PENSIONISTA"
            }
        },
        "representante": {
            "nmCliente": "ANGELICA PINTO MAIA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02806073254",
            "dtEmissaoRg": "2018-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "ACRELANDIA",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "7042811594",
            "ufBeneficio": "AC",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "12",
                "dtVencimento": "2023-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "13",
                "dtVencimento": "2023-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "14",
                "dtVencimento": "2024-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "15",
                "dtVencimento": "2024-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "16",
                "dtVencimento": "2024-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "17",
                "dtVencimento": "2024-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "18",
                "dtVencimento": "2024-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "19",
                "dtVencimento": "2024-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "20",
                "dtVencimento": "2024-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "21",
                "dtVencimento": "2024-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "22",
                "dtVencimento": "2024-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "23",
                "dtVencimento": "2024-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "24",
                "dtVencimento": "2024-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "25",
                "dtVencimento": "2024-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "26",
                "dtVencimento": "2025-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "27",
                "dtVencimento": "2025-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "28",
                "dtVencimento": "2025-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "29",
                "dtVencimento": "2025-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "30",
                "dtVencimento": "2025-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "31",
                "dtVencimento": "2025-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "32",
                "dtVencimento": "2025-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "33",
                "dtVencimento": "2025-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "34",
                "dtVencimento": "2025-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "35",
                "dtVencimento": "2025-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "36",
                "dtVencimento": "2025-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "37",
                "dtVencimento": "2025-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "38",
                "dtVencimento": "2026-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "39",
                "dtVencimento": "2026-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "40",
                "dtVencimento": "2026-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "41",
                "dtVencimento": "2026-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "42",
                "dtVencimento": "2026-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "43",
                "dtVencimento": "2026-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "44",
                "dtVencimento": "2026-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "45",
                "dtVencimento": "2026-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "46",
                "dtVencimento": "2026-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "47",
                "dtVencimento": "2026-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "48",
                "dtVencimento": "2026-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "49",
                "dtVencimento": "2026-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "50",
                "dtVencimento": "2027-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "51",
                "dtVencimento": "2027-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "52",
                "dtVencimento": "2027-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "53",
                "dtVencimento": "2027-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "54",
                "dtVencimento": "2027-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "55",
                "dtVencimento": "2027-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "56",
                "dtVencimento": "2027-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "57",
                "dtVencimento": "2027-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "58",
                "dtVencimento": "2027-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "59",
                "dtVencimento": "2027-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "60",
                "dtVencimento": "2027-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "61",
                "dtVencimento": "2027-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "62",
                "dtVencimento": "2028-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "63",
                "dtVencimento": "2028-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "64",
                "dtVencimento": "2028-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "65",
                "dtVencimento": "2028-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "66",
                "dtVencimento": "2028-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "67",
                "dtVencimento": "2028-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "68",
                "dtVencimento": "2028-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "69",
                "dtVencimento": "2028-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "70",
                "dtVencimento": "2028-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "71",
                "dtVencimento": "2028-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "72",
                "dtVencimento": "2028-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "73",
                "dtVencimento": "2028-12-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "74",
                "dtVencimento": "2029-01-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "75",
                "dtVencimento": "2029-02-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "76",
                "dtVencimento": "2029-03-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "77",
                "dtVencimento": "2029-04-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "78",
                "dtVencimento": "2029-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "79",
                "dtVencimento": "2029-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "80",
                "dtVencimento": "2029-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "81",
                "dtVencimento": "2029-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "82",
                "dtVencimento": "2029-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "83",
                "dtVencimento": "2029-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "84",
                "dtVencimento": "2029-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "001",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "pine"
      },
    })
})


//----------------------------------------------Pine INSS----------------------------------------------

Cypress.Commands.add('analise_com_sucesso_pine_inss', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-12-07",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "12",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "12",
            "qtParcelasAverbadas": "12",
            "qtParcelasTotal": "12",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0190000",
            "vrAberto": "3705.24",
            "vrContrato": "1166.51",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 6
        },
        "cliente":{
          "nmCliente":"TEREZINHA MARIA DE JESUS GONCALVES",
          "dtNascimento":"1954-09-30",
          "nmMae":"MARGARIDA ROSA DE JESUS",
          "nmPai":"ADELINO SOARES DE OLIVEIRA",
          "nmSexo":"F",
          "dsEstadoCivil":"NAO DEFINIDO",
          "nmEmail":"",
          "nuRG":"5272424",
          "nuCpf":"65394003653",
          "dtEmissaoRg":"2010-10-10",
          "nmOrgaoEmissorRg":"SSP",
          "nmUfOrgaoEmissorRg":"MG",
          "dsNaturalidade":"LAGOA SANTA",
          "nmEnderecoResidencialTipo":1,
          "nmEnderecoResidencialLogradouro":"RUA SANTA LUZIA",
          "nmEnderecoResidencialNumero":"361",
          "nmEnderecoResidencialComplemento":null,
          "nmEnderecoResidencialBairro":"OVIDIO GUERRA",
          "nmEnderecoResidencialCidade":"LAGOA SANTA",
          "nmEnderecoResidencialUf":"MG",
          "nuEnderecoResidencialCep":"33400000",
          "nuDddTelefoneCelular":31993650728,
          "nuDddTelefoneResidencial":1,
          "vrRenda":"1220.00",
          "nuCNH":"",
          "tempoResidencia":"0",
          "tipoLogradouro":"None",
          "dsNacionalidade":"BRASILEIRA",
          "vrPatrimonio":"10000.00",
          "escolaridade":"1",
          "empresa":{
             "empresa":"INSS",
             "profissao":"PROFISSAO NAO DEFINIDA",
             "dtAdmissao":"2023-03-15",
             "ramoAtividade":"SEM ATIVIDADE PROFISSIONAL",
             "tipoProfissao":"APOSENTADO PRIVADO",
             "ramoAtividadeOr":"SEM ATIVIDADE PROFISSIONAL",
             "tipoProfissaoOr":"APOSENTADO PRIVADO"
          }
       },
        "representante": {
            "nmCliente": "SIMONE DO ROSARIO SILVA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02804648354",
            "dtEmissaoRg": "2018-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "MA",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "PINHEIRO",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "1892433467",
            "ufBeneficio": "MA",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2022-12-07"
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-01-07"
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-02-07"
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "12",
                "dtVencimento": "2023-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "001",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "Pine"
    }
    })
})

Cypress.Commands.add('idade_minima_reprovado_pine_inss', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-12-07",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "12",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "12",
            "qtParcelasAverbadas": "12",
            "qtParcelasTotal": "12",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0306000",
            "vrAberto": "3705.24",
            "vrContrato": "1166.51",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 6
        },
        "cliente": {
            "nmCliente": "joao guilherme silva cardoso",
            "dtNascimento": "2021-08-09",
            "nmMae": "SIMONE DO ROSARIO SILVA",
            "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
            "nmSexo": "M",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuRG": "0501792520132",
            "nuCpf": "53582969800",
            "dtEmissaoRg": "2016-10-25",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "AC",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "nuCNH": "",
            "tempoResidencia": "0",
            "tipoLogradouro": "None",
            "dsNacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "empresa": {
                "empresa": "INSS 29979036000140",
                "profissao": " PROFISSAO NAO DEFINIDA",
                "dtAdmissao": "2022-12-02",
                "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissao": "PENSIONISTA",
                "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissaoOr": "PENSIONISTA"
            }
        },
        "representante": {
            "nmCliente": "ANGELICA PINTO MAIA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02806073254",
            "dtEmissaoRg": "2018-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "ACRELANDIA",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "7042811594",
            "ufBeneficio": "AC",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2022-12-07"
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-01-07"
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-02-07"
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "12",
                "dtVencimento": "2023-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "001",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "pine"
      },
    })
})

Cypress.Commands.add('idade_maxima_reprovado_pine_inss', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-12-07",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "12",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "12",
            "qtParcelasAverbadas": "12",
            "qtParcelasTotal": "12",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0306000",
            "vrAberto": "3705.24",
            "vrContrato": "1166.51",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 6
        },
        "cliente": {
            "nmCliente": "joao guilherme silva cardoso",
            "dtNascimento": "1920-08-09",
            "nmMae": "SIMONE DO ROSARIO SILVA",
            "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
            "nmSexo": "M",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuRG": "0501792520132",
            "nuCpf": "53582969800",
            "dtEmissaoRg": "2016-10-25",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "AC",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "nuCNH": "",
            "tempoResidencia": "0",
            "tipoLogradouro": "None",
            "dsNacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "empresa": {
                "empresa": "INSS 29979036000140",
                "profissao": " PROFISSAO NAO DEFINIDA",
                "dtAdmissao": "2022-12-02",
                "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissao": "PENSIONISTA",
                "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissaoOr": "PENSIONISTA"
            }
        },
        "representante": {
            "nmCliente": "ANGELICA PINTO MAIA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02806073254",
            "dtEmissaoRg": "2018-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "ACRELANDIA",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "7042811594",
            "ufBeneficio": "AC",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2022-12-07"
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-01-07"
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-02-07"
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "12",
                "dtVencimento": "2023-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "001",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "pine"
      },
    })
})

Cypress.Commands.add('valor_minimo_ccb_reprovado_pine_inss', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-12-07",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "12",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "12",
            "qtParcelasAverbadas": "12",
            "qtParcelasTotal": "12",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0306000",
            "vrAberto": "3705.24",
            "vrContrato": "166.51",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 6
        },
        "cliente": {
            "nmCliente": "joao guilherme silva cardoso",
            "dtNascimento": "2000-08-09",
            "nmMae": "SIMONE DO ROSARIO SILVA",
            "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
            "nmSexo": "M",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuRG": "0501792520132",
            "nuCpf": "53582969800",
            "dtEmissaoRg": "2016-10-25",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "AC",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "nuCNH": "",
            "tempoResidencia": "0",
            "tipoLogradouro": "None",
            "dsNacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "empresa": {
                "empresa": "INSS 29979036000140",
                "profissao": " PROFISSAO NAO DEFINIDA",
                "dtAdmissao": "2022-12-02",
                "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissao": "PENSIONISTA",
                "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissaoOr": "PENSIONISTA"
            }
        },
        "representante": {
            "nmCliente": "ANGELICA PINTO MAIA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02806073254",
            "dtEmissaoRg": "2018-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "ACRELANDIA",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "7042811594",
            "ufBeneficio": "AC",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2022-12-07"
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-01-07"
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-02-07"
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "12",
                "dtVencimento": "2023-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "001",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "pine"
      },
    })
})

Cypress.Commands.add('numero_total_parcelas_reprovado_pine_inss', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-12-07",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "12",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "12",
            "qtParcelasAverbadas": "12",
            "qtParcelasTotal": "12",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0306000",
            "vrAberto": "3705.24",
            "vrContrato": "21166.51",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 6
        },
        "cliente": {
            "nmCliente": "joao guilherme silva cardoso",
            "dtNascimento": "1985-08-09",
            "nmMae": "SIMONE DO ROSARIO SILVA",
            "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
            "nmSexo": "M",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuRG": "0501792520132",
            "nuCpf": "53582969800",
            "dtEmissaoRg": "2016-10-25",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "AC",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "nuCNH": "",
            "tempoResidencia": "0",
            "tipoLogradouro": "None",
            "dsNacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "empresa": {
                "empresa": "INSS 29979036000140",
                "profissao": " PROFISSAO NAO DEFINIDA",
                "dtAdmissao": "2022-12-02",
                "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissao": "PENSIONISTA",
                "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissaoOr": "PENSIONISTA"
            }
        },
        "representante": {
            "nmCliente": "ANGELICA PINTO MAIA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02806073254",
            "dtEmissaoRg": "2018-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "ACRELANDIA",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "7042811594",
            "ufBeneficio": "AC",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2022-12-07"
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-01-07"
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-02-07"
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "001",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "pine"
      },
    })
})

Cypress.Commands.add('janela_parcelas_reprovado_pine_inss', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-12-07",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "12",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "12",
            "qtParcelasAverbadas": "12",
            "qtParcelasTotal": "12",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0306000",
            "vrAberto": "3705.24",
            "vrContrato": "21166.51",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 6
        },
        "cliente": {
            "nmCliente": "joao guilherme silva cardoso",
            "dtNascimento": "2000-08-09",
            "nmMae": "SIMONE DO ROSARIO SILVA",
            "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
            "nmSexo": "M",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuRG": "0501792520132",
            "nuCpf": "53582969800",
            "dtEmissaoRg": "2016-10-25",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "AC",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "nuCNH": "",
            "tempoResidencia": "0",
            "tipoLogradouro": "None",
            "dsNacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "empresa": {
                "empresa": "INSS 29979036000140",
                "profissao": " PROFISSAO NAO DEFINIDA",
                "dtAdmissao": "2022-12-02",
                "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissao": "PENSIONISTA",
                "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissaoOr": "PENSIONISTA"
            }
        },
        "representante": {
            "nmCliente": "ANGELICA PINTO MAIA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02806073254",
            "dtEmissaoRg": "2018-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "ACRELANDIA",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "7042811594",
            "ufBeneficio": "AC",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2022-12-07"
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-01-07"
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-02-07"
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "12",
                "dtVencimento": "2023-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "001",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "Pine"
      },
    })
})

Cypress.Commands.add('valor_maximo_ccb_reprovado_pine_inss', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-12-07",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "12",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "12",
            "qtParcelasAverbadas": "12",
            "qtParcelasTotal": "12",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0306000",
            "vrAberto": "3705.24",
            "vrContrato": "21000.00",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 6
        },
        "cliente": {
            "nmCliente": "joao guilherme silva cardoso",
            "dtNascimento": "2000-08-09",
            "nmMae": "SIMONE DO ROSARIO SILVA",
            "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
            "nmSexo": "M",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuRG": "0501792520132",
            "nuCpf": "53582969800",
            "dtEmissaoRg": "2016-10-25",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "AC",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "nuCNH": "",
            "tempoResidencia": "0",
            "tipoLogradouro": "None",
            "dsNacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "empresa": {
                "empresa": "INSS 29979036000140",
                "profissao": " PROFISSAO NAO DEFINIDA",
                "dtAdmissao": "2022-12-02",
                "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissao": "PENSIONISTA",
                "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissaoOr": "PENSIONISTA"
            }
        },
        "representante": {
            "nmCliente": "ANGELICA PINTO MAIA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02806073254",
            "dtEmissaoRg": "2018-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "ACRELANDIA",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "7042811594",
            "ufBeneficio": "AC",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2022-12-07"
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-01-07"
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-02-07"
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "12",
                "dtVencimento": "2023-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "001",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "pine"
      },
    })
})

Cypress.Commands.add('valor_minimo_parcela_reprovado_pine_inss', project => {
    cy.request({
      method: 'POST',
      url: `/analise-contrato/`,
      body: {
        "contrato": {
            "nuLote": "42",
            "nuContratoFacta": "35194050001",
            "cdContratoTipo": "1",
            "nuCnpjCorrespondente": "01360251000140",
            "dtDigitacao": "2022-10-04",
            "dtContrato": "2022-09-15",
            "dtPrimeiroVencimento": "2022-12-07",
            "nuCpfAgenteValidador": "01217961160",
            "qtParcelasAberto": "12",
            "qtParcelasPagas": "0",
            "qtParcelasVencer": "12",
            "qtParcelasAverbadas": "12",
            "qtParcelasTotal": "12",
            "txCETAno": "0.5246999",
            "txCETMes": "0.0312910",
            "txEfetivaAno": "0.4357594",
            "txEfetivaMes": "0.0306000",
            "vrAberto": "3705.24",
            "vrContrato": "1166.51",
            "vrIof": "38.41",
            "vrParcela": "44.11",
            "vrVencer": "3705.24",
            "vrLiberadoCliente": "1166.51",
            "vrTAC": "0.0",
            "vrSeguro": "0.0",
            "nuContratoCCB": "54568972",
            "recusado": "false",
            "docsValidados": "false",
            "tipoProduto": 6
        },
        "cliente": {
            "nmCliente": "joao guilherme silva cardoso",
            "dtNascimento": "1985-08-09",
            "nmMae": "SIMONE DO ROSARIO SILVA",
            "nmPai": "JOAO RODRIGO SOUZA CARDOSO",
            "nmSexo": "M",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuRG": "0501792520132",
            "nuCpf": "53582969800",
            "dtEmissaoRg": "2016-10-25",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "PINHEIRO",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "RESIDENCIAL JERICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "AC",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "nuCNH": "",
            "tempoResidencia": "0",
            "tipoLogradouro": "None",
            "dsNacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "empresa": {
                "empresa": "INSS 29979036000140",
                "profissao": " PROFISSAO NAO DEFINIDA",
                "dtAdmissao": "2022-12-02",
                "ramoAtividade": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissao": "PENSIONISTA",
                "ramoAtividadeOr": "SEM ATIVIDADE PROFISSIONAL",
                "tipoProfissaoOr": "PENSIONISTA"
            }
        },
        "representante": {
            "nmCliente": "ANGELICA PINTO MAIA",
            "dtNascimento": "1985-11-22",
            "nmMae": "RAAIMUNDA NONATA SILVA",
            "nmPai": "NAO CONSTA NO DOCUMENTO",
            "nmSexo": "F",
            "dsEstadoCivil": "OUTROS",
            "nmEmail": "",
            "nuCpf": "02806073254",
            "dtEmissaoRg": "2018-09-19",
            "nmOrgaoEmissorRg": "SSP",
            "nmUfOrgaoEmissorRg": "AC",
            "dsNaturalidade": "ACRELANDIA",
            "nmEnderecoResidencialTipo": "1",
            "nmEnderecoResidencialLogradouro": "RUA PROJETADA 41",
            "nmEnderecoResidencialNumero": "41",
            "nmEnderecoResidencialComplento": "None",
            "nmEnderecoResidencialBairro": "JUREICO",
            "nmEnderecoResidencialCidade": "ACRELANDIA",
            "nmEnderecoResidencialUf": "MA",
            "nuEnderecoResidencialCep": "65200000",
            "nuDddTelefoneCelular": "098984645210",
            "nuDddTelefoneResidencial": "1",
            "vrRenda": "1212.0",
            "tempoResidencia": "0",
            "tipoLogradouro": "",
            "nacionalidade": "BRASILEIRA",
            "vrPatrimonio": "10000.0",
            "escolaridade": "1",
            "nuRG": "0207870320028"
        },
        "beneficio": {
            "matricula": "7042811594",
            "ufBeneficio": "AC",
            "tipoBeneficio": "87",
            "vrBeneficio": "1212.0",
            "dtConcessaoBeneficio": "2019-01-02",
            "dia_util_pagamento": "",
            "dia_util_forma_pagamento": ""
        },
        "parcela": [
            {
                "nuParcela": "1",
                "dtVencimento": "2022-12-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2022-12-07"
            },
            {
                "nuParcela": "2",
                "dtVencimento": "2023-01-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-01-07"
            },
            {
                "nuParcela": "3",
                "dtVencimento": "2023-02-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-02-07"
            },
            {
                "nuParcela": "4",
                "dtVencimento": "2023-03-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "5",
                "dtVencimento": "2023-04-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "6",
                "dtVencimento": "2023-05-07",
                "vrParcela": "44.11",
                "recebido_facta": true,
                "paga": true,
                "vrPago": "44.11",
                "dtPagamento": "2023-03-07"
            },
            {
                "nuParcela": "7",
                "dtVencimento": "2023-06-07",
                "vrParcela": "24.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "8",
                "dtVencimento": "2023-07-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "9",
                "dtVencimento": "2023-08-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "10",
                "dtVencimento": "2023-09-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "11",
                "dtVencimento": "2023-10-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            },
            {
                "nuParcela": "12",
                "dtVencimento": "2023-11-07",
                "vrParcela": "44.11",
                "recebido_facta": false,
                "paga": false,
                "vrPago": "",
                "dtPagamento": ""
            }
        ],
        "contratosOrigem": [
            {
                "dtContratoOrigem": "0001-01-01",
                "dtPrimeiroVencimentoContratoOrigem": "0001-01-01",
                "dtUltimoVencimentoContratoOrigem": "0001-01-01",
                "nuContratoOrigem": "0",
                "nuCnpjCorrespondenteOrigem": "0",
                "cdInstFinanceiraOrigem": "149",
                "vrContratoOrigem": "0.0",
                "vrSaldoContratoOrigem": "0.0",
                "contrato": ""
            }
        ],
        "dadosBancariosSacado": {
            "cdContaTipo": "1",
            "nuBanco": "001",
            "nuAgencia": "6044",
            "nuConta": "001368184",
            "nuContaDigito": "2",
            "nuCpfTitular": "61615160396",
            "nuCnpjTitular": 1,
            "cdCreditoTipo": "1"
        },
        "anexos": [],
        "operacao": "pine"
      },
    })
})


