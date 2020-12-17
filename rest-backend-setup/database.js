const Sequelize = require('sequelize');

const sequelize = new Sequelize('netmeds', 'root', 'legal@123', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;