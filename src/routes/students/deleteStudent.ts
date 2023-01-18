import { Request, Response } from 'express'
import studentsModel from '../../models/student'
import { manageSpreadsheetJob } from '../../jobs'

interface IDeleteStudentParams {
    id: string
}

async function deleteStudent(req: Request<IDeleteStudentParams>, res: Response) {
    const { id } = req.params

    try {
        await studentsModel.findByIdAndDelete(id)

        res.json({ deleted: true })

        await manageSpreadsheetJob()
    } catch {
        res.json({ deleted: false })
    }
}

export default deleteStudent