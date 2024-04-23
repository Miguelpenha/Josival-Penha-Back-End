import 'dotenv/config'
import express from 'express'
import config from './config'
import path from 'path'
import routes from './routes'
import jobs from './jobs'
import { greenBright as success } from 'chalk'

const app = express()

config(app)

app.use('/public', express.static(path.resolve(__dirname, '..', 'public')))
app.use('/', routes)

jobs().then()

app.listen(process.env.PORT, () => console.log(success('>> Server is running')))