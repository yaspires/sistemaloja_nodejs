import Sequelize from 'sequelize'
import connection from '../config/sequelize_config.js'

const Produto = connection.define('produtos', {
    produto: {
        type: Sequelize.STRING,
        allownull: false,
    },
    preco: {
        type: Sequelize.DOUBLE,
        allownull: false,
    },
    categoria: {
        type: Sequelize.STRING,
        allownull: false,
    }
})

Produto.sync({ force: false })
export default Produto