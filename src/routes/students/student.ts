import { Request, Response } from 'express'
import mongoose from 'mongoose'
import studentsModel from '../../models/student'

interface IStudentParams {
    id: string
}

interface IStudentQuery {
    class: (string | undefined)
    address: (string | undefined)
    matters: (string | undefined)
}

async function student(req: Request<IStudentParams, {}, {}, IStudentQuery>, res: Response) {
    const { id } = req.params

    if (mongoose.isValidObjectId(id)) {
        const studentSelect = studentsModel.findById(id)
        const { class: classSelect, address, matters } = req.query
        
        if (classSelect !== 'false' && classSelect) {
            studentSelect.populate('class')
        }

        const select: string[] = []

        if (address !== 'false' && address) {
            select.push('+address')
        }

        if (matters !== 'false' && matters) {
            select.push('+matters')
        }

        studentSelect.select(select)

        const studentIsExist = await studentSelect

        if (studentIsExist) {
            res.json(studentIsExist)
        } else {
            res.json({ exists: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default student