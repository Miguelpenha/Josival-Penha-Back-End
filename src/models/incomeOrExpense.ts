import mongoose from 'mongoose'
import IIncomeOrExpense from '../types/incomeOrExpense'
import createdSchema from './schemasPatterns/created'
import types from '../types/incomeOrExpense/types'

const schema = new mongoose.Schema<IIncomeOrExpense>({
    id: String,
    name: String,
    value: String,
    valueRaw: Number,
    created: createdSchema,
    type: {
        enum: types,
        type: String
    },
    date: {
        type: Date,
        set: (date: string) => {
            const dateSplitted = date.split('/')
            const day = dateSplitted[0]
            const month = dateSplitted[1]
            const year = dateSplitted[2]

            return `${month}/${day}/${year}`
        }
    },
})

const incomesOrExpensesModel = mongoose.model('incomesOrExpenses', schema)

export default incomesOrExpensesModel