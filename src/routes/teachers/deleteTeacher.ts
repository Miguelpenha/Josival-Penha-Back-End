import { Request, Response } from 'express'
import teachersModel from '../../models/teacher'

interface IDeleteTeacherParams {
    id: string
}

async function deleteTeacher(req: Request<IDeleteTeacherParams>, res: Response) {
    const { id } = req.params

    try {
        await teachersModel.findByIdAndDelete(id)

        res.json({ deleted: true })
    } catch {
        res.json({ deleted: false })
    }
}

export default deleteTeacher