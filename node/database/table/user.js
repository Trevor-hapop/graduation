const Sequelize = require('sequelize')
const sequelize = require('../sequelize')
var user = sequelize.define('user', {
    user_name: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    password: Sequelize.STRING(100)
}, {
        timestamps: false
    })

module.exports = user