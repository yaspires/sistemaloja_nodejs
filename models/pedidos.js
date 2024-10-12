import Sequelize from "sequelize"
import Connection from "../config/sequelize_config.js"

const Pedido = Connection.define('pedidos', {
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull:false,
    }
})

Pedido.sync ({ force:false })
export default Pedido
