import { Request, Response } from 'express'
import mongoose from 'mongoose'
import teachersModel from '../../models/teacher'
import { ITeacher } from '../../types'
import { manageSpreadsheetJob } from '../../jobs'

interface IEditTeacherParams {
    id: string
}

interface IEditTeacherBody {
    name: string
    login: string
    gender: string
    password: string
}

async function editTeacher(req: Request<IEditTeacherParams, {}, IEditTeacherBody>, res: Response) {
    const { id: idTeacher } = req.params

    if (mongoose.isValidObjectId(idTeacher)) {
        const teacherEdit = await teachersModel.findById(idTeacher).select(['id'])

        if (teacherEdit) {
            let { name, login, gender, password } = req.body

            await teacherEdit.updateOne({
                name,
                login,
                gender,
                password
            } as ITeacher)

            res.json({ edited: true })

            await manageSpreadsheetJob()
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default editTeacher