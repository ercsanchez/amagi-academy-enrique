// maturity

// flame graph or chart - blog post about this

// require koa
const koa = require('koa');

// initialize koa
const app = new koa();

// ctx parameter not necessary
app.use(async (ctx) => {
    console.log('Hello');
});

// connect to a port
app.listen(3000);

// static server

// middleware

// app.use( async(args, next) => {
//     await next(output)
// }

