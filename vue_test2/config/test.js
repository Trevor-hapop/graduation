const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const app = new Koa();

// add url-route:
router.get('/hapop', async (ctx, next) => {
		console.log('kkkk')
    ctx.response.body = { name: 'Trevor-Hapop'}
})

router.post('/login/submit', async (ctx, next) => {
	console.log('ctx')
	console.log(ctx.request.body)
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || ''
    console.log(`signin with name: ${name}, password: ${password}`)
    if (name === 'Hapop' && password === '496507') {
        ctx.body = { name: '666', id: '999'}
    } else {
        ctx.body = { name: '111', id: '999'}
    }
    console.log('ctx body')
    console.log(ctx.response)
})

app.use(bodyParser());
// add router middleware:
app.use(router.routes());
app.listen(8080);
console.log('app started at port 8080...');