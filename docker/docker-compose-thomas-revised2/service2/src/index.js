import express from 'express'
import swaggerUi from 'swagger-ui-express'
import bodyparser from 'body-parser'
import * as swagger from 'swagger2'

import { postgresMiddleware } from './postgres'
import { schema } from './model'

import { routes as registerRoute } from './routes/register'
import { routes as userRoute } from './routes/user'

const app = express()
const router = express.Router()

// REQUEST BODY PARSER & POSTGRES MIDDLEWARE
app.use(bodyparser()).use(postgresMiddleware(schema));

// SWAGGER MIDDLEWARE
const spec = swagger.loadDocumentSync('./src/swagger.yaml')
if (!swagger.validateDocument(spec)) {
    throw Error(`Invalid Swagger File`);
}
app.use('/', swaggerUi.serve)
app.get('/', swaggerUi.setup(spec))
router.get('/swagger.json', (req, res) => {
    res.send(spec)
})

// ROUTES
for (const routes of [
    registerRoute,
    userRoute
]) {
    routes(router)
}
app.use('/v1', router)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`service2 listening on ${PORT}`))

module.exports = app;