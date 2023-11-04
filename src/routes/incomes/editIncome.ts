import IIncome from '../../types/income'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import incomesModel from '../../models/income'
import formatIncome from '../../utils/formatIncome'
import { manageSpreadsheetJob } from '../../jobs'

interface IEditIncomeParams {
    id: string
}

type IEditIncomeForBody = Omit<IIncome, '_id' | 'valueRaw' | 'student' | 'created'>

interface IEditIncomeBody extends IEditIncomeForBody {
    student: string
}

async function editIncome(req: Request<IEditIncomeParams, {}, IEditIncomeBody>, res: Response) {
    const { id } = req.params

    if (mongoose.isValidObjectId(id)) {
        const incomeEdit = await incomesModel.findById(id).select(['id'])

        if (incomeEdit) {
            let { value, student, payDate, category, payMethod, billingDate } = req.body

            let income = {
                value,
                payDate,
                category,
                payMethod,
                billingDate,
                student: student as any,
            } as IIncome

            if (value) {
                const { valueRaw, valueFormatted } = formatIncome(value)

                income.valueRaw = valueRaw
                income.value = valueFormatted
            }

            await incomeEdit.updateOne(income)

            res.json({ edited: true })

            await manageSpreadsheetJob()
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default editIncome