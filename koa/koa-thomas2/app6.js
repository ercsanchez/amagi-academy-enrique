// apply functional programming concept: compose for app4.js

const koa = require('koa');
const compose = require ('koa-compose');
const app = new koa();

async function logTime(ctx, next) {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`Method: ${ctx.method}, URL: ${ctx.url}, Elapsed time: ${ms}ms`);
}
async function logCtx(ctx, next) {
    console.log(`Request: ${JSON.stringify(ctx.request)}`);
    console.log(`Response: ${JSON.stringify(ctx.response)}`);
    ctx.body = `I logged the context.`;
}

const allFuncs = compose([logTime, logCtx]);
app.use(allFuncs);

app.listen(8000);