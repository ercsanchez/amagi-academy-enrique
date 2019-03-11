// app.(path, method, handler)

const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();

// GET method route
router.get('/kermit', (ctx) => {
    const data = 'the frog';
    ctx.status = 200;
    ctx.body = data;
});

app.use(router.routes());
app.listen(8000);