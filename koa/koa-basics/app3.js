// middleware

const koa = require('koa');
const app = new koa();

app.use(async (ctx, next) => {
    console.log('>> one');
    await next();
    console.log('>> ???');
});

app.use(async (ctx, next) => {
    console.log('>> two');
    await next();
    ctx.body = 'two';
    console.log('asda');
});
app.use(async (ctx, next) => {
    console.log('>> three');
    await next();
});

const hostname = 'localhost';
const port = 3000;
app.listen(port, hostname, () => {
    console.log(`Server at http://${hostname}:${port}/`);
});