const koa = require('koa');

const serve = require('koa-static-server');


const app = new koa();

const hostname = 'localhost';

const port = 3000;

// not part of exercise
app.use(async (ctx, next) => {
    console.log('Hello');
    //await next();
    console.log(JSON.stringify(ctx.request));
    console.log(JSON.stringify(ctx.response));
    await next();
});
app.use( serve({rootDir:'public'}) );
// app.use( (ctx, next) => {
//     serve({rootDir:'public'})();
//     next();
// });

// app.use( () => {
//     console.log('Hello');
// });


app.listen(port, hostname, () => {
    console.log(`Server at http://${hostname}:${port}/`);
});