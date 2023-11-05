import express from 'express'
import mongoose from 'mongoose'
import { greenBright as success } from 'chalk'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import path from 'path'
import routes from './routes'
import { manageSpreadsheetJob } from './jobs'

const app = express()

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URL)
console.log(success('>> MongoDB being used'))

app.use(express.json())
app.set('trust proxy', 1)
app.disable('x-powered-by')
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.use(cors({
    credentials: true,
    optionsSuccessStatus: 200,
    origin: process.env.URLS_AUTHORIZED.split(',')
}))
console.log(success('>> Cors being used'))

app.use(helmet())
console.log(success('>> Helmet being used'))

app.use('/public', express.static(path.resolve(__dirname, '..', 'public')))
app.use('/', routes)

manageSpreadsheetJob().then()

app.listen(process.env.PORT, () => console.log(success('>> Server is running')))