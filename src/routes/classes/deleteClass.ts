import { Request, Response } from 'express'
import classesModel from '../../models/class'

interface IDeleteClassParams {
    id: string
}

async function deleteClass(req: Request<IDeleteClassParams>, res: Response) {
    const { id } = req.params

    try {
        await classesModel.findByIdAndDelete(id)

        res.json({ deleted: true })
    } catch {
        res.json({ deleted: false })
    }
}

export default deleteClass