const Sequelize = require('sequelize')
const sequelize = require('../sequelize')
var home_others = sequelize.define('home_others', {
    id: {
        type: Sequelize.INTEGER(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    picPath: Sequelize.STRING(100)
}, {
        timestamps: false
    })

module.exports = home_others