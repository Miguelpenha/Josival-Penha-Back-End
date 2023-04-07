import { Request, Response } from 'express'
import mongoose from 'mongoose'
import teachersModel from '../../models/teacher'

interface ITeacherParams {
    id: string
}

async function teacher(req: Request<ITeacherParams>, res: Response) {
    const { id } = req.params

    if (mongoose.isValidObjectId(id)) {
        const teacherIsExist = await teachersModel.findById(id)

        if (teacherIsExist) {
            res.json(teacherIsExist)
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default teacher