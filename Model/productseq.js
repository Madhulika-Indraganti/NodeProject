const Sequelize = require('sequelize')
const sequelize = require('../Utils/sequelize')
const Product = sequelize.define('clothes',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    title:{
        type: Sequelize.STRING,
        allowNull:false
    },
    image:{
        type: Sequelize.STRING,
        allowNull:false
    },
    description:{
        type: Sequelize.STRING,
        allowNull:false
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull:false
    } 
})

module.exports = Product