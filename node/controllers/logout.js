// or if you prefer all default config, just use => app.use(session(app));
var fn_logout = async (ctx, next) => {
    console.log('yes')
    ctx.response.body = false
    ctx.session = null
}

module.exports = {
    'GET /logout': fn_logout
}