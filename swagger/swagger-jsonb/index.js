// import express from 'express'
// import swaggerUi from 'swagger-ui-express'
// import bodyparser from 'body-parser'
// import * as swagger from 'swagger2'

// import { routes as registerRoute } from './routes/register'
// import { routes as loginRoute } from './routes/login'

import koa from 'koa'
import Router from 'koa-router'
import jsonBody from 'koa-json-body'
import * as swagger from 'swagger2'
import { ui, validate } from 'swagger2-koa';


import {postgresMiddleware, postgres} from './postgres'
import {schema, insert, retrieve, retrieveAll, update, remove, removeAll} from './model'

// const app = express()
// const router = express.Router()

const app = new koa();
app.use(jsonBody())
    .use(postgresMiddleware(schema));

// express code not used
// app.use(bodyparser())

//load this before anything else
const spec = swagger.loadDocumentSync('./swagger.yaml')

const router = new Router({
    prefix: '/v1'
});
// routes
router 
    .post('/cards', async (ctx) => {
        const data = ctx.request.body;
        //console.log(`Look here: ${JSON.stringify(ctx.request.body)}`);
        console.log(`Check details here: ${JSON.stringify(data)}`)
        const id = await insert(postgres(ctx), data.details);
        
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

// check if swagger file is valid
if (!swagger.validateDocument(spec)) {
    throw Error(`Invalid Swagger File`)
}
// for (const routes of [
//     registerRoute, 
//     loginRoute
// ]){
//     routes(router)
// }

router.get('/swagger.json', (ctx) => {
    ctx.body = spec;
})

// express code not used
// app.use('/', swaggerUi.serve)
// app.get('/', swaggerUi.setup(spec))
// app.use(validate(spec));
//app.use('/v1', router)

app.use(router.routes());
app.use(router.allowedMethods());
app.use(ui(spec));
app.listen(8000, () => console.log(`listening on 8000`))