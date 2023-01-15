import { Request, Response } from 'express'
import studentsModel from '../../models/student'

interface IDeleteStudentParams {
    id: string
}

async function deleteStudent(req: Request<IDeleteStudentParams>, res: Response) {
    const { id } = req.params

    try {
        await studentsModel.findByIdAndDelete(id)

        res.json({ deleted: true })
    } catch {
        res.json({ deleted: false })
    }
}

export default deleteStudent