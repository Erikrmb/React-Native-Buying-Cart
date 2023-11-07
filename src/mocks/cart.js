import logo from '../../assets/logo.png'
import tomato from '../../assets/frutas/Tomate.png'
import broccoli from '../../assets/frutas/Brócolis.png'
import potato from '../../assets/frutas/Batata.png'
import cucumber from '../../assets/frutas/Pepino.png'
import pumpkin from '../../assets/frutas/Abóbora.png'

const cart = {
    top: {
        title: 'Cart details'
    },
    details: {
        name: 'Salad Cart',
        farmLogo: logo,
        farmName: 'Jenny Jack Farm',
        description: 'Products carefully selected from our own farm, to ensure top quality in your kitchen.',
        price: '40,00$',
        button: 'Buy',
    },
    items:{
        title: "Cart items",
        list: [
            {
                name: "Tomato",
                image: tomato,
            },
            {
                name: "Broccoli",
                image: broccoli,
            },
            {
                name: "Potato",
                image: potato,
            },{
                name: "Cucumber",
                image: cucumber,
            },
            {
                name: "Pumpkin",
                image: pumpkin,
            }
        ]
    },
}

export default cart;