import { Type } from '../../types/incomeOrExpense'
import { Request, Response } from 'express'
import formatIncomeOrExpense from '../../utils/formatIncomeOrExpense'
import incomesOrExpensesModel from '../../models/incomeOrExpense'
import { manageSpreadsheetJob } from '../../jobs'

interface ICreateIncomeOrExpenseBody {
    type: Type
    date: string
    name: string
    value: string
}

async function createIncomeOrExpense(req: Request<{}, {}, ICreateIncomeOrExpenseBody>, res: Response) {
    let { type, name, value, date } = req.body
    const { valueRaw, valueFormatted } = formatIncomeOrExpense(value)
    
    await incomesOrExpensesModel.create({
        type,
        name,
        date,
        valueRaw: valueRaw,
        value: valueFormatted
    })
    
    res.json({ created: true })

    await manageSpreadsheetJob()
}

export default createIncomeOrExpense