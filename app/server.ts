import 'dotenv/config'

/* express */
import express from 'express'

const app = express()

app.listen(3001, () => console.log(`app running in port ${process.env.PORT}`))
