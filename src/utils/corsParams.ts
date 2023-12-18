import { CorsOptions } from 'cors'

const corsParams: CorsOptions = {
    credentials: true,
    optionsSuccessStatus: 200,
    origin: process.env.URLS_AUTHORIZED.split(',')
}

export default corsParams