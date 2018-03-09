const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
const bodyParser = require('body-parser')

const app = new Koa();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// log request URL:

// add url-route:
router.get('/hapop', async (ctx, next) => {
		console.log('kkkk')
    ctx.response.body = { name: 'Trevor-Hapop'}
})

router.post('/login/submit', async (ctx, next) => {
	console.log('ctx')
	console.log(ctx)
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || ''
    console.log(`signin with name: ${name}, password: ${password}`)
    if (name === 'Hapop' && password === '496507') {
        ctx.response.body = true
    } else {
        ctx.response.body = false
    }
})

// add router middleware:
app.use(router.routes());
app.listen(8080);
console.log('app started at port 8080...');