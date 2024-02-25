const Sequelize = require("sequelize")
const sequelize = new Sequelize("nodejs","root","madhu",{
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize