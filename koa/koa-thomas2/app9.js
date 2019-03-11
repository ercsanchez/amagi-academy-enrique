// url query string

const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();

// http:localhost:8000/greetings?id=kermit
router.get('/greetings', (ctx) => {
    const name = ctx.query.id;
    console.log(ctx);
    const data = `Hey there, ${name}`;
    ctx.status = 200;
    ctx.body = data;
});

app.use(router.routes());
app.listen(8000);