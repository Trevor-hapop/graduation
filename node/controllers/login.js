var fn_login = async (ctx, next) => {
    console.log('ctx')
    console.log(ctx.request.body)
    var
        userName = ctx.request.body.userName || '',
        password = ctx.request.body.password || '';
    console.log(`signin with userName: ${userName}, password: ${password}`);
    if (userName === 'Hapop' && password === '496507') {
        ctx.response.body = true
    } else {
        ctx.response.body = false
    }
}

module.exports = {
    'POST /login/submit': fn_login
}