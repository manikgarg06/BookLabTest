const Sequelize = require('sequelize');

const sequelize = require('../database');

const Labtest = sequelize.define('netmed', {
    rowid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    testdata : Sequelize.JSON
})

module.exports = Labtest;
