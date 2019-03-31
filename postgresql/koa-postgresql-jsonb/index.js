import koa from 'koa'
import Router from 'koa-router'
import jsonBody from 'koa-json-body'
// import jsonBody from 'koa-bodyparser'
import {postgresMiddleware, postgres} from './postgres'
import {schema, insert, retrieve, retrieveAll, update, remove, removeAll} from './model'

const app = new koa();
app.use(jsonBody())
    .use(postgresMiddleware(schema));

const router = new Router();

router 
    .post('/cards', async (ctx) => {
        const data = ctx.request.body;
        //console.log(`Look here: ${JSON.stringify(ctx.request.body)}`);
        const id = await insert(postgres(ctx), data.details);
        console.log(`Check details here: ${JSON.stringify(data.details)}`)
        ctx.status = 200;
        ctx.body = id[0].id;
        //console.log(ctx.body);
    })
    .get('/cards', async (ctx) => {
        const data = await retrieveAll(postgres(ctx))
        ctx.status = 200;
        ctx.body = data;
    })
    .get('/cards/:id', async (ctx) => {
        const data = await retrieve(postgres(ctx), ctx.params.id) 
        ctx.status = 200;
        ctx.body = data[0];
    })
    .put('/cards/:id', async (ctx) => {
        const data = ctx.request.body;
        await update(postgres(ctx), data, ctx.params.id);
        ctx.status = 204;
    })
    .delete('/cards/:id', async (ctx) => {
        const data = await remove(postgres(ctx), ctx.params.id);     
        ctx.status = 204;
        ctx.body = data;
    })
    .delete('/cards', async (ctx) => {
        const data = await removeAll(postgres(ctx));
        ctx.status = 204;
        ctx.body = data;
    });

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(5000, console.log('Server listening on 5000'));



