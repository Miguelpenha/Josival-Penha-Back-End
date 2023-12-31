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
    } catch (error) {
        throw new TypeError('Erro on protection configuration')
    }
}

export default protectionConfig