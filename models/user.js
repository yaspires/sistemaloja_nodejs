import  Sequelize  from "sequelize";
import connection from "../config/sequelize_config.js";

const User = connection.define('users', {
    email: {
        type: Sequelize.STRING,
        allownull: false
    },
    password: {
        type: Sequelize.STRING,
        allownull: false
    }
});

User.sync({ false:false })
export default User