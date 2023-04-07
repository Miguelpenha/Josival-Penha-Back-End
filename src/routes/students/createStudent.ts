import { Request, Response } from 'express'
import { IStudent } from '../../types'
import studentsModel from '../../models/student'
import classesModel from '../../models/class'
import defaultMatters from '../../models/student/schemas/defaultMatters'
import { manageSpreadsheetJob } from '../../jobs'

async function createStudent(req: Request<{}, {}, IStudent>, res: Response) {
    const { cpf, name, birth, email, class: classSelect, gender, telephone, situation, address, matters, responsible1, responsible2 } = req.body

    const studentIsExists = await studentsModel.findOne({ name })
    
    if (!studentIsExists) {
        const classSelectCompleted = await classesModel.findById(classSelect).select('teacher').populate('teacher')

        await studentsModel.create({
            cpf,
            name,
            birth,
            email,
            gender,
            address,
            telephone,
            situation,
            responsible1,
            responsible2,
            class: classSelect,
            matters: matters || defaultMatters,
            teacher: (classSelectCompleted.teacher as any).id
        })
        
        res.json({ created: true })

        await manageSpreadsheetJob()
    } else {
        res.json({ exists: true })
    }
}

export default createStudent