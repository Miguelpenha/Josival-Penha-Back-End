import { Request, Response } from 'express'
import teachersModel from '../../models/teacher'

interface ITeachersQuery {
    count: (string | undefined)
}

async function teachers(req: Request<{}, {}, {}, ITeachersQuery>, res: Response) {
    const { count } = req.query

    if (count !== 'false' && count) {
        const teachersCount = await teachersModel.estimatedDocumentCount()

        res.json({ count: teachersCount })
    } else {
        const teachers = await teachersModel.find()

        res.json(teachers)
    }
}

export default teachers