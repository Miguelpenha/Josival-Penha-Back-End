import mongoose from 'mongoose'
import IIncome from '../types/income'
import createdSchema from './schemasPatterns/created'

const schema = new mongoose.Schema<IIncome>({
    value: String,
    payDate: String,
    category: String,
    valueRaw: Number,
    payMethod: String,
    billingDate: String,
    created: createdSchema,
    student: {
        type: String,
        select: false,
        ref: 'students'
    }
})

const incomesModel = mongoose.model('incomes', schema)

export default incomesModel