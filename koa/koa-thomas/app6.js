const koa = require('koa');
const compose = require('koa-compose');

const app = new koa();

async function logger(ctx, next) {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
}

async function context(ctx, next) {
    console.log(`Request: ${JSON.stringify(ctx.request)}`);
    console.log(`Response: ${JSON.stringify(ctx.response)}`);
    ctx.body = `Hello World`;
    await next();
}

const all = compose([logger, context]);

app.use(all);

app.listen(3000);