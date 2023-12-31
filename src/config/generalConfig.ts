import { Express } from 'express'
import morgan from 'morgan'
import express from 'express'

function generalConfig(app: Express) {
    try {
        app.use(morgan('dev'))

        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))

        return { configured: true }
    } catch (error) {
        return { configured: false, error }
    }
}

export default generalConfig