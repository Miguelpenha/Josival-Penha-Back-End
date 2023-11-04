import { Request, Response } from 'express'
import incomesModel from '../../models/income'

interface IIncomesQuery {
    count: (string | undefined)
    student: (string | undefined)
}

async function incomes(req: Request<{}, {}, {}, IIncomesQuery>, res: Response) {
    const { count, student } = req.query

    if (count !== 'false' && count) {
        const incomesCount = await incomesModel.estimatedDocumentCount()

        res.json({ count: incomesCount })
    } else {
        const incomes = incomesModel.find()

        if (student !== 'false' && student) {
            incomes.populate('student')
        }

        res.json(await incomes)
    }
}

export default incomes