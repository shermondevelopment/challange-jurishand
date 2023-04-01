import 'dotenv/config'

/* express */
import express, { json } from 'express'

/* router */
import articleRouter from './routers/article-router'

/* swagger */
import swaggerDoc from 'swagger-ui-express'
import swaggerRules from '../swagger.json'

const app = express()
app.use(json())
app.use(articleRouter)
app.use('/docs', swaggerDoc.serve, swaggerDoc.setup(swaggerRules))

app.listen(3001, () => console.log(`app running in port ${process.env.PORT}`))
