import 'dotenv/config'
import { corsParams, formatIncome, cryptography } from '../utils'

describe('Test Configuration', () => {
    describe('Cors Params', () => {
        test('Check Errors', () => {
            expect(() => corsParams).not.toThrow(Error)
        })
        
        test('Check Results', () => {
            expect(corsParams).toEqual(
                expect.objectContaining({
                    origin: expect.any(Array),
                    credentials: expect.any(Boolean),
                    optionsSuccessStatus: expect.any(Number)
                })
            )
        })
    })

    describe('Format Income', () => {
        test('Check Errors', () => {
            expect(() => formatIncome('R$ 10,00')).not.toThrow(Error)
        })
        
        test('Check Results', () => {
            const data = formatIncome('R$ 10,00')

            expect(data.valueRaw).toEqual(1000)
            expect(data.valueFormatted).toBeDefined()
        })
    })

    describe('Cryptography', () => {
        describe('Encrypt', () => {
            test('Check Errors', () => {
                expect(() => cryptography.encrypt('test')).not.toThrow(Error)
            })
            
            test('Check Results', () => {
                const data = cryptography.encrypt('test')
                
                expect(data).toEqual(expect.any(String))
            })
        })

        describe('Decrypt', () => {
            const encrypted = cryptography.encrypt('test')

            test('Check Errors', () => {
                expect(() => cryptography.decrypt(encrypted)).not.toThrow(Error)
            })
            
            test('Check Results', () => {
                const data = cryptography.decrypt(encrypted)
                
                expect(data).toEqual('test')
            })
        })
    })
})