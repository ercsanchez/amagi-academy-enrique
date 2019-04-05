// url query string

const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();

// http:localhost:8000/greetings?name=kermit
router.get('/greetings', (ctx) => {
    const result = ctx.query.name;
    console.log(result);
    const data = `Hey there, ${result}`;
    ctx.status = 200;
    ctx.body = data;
});

app.use(router.routes());
app.listen( 8000, () => console.log(`server is listening on 8000`) );