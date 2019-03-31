import express from 'express'
import swaggerUi from 'swagger-ui-express'
import bodyparser from 'body-parser'
import * as swagger from 'swagger2'

import { routes as userRoute } from './routes/user'

const app = express()
const router = express.Router()

app.use(bodyparser())

const spec = swagger.loadDocumentSync('./swagger.yaml')

if (!swagger.validateDocument(spec)) {
    throw Error(`Invalid Swagger File`);
}

for (const routes of [
    userRoute
]) {
    routes(router)
}

app.use('/', swaggerUi.serve)
app.get('/', swaggerUi.setup(spec))
router.get('/swagger.json', (req, res) => {
    res.send(spec)
})

app.use('/v1', router)

const PORT = 5000;
app.listen(PORT, () => console.log(`service2 listening on ${PORT}`))