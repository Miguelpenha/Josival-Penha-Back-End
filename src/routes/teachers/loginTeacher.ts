import { Request, Response } from 'express'
import teachersModel from '../../models/teacher'
import axios from 'axios'
import { compare } from 'bcryptjs'

interface ILoginTeacherParams {
    type: 'local' | 'google'
}

interface ILoginTeacherBody {
    login: string
    password?: string
    accessToken?: string
}

async function loginTeacher(req: Request<ILoginTeacherParams, {}, ILoginTeacherBody>, res: Response) {
    const { type } = req.params
    const { login, password, accessToken } = req.body

    const teachers = await teachersModel.find().select(['login', 'password'])
    const teacher = teachers.filter(teacher => teacher.login === login)[0]

    if (teacher) {
        if (type === 'google') {
            try {
                const { data: user } = await axios.get('https://www.googleapis.com/userinfo/v2/me', {
                    headers: {
                        authorization: `Bearer ${accessToken}`
                    }
                })

                if (user.email === teacher.login) {
                    res.json({ authenticated: true, teacherID: teacher.id })
                } else {
                    res.json({ authenticated: false })
                }
            } catch {
                res.json({ authenticated: false })
            }
        } else if (type === 'local') {
            if (await compare(password, teacher.password)) {
                res.json({ authenticated: true, teacherID: teacher.id })
            } else {
                res.json({ authenticated: false })
            }
        } else {
            res.json({ typeNotExists: true })
        }
    } else {
        res.json({ authenticated: false })
    }
}

export default loginTeacher