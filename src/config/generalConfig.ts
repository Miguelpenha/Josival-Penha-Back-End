import { Express } from 'express'
import morgan from 'morgan'
import express from 'express'

function generalConfig(app: Express) {
    app.use(morgan('dev'))

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
}

export default generalConfig