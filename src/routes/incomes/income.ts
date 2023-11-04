import { Request, Response } from 'express'
import mongoose from 'mongoose'
import incomesModel from '../../models/income'

interface IIncomeParams {
    id: string
}

interface IIncomeQuery {
    student: (string | undefined)
}

async function income(req: Request<IIncomeParams, {}, {}, IIncomeQuery>, res: Response) {
    const { id } = req.params
    const { student } = req.query

    if (mongoose.isValidObjectId(id)) {
        const incomeIsExistRaw = incomesModel.findById(id)

        if (student !== 'false' && student) {
            incomeIsExistRaw.populate('student')
        }

        const incomeIsExist = await incomeIsExistRaw

        if (incomeIsExist) {
            res.json(incomeIsExist)
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default income