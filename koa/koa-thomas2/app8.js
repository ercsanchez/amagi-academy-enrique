// http methods: headers, options, get, put, patch, post, delete

//.all() route

// router.all() for authentication

// regex
// '/ab?cd'

// /* - all paths

// ab*cd

// /a/ - anything that has a letter a

// route params

// req.params

const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();

// route param 
// localhost:8000/greetings/rick
// localhost:8000/greetings/muppet
// :name is a placeholder
router.get('/greetings/:name', (ctx) => { // anything after forward slash will be assigned to const name
    const name = ctx.params.name;
    const data = `Hey there, ${name}`;
    ctx.status = 200;
    ctx.body = data;
});

app.use(router.routes());
app.listen(8000);