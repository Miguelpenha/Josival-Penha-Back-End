import { Express } from 'express'
import generalConfig from './generalConfig'
import { greenBright as success } from 'chalk'
import databaseConfig from './databaseConfig'
import protectionConfig from './protectionConfig'

function config(app: Express) {
    console.log(success('>> Configuration'))

    generalConfig(app)
    console.log(success('   >> General configuration'))
    console.log(success('       >> Morgan being used'))

    databaseConfig().then()
    console.log(success('   >> database configuration'))
    console.log(success('       >> MongoDB being used'))
    
    protectionConfig(app)
    console.log(success('   >> Protection configuration'))
    console.log(success('       >> Cors being used'))
    console.log(success('       >> Helmet being used'))
}

export default config