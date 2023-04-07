import { Request, Response } from 'express'
import teachersModel from '../../models/teacher'
import { hash } from 'bcryptjs'
import { manageSpreadsheetJob } from '../../jobs'

interface ICreateTeacherBody {
    name: string
    login: string
    gender: string
    password: string
}

async function createTeacher(req: Request<{}, {}, ICreateTeacherBody>, res: Response) {
    let { name, login, gender, password } = req.body

    const teacherIsExists = await teachersModel.findOne({ name })
    
    if (!teacherIsExists) {
        await teachersModel.create({
            name,
            login,
            gender,
            password: await hash(password, 10)
        })
        
        res.json({ created: true })

        await manageSpreadsheetJob()
    } else {
        res.json({ exists: true })
    }
}

export default createTeacher