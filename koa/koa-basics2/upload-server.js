// url query string

const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();


router
    // http:localhost:8000/greetings?muppet=Kermit
    .get('/greetings/:id([0-9]{5})', (ctx) => {
    const name = ctx.params.id;
    const data = `Hey there,${name}`;
    ctx.status = 200;
    ctx.body = data;
});

app.use(router.routes());
app.listen(8000);