import 'dotenv/config'

/* async-errors */
import 'express-async-errors'

/* express */
import express, { json } from 'express'

/* middleware */
import error from '../middlewares/error'

/* router */
import articleRouter from '../routers/article-router'

/* swagger */
import swaggerDoc from 'swagger-ui-express'
import swaggerRules from '../../swagger.json'

const app = express()
app.use(json())
app.use(articleRouter)
app.use(error)
app.use('/docs', swaggerDoc.serve, swaggerDoc.setup(swaggerRules))

export default app
