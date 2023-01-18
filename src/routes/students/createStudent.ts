import { Request, Response } from 'express'
import { IStudent } from '../../types'
import studentsModel from '../../models/student'
import { manageSpreadsheetJob } from '../../jobs'

async function createStudent(req: Request<{}, {}, IStudent>, res: Response) {
    const { cpf, name, birth, email, class: classSelect, gender, telephone, situation, address, matters, responsible1, responsible2 } = req.body

    const studentIsExists = await studentsModel.findOne({ name })
    
    if (!studentIsExists) {
        await studentsModel.create({
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
        
        res.json({ created: true })

        await manageSpreadsheetJob()
    } else {
        res.json({ exists: true })
    }
}

export default createStudent