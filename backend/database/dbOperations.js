
const Sequelize = require('sequelize');

const sequelize = new Sequelize('FoodstockDB', 'raden', 'raden122', {
    host: 'localhost',
    dialect: 'mssql'
});

module.exports = sequelize;