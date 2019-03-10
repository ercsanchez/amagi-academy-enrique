'use strict';
// const koa = require('koa')
// const app = new koa()

// app.use(function *(){
//   this.body = "Hello World !!!";
// });

// app.listen(1234)

const koa = require('koa');
const koaRouter = require('koa-router');

const app = new koa();
const router = new koaRouter();

router.get('koala', '/', (ctx) => {
    ctx.body = "Welcome! To the Koala Jungle!";
});

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(1234, () => console.log('running on port 1234'));

