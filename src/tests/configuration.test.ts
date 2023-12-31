import 'dotenv/config'
import { generalConfig, databaseConfig, protectionConfig } from '../config'
import express from 'express'

describe('Test Configuration', () => {
    const app = express()

    test('General', async () => {
        const data = generalConfig(app)
        
        expect(data).toEqual({ configured: true })
    })

    test('Database', async () => {
        const data = await databaseConfig()
        
        expect(data).toEqual({ configured: true })
    })

    test('Protection', async () => {
        const data = protectionConfig(app)
        
        expect(data).toEqual({ configured: true })
    })
})