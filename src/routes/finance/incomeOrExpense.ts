import { Request, Response } from 'express'
import mongoose from 'mongoose'
import incomesOrExpensesModel from '../../models/incomeOrExpense'

interface IIncomeOrExpenseParams {
    id: string
}

async function incomeOrExpense(req: Request<IIncomeOrExpenseParams>, res: Response) {
    const { id } = req.params

    if (mongoose.isValidObjectId(id)) {
        const incomeOrExpenseIsExist = await incomesOrExpensesModel.findById(id)

        if (incomeOrExpenseIsExist) {
            res.json(incomeOrExpenseIsExist)
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default incomeOrExpense