import express from 'express'
import swaggerUi from 'swagger-ui-express'
import bodyparser from 'body-parser'
import * as swagger from 'swagger2'

import { user as userRoute } from './routes/user'

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
app.listen(8000, () => console.log(`listening on 8000`))