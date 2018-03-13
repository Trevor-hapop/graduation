const Sequelize = require('sequelize')
const sequelize = require('../sequelize')
var home_dogs = sequelize.define('home_dog', {
    id: {
        type: Sequelize.INTEGER(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    picPath: Sequelize.STRING(100)
}, {
        timestamps: false
    })

module.exports = home_dogs