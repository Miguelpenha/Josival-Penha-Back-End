import { Request, Response } from 'express'
import incomesOrExpensesModel from '../../models/incomeOrExpense'
import { manageSpreadsheetJob } from '../../jobs'

interface IDeleteIncomeOrExpenseParams {
    id: string
}

async function deleteIncomeOrExpense(req: Request<IDeleteIncomeOrExpenseParams>, res: Response) {
    const { id } = req.params

    try {
        await incomesOrExpensesModel.findByIdAndDelete(id)

        res.json({ deleted: true })

        await manageSpreadsheetJob()
    } catch {
        res.json({ deleted: false })
    }
}

export default deleteIncomeOrExpense