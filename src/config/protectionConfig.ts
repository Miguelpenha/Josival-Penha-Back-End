import { Express } from 'express'
import cors from 'cors'
import corsParams from '../utils/corsParams'
import helmet from 'helmet'

function protectionConfig(app: Express) {
    try {
        app.set('trust proxy', 1)
        app.disable('x-powered-by')

        app.use(cors(corsParams))
        
        app.use(helmet())

        return { configured: true }
    } catch (error) {
        return { configured: false, error }
    }
}

export default protectionConfig