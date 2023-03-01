import { Request, Response } from 'express'
import axios from 'axios'
import { sign } from 'jsonwebtoken'

interface ILoginTeacherParams {
    type: 'local' | 'google'
}

interface ILoginTeacherBody {
    login: string
    password?: string
    accessToken?: string
}

async function loginAdmin(req: Request<ILoginTeacherParams, {}, ILoginTeacherBody>, res: Response) {
    const { type } = req.params
    const { login, password, accessToken } = req.body

    if (type === 'google') {
        try {
            let user = null

            if (accessToken) {
                user = (await axios.get('https://www.googleapis.com/userinfo/v2/me', {
                    headers: {
                        authorization: `Bearer ${accessToken}`
                    }
                })).data
            }

            if ((user.email_verified || user.verified_email) && user.hd === process.env.DOMAIN_EMAIL) {
                if (user.email === process.env.ADMIN_LOGIN) {
                    const token = sign({}, process.env.SECRET_JWT, {
                        subject: 'admin',
                        expiresIn: '20s'
                    })

                    res.json({ authenticated: true, token })
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
        if (login === process.env.ADMIN_LOGIN && password === process.env.ADMIN_PASSWORD) {
            const token = sign({}, process.env.SECRET_JWT, {
                subject: 'admin',
                expiresIn: '20s'
            })

            res.json({ authenticated: true, token })
        } else {
            res.json({ authenticated: false })
        }
    } else {
        res.json({ typeNotExists: true })
    }
}

export default loginAdmin