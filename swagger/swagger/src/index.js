import express from 'express'
import swaggerUi from 'swagger-ui-express'
import bodyparser from 'body-parser'
import * as swagger from 'swagger2'

import { routes as registerRoute } from './routes/register'
import { routes as loginRoute } from './routes/login'

const app = express()
const router = express.Router()

app.use(bodyparser())

//load this before anything else
const spec = swagger.loadDocumentSync('./src/swagger.yaml')

// check if swagger file is valid
if (!swagger.validateDocument(spec)) {
    throw Error(`Invalid Swagger File`)
}

for (const routes of [
    registerRoute, 
    loginRoute
]){
    routes(router);
}

app.use('/', swaggerUi.serve)
app.get('/', swaggerUi.setup(spec))
router.get('/swagger.json', (req, res) => {
    res.send(spec)
})

app.use('/v1', router)

app.listen(5000, () => console.log(`listening on 5000`))