/* 
Aqui é o inicial do seu arquivo cy.js, onde você coloque seu caso de teste, informando a tela e o cenário

Arrow function ()=> -- Função normal mas sem o FUNCTION na frente || função utilizada somente em um momento só, ou
em momentos muito específico 
Não é chamada em outro lugar, a menos que seja criada dentro de uma const
*/
describe('Cadastro',()=>{
    it('Usuário deve se tornar um entregador', ()=>{

        cy.viewport(1440, 900) // Tamanho da tela. resolução
        cy.visit('https://buger-eats.vercel.app') // site que será visitado, IP também vale



        cy.get('a[href="/deliver"]').click() // clicar no botão da página inicial para a página do formulário
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas') // verificar se esse texto existe. SHOULD - DEVERIA --> Deveria ter texto 'texto'

        // Variável com os dados que serão inseridos nos campos do formulário, preenchido automaticamente baseado nessa variável
        var entregador = {
            nome: 'Júlia Araripe',
            cpf: '00000014141',
            email: 'julia@hotmail.com',
            whatsapp: '11999999999',
            endereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '1000',
                complemento: 'ap 142',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: 'Moto',
            cnh: 'foto-teste.png'
        }

        // cy.get -> 
        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)

        cy.get('button[type="submit"]').click()

        cy.get('button[class="swal2-confirm swal2-styled"]').click()
    })
})