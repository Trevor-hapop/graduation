const homeDogs = require('../database/table/home_dogs')
const homeCats = require('../database/table/home_cats')
const homeOthers = require('../database/table/home_others')
var fn_home = async (ctx, next) => {
    if (!ctx.session.userName) {
        return ctx.response.body = false
    }
    ctx.response.body = true
}

var fn_showDogs = async (ctx, next) => {
    var dogs = await homeDogs.findAll()
    ctx.response.body = dogs
}

var fn_showCats = async (ctx, next) => {
    var cats = await homeCats.findAll()
    ctx.response.body = cats
}

var fn_showOthers = async (ctx, next) => {
    var others = await homeOthers.findAll()
    ctx.response.body = others
}

module.exports = {
    'GET /isLogin': fn_home,
    'GET /show/dogs': fn_showDogs,
    'GET /show/cats': fn_showCats,
    'GET /show/others': fn_showOthers
}