import 'dotenv/config'
import express from 'express'
import { generalConfig, databaseConfig, protectionConfig } from '../config'
import mongoose from 'mongoose'

describe('Test Configuration', () => {
    const app = express()

    test('General', () => {
        expect(() => generalConfig(app)).not.toThrow(Error)
    })

    test('Database', async () => {
        expect(databaseConfig).not.toThrow(Error)

        await mongoose.connection.close()
    })

    test('Protection', () => {
        expect(() => protectionConfig(app)).not.toThrow(Error)
    })
})