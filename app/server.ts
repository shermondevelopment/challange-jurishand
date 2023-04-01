import 'dotenv/config'

/* express */
import express, { json } from 'express'

/* router */
import articleRouter from './routers/article-router'

const app = express()
app.use(json())
app.use(articleRouter)

app.listen(3001, () => console.log(`app running in port ${process.env.PORT}`))
