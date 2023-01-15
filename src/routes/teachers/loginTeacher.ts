import { Request, Response } from 'express'
import mongoose from 'mongoose'
import teachersModel from '../../models/teacher'
import { compare } from 'bcryptjs'

interface ILoginTeacherParams {
    id: string
}


interface ILoginTeacherBody {
    login: string
    password: string
}

async function loginTeacher(req: Request<ILoginTeacherParams, {}, ILoginTeacherBody>, res: Response) {
    const { id } = req.params

    if (mongoose.isValidObjectId(id)) {
        const { login, password } = req.body

        const teacher = await teachersModel.findById(id).select(['password', 'login'])
        
        if (teacher.login === login) {
            if (await compare(password, teacher.password)) {
                res.json({ authenticated: true })
            } else {
                res.json({ authenticated: false })
            }
        } else {
            res.json({ authenticated: false })
        }
    } else {
        res.json({ exists: false })
    }
}

export default loginTeacher