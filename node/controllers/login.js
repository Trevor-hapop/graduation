const user = require('../database/table/user')

// or if you prefer all default config, just use => app.use(session(app));
var fn_login = async (ctx, next) => {
    console.log('ctx.session')
    console.log(ctx.session)
    var
        userName = ctx.request.body.userName || '',
        password = ctx.request.body.password || '';
        var admin = await user.findAll({
            where: {
                user_name: userName
            }
        })
        if (admin.length === 0) {
            ctx.response.body = 'user dosent exit'
            return
        }
        let obj = admin[0].dataValues
        if (userName === obj.user_name && password === obj.password) {
            ctx.response.body = true
            ctx.session.userName = userName
        } else {
            ctx.response.body = false
        }
}

module.exports = {
    'POST /login/submit': fn_login
}