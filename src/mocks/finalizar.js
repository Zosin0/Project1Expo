import boleto from '../../assets/compra/boleto.png'
import visa from '../../assets/compra/visa.png'
import mastercard from '../../assets/compra/mastercard.png'
import elo from '../../assets/compra/elo.png'

const finalizar = {
    topo:{
        titulo:"Obrigado por comprar conosco!"
    },
    detalhes:{
        titulo:"Detalhes da compra:",
        formas:"Formas de pagamento disponíveis:",
        desc:"Rastreie e acompanhe os detalhes do seu pedido com o código enviado em seu email.",
        botao:"Página Inicial",

    },
    itens:{
        lista:[
            {
                nome:"Boleto",
                imagem: boleto

            },
            {
                nome:"Visa",
                imagem: visa

            },
            {
                nome:"Mastercard",
                imagem: mastercard

            },
            {
                nome:"ELO",
                imagem: elo

            }
        ]
    }
}

export default finalizar;