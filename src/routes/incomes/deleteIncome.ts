import { Request, Response } from 'express'
import incomesModel from '../../models/income'
import { manageSpreadsheetJob } from '../../jobs'

interface IDeleteIncomeParams {
    id: string
}

async function deleteIncome(req: Request<IDeleteIncomeParams>, res: Response) {
    const { id } = req.params

    try {
        await incomesModel.findByIdAndDelete(id)

        res.json({ deleted: true })

        await manageSpreadsheetJob()
    } catch {
        res.json({ deleted: false })
    }
}

export default deleteIncome