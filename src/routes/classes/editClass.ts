import { Request, Response } from 'express'
import mongoose from 'mongoose'
import classesModel from '../../models/class'
import { manageSpreadsheetJob } from '../../jobs'

interface IEditClassParams {
    id: string
}

interface IEditClassBody {
    name: string
    grade: string
    shift: string
    teacher: string
}

async function editClass(req: Request<IEditClassParams, {}, IEditClassBody>, res: Response) {
    const { id: idClass } = req.params

    if (mongoose.isValidObjectId(idClass)) {
        const classEdit = await classesModel.findById(idClass).select(['id', 'teacher'])

        if (classEdit) {
            let { name, grade, shift, teacher } = req.body

            await classEdit.updateOne({
                name,
                grade,
                shift,
                teacher
            } as IEditClassBody)

            res.json({ edited: true })

            await manageSpreadsheetJob()
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default editClass