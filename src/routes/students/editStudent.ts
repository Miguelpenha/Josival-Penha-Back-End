import { Request, Response } from 'express'
import { IStudent } from '../../types'
import mongoose from 'mongoose'
import studentsModel from '../../models/student'
import { manageSpreadsheetJob } from '../../jobs'
import teachersModel from '../../models/teacher'
import classesModel from '../../models/class'

interface IEditStudentParams {
    id: string
}

async function editStudent(req: Request<IEditStudentParams, {}, IStudent>, res: Response) {
    const { id: idStudent } = req.params

    if (mongoose.isValidObjectId(idStudent)) {
        const student = await studentsModel.findById(idStudent).select(['id', 'class'])

        if (student) {
            let { cpf, name, birth, email, class: classSelect, gender, telephone, situation, address, matters, responsible1, responsible2 } = req.body

            const studentEdited = {
                cpf,
                name,
                birth,
                email,
                gender,
                address,
                matters,
                telephone,
                situation,
                responsible1,
                responsible2,
                class: classSelect
            } as IStudent

            if (classSelect != student.class.id) {
                const classSelectCompleted = await classesModel.findById(classSelect).select(['id', 'teacher']).populate('teacher')

                studentEdited.teacher = (classSelectCompleted.teacher as any).id
            }

            await student.updateOne(studentEdited)

            res.json({ edited: true })

            await manageSpreadsheetJob()
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default editStudent