import { Express } from 'express'
import cors from 'cors'
import corsParams from '../utils/corsParams'
import helmet from 'helmet'

function protectionConfig(app: Express) {
    app.set('trust proxy', 1)
    app.disable('x-powered-by')

    app.use(cors(corsParams))
    
    app.use(helmet())
}

export default protectionConfig