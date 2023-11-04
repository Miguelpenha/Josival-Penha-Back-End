import IIncome from '../../types/income'
import { Request, Response } from 'express'
import formatIncomeOrExpense from '../../utils/formatIncome'
import incomesOrExpensesModel from '../../models/income'
import { manageSpreadsheetJob } from '../../jobs'

type ICreateIncomeForBody = Omit<IIncome, '_id' | 'valueRaw' | 'student' | 'created'>

interface ICreateIncomeBody extends ICreateIncomeForBody {
    student: string
}

async function createIncome(req: Request<{}, {}, ICreateIncomeBody>, res: Response) {
    const { value, student, payDate, category, payMethod, billingDate } = req.body
    const { valueRaw, valueFormatted } = formatIncomeOrExpense(value)
    
    await incomesOrExpensesModel.create({
        student,
        payDate: payDate,
        valueRaw: valueRaw,
        category: category,
        payMethod: payMethod,
        value: valueFormatted,
        billingDate: billingDate
    })
    
    res.json({ created: true })

    await manageSpreadsheetJob()
}

export default createIncome