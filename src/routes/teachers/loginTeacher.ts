import { Request, Response } from 'express'
import teachersModel from '../../models/teacher'
import { compare } from 'bcryptjs'

interface ILoginTeacherBody {
    login: string
    password: string
}

async function loginTeacher(req: Request<{}, {}, ILoginTeacherBody>, res: Response) {
    const { login, password } = req.body

    const teachers = await teachersModel.find().select(['login', 'password'])
    const teacher = teachers.filter(teacher => teacher.login === login)[0]

    if (teacher) {
        if (await compare(password, teacher.password)) {
            res.json({ authenticated: true, teacherID: teacher.id })
        } else {
            res.json({ authenticated: false })
        }
    } else {
        res.json({ authenticated: false })
    }
}

export default loginTeacher