import 'dotenv/config'
import { formatIncome } from '../utils'

describe('Test Configuration', () => {
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
})