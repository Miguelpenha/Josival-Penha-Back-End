import IIncomeOrExpense, { Type } from '../../types/incomeOrExpense'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import incomesOrExpensesModel from '../../models/incomeOrExpense'
import formatIncomeOrExpense from '../../utils/formatIncomeOrExpense'
import { manageSpreadsheetJob } from '../../jobs'

interface IEditIncomeOrExpenseParams {
    id: string
}

interface IEditIncomeOrExpenseBody {
    type: Type
    date: string
    name: string
    value: string
}

async function editIncomeOrExpense(req: Request<IEditIncomeOrExpenseParams, {}, IEditIncomeOrExpenseBody>, res: Response) {
    const { id } = req.params

    if (mongoose.isValidObjectId(id)) {
        const incomeOrExpenseEdit = await incomesOrExpensesModel.findById(id).select(['id'])

        if (incomeOrExpenseEdit) {
            let { type, name, value, date } = req.body

            let incomeOrExpense = {
                type,
                name,
                date
            } as { type: string, name: string, date: string, value: string, valueRaw: number }

            if (value) {
                const { valueRaw, valueFormatted } = formatIncomeOrExpense(value)

                incomeOrExpense.valueRaw = valueRaw
                incomeOrExpense.value = valueFormatted
            }

            await incomeOrExpenseEdit.updateOne(incomeOrExpense)

            res.json({ edited: true })

            await manageSpreadsheetJob()
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default editIncomeOrExpense