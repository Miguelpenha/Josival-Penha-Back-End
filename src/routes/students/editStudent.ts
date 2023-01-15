import { Request, Response } from 'express'
import { IStudent } from '../../types'
import mongoose from 'mongoose'
import studentsModel from '../../models/student'

interface IEditStudentParams {
    id: string
}

async function editStudent(req: Request<IEditStudentParams, {}, IStudent>, res: Response) {
    const { id: idStudent } = req.params

    if (mongoose.isValidObjectId(idStudent)) {
        const student = await studentsModel.findById(idStudent).select(['id'])

        if (student) {
            let { cpf, name, birth, email, class: classSelect, gender, telephone, situation, address, matters, responsible1, responsible2  } = req.body

            await student.updateOne({
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
            })

            res.json({ edited: true })
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default editStudent