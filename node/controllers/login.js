const user = require('../database/table/user')
var fn_login = async (ctx, next) => {
    console.log('ctx')
    console.log(ctx.request.body)
    var
        userName = ctx.request.body.userName || '',
        password = ctx.request.body.password || '';
        var admin = await user.findAll({
            where: {
                user_name: userName
            }
        })
        if (admin.length === 0) {
            console.log('找不到这个人')
            ctx.response.body = 'user dosent exit'
            return
        }
        let obj = admin[0].dataValues
        if (userName === obj.user_name && password === obj.password) {
            console.log('正确')
            ctx.response.body = { aaa: '666', bbb: '999'}
        } else {
            console.log('账号或密码错误')
            ctx.response.body = { aaa: '111', bbb: '222'}
        }
}()

module.exports = {
    'POST /login/submit': fn_login
}