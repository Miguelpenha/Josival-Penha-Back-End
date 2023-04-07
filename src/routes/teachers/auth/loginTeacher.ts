import { Request, Response } from 'express'
import teachersModel from '../../../models/teacher'
import axios from 'axios'
import { compare } from 'bcryptjs'
import { decode, sign } from 'jsonwebtoken'

interface ILoginTeacherParams {
    type: 'local' | 'google'
}

interface ILoginTeacherBody {
    jwt?: string
    login: string
    password?: string
    accessToken?: string
}

async function loginTeacher(req: Request<ILoginTeacherParams, {}, ILoginTeacherBody>, res: Response) {
    const { type } = req.params
    const { login, password, accessToken, jwt } = req.body

    const teachers = await teachersModel.find().select(['login', 'password'])

    if (type === 'google') {
        try {
            let user = null

            if (accessToken) {
                user = (await axios.get('https://www.googleapis.com/userinfo/v2/me', {
                    headers: {
                        authorization: `Bearer ${accessToken}`
                    }
                })).data
            } else if (jwt) {
                user = decode(jwt)
            }

            if ((user.email_verified || user.verified_email) && user.hd === process.env.DOMAIN_EMAIL) {
                const teacher = teachers.filter(teacher => teacher.login === user.email)[0]

                if (teacher) {
                    const token = sign({}, process.env.SECRET_JWT, {
                        subject: 'teacher',
                        expiresIn: '20s'
                    })

                    res.json({ authenticated: true, id: teacher.id, token })
                } else {
                    res.json({ authenticated: false })
                }
            } else {
                res.json({ authenticated: false })
            }
        } catch {
            res.json({ authenticated: false })
        }
    } else if (type === 'local') {
        const teacher = teachers.filter(teacher => teacher.login === login)[0]
        
        if (teacher) {
            if (await compare(password, teacher.password)) {
                const token = sign({}, process.env.SECRET_JWT, {
                    subject: 'teacher',
                    expiresIn: '20s'
                })

                res.json({ authenticated: true, id: teacher.id, token })
            } else {
                res.json({ authenticated: false })
            }
        } else {
            res.json({ authenticated: false })
        }
    } else {
        res.json({ typeNotExists: true })
    }
}

export default loginTeacher