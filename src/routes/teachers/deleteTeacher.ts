import { Request, Response } from 'express'
import mongoose from 'mongoose'
import teachersModel from '../../models/teacher'

interface IDeleteTeacherParams {
    id: string
}

async function deleteTeacher(req: Request<IDeleteTeacherParams>, res: Response) {
    const { id } = req.params

    if (mongoose.isValidObjectId(id)) {
        const teacherIsExists= await teachersModel.findById(id).select('+id')
        
        if (teacherIsExists) {
            await teacherIsExists.remove()

            res.json({ deleted: true })
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default deleteTeacher